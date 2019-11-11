import React , { Component } from 'react';
import { Container, Grid, Input} from "semantic-ui-react";
import SequenceTable from './SequenceTable';
import AddModal from './AddModal';

export default class SequencesViewer extends Component {
    constructor(props) {
        super(props);
        this.state = {items: props.items};
    }

    render() {
        return (
            <Container>
                <Grid columns={2}>
                    <Grid.Column width={13}>
                    <Input icon='search' placeholder='Search...' />
                    </Grid.Column>
                    <Grid.Column width={3} floated="right">
                        <AddModal></AddModal>
                    </Grid.Column>
                </Grid>
                <SequenceTable items={this.state.items}></SequenceTable>
            </Container>
        )
    }

}