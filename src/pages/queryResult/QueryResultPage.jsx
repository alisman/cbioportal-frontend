import React from 'react';
import ReactDOM from 'react-dom';
import Oncoprint from './Oncoprint';
import { connect } from 'react-redux';
import { Tabs, Tab } from 'react-bootstrap';
import NewHistogram from './NewHistogram';

class QueryResultPage extends React.Component {

    // just add a comment

    constructor(){
        super();
    }


    changeSort(){

    }

    render() {
        return (
            <div>
                <h1>Query Results</h1>

                <Tabs defaultActiveKey={1} id="study">
                    <Tab eventKey={1} title="Oncoprint">
                        <Oncoprint />
                    </Tab>
                    <Tab eventKey={2} title="Summary">
                        <NewHistogram />
                    </Tab>
                </Tabs>


            </div>
        );
    }
}

export default QueryResultPage;









