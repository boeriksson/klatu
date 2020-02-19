import ReactDOM from 'react-dom';
import React from 'react';
import TopMenu from 'topmenu';
import Right from 'right';
import Left from 'left';

var Main = function Main() {
  console.log('I Main!!!');
  return React.createElement("div", {
    className: 'mainContainer'
  }, React.createElement(TopMenu, null), React.createElement("div", {
    className: 'mid'
  }, React.createElement("div", {
    className: 'midLeft'
  }, React.createElement(Left, null)), React.createElement("div", {
    className: 'midRight'
  }, React.createElement(Right, null))));
};

function start() {
  console.log('starting main TopMenuComviq.js');
  ReactDOM.render(React.createElement(Main, null), // <div>Lena och Dennis är onda...</div>,
  document.getElementById('app'));
}

start();
