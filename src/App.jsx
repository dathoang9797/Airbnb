import GlobalStyles from '@Assets/Styles/Global';
import { Spinner, SpinnerFallBack } from '@Components';
import { routerTemplates } from '@Routers/Router';
import { history } from '@Utils/Libs';
import React, { Fragment, Suspense } from 'react';
import { Router, Switch } from 'react-router-dom';

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Spinner />
      <Router history={history}>
        <Suspense fallback={<SpinnerFallBack />}>
          <Switch>{routerTemplates}</Switch>
        </Suspense>
      </Router>
    </Fragment>
  );
}

export default App;
