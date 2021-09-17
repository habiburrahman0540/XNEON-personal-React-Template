import React from 'react';
import './scss/main.scss'
import HomePage from "./Pages/HomePage"
import Count from "./components/Count"
import {BrowserRouter as Router,Route } from 'react-router-dom'
import "./components/FontAwesome";

class App extends React.Component{
 
  render(){
   return(
    <Router>
      <Route path="/" component={HomePage} exact/>
      <Route path="/count" component={Count} />
     
   </Router>
   
   )
    
  }
}
export default App;
