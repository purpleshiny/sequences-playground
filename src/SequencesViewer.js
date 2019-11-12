import React , { Component } from 'react';
import _ from 'lodash';
import { Container, Grid, Input} from "semantic-ui-react";
import SequenceTable from './SequenceTable';
import AddModal from './AddModal';

export default class SequencesViewer extends Component {
    constructor(props) {
        super(props);
        this.state = {items: props.items, filterText: ""};
        this.addAnItem = this.addAnItem.bind(this);
        this.validateAnItem = this.validateAnItem.bind(this);
        this.updateSearch = this.updateSearch.bind(this);
    }

    // I decided to pass addAnItem and validateAnItem as functions to the add modal
    // rather than passing all the data in, because it feels like the modal should not depend
    // on receiving all of that context, just on the existence of something which can
    // handle validation and updates. In a world with upload, it could reuse this functionality.

    addAnItem(item) {
        this.setState((state) => ({items: state.items.concat(item)}));
    }

    // given a sequence entry, return an array of errors
    // consider breaking this up in some way if more validation logic is added
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
        } 
        // We only need the first occurance of a non-allowed letter, so .search makes sense here
        let nonDNA = item["sequence"].search(/[^ATCG]/g);
        if (nonDNA !== -1) {
            errors.push(`Non-DNA character found at position ${nonDNA}`);
        }
        return errors;
    }

    // it would be great to debounce this
    updateSearch(e, data) {
        this.setState({filterText: data.value});
    }

    render() {
        return (
            <Container>
                <Grid columns={2}>
                    <Grid.Column width={13}>
                    <Input icon='search' placeholder='Search...' onChange={this.updateSearch}/>
                    </Grid.Column>
                    <Grid.Column width={3} floated="right">
                        <AddModal addFunc={this.addAnItem} validationFunc={this.validateAnItem}></AddModal>
                    </Grid.Column>
                </Grid>
                <SequenceTable items={this.state.items} filterText={this.state.filterText}></SequenceTable>
            </Container>
        )
    }

}