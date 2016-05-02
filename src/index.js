import React from 'react';
import ReactDOM from 'react-dom';
import MDSpinner from './App';

ReactDOM.render(
  <MDSpinner
    borderColor={"#f00"}
    height={"15px"}
    width={"15px"}
  />,
  document.getElementById('example1')
);

ReactDOM.render(
  <MDSpinner
    borderColor={"#f00"}
    height={"25px"}
    width={"25px"}
  />,
  document.getElementById('example2')
);

ReactDOM.render(
  <MDSpinner
    borderColor={"#f00"}
    height={"50px"}
    width={"50px"}
  />,
  document.getElementById('example3')
);

ReactDOM.render(
  <MDSpinner
    borderColor={"#f00"}
    height={"100px"}
    width={"100px"}
  />,
  document.getElementById('example4')
);
