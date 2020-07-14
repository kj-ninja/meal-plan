import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Switch, Route, Redirect} from 'react-router-dom';
import Layout from "./containers/Layout/Layout";
import Home from "./components/Home/Home";
import Login from "./containers/Auth/Login";
import Register from "./containers/Auth/Register";
import Dashboard from "./containers/Dashboard/Dashboard";
import Logout from "./containers/Auth/Logout";
import {authStateCheck} from "./store/actions/auth";

function App(props) {
    const {authStateCheck} = props;

    useEffect(() => {
        authStateCheck();
    }, [authStateCheck]);

    let routes = (
        <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route exact path="/" component={Home}/>
            <Redirect to="/"/>
        </Switch>
    );

    if (props.isAuth) {
        routes = (
            <Switch>
                <Route path="/logout" component={Logout}/>
                <Route path="/dashboard" component={Dashboard}/>
                <Redirect to='/dashboard/add-schedule'/>
            </Switch>
        );
    }

    return (
        <>
            <Layout>
                {routes}
            </Layout>
        </>
    );
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.token !== null
    }
};

export default connect(mapStateToProps, {authStateCheck})(App);
