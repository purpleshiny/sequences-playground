import React , { Component } from 'react';
import {Modal, Form, Button} from 'semantic-ui-react';

// things this needs to be given:
// a validate method that knows the up-to-date state of all sequences
// a save method
export default class AddModal extends Component {

    constructor(props) {
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
        this.state = {
            "sequenceName": "",
            "sequenceDescription": "",
            "sequence": ""
        }
      }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleAdd(e) {
        e.preventDefault();
        this.props.addFunc(this.state)
    }

    render() {
        const { sequenceName, sequenceDescription, sequence } = this.state
        return(
            <Modal as={Form} trigger={<Button>Add Sequence</Button>}>
                <Modal.Header>Add New Sequence</Modal.Header>
                <Modal.Content>
                    <Form.Input 
                    label="Sequence Name"
                    name="sequenceName"
                    value={sequenceName}
                    onChange={this.handleChange}
                    />
                    <Form.Input
                    label="Sequence Description"
                    name="sequenceDescription"
                    value={sequenceDescription}
                    onChange={this.handleChange}
                    />
                    <Form.TextArea
                    label="Sequence"
                    name="sequence"
                    value={sequence}
                    onChange={this.handleChange}
                    />
                </Modal.Content>
                <Modal.Actions>
                    <Button onClick={this.handleAdd}>Add</Button>
                </Modal.Actions>
            </Modal>
        )
    }
}