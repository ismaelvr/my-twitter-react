import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
//import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.css';
import App from './components/App';
import './index.css';
ReactDOM.render(<HashRouter>
      <div>
        <Route exact path="/" component={App} />
      </div>
</HashRouter >, document.getElementById('root'));
   
  //  <Route path="/home" component={Home} />
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
