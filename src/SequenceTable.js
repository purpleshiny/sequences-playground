import React , { Component } from 'react';
import { Table } from 'semantic-ui-react';
import SequenceModal from './SequenceModal';

export default class SequenceTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            column: "sequenceName",
            direction: "descending"
        };
        this.handleSort = this.handleSort.bind(this);
    }

    filterItem(item, filterText) {
        if (item.sequenceName.toLowerCase().includes(filterText.toLowerCase())) {
            return true;
        }
        if (item.sequenceDescription.toLowerCase().includes(filterText.toLowerCase())) {
            return true;
        }
        return false;
    }

    invertSort(oldDirection) {
        return oldDirection === "ascending" ? "descending" : "ascending"
    }

    // if we are re-sorting the current column, then we want to invert the current direction
    // otherwise, we are sorting a new column.
    getDirection(newColumn, oldColumn, oldDirection) {
        return oldColumn === newColumn ? this.invertSort(oldDirection) : "descending"
    }

    handleSort(sortedBy) {
        return () => {
            this.setState((state) => ({
                column: sortedBy,
                direction: state.column === sortedBy ? this.invertSort(state.direction) : "descending"
            }));
        }
    }

    render() {
        const {column, direction} = this.state;
        let items = []
        if (this.props.filterText === "") {
            items = [...this.props.items]
        } else {
            items = this.props.items.filter(item => this.filterItem(item, this.props.filterText))
        }
        if (direction === "descending") {
            items = items.sort((a, b) => a[this.state.column].localeCompare(b[this.state.column]))
        } else {
            items = items.sort((a, b) => b[this.state.column].localeCompare(a[this.state.column]))
        }
        //TODO: sort by direction and column
        //TODO: update direction and column from header row click
        return (
            <Table fixed sortable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell
                            width="two"
                            sorted={column === 'sequenceName' ? direction : null}
                            onClick={this.handleSort('sequenceName')}
                        >
                            Name
                        </Table.HeaderCell>
                        <Table.HeaderCell
                            width="six"
                            sorted={column === 'sequenceDescription' ? direction : null}
                            onClick={this.handleSort('sequenceDescription')}
                        >
                            Description
                        </Table.HeaderCell>
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
                         <Table.Cell textAlign="center"><SequenceModal sequence={item.sequence}></SequenceModal></Table.Cell>
                     </Table.Row>
                    ))
                }
                </Table.Body>
            </Table>
        )
    }

}