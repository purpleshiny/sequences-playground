import React , { Component } from 'react';
import {Modal, Button} from "semantic-ui-react";

export default class SequenceModal extends Component {

    renderLetter(letter, i) {
        return <span className={letter} key={i}>{letter}</span>
    }

    taggedSequence(sequenceText) {
        let sequenceArr = [...sequenceText]
        return sequenceArr.map((item,i) => {return this.renderLetter(item, i)})
    }

    render() {
        return(
            <Modal trigger={<Button>View Sequence</Button>}>
                <Modal.Header>Sequence</Modal.Header>
                <Modal.Content scrolling className="sequence">
                    {this.taggedSequence(this.props.sequence)}
                </Modal.Content>
            </Modal>
        )
    }
}