import React from  'react';

import {Switch} from 'react-router-dom'
// import {Route,Switch} from 'react-router-dom'
import Route from './route'
import SignIn from "../pages/signIn";
import signup  from "../pages/signup";
import dashboard from "../pages/dashboard"

function Routes (){
    return(
       <Switch>
             <Route path='/' exact component={SignIn}/>
             <Route path='/Registration' component={signup}/>
             <Route path='/dashboard' component={dashboard} isPrivate/>
             <Route component={SignIn}/>
</Switch>
    )
}

export default  Routes

