import "./App.css";
import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop/Shop";
import Header from "./components/header/Header";
import SignInup from "./pages/sign-in-sign-up/SignInup";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.action";
import { connect } from "react-redux";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(null);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInup />
            }
          />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    );
  }
}
const mpastateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mpastateToProps, mapDispatchToProps)(App);
