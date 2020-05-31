import React, { Component } from 'react';
import {  Link } from 'react-router-dom';
import './header.css';


export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="logoarea">
                    <h2>MERN-Redux-Blog-Project</h2>
                </div>
                <div className="navbar">
           
                <Link to="">Home </Link>
                <Link to="add-post">Add Post</Link>
            
                </div>
            </div>
        )
    }
}
