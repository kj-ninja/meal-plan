import React from 'react';
import Layout from "./containers/Layout/Layout";
import CallToAction from "./components/Header/CallToAction/CallToAction";
import About from "./components/About/About";

function App() {
    return (
        <Layout>
            <CallToAction/>
            <About/>
        </Layout>
    );
}

export default App;
