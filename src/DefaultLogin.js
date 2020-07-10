import React from 'react';
import Login from "./login/Login";
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import App from "./App";


const TodolistUi = (props) => {
    let {loginSuccess} = props;
    return (
        <>
            <Redirect path="/" exact={true} to="/login" />
            {
                loginSuccess ? <App /> : <Login />
            }
        </>
       );
}

const mapStateToProps = (state) => {
    return{
        loginSuccess: state.usernameInfo.loginSuccess
    }
}

export default withRouter(connect(mapStateToProps)(TodolistUi));