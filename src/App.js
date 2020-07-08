import React from 'react';
import Layout from "./containers/Layout/Layout";
import CallToAction from "./components/Header/CallToAction/CallToAction";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <Layout>
            <CallToAction/>
            <About/>
            <Footer/>
        </Layout>
    );
}

export default App;
