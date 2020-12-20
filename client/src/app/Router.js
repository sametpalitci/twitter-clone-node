import { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import {
  LoginPage,
  MainPage,
  RegisterPage,
  ForgetPage
} from './pages';

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" exact component={MainPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/register" exact component={RegisterPage} />
        <Route path="/forgetpassword" exact component={ForgetPage} />
      </BrowserRouter>
    );
  }
}
export default Router;
