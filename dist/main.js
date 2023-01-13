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

eval("const Game = __webpack_require__(/*! ./scripts/game.js */ \"./src/scripts/game.js\");\nconst View = __webpack_require__(/*! ./scripts/view.js */ \"./src/scripts/view.js\");\nconst Player = __webpack_require__(/*! ./scripts/player.js */ \"./src/scripts/player.js\");\nconst Enemy = __webpack_require__(/*! ./scripts/enemy.js */ \"./src/scripts/enemy.js\");\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvasEl = document.getElementById(\"canvas1\");\n  canvasEl.width = 1280;\n  canvasEl.height = 720;\n  const bgz1 = new Image(canvasEl.width, canvasEl.height);\n  bgz1.src = \"../images/Clouds/Clouds5/3.png\";\n  const canvasXSize = canvasEl.width;\n  const canvasYSize = canvasEl.height;\n  const speed = 1; // lower is faster\n  const scale = 1.05;\n  const y = -4.5; // vertical offset\n\n  // Main program\n  const dx = 3;\n  let imgW;\n  let imgH;\n  let x = 0;\n  let clearX;\n  let clearY;\n  let ctx;\n  bgz1.onload = () => {\n    imgW = bgz1.width * scale;\n    imgH = bgz1.height * scale;\n    if (imgW > canvasXSize) {\n      // Image larger than canvas\n      x = canvasXSize - imgW;\n    }\n\n    // Check if image dimension is larger than canvas\n    clearX = Math.max(imgW, canvasXSize);\n    clearY = Math.max(imgH, canvasYSize);\n\n    // Get canvas context\n    ctx = document.getElementById(\"canvas1\").getContext(\"2d\");\n\n    // Set refresh rate\n    return setInterval(draw, speed);\n  };\n  function draw() {\n    ctx.clearRect(0, 0, clearX, clearY); // clear the canvas\n\n    // If image is <= canvas size\n    if (imgW <= canvasXSize) {\n      // Reset, start from beginning\n      if (x > canvasXSize) {\n        x = -imgW + x;\n      }\n\n      // Draw additional image1\n      if (x > 0) {\n        ctx.drawImage(bgz1, -imgW + x, y, imgW, imgH);\n      }\n\n      // Draw additional image2\n      if (x - imgW > 0) {\n        ctx.drawImage(bgz1, -imgW * 2 + x, y, imgW, imgH);\n      }\n    } else {\n      // Image is > canvas size\n      // Reset, start from beginning\n      if (x > canvasXSize) {\n        x = canvasXSize - imgW;\n      }\n\n      // Draw additional image\n      if (x > canvasXSize - imgW) {\n        ctx.drawImage(bgz1, x - imgW + 1, y, imgW, imgH);\n      }\n    }\n\n    // Draw image\n    ctx.drawImage(bgz1, x, y, imgW, imgH);\n\n    // Amount to move\n    x += dx;\n  }\n\n  // const ctx = canvasEl.getContext(\"2d\");\n  // ctx.fillStyle = \"black\";\n  // ctx.fillRect(0,0,1280,720);\n\n  console.log(\"hello world\");\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUosQ0FBQyxFQUFFRSxJQUFJLEVBQUVDLElBQUksQ0FBQztNQUNqRDtJQUNKLENBQUMsTUFBTTtNQUNIO01BQ0E7TUFDQSxJQUFJQyxDQUFDLEdBQUdSLFdBQVcsRUFBRTtRQUNyQlEsQ0FBQyxHQUFHUixXQUFXLEdBQUdNLElBQUk7TUFDdEI7O01BRUE7TUFDQSxJQUFJRSxDQUFDLEdBQUdSLFdBQVcsR0FBR00sSUFBSSxFQUFFO1FBQzVCSyxHQUFHLENBQUNRLFNBQVMsQ0FBQ3RCLElBQUksRUFBRVcsQ0FBQyxHQUFHRixJQUFJLEdBQUcsQ0FBQyxFQUFFRixDQUFDLEVBQUVFLElBQUksRUFBRUMsSUFBSSxDQUFDO01BQ2hEO0lBQ0o7O0lBRUE7SUFDQUksR0FBRyxDQUFDUSxTQUFTLENBQUN0QixJQUFJLEVBQUVXLENBQUMsRUFBRUosQ0FBQyxFQUFFRSxJQUFJLEVBQUVDLElBQUksQ0FBQzs7SUFFckM7SUFDQUMsQ0FBQyxJQUFJSCxFQUFFO0VBQ1g7O0VBRUE7RUFDQTtFQUNBOztFQUVBZSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxhQUFhLENBQUM7QUFFOUIsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanMvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBHYW1lID0gcmVxdWlyZShcIi4vc2NyaXB0cy9nYW1lLmpzXCIpO1xuY29uc3QgVmlldyA9IHJlcXVpcmUoXCIuL3NjcmlwdHMvdmlldy5qc1wiKTtcbmNvbnN0IFBsYXllciA9IHJlcXVpcmUoXCIuL3NjcmlwdHMvcGxheWVyLmpzXCIpO1xuY29uc3QgRW5lbXkgPSByZXF1aXJlKFwiLi9zY3JpcHRzL2VuZW15LmpzXCIpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgY29uc3QgY2FudmFzRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhczFcIilcblxuICAgIGNhbnZhc0VsLndpZHRoID0gMTI4MDtcbiAgICBjYW52YXNFbC5oZWlnaHQgPSA3MjA7XG5cbiAgICBjb25zdCBiZ3oxID0gbmV3IEltYWdlKGNhbnZhc0VsLndpZHRoLCBjYW52YXNFbC5oZWlnaHQpO1xuXG4gICAgYmd6MS5zcmMgPSBcIi4uL2ltYWdlcy9DbG91ZHMvQ2xvdWRzNS8zLnBuZ1wiXG4gICAgXG4gICAgY29uc3QgY2FudmFzWFNpemUgPSBjYW52YXNFbC53aWR0aDtcbiAgICBjb25zdCBjYW52YXNZU2l6ZSA9IGNhbnZhc0VsLmhlaWdodDtcbiAgICBjb25zdCBzcGVlZCA9IDE7IC8vIGxvd2VyIGlzIGZhc3RlclxuICAgIGNvbnN0IHNjYWxlID0gMS4wNTtcbiAgICBjb25zdCB5ID0gLTQuNTsgLy8gdmVydGljYWwgb2Zmc2V0XG5cbiAgICAvLyBNYWluIHByb2dyYW1cbiAgICBjb25zdCBkeCA9IDM7XG4gICAgbGV0IGltZ1c7XG4gICAgbGV0IGltZ0g7XG4gICAgbGV0IHggPSAwO1xuICAgIGxldCBjbGVhclg7XG4gICAgbGV0IGNsZWFyWTtcbiAgICBsZXQgY3R4O1xuXG4gICAgYmd6MS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgIGltZ1cgPSBiZ3oxLndpZHRoICogc2NhbGU7XG4gICAgICAgIGltZ0ggPSBiZ3oxLmhlaWdodCAqIHNjYWxlO1xuXG4gICAgICAgIGlmIChpbWdXID4gY2FudmFzWFNpemUpIHtcbiAgICAgICAgICAgIC8vIEltYWdlIGxhcmdlciB0aGFuIGNhbnZhc1xuICAgICAgICAgICAgeCA9IGNhbnZhc1hTaXplIC0gaW1nVztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENoZWNrIGlmIGltYWdlIGRpbWVuc2lvbiBpcyBsYXJnZXIgdGhhbiBjYW52YXNcbiAgICAgICAgY2xlYXJYID0gTWF0aC5tYXgoaW1nVywgY2FudmFzWFNpemUpO1xuICAgICAgICBjbGVhclkgPSBNYXRoLm1heChpbWdILCBjYW52YXNZU2l6ZSk7XG5cbiAgICAgICAgLy8gR2V0IGNhbnZhcyBjb250ZXh0XG4gICAgICAgIGN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzMVwiKS5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICAgICAgLy8gU2V0IHJlZnJlc2ggcmF0ZVxuICAgICAgICByZXR1cm4gc2V0SW50ZXJ2YWwoZHJhdywgc3BlZWQpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBkcmF3KCkge1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2xlYXJYLCBjbGVhclkpOyAvLyBjbGVhciB0aGUgY2FudmFzXG5cbiAgICAgICAgLy8gSWYgaW1hZ2UgaXMgPD0gY2FudmFzIHNpemVcbiAgICAgICAgaWYgKGltZ1cgPD0gY2FudmFzWFNpemUpIHtcbiAgICAgICAgICAgIC8vIFJlc2V0LCBzdGFydCBmcm9tIGJlZ2lubmluZ1xuICAgICAgICAgICAgaWYgKHggPiBjYW52YXNYU2l6ZSkge1xuICAgICAgICAgICAgeCA9IC1pbWdXICsgeDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRHJhdyBhZGRpdGlvbmFsIGltYWdlMVxuICAgICAgICAgICAgaWYgKHggPiAwKSB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKGJnejEsIC1pbWdXICsgeCwgeSwgaW1nVywgaW1nSCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIERyYXcgYWRkaXRpb25hbCBpbWFnZTJcbiAgICAgICAgICAgIGlmICh4IC0gaW1nVyA+IDApIHtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoYmd6MSwgLWltZ1cgKiAyICsgeCwgeSwgaW1nVywgaW1nSCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJbWFnZSBpcyA+IGNhbnZhcyBzaXplXG4gICAgICAgICAgICAvLyBSZXNldCwgc3RhcnQgZnJvbSBiZWdpbm5pbmdcbiAgICAgICAgICAgIGlmICh4ID4gY2FudmFzWFNpemUpIHtcbiAgICAgICAgICAgIHggPSBjYW52YXNYU2l6ZSAtIGltZ1c7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIERyYXcgYWRkaXRpb25hbCBpbWFnZVxuICAgICAgICAgICAgaWYgKHggPiBjYW52YXNYU2l6ZSAtIGltZ1cpIHtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoYmd6MSwgeCAtIGltZ1cgKyAxLCB5LCBpbWdXLCBpbWdIKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERyYXcgaW1hZ2VcbiAgICAgICAgY3R4LmRyYXdJbWFnZShiZ3oxLCB4LCB5LCBpbWdXLCBpbWdIKTtcblxuICAgICAgICAvLyBBbW91bnQgdG8gbW92ZVxuICAgICAgICB4ICs9IGR4O1xuICAgIH1cblxuICAgIC8vIGNvbnN0IGN0eCA9IGNhbnZhc0VsLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAvLyBjdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgIC8vIGN0eC5maWxsUmVjdCgwLDAsMTI4MCw3MjApO1xuICAgIFxuICAgIGNvbnNvbGUubG9nKFwiaGVsbG8gd29ybGRcIilcblxufSk7XG5cblxuIl0sIm5hbWVzIjpbIkdhbWUiLCJyZXF1aXJlIiwiVmlldyIsIlBsYXllciIsIkVuZW15IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzRWwiLCJnZXRFbGVtZW50QnlJZCIsIndpZHRoIiwiaGVpZ2h0IiwiYmd6MSIsIkltYWdlIiwic3JjIiwiY2FudmFzWFNpemUiLCJjYW52YXNZU2l6ZSIsInNwZWVkIiwic2NhbGUiLCJ5IiwiZHgiLCJpbWdXIiwiaW1nSCIsIngiLCJjbGVhclgiLCJjbGVhclkiLCJjdHgiLCJvbmxvYWQiLCJNYXRoIiwibWF4IiwiZ2V0Q29udGV4dCIsInNldEludGVydmFsIiwiZHJhdyIsImNsZWFyUmVjdCIsImRyYXdJbWFnZSIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/enemy.js":
/*!******************************!*\
  !*** ./src/scripts/enemy.js ***!
  \******************************/
/***/ (function(module) {

eval("console.log(\"im in the enemy file\");\nclass Enemy {\n  constructor() {}\n}\nmodule.exports = Enemy;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9lbmVteS5qcy5qcyIsIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJFbmVteSIsImNvbnN0cnVjdG9yIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanMvLi9zcmMvc2NyaXB0cy9lbmVteS5qcz9lMzYxIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKFwiaW0gaW4gdGhlIGVuZW15IGZpbGVcIilcblxuY2xhc3MgRW5lbXkge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVuZW15OyJdLCJtYXBwaW5ncyI6IkFBQUFBLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHNCQUFzQixDQUFDO0FBRW5DLE1BQU1DLEtBQUssQ0FBQztFQUNSQyxXQUFXLEdBQUcsQ0FFZDtBQUNKO0FBRUFDLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHSCxLQUFLIn0=\n//# sourceURL=webpack-internal:///./src/scripts/enemy.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(module) {

eval("console.log(\"I'm in the game file\");\nclass Game {\n  constructor() {}\n}\nmodule.exports = Game;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsIkdhbWUiLCJjb25zdHJ1Y3RvciIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL2pzLy4vc3JjL3NjcmlwdHMvZ2FtZS5qcz9jZGMwIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKFwiSSdtIGluIHRoZSBnYW1lIGZpbGVcIilcblxuY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoKXtcblxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lOyAiXSwibWFwcGluZ3MiOiJBQUFBQSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQztBQUVuQyxNQUFNQyxJQUFJLENBQUM7RUFDUEMsV0FBVyxHQUFFLENBRWI7QUFDSjtBQUVBQyxNQUFNLENBQUNDLE9BQU8sR0FBR0gsSUFBSSJ9\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/movingObj.js":
/*!**********************************!*\
  !*** ./src/scripts/movingObj.js ***!
  \**********************************/
/***/ (function(module) {

eval("console.log(\"Im in the moving obj file\");\nclass MovingObj {\n  constructor(options) {\n    this.pos = options.pos;\n    this.vx = options.vx;\n  }\n}\nmodule.exports = MovingObj;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tb3ZpbmdPYmouanMuanMiLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiTW92aW5nT2JqIiwiY29uc3RydWN0b3IiLCJvcHRpb25zIiwicG9zIiwidngiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy8uL3NyYy9zY3JpcHRzL21vdmluZ09iai5qcz85NTAxIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKFwiSW0gaW4gdGhlIG1vdmluZyBvYmogZmlsZVwiKVxyXG5cclxuY2xhc3MgTW92aW5nT2JqIHtcclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpe1xyXG4gICAgICAgIHRoaXMucG9zID0gb3B0aW9ucy5wb3M7XHJcbiAgICAgICAgdGhpcy52eCA9IG9wdGlvbnMudng7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTW92aW5nT2JqOyJdLCJtYXBwaW5ncyI6IkFBQUFBLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDJCQUEyQixDQUFDO0FBRXhDLE1BQU1DLFNBQVMsQ0FBQztFQUNaQyxXQUFXLENBQUNDLE9BQU8sRUFBQztJQUNoQixJQUFJLENBQUNDLEdBQUcsR0FBR0QsT0FBTyxDQUFDQyxHQUFHO0lBQ3RCLElBQUksQ0FBQ0MsRUFBRSxHQUFHRixPQUFPLENBQUNFLEVBQUU7RUFDeEI7QUFDSjtBQUVBQyxNQUFNLENBQUNDLE9BQU8sR0FBR04sU0FBUyJ9\n//# sourceURL=webpack-internal:///./src/scripts/movingObj.js\n");

/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("const MovingObj = __webpack_require__(/*! ./movingObj.js */ \"./src/scripts/movingObj.js\");\nconsole.log(\"I'm in the player file\");\nclass Player extends MovingObj {\n  constructor() {}\n}\nmodule.exports = Player;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wbGF5ZXIuanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsU0FBUyxHQUFHQyxtQkFBTyxDQUFDLGtEQUFnQixDQUFDO0FBRzNDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQztBQUVyQyxNQUFNQyxNQUFNLFNBQVNKLFNBQVMsQ0FBQztFQUMzQkssV0FBVyxHQUFFLENBRWI7QUFFSjtBQUVBQyxNQUFNLENBQUNDLE9BQU8sR0FBR0gsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2pzLy4vc3JjL3NjcmlwdHMvcGxheWVyLmpzPzY0NzEiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgTW92aW5nT2JqID0gcmVxdWlyZShcIi4vbW92aW5nT2JqLmpzXCIpXG5cblxuY29uc29sZS5sb2coXCJJJ20gaW4gdGhlIHBsYXllciBmaWxlXCIpXG5cbmNsYXNzIFBsYXllciBleHRlbmRzIE1vdmluZ09iaiB7XG4gICAgY29uc3RydWN0b3IoKXtcblxuICAgIH1cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBsYXllcjsiXSwibmFtZXMiOlsiTW92aW5nT2JqIiwicmVxdWlyZSIsImNvbnNvbGUiLCJsb2ciLCJQbGF5ZXIiLCJjb25zdHJ1Y3RvciIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/player.js\n");

/***/ }),

/***/ "./src/scripts/view.js":
/*!*****************************!*\
  !*** ./src/scripts/view.js ***!
  \*****************************/
/***/ (function(module) {

eval("console.log(\"I'm in the view file\");\nclass View {\n  constructor() {}\n}\nmodule.exports = View;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy92aWV3LmpzLmpzIiwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsIlZpZXciLCJjb25zdHJ1Y3RvciIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL2pzLy4vc3JjL3NjcmlwdHMvdmlldy5qcz84MGMzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKFwiSSdtIGluIHRoZSB2aWV3IGZpbGVcIilcblxuY2xhc3MgVmlldyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVmlldzsiXSwibWFwcGluZ3MiOiJBQUFBQSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQztBQUVuQyxNQUFNQyxJQUFJLENBQUM7RUFDUEMsV0FBVyxHQUFHLENBRWQ7QUFDSjtBQUVBQyxNQUFNLENBQUNDLE9BQU8sR0FBR0gsSUFBSSJ9\n//# sourceURL=webpack-internal:///./src/scripts/view.js\n");

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