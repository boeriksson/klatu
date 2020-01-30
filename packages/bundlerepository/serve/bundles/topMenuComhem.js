import React from 'react';

var TopMenuComhem = function TopMenuComhem() {
  return React.createElement("div", {
    className: "topnav"
  }, React.createElement("a", {
    className: "active",
    href: "#home"
  }, "Other"), React.createElement("a", {
    href: "#news"
  }, "Options"));
};

export default TopMenuComhem;
