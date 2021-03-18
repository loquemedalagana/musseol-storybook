import React from "react";
import ReactDOM from 'react-dom';
import "./assets/scss/styles-index.scss";

const App = () => {
  return (<h1>This page is for storybook</h1>)
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
