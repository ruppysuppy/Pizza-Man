import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom';

import Layout from './components/UI/Layout/Layout';
import Loader from './components/UI/Loader/Loader';
import Home from './components/Pages/Home/Home';
import Error404 from './components/Pages/404/Error404';
import Menu from './components/Pages/Menu/Menu';
import FAQ from './components/Pages/FAQ/FAQ';

function App() {
  return (
    <>
      <Suspense fallback={Loader}>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/menu" component={Menu} />
            <Route path="/faq" component={FAQ} />
            <Route component={Error404} />
          </Switch>
        </Layout>
      </Suspense>
    </>
  );
}

export default App;
