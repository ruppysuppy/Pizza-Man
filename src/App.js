import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './components/UI/Layout/Layout';
import Loader from './components/UI/Loader/Loader';
import Home from './components/Pages/Home/Home';
import Error404 from './components/Pages/404/Error404';
import Menu from './components/Pages/Menu/Menu';
import FAQ from './components/Pages/FAQ/FAQ';

function App(props) {
  return (
    <>
      {props.isLoading ?
        <Loader /> :
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/menu" component={Menu} />
            <Route path="/faq" component={FAQ} />
            <Route component={Error404} />
          </Switch>
        </Layout>}
    </>
  );
}

const mapStateToProps = state => ({
  isLoading: state.ui.isLoading
})

export default connect(mapStateToProps)(App);
