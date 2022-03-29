// import { routerTemplates } from '@Routers/Router';
import GlobalStyles from '@Assets/Styles/Global';
import Spinner from '@Components/Spinner/Spinner';
import { selectIsLoadingState } from '@Redux/Selector/LoadingSelect';
import { routerTemplates } from '@Routers/Router';
import History from '@Utils/Libs/History';
import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Router, Switch } from 'react-router-dom';

function App() {
  const isLoading = useSelector(selectIsLoadingState);
  return (
    <Suspense fallback={<Spinner />}>
      {isLoading ? <Spinner /> : null}
      <GlobalStyles />
      <Router history={History}>
        <Switch>{routerTemplates}</Switch>
      </Router>
    </Suspense>
  );
}

export default App;
