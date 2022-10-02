import React, { useState } from "react";
import {
  Button,
  Label,
  Col,
  FormGroup,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDrum } from "@fortawesome/free-solid-svg-icons";
import ProfileForm from "./ProfileForm";
function ModalProfile(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="pb-4">
      <Button color="secondary" onClick={toggle}>
        <h1 style={{ color: "white" }}>
          <FontAwesomeIcon icon={faDrum} />
        </h1>
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>
          <h3 style={{ color: "black" }}>About You</h3>
        </ModalHeader>
        <ProfileForm />
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Send
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalProfile;
