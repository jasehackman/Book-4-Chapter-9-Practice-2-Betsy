(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

let componentBuilder = apiData => {
  let componentCompile = "";
  apiData.forEach(eachProductObj => {
    componentCompile += `
    <div class = "product_div" value = ${eachProductObj.id}>
      <img class = "product_image" src = ${eachProductObj.image} alt = ${eachProductObj.title}>
      <h3 class = "product_title">${eachProductObj.title}</h3>
      <h4 class = "product_price">$${eachProductObj.price}</h4>
      <p class = "product_description">${eachProductObj.description}</p>
    </div>`;
  });
  return componentCompile;
};

var _default = componentBuilder;
exports.default = _default;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
let api = {
  getfromAPI() {
    return fetch("http://localhost:8088/products").then(data => data.json());
  }

};
var _default = api;
exports.default = _default;

},{}],3:[function(require,module,exports){
"use strict";

var _nav = _interopRequireDefault(require("./nav.js"));

var _data = _interopRequireDefault(require("./data.js"));

var _component = _interopRequireDefault(require("./component.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$("body").append((0, _nav.default)());

let productFetch = () => {
  _data.default.getfromAPI().then(apiData => {
    $("body").append((0, _component.default)(apiData));
  });
};

productFetch();

},{"./component.js":1,"./data.js":2,"./nav.js":4}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

let navBuild = () => {
  return `
  <nav class ="nav">
  <ul class = "header_nav">
  <li class = "header_nav logo">BETSY</li>
  <li>Categories</li>
  <li>Orders</li>
  <li>Log Out</li>
  </ul>
  </nav>`;
};

var _default = navBuild;
exports.default = _default;

},{}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2NvbXBvbmVudC5qcyIsIi4uL3NjcmlwdHMvZGF0YS5qcyIsIi4uL3NjcmlwdHMvbWFpbi5qcyIsIi4uL3NjcmlwdHMvbmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQ0FBLElBQUksZ0JBQWdCLEdBQUksT0FBRCxJQUFhO0FBQ2xDLE1BQUksZ0JBQWdCLEdBQUcsRUFBdkI7QUFDRSxFQUFBLE9BQU8sQ0FBQyxPQUFSLENBQWdCLGNBQWMsSUFBSTtBQUNsQyxJQUFBLGdCQUFnQixJQUFLO3lDQUNnQixjQUFjLENBQUMsRUFBRzsyQ0FDaEIsY0FBYyxDQUFDLEtBQU0sVUFBUyxjQUFjLENBQUMsS0FBTTtvQ0FDMUQsY0FBYyxDQUFDLEtBQU07cUNBQ3BCLGNBQWMsQ0FBQyxLQUFNO3lDQUNqQixjQUFjLENBQUMsV0FBWTtXQUxoRTtBQVFELEdBVEM7QUFXRixTQUFPLGdCQUFQO0FBQ0QsQ0FkRDs7ZUFnQmUsZ0I7Ozs7Ozs7Ozs7QUNoQmYsSUFBSSxHQUFHLEdBQUc7QUFDUixFQUFBLFVBQVUsR0FBSTtBQUNaLFdBQU8sS0FBSyxDQUFDLGdDQUFELENBQUwsQ0FDTixJQURNLENBQ0EsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFMLEVBRFIsQ0FBUDtBQUVDOztBQUpLLENBQVY7ZUFPZSxHOzs7Ozs7QUNQZjs7QUFDQTs7QUFDQTs7OztBQUdBLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVSxNQUFWLENBQWlCLG1CQUFqQjs7QUFFQSxJQUFJLFlBQVksR0FBRyxNQUFNO0FBQ3ZCLGdCQUFLLFVBQUwsR0FBa0IsSUFBbEIsQ0FBdUIsT0FBTyxJQUFJO0FBQ2hDLElBQUEsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVLE1BQVYsQ0FBaUIsd0JBQWlCLE9BQWpCLENBQWpCO0FBQ0QsR0FGRDtBQUVHLENBSEw7O0FBS0EsWUFBWTs7Ozs7Ozs7OztBQ1paLElBQUksUUFBUSxHQUFHLE1BQU07QUFDbkIsU0FBUTs7Ozs7Ozs7U0FBUjtBQVNELENBVkQ7O2VBWWUsUSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImxldCBjb21wb25lbnRCdWlsZGVyID0gKGFwaURhdGEpID0+IHtcclxuICBsZXQgY29tcG9uZW50Q29tcGlsZSA9IFwiXCI7XHJcbiAgICBhcGlEYXRhLmZvckVhY2goZWFjaFByb2R1Y3RPYmogPT4ge1xyXG4gICAgY29tcG9uZW50Q29tcGlsZSArPSBgXHJcbiAgICA8ZGl2IGNsYXNzID0gXCJwcm9kdWN0X2RpdlwiIHZhbHVlID0gJHtlYWNoUHJvZHVjdE9iai5pZH0+XHJcbiAgICAgIDxpbWcgY2xhc3MgPSBcInByb2R1Y3RfaW1hZ2VcIiBzcmMgPSAke2VhY2hQcm9kdWN0T2JqLmltYWdlfSBhbHQgPSAke2VhY2hQcm9kdWN0T2JqLnRpdGxlfT5cclxuICAgICAgPGgzIGNsYXNzID0gXCJwcm9kdWN0X3RpdGxlXCI+JHtlYWNoUHJvZHVjdE9iai50aXRsZX08L2gzPlxyXG4gICAgICA8aDQgY2xhc3MgPSBcInByb2R1Y3RfcHJpY2VcIj4kJHtlYWNoUHJvZHVjdE9iai5wcmljZX08L2g0PlxyXG4gICAgICA8cCBjbGFzcyA9IFwicHJvZHVjdF9kZXNjcmlwdGlvblwiPiR7ZWFjaFByb2R1Y3RPYmouZGVzY3JpcHRpb259PC9wPlxyXG4gICAgPC9kaXY+YFxyXG4gICAgXHJcbiAgfSlcclxuICBcclxuICByZXR1cm4gY29tcG9uZW50Q29tcGlsZVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnRCdWlsZGVyOyIsImxldCBhcGkgPSB7XHJcbiAgZ2V0ZnJvbUFQSSAoKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODgvcHJvZHVjdHNcIilcclxuICAgIC50aGVuIChkYXRhID0+IGRhdGEuanNvbigpKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcGkiLCJpbXBvcnQgbmF2IGZyb20gXCIuL25hdi5qc1wiXHJcbmltcG9ydCBkYXRhIGZyb20gXCIuL2RhdGEuanNcIlxyXG5pbXBvcnQgY29tcG9uZW50QnVpbGRlciBmcm9tIFwiLi9jb21wb25lbnQuanNcIlxyXG5cclxuXHJcbiQoXCJib2R5XCIpLmFwcGVuZChuYXYoKSk7XHJcblxyXG5sZXQgcHJvZHVjdEZldGNoID0gKCkgPT4ge1xyXG4gIGRhdGEuZ2V0ZnJvbUFQSSgpLnRoZW4oYXBpRGF0YSA9PiB7XHJcbiAgICAkKFwiYm9keVwiKS5hcHBlbmQoY29tcG9uZW50QnVpbGRlcihhcGlEYXRhKSlcclxuICB9KX1cclxuXHJcbnByb2R1Y3RGZXRjaCgpOyIsImxldCBuYXZCdWlsZCA9ICgpID0+IHtcclxuICByZXR1cm4gYFxyXG4gIDxuYXYgY2xhc3MgPVwibmF2XCI+XHJcbiAgPHVsIGNsYXNzID0gXCJoZWFkZXJfbmF2XCI+XHJcbiAgPGxpIGNsYXNzID0gXCJoZWFkZXJfbmF2IGxvZ29cIj5CRVRTWTwvbGk+XHJcbiAgPGxpPkNhdGVnb3JpZXM8L2xpPlxyXG4gIDxsaT5PcmRlcnM8L2xpPlxyXG4gIDxsaT5Mb2cgT3V0PC9saT5cclxuICA8L3VsPlxyXG4gIDwvbmF2PmBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmF2QnVpbGQiXX0=
