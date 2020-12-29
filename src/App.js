
import React, {Component} from 'react'
import NavBar from "./NavBar"
import Login from "./login"
import Signup from "./signup"

import { BrowserRouter, Switch, Route, Router } from 'react-router-dom';




class App extends Component {
  render() {
  return (
<BrowserRouter>
    <div className="App">
   
  
  
    <Switch>
      <Route path ="/" component={NavBar} exact />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    </Switch>

 </div>
 
</BrowserRouter> 

  );
  }
}

export default App;
