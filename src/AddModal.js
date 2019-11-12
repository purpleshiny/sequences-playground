import React , { Component } from 'react';
import {Modal, Form, Button, Message} from 'semantic-ui-react';

// we will want the state to look like this initially, after a successful save, and after closing the window
const emptyState = {
    sequenceName: "",
    sequenceDescription: "",
    sequence: "",
    open: false,
    errors: []
}

// required props: an addFunc and a validationFunc
export default class AddModal extends Component {

    constructor(props) {
        super(props);
        this.state = emptyState;
      }

    handleOpen = () => this.setState({ open: true });

    handleClose = () => this.setState(emptyState);

    handleChange = (e, { name, value }) => this.setState({ [name]: value, errors: [] });

    handleAdd = (e) => {
        e.preventDefault();
        const item = {
            "sequenceName": this.state.sequenceName,
            "sequenceDescription": this.state.sequenceDescription,
            "sequence": this.state.sequence.toUpperCase() // this seems like the right thing to do
        };
        let errors = this.props.validationFunc(item);
        if (errors.length === 0) {
            this.props.addFunc(item);
            this.setState(emptyState);
        } else {
            this.setState({errors: errors});
        }
    }

    render() {
        const { sequenceName, sequenceDescription, sequence, errors, open } = this.state;
        return(
            <Modal as={Form}
                   trigger={<Button onClick={this.handleOpen}>Add Sequence</Button>}
                   closeIcon
                   error = {errors.length > 0}
                   closeOnDimmerClick={false}
                   onClose={this.handleClose}
                   open={open}>
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
                    content={errors.join("; ")}
                    />
                </Modal.Content>
                <Modal.Actions>
                    <Button onClick={this.handleAdd}>Add</Button>
                </Modal.Actions>
            </Modal>
        )
    }
}