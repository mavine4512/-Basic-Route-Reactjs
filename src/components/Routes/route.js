 import React from 'react';
import propsTypes from 'prop-types'
import {Route, Redirect } from 'react-router-dom';

export  default  function RouteWrapper({
    component:Component,
    isPrivate,
    ...rest
                                       }){
    //authenticate user who is loaded in.

    // use redux to change this state true or false
    const signed =false;

    //route is private and user is not signed in
    if(isPrivate&& !signed){
        return<Redirect to='/'/>
    }
    //Route is public and user is signed in
    if(!isPrivate&& signed){
        return<Redirect to='/dashboard'/>
    }
    return <Route {...rest} component={Component }/>
}

RouteWrapper.propTypes={
    isPrivate: propsTypes.bool,
    component:propsTypes.oneOfType([propsTypes.element,propsTypes.func]).isRequired
}

RouteWrapper.dafultProps={
    isPrivate:false
}
