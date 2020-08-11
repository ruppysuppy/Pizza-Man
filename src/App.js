import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './components/UI/Layout/Layout';
import Loader from './components/UI/Loader/Loader';

function App(props) {
  return (
    <>
      {props.isLoading ?
        <Loader /> :
        <Layout>
          <Switch>
            <Route path="/" exact component={Loader} />
          </Switch>
        </Layout>}
    </>
  );
}

const mapStateToProps = state => ({
  isLoading: state.ui.isLoading
})

export default connect(mapStateToProps)(App);
