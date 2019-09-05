import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./scss/style.scss";
import Header from "./components/layouts/Header";
import Register from "./components/auth/Register";
import NavBar from "./components/layouts/NavBar";
import LogIn from "./components/auth/LogIn";
import { auth, createUserProfileDoc } from "./firebase/Firebase.utils";

class App extends React.Component {
  state = {
    currentUser: null
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDoc(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state);
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <NavBar currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path="/" component={Header} />
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
