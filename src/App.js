import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom';

import Layout from './components/UI/Layout/Layout';
import Loader from './components/UI/Loader/Loader';
import Home from './components/Pages/Home/Home';
import Error404 from './components/Pages/404/Error404';
import Menu from './components/Pages/Menu/Menu';
import FAQ from './components/Pages/FAQ/FAQ';
import Item from './components/Pages/Menu/Category/Item.js/Item';

function App() {
  return (
    <>
      <Suspense fallback={Loader}>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/menu" component={Menu} />
            <Route path="/faq" component={FAQ} />
            <Route path="/item" component={() => <div className="my-5 py-5">
              <Item name="Pizza" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio blanditiis vitae et corrupti! Neque dolore dolorum possimus eum sunt eos obcaecati voluptatum doloribus voluptate maiores, a placeat, vel voluptatibus at." price="100" />
            </div>
            } />
            <Route component={Error404} />
          </Switch>
        </Layout>
      </Suspense>
    </>
  );
}

export default App;
