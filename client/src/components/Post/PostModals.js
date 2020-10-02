import React from "react";
import { Icon, Modal, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { DeletePostModal } from "./DeletePostModal";

export function ModalForLoggedIn({ postId, gameSaveId }) {
  return (
    <Modal trigger={<Icon name="ellipsis horizontal" />}>
      <Modal.Content>
        <Modal.Description>
          <Button as={Link} to={`/p/${postId}`} size="big" fluid>
            Go to post
          </Button>
          <Button size="big" fluid>
            Copy link
          </Button>
          <Button size="big" onClick={(e) => window.open(window.HAGameClientUrl + '/?homeEditor=true&gameSaveId=' + gameSaveId)} fluid>
            Open Editor
          </Button>
          <DeletePostModal postId={postId} />
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}

export function ModalForLoggedIn({ postId, gameSaveId }) {

    return (
      <Modal trigger={<Icon name="ellipsis horizontal" />}>
        <Modal.Content>
          <Modal.Description>
            <Button size="big" onClick={(e) => window.open(window.HAGameClientUrl + '/?homeEditor=true&gameSaveId=' + gameSaveId)} fluid>
              Open Editor
            </Button>
            <Button as={Link} to={`/p/${postId}`} size="big" fluid>
              Go to post
            </Button>
            <Button size="big" fluid>
              Copy link
            </Button>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );

}
