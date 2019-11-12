import React , { Component } from 'react';
import _ from 'lodash';
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
        this.validateAnItem = this.validateAnItem.bind(this);
        this.updateSearch = this.updateSearch.bind(this);
    }

    addAnItem(item) {
        this.setState((state) => ({items: state.items.concat(item)}))
    }

    // return an array of errors
    validateAnItem(item) {
        let errors = [];
        if (_.find(this.state.items, {sequenceName: item.sequenceName})) {
            errors.push("There's already a sequence with this name");
        }
        if (_.find(this.state.items, {sequence: item.sequence})) {
            errors.push("There's already another entry for this sequence");
        }
        if (item.sequenceName === "") {
            errors.push("Name is required");
        }
        if (item.sequenceDescription === "") {
            errors.push("Description is required");
        }
        if (item.sequence === "") {
            errors.push("Sequence is required");
        } else { // This check only makes sense for a non-null value
            let nonDNA = item["sequence"].search(/[^ATCG]/g);
            if (nonDNA !== -1) {
                errors.push(`Non-DNA character found at position ${nonDNA}`);
            }
        }
        return errors;
    }

    // it would be great to debounce this
    updateSearch(e, data) {
        this.setState({filterText: data.value})
    }

    render() {
        return (
            <Container>
                <Grid columns={2}>
                    <Grid.Column width={13}>
                    <Input icon='search' placeholder='Search...' onChange={this.updateSearch}/>
                    </Grid.Column>
                    <Grid.Column width={3} floated="right">
                        <AddModal addFunc={this.addAnItem} validFunc={this.validateAnItem}></AddModal>
                    </Grid.Column>
                </Grid>
                <SequenceTable items={this.state.items} filterText={this.state.filterText}></SequenceTable>
            </Container>
        )
    }

}