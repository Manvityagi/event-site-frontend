import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';

const Navbar = (props)=> {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo left">Events</Link>
                <SignedInLinks/>
                <SignedOutLinks/>
           </div>
        </nav> 
    )
}

const mapStateToProps = state => {
    console.log(state);
    return {
        
    }
}

export default connect(mapStateToProps)(Navbar);