import React, { Component } from 'react';
import {  Switch, Route,  } from 'react-router-dom';
import PostList from './PostList';
import AddPost from './Add-Post';

export default class Container extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={PostList} />
                    <Route exact path='/add-post' component={AddPost} />
                </Switch>
             
            </div>
        )
    }
}
