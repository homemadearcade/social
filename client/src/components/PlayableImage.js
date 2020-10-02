import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  src: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ]).isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  alt: PropTypes.string
}

const defaultProps = {
  src: undefined,
  width: undefined,
  height: undefined,
  alt: undefined
}

const Image = ({
  className,
  src,
  width,
  height,
  alt,
  ...props
}) => {

  const [loaded, setLoaded] = useState(false);

  const image = useRef(null);

  useEffect(() => {
    handlePlaceholder(image.current);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const placeholderSrc = (w, h) => {
    return `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}"%3E%3C/svg%3E`;
  }

  const handlePlaceholder = (img) => {
    const placeholder = document.createElement('img');
    if (!loaded) {

      // .style.backgroundImage = 'url("' + placeholderSrc(
      //   img.getAttribute('width') || 0,
      //   img.getAttribute('height') || 0
      // )
      img.style.display = 'none';
      img.before(placeholder);
      placeholder.src = placeholderSrc(
        width || 0,
        height || 0
      );
      placeholder.width = width
      placeholder.height = height;
      placeholder.style.opacity = '0';
      img.className && placeholder.classList.add(img.className);
      placeholder.remove();
      img.style.display = '';
    }
  }

  function onLoad() {
    setLoaded(true);
  }

  return (
    <div
      {...props}
      ref={image}
      className={"PlayableImage"}
      style={{width, height, backgroundImage: 'url("' + src + '")', backgroundSize: 'cover'}}
      width={width}
      height={height}
      onLoad={onLoad}>
        <div class="wrapper PlayableImageContent">
          <div class="link_wrapper">
            <a href="#">Play</a>
            <div class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
                <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z"/>
              </svg>
            </div>
          </div>
        </div>
    </div>
  );
}

Image.propTypes = propTypes;
Image.defaultProps = defaultProps;

export default Image;
