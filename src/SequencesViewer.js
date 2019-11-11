import React , { Component } from 'react';
import { Container, Grid, Input} from "semantic-ui-react";
import SequenceTable from './SequenceTable';
import AddModal from './AddModal';

// state that we need for this thing:
// search term
// sort column
// sort direction
// full list of items

export default class SequencesViewer extends Component {
    constructor(props) {
        super(props);
        this.state = {items: props.items, filterText: ""};
        this.addAnItem = this.addAnItem.bind(this);
    }

    addAnItem(item) {
        this.setState((state) => ({items: state.items.concat(item)}))
    }

    render() {
        return (
            <Container>
                <Grid columns={2}>
                    <Grid.Column width={13}>
                    <Input icon='search' placeholder='Search...' />
                    </Grid.Column>
                    <Grid.Column width={3} floated="right">
                        <AddModal addFunc={this.addAnItem}></AddModal>
                    </Grid.Column>
                </Grid>
                <SequenceTable items={this.state.items}></SequenceTable>
            </Container>
        )
    }

}