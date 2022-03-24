// import { v4 as uuidv4 } from 'uuid';
// import ContactPage from '@Pages/ContactPage';
// import HomePage from '@Pages/HomePage';
// import NewsPage from '@Pages/NewsPage';
// import SignInPage from '@Pages/SignInPage';
// import SignUpPage from '@Pages/SignUpPage';
// import HomeTemplate from '@Templates/HomeTemplate';
// import UserTemplate from '@Templates/UserTemplate';

// export const routersHomeTemPlate = [
//   { path: '/', componentPage: HomePage },
//   { path: '/contact', componentPage: ContactPage },
//   { path: '/news', componentPage: NewsPage },
// ];

// export const routerUserTemplate = [
//   { path: '/sign-up', componentPage: SignUpPage },
//   { path: '/sign-in', componentPage: SignInPage },
// ];

// const renderHomeTemplate = (() => {
//   const idHomeTemplate = uuidv4(); //Need Declare same id to react can't switch case properly in react-router
//   return routersHomeTemPlate.map(({ componentPage, path }) => (
//     <HomeTemplate key={idHomeTemplate} Component={componentPage} path={path} exact />
//   ));
// })();

// const renderUserTemplate = (() => {
//   const idUserTemplate = uuidv4(); //Need Declare same id to react can't switch case properly in react-router
//   return routerUserTemplate.map(({ componentPage, path }) => (
//     <UserTemplate key={idUserTemplate} Component={componentPage} path={path} exact />
//   ));
// })();

// export const routerTemplates = [...renderHomeTemplate, ...renderUserTemplate];
export {};
