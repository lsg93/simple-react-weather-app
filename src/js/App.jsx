import {hot} from 'react-hot-loader/root'
import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import {
    HashRouter as Router,
    Redirect,
    Route,
    Switch
} from 'react-router-dom'
import 'spectre.css'
import 'animate.css/animate.css'
import '../styles.css'

import Splash from './components/Splash'
import Home from './components/Home'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 

            <Switch>
                <Route path="/forecast" component={Home}/>
                <Route exact path="/" component={Splash}/>
            </Switch>

         );
    }
}
 
export default hot(App);

ReactDOM.render(<Router><App/></Router>, document.getElementById('app'))