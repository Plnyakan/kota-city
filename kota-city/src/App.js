import React ,{useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route,
  Redirect} from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Checkout from './components/Checkout';
import Profile from './components/Profile';
import Register from './components/Register';

function App() {
  const [isAuthenticated,setIsAuthenticated] = useState(false);

  const setAuth = boolean => {
    setIsAuthenticated(boolean);
  };

  return (
    <><Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route exact path="/login"
           render={props => !isAuthenticated ? ( <Login{...props} setAuth={setAuth}/>
            ):(
            <Redirect to="/"/>)
            } 
              />
          <Route exact path="/register" 
          render={props => !isAuthenticated ? (<Register{...props} setAuth={setAuth}/>
          ):(
          <Redirect to="/login"/>)
            } 
          />
          <Route exact path="/" 
          render={props => isAuthenticated ? <><Header {...props} setAuth={setAuth} /><Home /></>: 
          <Redirect to="/login"/>
        } 
          />
        </Switch>
      </div>
    </Router></>
  );
}

export default App;
