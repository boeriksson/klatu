System.register(['react'], function (exports) {
    'use strict';
    var React;
    return {
        setters: [function (module) {
            React = module.default;
        }],
        execute: function () {

            var TopMenu = function TopMenu() {
              console.log('I topmenu...');
              return React.createElement("div", {
                className: "topnav"
              }, React.createElement("a", {
                className: "active",
                href: "#home"
              }, "Home"), React.createElement("a", {
                href: "#news"
              }, "News"), React.createElement("a", {
                href: "#contact"
              }, "Contact"), React.createElement("a", {
                href: "#about"
              }, "About"));
            };
            exports('default', TopMenu);

        }
    };
});
