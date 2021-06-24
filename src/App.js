import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/navbar/navbar.component';

import Homepage from './pages/homepage/homepage.component';
import { Switch , Route } from 'react-router-dom';
import SignInPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

class App extends Component {
  render(){
    return (
        <>  
          <NavigationBar />
          <Switch className="main-page">
            <Route exact path= '/' component={Homepage}/>
            <Route path= '/login' component={SignInPage}/>
          </Switch> 
       </>
     );
     }
}

export default App;
