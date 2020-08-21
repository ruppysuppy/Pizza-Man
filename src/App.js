import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom';

import About from './components/Pages/About/About';
import Disclaimer from './components/Pages/Disclaimer/Disclaimer';
import Error404 from './components/Pages/404/Error404';
import FAQ from './components/Pages/FAQ/FAQ';
import Home from './components/Pages/Home/Home';
import Layout from './components/UI/Layout/Layout';
import Loader from './components/UI/Loader/Loader';
import Menu from './components/Pages/Menu/Menu';
import Privacy from './components/Pages/Privacy/Privacy';
import Terms from './components/Pages/Terms/Terms';

function App() {
  return (
    <>
      <Suspense fallback={Loader}>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/disclaimer" component={Disclaimer} />
            <Route path="/faq" component={FAQ} />
            <Route path="/menu" component={Menu} />
            <Route path="/privacy-policy" component={Privacy} />
            <Route path="/terms-and-conditions" component={Terms} />
            <Route component={Error404} />
          </Switch>
        </Layout>
      </Suspense>
    </>
  );
}

export default App;
