import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import "./scss/style.scss";
import Header from "./components/layouts/Header";
import Register from "./components/auth/Register";
import NavBar from "./components/layouts/NavBar";
import LogIn from "./components/auth/LogIn";
import { auth, createUserProfileDoc } from "./firebase/Firebase.utils";
import { setCurrentUser } from "./actions/authActions";
import history from "./history";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDoc(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <Router history={history}>
        <div className="container">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Header} />
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default connect(
  null,
  { setCurrentUser }
)(App);
