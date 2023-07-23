import React from "react";
import { Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";
import { color } from "framer-motion";

export default function ModalComp({visible, setVisible, message}:any) {

  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
  };

  return (
    <div>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
        css={{
          margin:"10px"
        }}
      >
        <Modal.Header>
       <Text css={{
        fontSize:"$5xl",
        color:"red",
       }}>!</Text>
        </Modal.Header>
       <Text b>{message}</Text>
        <Modal.Footer>
          <Button auto flat color="error" onPress={closeHandler}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}