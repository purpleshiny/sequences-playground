import React , { Component } from 'react';
import { Table } from 'semantic-ui-react';
import SequenceModal from './SequenceModal';

export default class SequenceTable extends Component {
    constructor(props) {
        super(props);
        this.state = {items: props.items};
    }

    render() {
        let items = [...this.state.items].sort((a, b) => a.sequenceName.localeCompare(b.sequenceName))
        return (
            <Table fixed sortable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell width="two" sorted="ascending">Name</Table.HeaderCell>
                        <Table.HeaderCell width="six">Description</Table.HeaderCell>
                        <Table.HeaderCell width="six">Sequence Preview</Table.HeaderCell>
                        <Table.HeaderCell width="two"></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                {
                    items.map((item) => (
                    <Table.Row key={item.sequenceName}>
                         <Table.Cell>{item.sequenceName}</Table.Cell>
                         <Table.Cell>{item.sequenceDescription}</Table.Cell>
                         <Table.Cell>{item.sequence.substring(0, 100) + "..."}</Table.Cell>
                         <Table.Cell><SequenceModal sequence={item.sequence}></SequenceModal></Table.Cell>
                     </Table.Row>
                    ))
                }
                </Table.Body>
            </Table>
        )
    }

}