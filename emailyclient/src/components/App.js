import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { connect } from 'react-redux';
import {fetchUser} from '../actions';
import Header from './Header';
import Landing from './Landing';

//const Dashboard = () => <h2>Dashboard</h2>;
const Surveys = () => <h2>Dashboard</h2>;
const SurveysNew = () => <h2>New Surveys</h2>;


class App extends Component {
    
    componentDidMount() {
        this.props.fetchUser();
    }
    
    
    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/surveys" component={Surveys} />
                        <Route path="/surveys/new" component={SurveysNew} />
                    </div>
                </BrowserRouter>
            </div>
        ); 
    };
};

export default connect(null, {fetchUser})(App); 


