import React from "react";
import "./App.css";
import ShopPage from "../src/page/shop/shop.component";
import HomePage from "../src/page/homepage/homepage.component";
import Header from "../src/components/header/header.component";
import SignInAndSignUpPage from "./page/sign in and sign up page/sign-in-and-sign-up.component";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/shop" component={ShopPage}></Route>
        <Route path="/signin" component={SignInAndSignUpPage}></Route>
      </Switch>
    </div>
  );
}
export default App;
