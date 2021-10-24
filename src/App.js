import Home from './pages/Home';
import Productlist from './pages/ProductList';
import Cart from './pages/Cart';
import Product from './pages/Product'
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './components/Products';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
 return(
 <div>
    <Router>
        <Switch>
            <Route exact path="/">
 <Home/>
 </Route >
 <Route exact path="/cart">
 <Cart/>
 </Route >
 <Route exact path="/login">
 <Login/>
 </Route >
 <Route exact path="/register">
 <Register/>
 </Route >
 <Route exact path="/list">
 <Productlist/>
 </Route >
 </Switch>
 </Router>
 </div>
 );
};

export default App;