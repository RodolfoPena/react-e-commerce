import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';


const container = document.getElementById('root')

ReactDOM.render(
  <Home username="Rodolfo"/>,
  container
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

