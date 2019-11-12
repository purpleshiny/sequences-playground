import React , { Component } from 'react';
import {Modal, Button} from "semantic-ui-react";

export default class SequenceModal extends Component {

    // return an array of spans styled with a class of the same name as the letter,
    // eg <span className=A>
    colorSequence(sequenceText) {
        return [...sequenceText].map((letter,i) => {return <span className={letter} key={i}>{letter}</span>});
    }

    render() {
        return(
            <Modal trigger={<Button>View</Button>}>
                <Modal.Header>Sequence</Modal.Header>
                <Modal.Content scrolling className="sequence">
                    {this.colorSequence(this.props.sequence)}
                </Modal.Content>
            </Modal>
        )
    }
}