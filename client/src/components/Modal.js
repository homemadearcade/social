import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  closeHidden: PropTypes.bool,
  video: PropTypes.string,
  videoTag: PropTypes.oneOf(['iframe', 'video']),
  game: PropTypes.string,
}

const defaultProps = {
  children: null,
  show: false,
  closeHidden: false,
  video: '',
  videoTag: 'iframe'
}

const Modal = ({
  className,
  children,
  handleClose,
  show,
  closeHidden,
  video,
  videoTag,
  game,
  id,
  ...props
}) => {

  let _iframeRef = React.createRef()

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    document.addEventListener('click', stopProgagation);

    if(_iframeRef.current) _iframeRef.current.focus()

    return () => {
      document.removeEventListener('keydown', keyPress);
      document.removeEventListener('click', stopProgagation);
    };
  });

  useEffect(() => {
    handleBodyClass();
  }, [props.show]);

  console.log('show', show)

  const handleBodyClass = () => {
    if (document.querySelectorAll('.modal.is-active').length) {
      document.body.classList.add('modal-is-active');
    } else {
      document.body.classList.remove('modal-is-active');
    }
  }

  const keyPress = (e) => {
    e.keyCode === 27 && handleClose(e);
  }

  const stopProgagation = (e) => {
    e.stopPropagation();
  }

  const classes = classNames(
    'modal',
    show && 'is-active',
    video && 'modal-video',
    className
  );

  const _renderContent = function() {
    console.log(game)
    if(video) {
      return <div className="responsive-video">
        {videoTag === 'iframe' ?
          <iframe
            title="video"
            src={video}
            frameBorder="0"
            allowFullScreen
            ref={_iframeRef}
          ></iframe> :
          <video
            v-else
            controls
            src={video}
          ></video>
        }
      </div>
    } else if(game) {
      return <iframe
            title="video"
            src={game}
            frameBorder="0"
            allowFullScreen
            ref={_iframeRef}
          ></iframe>
    } else {
      return <>
        {!closeHidden &&
          <button
            className="modal-close"
            aria-label="close"
            onClick={handleClose}
          ></button>
        }
        <div className="modal-content">
          {children}
        </div>
      </>
    }
  }

  if(show) console.log("I WILL SHIOW")

  if(show) return         <div
            {...props}
            className={classes}
            onClick={handleClose}
            id={id}
          >
            <div className="modal-inner" onClick={stopProgagation}>
              {_renderContent()}
            </div>
          </div>


    return <div className="lol"></div>

}

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;
