import React, { Component } from "react";
import Modal from 'react-bootstrap/Modal'
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const PopUpPrice = (props)=> {
  function handleClose() {
    props.toggle();
  };

  return (
    <Modal show={props.show} onHide={handleClose} size="sm">
        <ModalHeader>
          <ModalTitle>{props.name} Price</ModalTitle>
        </ModalHeader>
        <ModalBody>{props.price}</ModalBody>
        <Modal.Footer>
          <Button variant="secondary" size="sm"  onClick={handleClose}>
                Close</Button>
        </Modal.Footer>
    </Modal>
  );
}

export default  PopUpPrice;
