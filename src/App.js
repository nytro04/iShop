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
import ItemListbk from "./components/product/ItemListbk";
import ProductDetails from "./components/product/ProductDetails";
import CartList from "./components/cart/CartList";
import Home from "./components/layouts/Home";
import EditProduct from "./components/product/EditProduct";
import CreateProduct from "./components/product/CreateProduct";
import ProductDelete from "./components/product/ProductDelete";
import GetMacBooks from "./components/product/GetMacBooks";
import ContactPage from "./components/layouts/ContactPage";
import AboutPage from "./components/layouts/AboutPage";
import Footer from "./components/layouts/Footer";

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <div className="container">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={ContactPage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/shop" component={ItemListbk} />
            <Route exact path="/cart" component={CartList} />
            <Route exact path="/getMacbooks" component={GetMacBooks} />
            <Route exact path="/products/new" component={CreateProduct} />
            <Route exact path="/products/edit/:id" component={EditProduct} />
            <Route
              exact
              path="/products/delete/:id"
              component={ProductDelete}
            />
            <Route exact path="/products/:id" component={ProductDetails} />
          </Switch>
          {/* <Footer /> */}
        </div>
      </Router>
    );
  }
}

export default App;
