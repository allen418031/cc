import React from 'react';

import ReactDOM from 'react-dom';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Bar from './components/AppBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';

//import './index.css';



//import App from './App';
/*const theme = createTheme({

  palette: {

    primary: {

      main: '#FE8B83',

    },

    secondary: {

      main: '#FE8B83',

    },

  },

});*/


ReactDOM.render(

  <React.StrictMode>
    
    <Router>

        <Switch>

            <Route path="/" component={Bar}/>

        </Switch>

    </Router>
  
  </React.StrictMode>

, document.getElementById('root'));