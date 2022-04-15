import GlobalStyles from '@Assets/Styles/Global';
import SpinnerFallBack from '@Components/SpinerFallBack';
import Spinner from '@Components/Spinner';
import { routerTemplates } from '@Routers/Router';
import History from '@Utils/Libs/History';
import React, { Fragment, Suspense } from 'react';
import { Router, Switch } from 'react-router-dom';

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Spinner />
      <Router history={History}>
        <Suspense fallback={<SpinnerFallBack />}>
          <Switch>{routerTemplates}</Switch>
        </Suspense>
      </Router>
    </Fragment>
  );
}

export default App;
