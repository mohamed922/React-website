import React ,{Component} from 'react';


import { BrowserRouter as Router  ,Route  } from 'react-router-dom'
import Home from './COMPONENTS/HOME/index'
import NavbarSec from './COMPONENTS/NAVBAR/index'
import Contact from './COMPONENTS/CONTACT/index'
class App extends Component {
  render(){
  return (
    
     
      <Router>
      
      <NavbarSec />
      
      <Route exact path = "/" component={Home} />
      
      <Route  path ="/contact" component={Contact} /> 
     
      
      </Router>
    
  );
}
}
export default App;
