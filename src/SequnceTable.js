import React , { Component } from 'react';
import { Table } from 'semantic-ui-react'

export default class SequenceTable extends Component {
    render() {
        const items = this.props.items
        return (
            <Table sortable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell sorted="ascending">Name</Table.HeaderCell>
                        <Table.HeaderCell>Description</Table.HeaderCell>
                        <Table.HeaderCell>Sequence Preview</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                {
                    items.map((item) => (
                    <Table.Row key={item.sequenceName}>
                         <Table.Cell>{item.sequenceName}</Table.Cell>
                         <Table.Cell>{item.sequenceDescription}</Table.Cell>
                         <Table.Cell>{item.sequence}</Table.Cell>
                     </Table.Row>
                    ))
                }
                </Table.Body>
            </Table>
        )
    }

}