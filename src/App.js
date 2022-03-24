// import { routerTemplates } from '@Routers/Router';
import History from '@Utils/Libs/History';
import React from 'react';
import { Router, Switch } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <Router history={History}>{/* <Switch>{routerTemplates}</Switch> */}</Router>
    </>
  );
}

export default App;
