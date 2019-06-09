import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

import { logout } from '../actions';

class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null: 
                return;
            case false: 
                return <li><a href="/auth/google">Login With Google</a></li>;
            default:     
                return [
                    <li key="1"><Payments /></li>,
                    <li key="3" style={{ padding: '10px' }} >Credits: {this.props.auth.credits}</li>,
                    <li key="2" style={{ padding: '10px' }}  onClick={this.logout}>Logout</li>
                ];
        }
    };
    
    logout = () => {
        console.log("logout clicked !!!!");
        this.props.logout(); 
    }
    
    
    render() {
        console.log(this.props);
        
        return (
            <nav> 
                <div className="nav-wrapper">
                    <Link 
                        to={this.props.auth ? '/surveys' : '/'} 
                        className="left brand-logo"
                    >
                        Emaily
                    </Link>
                    <ul className="right">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    };
};

function mapStateToProps({ auth }) {
    return { auth }; 
}

export default connect(mapStateToProps, {logout})(Header); 