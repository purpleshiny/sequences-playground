import React , { Component } from 'react';
import {Modal, Form, Button, Message} from 'semantic-ui-react';

const emptyState = {
    sequenceName: "",
    sequenceDescription: "",
    sequence: "",
    open: false,
    errors: []
}

// things this needs to be given:
// a validate method that knows the up-to-date state of all sequences
export default class AddModal extends Component {

    constructor(props) {
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.state = emptyState
      }

    handleOpen = () => this.setState({ open: true })

    handleClose() {
        this.setState(emptyState);
    }

    handleChange(e, { name, value }) {
        this.setState({ [name]: value, errors: [] })
    } 

    handleAdd(e) {
        e.preventDefault();
        const item = {
            "sequenceName": this.state.sequenceName,
            "sequenceDescription": this.state.sequenceDescription,
            "sequence": this.state.sequence.toUpperCase()
        };
        let errors = this.props.validFunc(item);
        if (errors.length === 0) {
            this.props.addFunc(item);
            this.handleClose();
        } else {
            this.setState({errors: errors})
        }
        
    }

    render() {
        const { sequenceName, sequenceDescription, sequence } = this.state
        return(
            <Modal as={Form}
                   trigger={<Button onClick={this.handleOpen}>Add Sequence</Button>}
                   closeIcon
                   error = {this.state.errors.length > 0}
                   closeOnDimmerClick={false}
                   onClose={this.handleClose}
                   open={this.state.open}>
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
                    <Message
                    error
                    header="Error adding sequence"
                    content={this.state.errors.join("; ")}
                    />
                </Modal.Content>
                <Modal.Actions>
                    <Button onClick={this.handleAdd}>Add</Button>
                </Modal.Actions>
            </Modal>
        )
    }
}