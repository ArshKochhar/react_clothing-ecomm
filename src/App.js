import React from "react";
import "./App.css";
import ShopPage from "../src/page/shop/shop.component";
import HomePage from "../src/page/homepage/homepage.component";
import Header from "../src/components/header/header.component";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/shop" component={ShopPage}></Route>
      </Switch>
    </div>
  );
}
export default App;
