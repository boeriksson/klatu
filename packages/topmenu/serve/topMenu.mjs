import React from 'react';

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

export default TopMenu;
