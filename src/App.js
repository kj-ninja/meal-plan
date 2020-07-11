import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Layout from "./containers/Layout/Layout";
import Home from "./components/Home/Home";
import Login from "./containers/Auth/Login";
import Register from "./containers/Auth/Register";
import Dashboard from "./containers/Dashboard/Dashboard";

function App() {
    return (
        <Layout>
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/" component={Home}/>
            </Switch>
        </Layout>
    );
}

export default App;
