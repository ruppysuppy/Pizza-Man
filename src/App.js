import React, { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom';

import Layout from './components/UI/Layout/Layout';
import Loader from './components/UI/Loader/Loader';

const About = lazy(() => import('./components/Pages/About/About'))
const Cart = lazy(() => import('./components/Pages/CartPage/CartPage'))
const Disclaimer = lazy(() => import('./components/Pages/Disclaimer/Disclaimer'))
const Error404 = lazy(() => import('./components/Pages/404/Error404'))
const FAQ = lazy(() => import('./components/Pages/FAQ/FAQ'))
const Home = lazy(() => import('./components/Pages/Home/Home'))
const Menu = lazy(() => import('./components/Pages/Menu/Menu'))
const Privacy = lazy(() => import('./components/Pages/Privacy/Privacy'))
const Terms = lazy(() => import('./components/Pages/Terms/Terms'))

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/cart" component={Cart} />
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
