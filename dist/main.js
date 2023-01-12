/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./scripts/game.js */ \"./src/scripts/game.js\");\nconst View = __webpack_require__(/*! ./scripts/view.js */ \"./src/scripts/view.js\");\nconst Player = __webpack_require__(/*! ./scripts/player.js */ \"./src/scripts/player.js\");\nconst Enemy = __webpack_require__(/*! ./scripts/enemy.js */ \"./src/scripts/enemy.js\");\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvasEl = document.getElementById(\"canvas\");\n  canvasEl.width = 1000;\n  canvasEl.height = 720;\n  const ctx = canvasEl.getContext(\"2d\");\n  ctx.fillStyle = \"black\";\n  ctx.fillRect(0, 0, 400, 400);\n  console.log(\"hellow world\");\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsSUFBSSxHQUFHQyxtQkFBTyxDQUFDLGdEQUFtQixDQUFDO0FBQ3pDLE1BQU1DLElBQUksR0FBR0QsbUJBQU8sQ0FBQyxnREFBbUIsQ0FBQztBQUN6QyxNQUFNRSxNQUFNLEdBQUdGLG1CQUFPLENBQUMsb0RBQXFCLENBQUM7QUFDN0MsTUFBTUcsS0FBSyxHQUFHSCxtQkFBTyxDQUFDLGtEQUFvQixDQUFDO0FBRTNDSSxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLE1BQU07RUFFaEQsTUFBTUMsUUFBUSxHQUFHRixRQUFRLENBQUNHLGNBQWMsQ0FBQyxRQUFRLENBQUM7RUFFbERELFFBQVEsQ0FBQ0UsS0FBSyxHQUFHLElBQUk7RUFDckJGLFFBQVEsQ0FBQ0csTUFBTSxHQUFHLEdBQUc7RUFFckIsTUFBTUMsR0FBRyxHQUFHSixRQUFRLENBQUNLLFVBQVUsQ0FBQyxJQUFJLENBQUM7RUFDckNELEdBQUcsQ0FBQ0UsU0FBUyxHQUFHLE9BQU87RUFDdkJGLEdBQUcsQ0FBQ0csUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQztFQUd6QkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO0FBRS9CLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2pzLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgR2FtZSA9IHJlcXVpcmUoXCIuL3NjcmlwdHMvZ2FtZS5qc1wiKTtcbmNvbnN0IFZpZXcgPSByZXF1aXJlKFwiLi9zY3JpcHRzL3ZpZXcuanNcIik7XG5jb25zdCBQbGF5ZXIgPSByZXF1aXJlKFwiLi9zY3JpcHRzL3BsYXllci5qc1wiKTtcbmNvbnN0IEVuZW15ID0gcmVxdWlyZShcIi4vc2NyaXB0cy9lbmVteS5qc1wiKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuXG4gICAgY29uc3QgY2FudmFzRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKVxuXG4gICAgY2FudmFzRWwud2lkdGggPSAxMDAwO1xuICAgIGNhbnZhc0VsLmhlaWdodCA9IDcyMDtcblxuICAgIGNvbnN0IGN0eCA9IGNhbnZhc0VsLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgIGN0eC5maWxsUmVjdCgwLDAsNDAwLDQwMCk7XG4gICAgXG5cbiAgICBjb25zb2xlLmxvZyhcImhlbGxvdyB3b3JsZFwiKVxuXG59KTsiXSwibmFtZXMiOlsiR2FtZSIsInJlcXVpcmUiLCJWaWV3IiwiUGxheWVyIiwiRW5lbXkiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXNFbCIsImdldEVsZW1lbnRCeUlkIiwid2lkdGgiLCJoZWlnaHQiLCJjdHgiLCJnZXRDb250ZXh0IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/enemy.js":
/*!******************************!*\
  !*** ./src/scripts/enemy.js ***!
  \******************************/
