import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Login from "./login/Login";
import App from "./App";


const TodolistUi = (props) => {
    let loggedIn = false;
    return (
        <>
            {
                loggedIn ? <App /> : <Login />
            }
        </>
       );
}

export default TodolistUi;