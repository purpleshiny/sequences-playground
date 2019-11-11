import React , { Component } from 'react';
import {Modal, Form, Button} from 'semantic-ui-react';

// things this needs to be given:
// a validate method that knows the up-to-date state of all sequences
// a save method
export default class AddModal extends Component {
    render() {
        return(
            <Modal as={Form} trigger={<Button>Add Sequence</Button>}>
                <Modal.Header>Add New Sequence</Modal.Header>
                <Modal.Content>
                    <Form.Input label="Sequence Name"></Form.Input>
                    <Form.Input label="Sequence Description"></Form.Input>
                    <Form.TextArea label="Sequence"></Form.TextArea>
                </Modal.Content>
                <Modal.Actions>
                    <Button>Add</Button>
                </Modal.Actions>
            </Modal>
        )
    }
}