/***/ (function(module) {

eval("console.log(\"im in the enemy file\");\nclass Enemy {\n  constructor() {}\n}\nmodule.exports = Enemy;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9lbmVteS5qcy5qcyIsIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJFbmVteSIsImNvbnN0cnVjdG9yIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanMvLi9zcmMvc2NyaXB0cy9lbmVteS5qcz9lMzYxIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKFwiaW0gaW4gdGhlIGVuZW15IGZpbGVcIilcblxuY2xhc3MgRW5lbXkge1xuICAgIGNvbnN0cnVjdG9yKCl7XG5cbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRW5lbXk7Il0sIm1hcHBpbmdzIjoiQUFBQUEsT0FBTyxDQUFDQyxHQUFHLENBQUMsc0JBQXNCLENBQUM7QUFFbkMsTUFBTUMsS0FBSyxDQUFDO0VBQ1JDLFdBQVcsR0FBRSxDQUViO0FBQ0o7QUFFQUMsTUFBTSxDQUFDQyxPQUFPLEdBQUdILEtBQUsifQ==\n//# sourceURL=webpack-internal:///./src/scripts/enemy.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(module) {

eval("console.log(\"I'm in the game file\");\nclass Game {\n  constructor() {}\n}\nmodule.exports = Game;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsIkdhbWUiLCJjb25zdHJ1Y3RvciIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL2pzLy4vc3JjL3NjcmlwdHMvZ2FtZS5qcz9jZGMwIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKFwiSSdtIGluIHRoZSBnYW1lIGZpbGVcIilcblxuY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoKXtcblxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lOyAiXSwibWFwcGluZ3MiOiJBQUFBQSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQztBQUVuQyxNQUFNQyxJQUFJLENBQUM7RUFDUEMsV0FBVyxHQUFFLENBRWI7QUFDSjtBQUVBQyxNQUFNLENBQUNDLE9BQU8sR0FBR0gsSUFBSSJ9\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ (function(module) {

eval("console.log(\"I'm in the player file\");\nclass Player {\n  constructor() {}\n}\nmodule.exports = Player;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wbGF5ZXIuanMuanMiLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiUGxheWVyIiwiY29uc3RydWN0b3IiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy8uL3NyYy9zY3JpcHRzL3BsYXllci5qcz82NDcxIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKFwiSSdtIGluIHRoZSBwbGF5ZXIgZmlsZVwiKVxuXG5jbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKCl7XG5cbiAgICB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQbGF5ZXI7Il0sIm1hcHBpbmdzIjoiQUFBQUEsT0FBTyxDQUFDQyxHQUFHLENBQUMsd0JBQXdCLENBQUM7QUFFckMsTUFBTUMsTUFBTSxDQUFDO0VBQ1RDLFdBQVcsR0FBRSxDQUViO0FBRUo7QUFFQUMsTUFBTSxDQUFDQyxPQUFPLEdBQUdILE1BQU0ifQ==\n//# sourceURL=webpack-internal:///./src/scripts/player.js\n");

/***/ }),

/***/ "./src/scripts/view.js":
/*!*****************************!*\
  !*** ./src/scripts/view.js ***!
  \*****************************/
/***/ (function(module) {

eval("console.log(\"I'm in the view file\");\nclass View {\n  constructor(canvas) {\n    this.canvas = canvas;\n  }\n}\nmodule.exports = View;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy92aWV3LmpzLmpzIiwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsIlZpZXciLCJjb25zdHJ1Y3RvciIsImNhbnZhcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL2pzLy4vc3JjL3NjcmlwdHMvdmlldy5qcz84MGMzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKFwiSSdtIGluIHRoZSB2aWV3IGZpbGVcIilcblxuY2xhc3MgVmlldyB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzKXtcblxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhc1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBWaWV3OyJdLCJtYXBwaW5ncyI6IkFBQUFBLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHNCQUFzQixDQUFDO0FBRW5DLE1BQU1DLElBQUksQ0FBQztFQUNQQyxXQUFXLENBQUNDLE1BQU0sRUFBQztJQUVmLElBQUksQ0FBQ0EsTUFBTSxHQUFHQSxNQUFNO0VBQ3hCO0FBQ0o7QUFFQUMsTUFBTSxDQUFDQyxPQUFPLEdBQUdKLElBQUkifQ==\n//# sourceURL=webpack-internal:///./src/scripts/view.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;