import React from 'react';

var TopMenuComviq = function TopMenuComviq() {
  return React.createElement("ul", {
    className: "horizontal"
  }, React.createElement("li", {
    href: "#home"
  }, React.createElement("a", null, "Home")), React.createElement("li", {
    href: "#news"
  }, React.createElement("a", null, "News")), React.createElement("li", {
    href: "#contact"
  }, React.createElement("a", null, "Contact")), React.createElement("li", {
    href: "#about"
  }, React.createElement("a", null, "About")));
};

export default TopMenuComviq;
