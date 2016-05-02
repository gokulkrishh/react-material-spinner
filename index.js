import React from 'react';
import ReactDOM from 'react-dom';
import MDSpinner from './App';
var target = document.getElementById('content');
ReactDOM.render(
  <MDSpinner
    borderColor={"#f00"}
    height={"15px"}
    width={"15px"}
  />,
  target
);
