import React, { lazy, FC } from 'react';
import { Route, Switch } from 'react-router-dom';

const Home = lazy(async() => { await new Promise(resolve => setTimeout(resolve, 600)); return import('../containers/Home/Home.container')});
const SignIn = lazy(() => import('containers/SignIn/SignIn.container'));
const SignUp = lazy(() => import('containers/SignUp/SignUp.container')); 

const AppRoutes:FC = () => {

    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signin" exact component={SignIn} />
            <Route path="/signup" exact component={SignUp} />
        </Switch>
    )
}

export default AppRoutes;
