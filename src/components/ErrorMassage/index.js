import React from 'react';
import { Modal } from 'react-bootstrap';

function ErrorMassage(props) {
  return (
    <Modal
      {...props}
      centered
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
    >
      <Modal.Header>
        <Modal.Title>Sorry, this is Error ={'('}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.err}</Modal.Body>
    </Modal>
  );
}

export default ErrorMassage;
