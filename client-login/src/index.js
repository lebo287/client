import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./style.scss";
import Navbar from './components/Navbar';
import Chat from './components/chat/Chat';
import reportWebVitals from './reportWebVitals';

class App extends React.Component{
  render(){
    return(
      <React.Fragment>
        <Navbar />
        <Chat />
      </React.Fragment>
    )
  }
}

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>
  ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
