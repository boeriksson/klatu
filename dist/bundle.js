/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/eriboc/repos/klatu/src/index.js: Unexpected token (6:8)\\n\\n\\u001b[0m \\u001b[90m 4 | \\u001b[39m\\u001b[36mfunction\\u001b[39m start() {\\u001b[0m\\n\\u001b[0m \\u001b[90m 5 | \\u001b[39m    \\u001b[33mReactDOM\\u001b[39m\\u001b[33m.\\u001b[39mrender(\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 6 | \\u001b[39m        \\u001b[33m<\\u001b[39m\\u001b[33mdiv\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33mKalle2\\u001b[39m\\u001b[33m<\\u001b[39m \\u001b[33m/\\u001b[39mdiv\\u001b[33m>\\u001b[39m\\u001b[33m,\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m   | \\u001b[39m        \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 7 | \\u001b[39m        document\\u001b[33m.\\u001b[39mgetElementById(\\u001b[32m\\\"app\\\"\\u001b[39m)\\u001b[0m\\n\\u001b[0m \\u001b[90m 8 | \\u001b[39m    )\\u001b[0m\\n\\u001b[0m \\u001b[90m 9 | \\u001b[39m}\\u001b[0m\\n    at Parser.raise (/Users/eriboc/repos/klatu/node_modules/@babel/parser/lib/index.js:7013:17)\\n    at Parser.unexpected (/Users/eriboc/repos/klatu/node_modules/@babel/parser/lib/index.js:8384:16)\\n    at Parser.parseExprAtom (/Users/eriboc/repos/klatu/node_modules/@babel/parser/lib/index.js:9639:20)\\n    at Parser.parseExprSubscripts (/Users/eriboc/repos/klatu/node_modules/@babel/parser/lib/index.js:9219:23)\\n    at Parser.parseMaybeUnary (/Users/eriboc/repos/klatu/node_modules/@babel/parser/lib/index.js:9199:21)\\n    at Parser.parseExprOps (/Users/eriboc/repos/klatu/node_modules/@babel/parser/lib/index.js:9067:23)\\n    at Parser.parseMaybeConditional (/Users/eriboc/repos/klatu/node_modules/@babel/parser/lib/index.js:9040:23)\\n    at Parser.parseMaybeAssign (/Users/eriboc/repos/klatu/node_modules/@babel/parser/lib/index.js:9000:21)\\n    at Parser.parseExprListItem (/Users/eriboc/repos/klatu/node_modules/@babel/parser/lib/index.js:10295:18)\\n    at Parser.parseCallExpressionArguments (/Users/eriboc/repos/klatu/node_modules/@babel/parser/lib/index.js:9404:22)\\n    at Parser.parseSubscript (/Users/eriboc/repos/klatu/node_modules/@babel/parser/lib/index.js:9310:31)\\n    at Parser.parseSubscripts (/Users/eriboc/repos/klatu/node_modules/@babel/parser/lib/index.js:9240:19)\\n    at Parser.parseExprSubscripts (/Users/eriboc/repos/klatu/node_modules/@babel/parser/lib/index.js:9229:17)\\n    at Parser.parseMaybeUnary (/Users/eriboc/repos/klatu/node_modules/@babel/parser/lib/index.js:9199:21)\\n    at Parser.parseExprOps (/Users/eriboc/repos/klatu/node_modules/@babel/parser/lib/index.js:9067:23)\\n    at Parser.parseMaybeConditional (/Users/eriboc/repos/klatu/node_modules/@babel/parser/lib/index.js:9040:23)\\n    at Parser.parseMaybeAssign (/Users/eriboc/repos/klatu/node_modules/@babel/parser/lib/index.js:9000:21)\\n    at Parser.parseExpression (/Users/eriboc/repos/klatu/node_modules/@babel/parser/lib/index.js:8950:23)\\n    at Parser.parseStatementContent (/Users/eriboc/repos/klatu/node_modules/@babel/parser/lib/index.js:10787:23)\\n    at Parser.parseStatement (/Users/eriboc/repos/klatu/node_modules/@babel/parser/lib/index.js:10658:17)\\n    at Parser.parseBlockOrModuleBlockBody (/Users/eriboc/repos/klatu/node_modules/@babel/parser/lib/index.js:11234:25)\\n    at Parser.parseBlockBody (/Users/eriboc/repos/klatu/node_modules/@babel/parser/lib/index.js:11221:10)\\n    at Parser.parseBlock (/Users/eriboc/repos/klatu/node_modules/@babel/parser/lib/index.js:11205:10)\\n    at Parser.parseFunctionBody (/Users/eriboc/repos/klatu/node_modules/@babel/parser/lib/index.js:10220:24)\\n    at Parser.parseFunctionBodyAndFinish (/Users/eriboc/repos/klatu/node_modules/@babel/parser/lib/index.js:10190:10)\\n    at /Users/eriboc/repos/klatu/node_modules/@babel/parser/lib/index.js:11364:12\\n    at Parser.withTopicForbiddingContext (/Users/eriboc/repos/klatu/node_modules/@babel/parser/lib/index.js:10533:14)\\n    at Parser.parseFunction (/Users/eriboc/repos/klatu/node_modules/@babel/parser/lib/index.js:11363:10)\\n    at Parser.parseFunctionStatement (/Users/eriboc/repos/klatu/node_modules/@babel/parser/lib/index.js:11006:17)\\n    at Parser.parseStatementContent (/Users/eriboc/repos/klatu/node_modules/@babel/parser/lib/index.js:10696:21)\");\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });