System.register(['react-dom', 'react', 'topmenu', 'right', 'left'], function () {
    'use strict';
    var ReactDOM, React, TopMenu, Right, Left;
    return {
        setters: [function (module) {
            ReactDOM = module.default;
        }, function (module) {
            React = module.default;
        }, function (module) {
            TopMenu = module.default;
        }, function (module) {
            Right = module.default;
        }, function (module) {
            Left = module.default;
        }],
        execute: function () {

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

        }
    };
});
