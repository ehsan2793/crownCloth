import "./App.css";
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop/Shop";
import Header from "./components/header/Header";
import SignInup from "./pages/sign-in-sign-up/SignInup";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends Component {
  state = {
    currentUser: null
  }


  unsubscribeFromAuth = null;


  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {

      createUserProfileDocument(user);
      this.setState({ currentUser: user });

      // console.log(user);
    });
  }


  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }




  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/signin" component={SignInup} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
