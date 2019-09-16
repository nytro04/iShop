import React from "react";
import { Router, Switch, Route } from "react-router-dom";
// import { connect } from "react-redux";
import "./scss/style.scss";
import Header from "./components/layouts/Header";
import Register from "./components/auth/Register";
import NavBar from "./components/layouts/NavBar";
import LogIn from "./components/auth/LogIn";
// import { setCurrentUser } from "./actions/authActions";
import history from "./history";
import { Shop } from "./components/layouts/Shop";
import AddProduct from "./components/product/AddProduct";
import ItemListbk from "./components/product/ItemListbk";
import ProductDetails from "./components/product/ProductDetails";

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <div className="container">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Header} />
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/shop" component={ItemListbk} />
            <Route exact path="/product/add" component={AddProduct} />
            <Route exact path="/products/:id" component={ProductDetails} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
