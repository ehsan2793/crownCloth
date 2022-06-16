import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop/Shop";


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
