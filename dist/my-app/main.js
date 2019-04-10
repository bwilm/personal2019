(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar{\r\n  margin-bottom: 0;\r\n}\r\n\r\n.mainButton {\r\n\r\n  -moz-appearance: none;\r\n  -webkit-appearance: none;\r\n  height: 30px;\r\n  width: 200px;\r\n  left: 50%;\r\n  top: 50%;\r\n  margin-top: -15px;   /* = -height / 2   */\r\n  margin-left: -100px; /* = -width / 2    */\r\n  position: fixed;     /* Fixed is better */\r\n}\r\n\r\n.h2 {\r\nfont-size: 2em;\r\ncolor: white;\r\n}\r\n\r\n.mainBg{\r\n  min-height: 100vh;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-image: url('newBG.png') no-repeat center;\r\n  background-size:cover;\r\n  background-position: top center;\r\n  background-repeat:no-repeat;\r\n}\r\n\r\n/* .mainBg2 {\r\n  background-image: url('../assets/images/newBG.png');\r\n  min-height: 400px;\r\n}\r\n.mainBg3 {\r\n  background-image: url('../assets/images/newBG.png');\r\n  min-height: 400px;\r\n} */\r\n\r\n.modalBg{\r\n  background-image: url('whiteBG2.png');\r\n  position: relative;\r\n  opacity: 1.0;\r\n  background-position: center;\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  /* fixed = parallax scrolling  */\r\n  background-attachment: fixed;\r\n  min-height: 400px;\r\n}\r\n\r\n.aboutBg{\r\n  background-image: url('newBG.png');\r\n  position: relative;\r\n  opacity: 1.0;\r\n  background-position: center;\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  /* fixed = parallax scrolling  */\r\n  background-attachment: fixed;\r\n  min-height: 400px;\r\n}\r\n\r\n.mainBg, .mainBg2, .mainBg3{\r\n  position: relative;\r\n  opacity: 0.70;\r\n  background-position: center;\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  /* fixed = parallax scrolling  */\r\n  background-attachment: fixed;\r\n\r\n}\r\n\r\n.lH{\r\n  margin-top: 100px;\r\n  color: white;\r\n  font-size: 80px;\r\n}\r\n\r\n.nycd{\r\n  font-family: 'Nothing You Could Do', cursive;\r\n  font-size: 2em;\r\n}\r\n\r\n.cabin{\r\n  font-family: 'Cabin Sketch', cursive;\r\n  font-size: 2em;\r\n}\r\n\r\n.signika{\r\nfont-family: 'Signika Negative', sans-serif;\r\n\r\n}\r\n\r\n.caveat{\r\nfont-family: 'Caveat', cursive;\r\nfont-size: 2em;\r\n}\r\n\r\n.orbitron{\r\n  font-family: 'Orbitron', sans-serif;\r\n  font-size: 2em;\r\n}\r\n\r\nbody, html {\r\nheight: 100%;\r\nmargin: 0;\r\nfont-size: 16px;\r\nfont-family: 'Cabin Sketch', cursive;\r\nfont-weight: 400;\r\nline-height: 1.8em;\r\ncolor: #666;\r\n}\r\n\r\n.section-dark{\r\n  background-color: darkslategrey;\r\n  color: #666;\r\n  text-align: center;\r\n}\r\n\r\n.ptext{\r\n  position: absolute;\r\n  top: 50%;\r\n  width: 100%;\r\n  text-align: center;\r\n  color: #000;\r\n  font-size: 27px;\r\n  letter-spacing: 8px;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.ptext .border{\r\n  background-color: rgba(17, 17, 17, 0);\r\n  color: #fff;\r\n  padding: 0px;\r\n}\r\n\r\nh1{\r\n  border: 2px;\r\n  border-style: solid;\r\n  border-color: white;\r\n  /* width: fit-content; */\r\n  display: inline;\r\n}\r\n\r\n.modal {\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  overflow: hidden;\r\n}\r\n\r\n.modal-dialog {\r\n  position: fixed;\r\n  margin: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 0;\r\n}\r\n\r\n.modal-content {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  border: 2px solid #3c7dcf;\r\n  border-radius: 0;\r\n  box-shadow: none;\r\n}\r\n\r\n.modal-header {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  left: 0;\r\n  height: 50px;\r\n  padding: 10px;\r\n  background: #f5f5f5;\r\n  border: 0;\r\n}\r\n\r\n.modal-title {\r\n  font-weight: 300;\r\n  font-size: 2em;\r\n  color: #fff;\r\n\r\n}\r\n\r\n.modal-body {\r\n\r\n  position: absolute;\r\n  top: 50px;\r\n  bottom: 60px;\r\n  width: 100%;\r\n  font-weight: 300;\r\n  overflow: auto;\r\n}\r\n\r\n.modal-footer {\r\n  position: absolute;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  height: 60px;\r\n  padding: 10px;\r\n  background: #f5f5f5;\r\n}\r\n\r\n.btn {\r\n  height: 40px;\r\n  border-radius: 0;\r\n}\r\n\r\n.btn-modal {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  margin-top: -20px;\r\n  margin-left: -100px;\r\n  width: 200px;\r\n}\r\n\r\n.btn-primary,\r\n.btn-primary:hover,\r\n.btn-primary:focus,\r\n.btn-primary:active {\r\n  font-weight: 300;\r\n  font-size: 1.6rem;\r\n  color: #fff;\r\n  color: lighten(#484b5b, 20%);\r\n  color: #fff;\r\n  text-align: center;\r\n  background: #60cc69;\r\n  border: 1px solid #36a940;\r\n  border-bottom: 3px solid #36a940;\r\n  box-shadow: 0 2px 4px rgba(0,0,0,0.15);\r\n\r\n\r\n  &:active {\r\n    border-bottom: 1px solid #36a940;\r\n  }\r\n\r\n}\r\n\r\n.btn-default,\r\n.btn-default:hover,\r\n.btn-default:focus,\r\n.btn-default:active {\r\n  font-weight: 300;\r\n  font-size: 1.6rem;\r\n  color: #fff;\r\n  text-align: center;\r\n  background: darken(#dcdfe4, 10%);\r\n  border: 1px solid darken(#dcdfe4, 20%);\r\n  border-bottom: 3px solid darken(#dcdfe4, 20%);\r\n\r\n  &:active {\r\n    border-bottom: 1px solid darken(#dcdfe4, 20%);\r\n  }\r\n}\r\n\r\n.btn-secondary,\r\n.btn-secondary:hover,\r\n.btn-secondary:focus,\r\n.btn-secondary:active {\r\n  color: #cc7272;\r\n  background: transparent;\r\n  border: 0;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n  -webkit-appearance: none;\r\n  width: 10px;\r\n  background: #f1f3f5;\r\n  border-left: 1px solid darken(#f1f3f5, 10%);\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n  background: darken(#f1f3f5, 20%);\r\n}\r\n\r\n.portfolioButton{\r\nopacity: 0.1;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n  -webkit-appearance: none;\r\n  width: 10px;\r\n  background: #f1f3f5;\r\n  border-left: 1px solid darken(#f1f3f5, 10%);\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n  background: darken(#f1f3f5, 20%);\r\n}\r\n\r\n/* === card component ======\r\n * Variation of the panel component\r\n * version 2018.10.30\r\n * https://codepen.io/jstneg/pen/EVKYZj\r\n */\r\n\r\n.card{ background-color: #fff; border: 1px solid transparent; border-radius: 6px; }\r\n\r\n.card > .card-link{ color: #333; }\r\n\r\n.card > .card-link:hover{  text-decoration: none; }\r\n\r\n.card > .card-link .card-img img{ border-radius: 6px 6px 0 0; }\r\n\r\n.card .card-img{ position: relative; padding: 0; display: table; }\r\n\r\n.card .card-img .card-caption{\r\n   position: absolute;\r\n   right: 0;\r\n   bottom: 16px;\r\n   left: 0;\r\n }\r\n\r\n.card .card-body{ display: table; width: 100%; padding: 12px; }\r\n\r\n.card .card-header{ border-radius: 6px 6px 0 0; padding: 8px; }\r\n\r\n.card .card-footer{ border-radius: 0 0 6px 6px; padding: 8px; }\r\n\r\n.card .card-left{ position: relative; float: left; padding: 0 0 8px 0; }\r\n\r\n.card .card-right{ position: relative; float: left; padding: 8px 0 0 0; }\r\n\r\n.card .card-body h1:first-child,\r\n .card .card-body h2:first-child,\r\n .card .card-body h3:first-child,\r\n .card .card-body h4:first-child,\r\n .card .card-body .h1,\r\n .card .card-body .h2,\r\n .card .card-body .h3,\r\n .card .card-body .h4{ margin-top: 0; }\r\n\r\n.card .card-body .heading{ display: block;  }\r\n\r\n.card .card-body .heading:last-child{ margin-bottom: 0; }\r\n\r\n.card .card-body .lead{ text-align: center; }\r\n\r\n@media( min-width: 768px ){\r\n   .card .card-left{ float: left; padding: 0 8px 0 0; }\r\n   .card .card-right{ float: left; padding: 0 0 0 8px; }\r\n\r\n   .card .card-4-8 .card-left{ width: 33.33333333%; }\r\n   .card .card-4-8 .card-right{ width: 66.66666667%; }\r\n\r\n   .card .card-5-7 .card-left{ width: 41.66666667%; }\r\n   .card .card-5-7 .card-right{ width: 58.33333333%; }\r\n\r\n   .card .card-6-6 .card-left{ width: 50%; }\r\n   .card .card-6-6 .card-right{ width: 50%; }\r\n\r\n   .card .card-7-5 .card-left{ width: 58.33333333%; }\r\n   .card .card-7-5 .card-right{ width: 41.66666667%; }\r\n\r\n   .card .card-8-4 .card-left{ width: 66.66666667%; }\r\n   .card .card-8-4 .card-right{ width: 33.33333333%; }\r\n }\r\n\r\n/* -- default theme ------ */\r\n\r\n.card-default{\r\n   border-color: #ddd;\r\n   background-color: #fff;\r\n   margin-bottom: 24px;\r\n }\r\n\r\n.card-default > .card-header,\r\n .card-default > .card-footer{ color: #333; background-color: #ddd; }\r\n\r\n.card-default > .card-header{ border-bottom: 1px solid #ddd; padding: 8px; }\r\n\r\n.card-default > .card-footer{ border-top: 1px solid #ddd; padding: 8px; }\r\n\r\n.card-default > .card-body{  }\r\n\r\n.card-default > .card-img:first-child img{ border-radius: 6px 6px 0 0; }\r\n\r\n.card-default > .card-left{ padding-right: 4px; }\r\n\r\n.card-default > .card-right{ padding-left: 4px; }\r\n\r\n.card-default p:last-child{ margin-bottom: 0; }\r\n\r\n.card-default .card-caption { color: #fff; text-align: center; text-transform: uppercase; }\r\n\r\n/* -- price theme ------ */\r\n\r\n.card-price{ border-color: #999; background-color: #ededed; margin-bottom: 24px; }\r\n\r\n.card-price > .card-heading,\r\n .card-price > .card-footer{ color: #333; background-color: #fdfdfd; }\r\n\r\n.card-price > .card-heading{ border-bottom: 1px solid #ddd; padding: 8px; }\r\n\r\n.card-price > .card-footer{ border-top: 1px solid #ddd; padding: 8px; }\r\n\r\n.card-price > .card-img:first-child img{ border-radius: 6px 6px 0 0; }\r\n\r\n.card-price > .card-left{ padding-right: 4px; }\r\n\r\n.card-price > .card-right{ padding-left: 4px; }\r\n\r\n.card-price .card-caption { color: #fff; text-align: center; text-transform: uppercase; }\r\n\r\n.card-price p:last-child{ margin-bottom: 0; }\r\n\r\n.card-price .price{\r\n   text-align: center;\r\n   color: #337ab7;\r\n   font-size: 3em;\r\n   text-transform: uppercase;\r\n   line-height: 0.7em;\r\n   margin: 24px 0 16px;\r\n }\r\n\r\n.card-price .price small{ font-size: 0.4em; color: #66a5da; }\r\n\r\n.card-price .details{ list-style: none; margin-bottom: 24px; padding: 0 18px; }\r\n\r\n.card-price .details li{ text-align: center; margin-bottom: 8px; }\r\n\r\n.card-price .buy-now{ text-transform: uppercase; }\r\n\r\n.card-price table .price{ font-size: 1.2em; font-weight: 700; text-align: left; }\r\n\r\n.card-price table .note{ color: #666; font-size: 0.8em; }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUscUJBQXFCO0VBQ3JCLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osWUFBWTtFQUNaLFNBQVM7RUFDVCxRQUFRO0VBQ1IsaUJBQWlCLElBQUksb0JBQW9CO0VBQ3pDLG1CQUFtQixFQUFFLG9CQUFvQjtFQUN6QyxlQUFlLE1BQU0sb0JBQW9CO0FBQzNDOztBQUVBO0FBQ0EsY0FBYztBQUNkLFlBQVk7QUFDWjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1EQUFvRTtFQUNwRSxxQkFBcUI7RUFDckIsK0JBQStCO0VBQy9CLDJCQUEyQjtBQUM3Qjs7QUFFQTs7Ozs7OztHQU9HOztBQUNIO0VBQ0UscUNBQXNEO0VBQ3RELGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsZ0NBQWdDO0VBQ2hDLDRCQUE0QjtFQUM1QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQ0FBbUQ7RUFDbkQsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0Isc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QixnQ0FBZ0M7RUFDaEMsNEJBQTRCO0VBQzVCLGlCQUFpQjtBQUNuQjs7QUFJQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsZ0NBQWdDO0VBQ2hDLDRCQUE0Qjs7QUFFOUI7O0FBR0E7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw0Q0FBNEM7RUFDNUMsY0FBYztBQUNoQjs7QUFDQTtFQUNFLG9DQUFvQztFQUNwQyxjQUFjO0FBQ2hCOztBQUVBO0FBQ0EsMkNBQTJDOztBQUUzQzs7QUFFQTtBQUNBLDhCQUE4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NEJBQTRCLGtCQUFrQixFQUFFOztBQUNoRCw2QkFBNkIsaUJBQWlCLEVBQUU7O0FBQ2hELDRCQUE0QixnQkFBZ0IsRUFBRTs7QUFDOUMsOEJBQThCLFdBQVcsRUFBRSxrQkFBa0IsRUFBRSx5QkFBeUIsRUFBRTs7QUFHMUYsMEJBQTBCOztBQUMxQixhQUFhLGtCQUFrQixFQUFFLHlCQUF5QixFQUFFLG1CQUFtQixFQUFFOztBQUNqRjs2QkFDNEIsV0FBVyxFQUFFLHlCQUF5QixFQUFFOztBQUNwRSw2QkFBNkIsNkJBQTZCLEVBQUUsWUFBWSxFQUFFOztBQUMxRSw0QkFBNEIsMEJBQTBCLEVBQUUsWUFBWSxFQUFFOztBQUN0RSx5Q0FBeUMsMEJBQTBCLEVBQUU7O0FBQ3JFLDBCQUEwQixrQkFBa0IsRUFBRTs7QUFDOUMsMkJBQTJCLGlCQUFpQixFQUFFOztBQUM5Qyw0QkFBNEIsV0FBVyxFQUFFLGtCQUFrQixFQUFFLHlCQUF5QixFQUFFOztBQUN4RiwwQkFBMEIsZ0JBQWdCLEVBQUU7O0FBRTVDO0dBQ0Usa0JBQWtCO0dBQ2xCLGNBQWM7R0FDZCxjQUFjO0dBQ2QseUJBQXlCO0dBQ3pCLGtCQUFrQjtHQUNsQixtQkFBbUI7Q0FDckI7O0FBQ0EsMEJBQTBCLGdCQUFnQixFQUFFLGNBQWMsRUFBRTs7QUFDNUQsc0JBQXNCLGdCQUFnQixFQUFFLG1CQUFtQixFQUFFLGVBQWUsRUFBRTs7QUFDOUUseUJBQXlCLGtCQUFrQixFQUFFLGtCQUFrQixFQUFFOztBQUNqRSxzQkFBc0IseUJBQXlCLEVBQUU7O0FBQ2pELDBCQUEwQixnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBRTs7QUFDaEYseUJBQXlCLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhcntcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4ubWFpbkJ1dHRvbiB7XHJcblxyXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbWFyZ2luLXRvcDogLTE1cHg7ICAgLyogPSAtaGVpZ2h0IC8gMiAgICovXHJcbiAgbWFyZ2luLWxlZnQ6IC0xMDBweDsgLyogPSAtd2lkdGggLyAyICAgICovXHJcbiAgcG9zaXRpb246IGZpeGVkOyAgICAgLyogRml4ZWQgaXMgYmV0dGVyICovXHJcbn1cclxuXHJcbi5oMiB7XHJcbmZvbnQtc2l6ZTogMmVtO1xyXG5jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5tYWluQmd7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vYXNzZXRzL2ltYWdlcy9uZXdCRy5wbmcnKSBuby1yZXBlYXQgY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtcclxufVxyXG5cclxuLyogLm1haW5CZzIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vYXNzZXRzL2ltYWdlcy9uZXdCRy5wbmcnKTtcclxuICBtaW4taGVpZ2h0OiA0MDBweDtcclxufVxyXG4ubWFpbkJnMyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9hc3NldHMvaW1hZ2VzL25ld0JHLnBuZycpO1xyXG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG59ICovXHJcbi5tb2RhbEJne1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vYXNzZXRzL2ltYWdlcy93aGl0ZUJHMi5wbmcnKTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3BhY2l0eTogMS4wO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgLyogZml4ZWQgPSBwYXJhbGxheCBzY3JvbGxpbmcgICovXHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICBtaW4taGVpZ2h0OiA0MDBweDtcclxufVxyXG5cclxuLmFib3V0Qmd7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9hc3NldHMvaW1hZ2VzL25ld0JHLnBuZycpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvcGFjaXR5OiAxLjA7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAvKiBmaXhlZCA9IHBhcmFsbGF4IHNjcm9sbGluZyAgKi9cclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG59XHJcblxyXG5cclxuXHJcbi5tYWluQmcsIC5tYWluQmcyLCAubWFpbkJnM3tcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3BhY2l0eTogMC43MDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIC8qIGZpeGVkID0gcGFyYWxsYXggc2Nyb2xsaW5nICAqL1xyXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcblxyXG59XHJcblxyXG5cclxuLmxIe1xyXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDgwcHg7XHJcbn1cclxuXHJcbi5ueWNke1xyXG4gIGZvbnQtZmFtaWx5OiAnTm90aGluZyBZb3UgQ291bGQgRG8nLCBjdXJzaXZlO1xyXG4gIGZvbnQtc2l6ZTogMmVtO1xyXG59XHJcbi5jYWJpbntcclxuICBmb250LWZhbWlseTogJ0NhYmluIFNrZXRjaCcsIGN1cnNpdmU7XHJcbiAgZm9udC1zaXplOiAyZW07XHJcbn1cclxuXHJcbi5zaWduaWthe1xyXG5mb250LWZhbWlseTogJ1NpZ25pa2EgTmVnYXRpdmUnLCBzYW5zLXNlcmlmO1xyXG5cclxufVxyXG5cclxuLmNhdmVhdHtcclxuZm9udC1mYW1pbHk6ICdDYXZlYXQnLCBjdXJzaXZlO1xyXG5mb250LXNpemU6IDJlbTtcclxufVxyXG5cclxuLm9yYml0cm9ue1xyXG4gIGZvbnQtZmFtaWx5OiAnT3JiaXRyb24nLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMmVtO1xyXG59XHJcbmJvZHksIGh0bWwge1xyXG5oZWlnaHQ6IDEwMCU7XHJcbm1hcmdpbjogMDtcclxuZm9udC1zaXplOiAxNnB4O1xyXG5mb250LWZhbWlseTogJ0NhYmluIFNrZXRjaCcsIGN1cnNpdmU7XHJcbmZvbnQtd2VpZ2h0OiA0MDA7XHJcbmxpbmUtaGVpZ2h0OiAxLjhlbTtcclxuY29sb3I6ICM2NjY7XHJcbn1cclxuXHJcbi5zZWN0aW9uLWRhcmt7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NsYXRlZ3JleTtcclxuICBjb2xvcjogIzY2NjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wdGV4dHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGZvbnQtc2l6ZTogMjdweDtcclxuICBsZXR0ZXItc3BhY2luZzogOHB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5wdGV4dCAuYm9yZGVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTcsIDE3LCAxNywgMCk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG5oMXtcclxuICBib3JkZXI6IDJweDtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XHJcbiAgLyogd2lkdGg6IGZpdC1jb250ZW50OyAqL1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxufVxyXG5cclxuLm1vZGFsIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5tb2RhbC1kaWFsb2cge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBtYXJnaW46IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5tb2RhbC1jb250ZW50IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICMzYzdkY2Y7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4ubW9kYWwtaGVhZGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICBib3JkZXI6IDA7XHJcbn1cclxuXHJcbi5tb2RhbC10aXRsZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXNpemU6IDJlbTtcclxuICBjb2xvcjogI2ZmZjtcclxuXHJcbn1cclxuXHJcbi5tb2RhbC1ib2R5IHtcclxuXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTBweDtcclxuICBib3R0b206IDYwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLm1vZGFsLWZvb3RlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGhlaWdodDogNjBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIGhlaWdodDogNDBweDtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG59XHJcblxyXG4uYnRuLW1vZGFsIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIG1hcmdpbi10b3A6IC0yMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTAwcHg7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnksXHJcbi5idG4tcHJpbWFyeTpob3ZlcixcclxuLmJ0bi1wcmltYXJ5OmZvY3VzLFxyXG4uYnRuLXByaW1hcnk6YWN0aXZlIHtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGNvbG9yOiBsaWdodGVuKCM0ODRiNWIsIDIwJSk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6ICM2MGNjNjk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzM2YTk0MDtcclxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzM2YTk0MDtcclxuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLDAsMCwwLjE1KTtcclxuXHJcblxyXG4gICY6YWN0aXZlIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzZhOTQwO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi5idG4tZGVmYXVsdCxcclxuLmJ0bi1kZWZhdWx0OmhvdmVyLFxyXG4uYnRuLWRlZmF1bHQ6Zm9jdXMsXHJcbi5idG4tZGVmYXVsdDphY3RpdmUge1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IGRhcmtlbigjZGNkZmU0LCAxMCUpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtlbigjZGNkZmU0LCAyMCUpO1xyXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBkYXJrZW4oI2RjZGZlNCwgMjAlKTtcclxuXHJcbiAgJjphY3RpdmUge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGRhcmtlbigjZGNkZmU0LCAyMCUpO1xyXG4gIH1cclxufVxyXG5cclxuLmJ0bi1zZWNvbmRhcnksXHJcbi5idG4tc2Vjb25kYXJ5OmhvdmVyLFxyXG4uYnRuLXNlY29uZGFyeTpmb2N1cyxcclxuLmJ0bi1zZWNvbmRhcnk6YWN0aXZlIHtcclxuICBjb2xvcjogI2NjNzI3MjtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IDA7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICB3aWR0aDogMTBweDtcclxuICBiYWNrZ3JvdW5kOiAjZjFmM2Y1O1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgZGFya2VuKCNmMWYzZjUsIDEwJSk7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6IGRhcmtlbigjZjFmM2Y1LCAyMCUpO1xyXG59XHJcblxyXG4ucG9ydGZvbGlvQnV0dG9ue1xyXG5vcGFjaXR5OiAwLjE7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICB3aWR0aDogMTBweDtcclxuICBiYWNrZ3JvdW5kOiAjZjFmM2Y1O1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgZGFya2VuKCNmMWYzZjUsIDEwJSk7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6IGRhcmtlbigjZjFmM2Y1LCAyMCUpO1xyXG59XHJcblxyXG5cclxuLyogPT09IGNhcmQgY29tcG9uZW50ID09PT09PVxyXG4gKiBWYXJpYXRpb24gb2YgdGhlIHBhbmVsIGNvbXBvbmVudFxyXG4gKiB2ZXJzaW9uIDIwMTguMTAuMzBcclxuICogaHR0cHM6Ly9jb2RlcGVuLmlvL2pzdG5lZy9wZW4vRVZLWVpqXHJcbiAqL1xyXG4gLmNhcmR7IGJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50OyBib3JkZXItcmFkaXVzOiA2cHg7IH1cclxuIC5jYXJkID4gLmNhcmQtbGlua3sgY29sb3I6ICMzMzM7IH1cclxuIC5jYXJkID4gLmNhcmQtbGluazpob3ZlcnsgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxyXG4gLmNhcmQgPiAuY2FyZC1saW5rIC5jYXJkLWltZyBpbWd7IGJvcmRlci1yYWRpdXM6IDZweCA2cHggMCAwOyB9XHJcbiAuY2FyZCAuY2FyZC1pbWd7IHBvc2l0aW9uOiByZWxhdGl2ZTsgcGFkZGluZzogMDsgZGlzcGxheTogdGFibGU7IH1cclxuIC5jYXJkIC5jYXJkLWltZyAuY2FyZC1jYXB0aW9ue1xyXG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgIHJpZ2h0OiAwO1xyXG4gICBib3R0b206IDE2cHg7XHJcbiAgIGxlZnQ6IDA7XHJcbiB9XHJcbiAuY2FyZCAuY2FyZC1ib2R5eyBkaXNwbGF5OiB0YWJsZTsgd2lkdGg6IDEwMCU7IHBhZGRpbmc6IDEycHg7IH1cclxuIC5jYXJkIC5jYXJkLWhlYWRlcnsgYm9yZGVyLXJhZGl1czogNnB4IDZweCAwIDA7IHBhZGRpbmc6IDhweDsgfVxyXG4gLmNhcmQgLmNhcmQtZm9vdGVyeyBib3JkZXItcmFkaXVzOiAwIDAgNnB4IDZweDsgcGFkZGluZzogOHB4OyB9XHJcbiAuY2FyZCAuY2FyZC1sZWZ0eyBwb3NpdGlvbjogcmVsYXRpdmU7IGZsb2F0OiBsZWZ0OyBwYWRkaW5nOiAwIDAgOHB4IDA7IH1cclxuIC5jYXJkIC5jYXJkLXJpZ2h0eyBwb3NpdGlvbjogcmVsYXRpdmU7IGZsb2F0OiBsZWZ0OyBwYWRkaW5nOiA4cHggMCAwIDA7IH1cclxuIC5jYXJkIC5jYXJkLWJvZHkgaDE6Zmlyc3QtY2hpbGQsXHJcbiAuY2FyZCAuY2FyZC1ib2R5IGgyOmZpcnN0LWNoaWxkLFxyXG4gLmNhcmQgLmNhcmQtYm9keSBoMzpmaXJzdC1jaGlsZCxcclxuIC5jYXJkIC5jYXJkLWJvZHkgaDQ6Zmlyc3QtY2hpbGQsXHJcbiAuY2FyZCAuY2FyZC1ib2R5IC5oMSxcclxuIC5jYXJkIC5jYXJkLWJvZHkgLmgyLFxyXG4gLmNhcmQgLmNhcmQtYm9keSAuaDMsXHJcbiAuY2FyZCAuY2FyZC1ib2R5IC5oNHsgbWFyZ2luLXRvcDogMDsgfVxyXG4gLmNhcmQgLmNhcmQtYm9keSAuaGVhZGluZ3sgZGlzcGxheTogYmxvY2s7ICB9XHJcbiAuY2FyZCAuY2FyZC1ib2R5IC5oZWFkaW5nOmxhc3QtY2hpbGR7IG1hcmdpbi1ib3R0b206IDA7IH1cclxuXHJcbiAuY2FyZCAuY2FyZC1ib2R5IC5sZWFkeyB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cclxuXHJcbiBAbWVkaWEoIG1pbi13aWR0aDogNzY4cHggKXtcclxuICAgLmNhcmQgLmNhcmQtbGVmdHsgZmxvYXQ6IGxlZnQ7IHBhZGRpbmc6IDAgOHB4IDAgMDsgfVxyXG4gICAuY2FyZCAuY2FyZC1yaWdodHsgZmxvYXQ6IGxlZnQ7IHBhZGRpbmc6IDAgMCAwIDhweDsgfVxyXG5cclxuICAgLmNhcmQgLmNhcmQtNC04IC5jYXJkLWxlZnR7IHdpZHRoOiAzMy4zMzMzMzMzMyU7IH1cclxuICAgLmNhcmQgLmNhcmQtNC04IC5jYXJkLXJpZ2h0eyB3aWR0aDogNjYuNjY2NjY2NjclOyB9XHJcblxyXG4gICAuY2FyZCAuY2FyZC01LTcgLmNhcmQtbGVmdHsgd2lkdGg6IDQxLjY2NjY2NjY3JTsgfVxyXG4gICAuY2FyZCAuY2FyZC01LTcgLmNhcmQtcmlnaHR7IHdpZHRoOiA1OC4zMzMzMzMzMyU7IH1cclxuXHJcbiAgIC5jYXJkIC5jYXJkLTYtNiAuY2FyZC1sZWZ0eyB3aWR0aDogNTAlOyB9XHJcbiAgIC5jYXJkIC5jYXJkLTYtNiAuY2FyZC1yaWdodHsgd2lkdGg6IDUwJTsgfVxyXG5cclxuICAgLmNhcmQgLmNhcmQtNy01IC5jYXJkLWxlZnR7IHdpZHRoOiA1OC4zMzMzMzMzMyU7IH1cclxuICAgLmNhcmQgLmNhcmQtNy01IC5jYXJkLXJpZ2h0eyB3aWR0aDogNDEuNjY2NjY2NjclOyB9XHJcblxyXG4gICAuY2FyZCAuY2FyZC04LTQgLmNhcmQtbGVmdHsgd2lkdGg6IDY2LjY2NjY2NjY3JTsgfVxyXG4gICAuY2FyZCAuY2FyZC04LTQgLmNhcmQtcmlnaHR7IHdpZHRoOiAzMy4zMzMzMzMzMyU7IH1cclxuIH1cclxuXHJcbiAvKiAtLSBkZWZhdWx0IHRoZW1lIC0tLS0tLSAqL1xyXG4gLmNhcmQtZGVmYXVsdHtcclxuICAgYm9yZGVyLWNvbG9yOiAjZGRkO1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gfVxyXG4gLmNhcmQtZGVmYXVsdCA+IC5jYXJkLWhlYWRlcixcclxuIC5jYXJkLWRlZmF1bHQgPiAuY2FyZC1mb290ZXJ7IGNvbG9yOiAjMzMzOyBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkOyB9XHJcbiAuY2FyZC1kZWZhdWx0ID4gLmNhcmQtaGVhZGVyeyBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDsgcGFkZGluZzogOHB4OyB9XHJcbiAuY2FyZC1kZWZhdWx0ID4gLmNhcmQtZm9vdGVyeyBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDsgcGFkZGluZzogOHB4OyB9XHJcbiAuY2FyZC1kZWZhdWx0ID4gLmNhcmQtYm9keXsgIH1cclxuIC5jYXJkLWRlZmF1bHQgPiAuY2FyZC1pbWc6Zmlyc3QtY2hpbGQgaW1neyBib3JkZXItcmFkaXVzOiA2cHggNnB4IDAgMDsgfVxyXG4gLmNhcmQtZGVmYXVsdCA+IC5jYXJkLWxlZnR7IHBhZGRpbmctcmlnaHQ6IDRweDsgfVxyXG4gLmNhcmQtZGVmYXVsdCA+IC5jYXJkLXJpZ2h0eyBwYWRkaW5nLWxlZnQ6IDRweDsgfVxyXG4gLmNhcmQtZGVmYXVsdCBwOmxhc3QtY2hpbGR7IG1hcmdpbi1ib3R0b206IDA7IH1cclxuIC5jYXJkLWRlZmF1bHQgLmNhcmQtY2FwdGlvbiB7IGNvbG9yOiAjZmZmOyB0ZXh0LWFsaWduOiBjZW50ZXI7IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cclxuXHJcblxyXG4gLyogLS0gcHJpY2UgdGhlbWUgLS0tLS0tICovXHJcbiAuY2FyZC1wcmljZXsgYm9yZGVyLWNvbG9yOiAjOTk5OyBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZGVkOyBtYXJnaW4tYm90dG9tOiAyNHB4OyB9XHJcbiAuY2FyZC1wcmljZSA+IC5jYXJkLWhlYWRpbmcsXHJcbiAuY2FyZC1wcmljZSA+IC5jYXJkLWZvb3RlcnsgY29sb3I6ICMzMzM7IGJhY2tncm91bmQtY29sb3I6ICNmZGZkZmQ7IH1cclxuIC5jYXJkLXByaWNlID4gLmNhcmQtaGVhZGluZ3sgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7IHBhZGRpbmc6IDhweDsgfVxyXG4gLmNhcmQtcHJpY2UgPiAuY2FyZC1mb290ZXJ7IGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkOyBwYWRkaW5nOiA4cHg7IH1cclxuIC5jYXJkLXByaWNlID4gLmNhcmQtaW1nOmZpcnN0LWNoaWxkIGltZ3sgYm9yZGVyLXJhZGl1czogNnB4IDZweCAwIDA7IH1cclxuIC5jYXJkLXByaWNlID4gLmNhcmQtbGVmdHsgcGFkZGluZy1yaWdodDogNHB4OyB9XHJcbiAuY2FyZC1wcmljZSA+IC5jYXJkLXJpZ2h0eyBwYWRkaW5nLWxlZnQ6IDRweDsgfVxyXG4gLmNhcmQtcHJpY2UgLmNhcmQtY2FwdGlvbiB7IGNvbG9yOiAjZmZmOyB0ZXh0LWFsaWduOiBjZW50ZXI7IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cclxuIC5jYXJkLXByaWNlIHA6bGFzdC1jaGlsZHsgbWFyZ2luLWJvdHRvbTogMDsgfVxyXG5cclxuIC5jYXJkLXByaWNlIC5wcmljZXtcclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICBjb2xvcjogIzMzN2FiNztcclxuICAgZm9udC1zaXplOiAzZW07XHJcbiAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgIGxpbmUtaGVpZ2h0OiAwLjdlbTtcclxuICAgbWFyZ2luOiAyNHB4IDAgMTZweDtcclxuIH1cclxuIC5jYXJkLXByaWNlIC5wcmljZSBzbWFsbHsgZm9udC1zaXplOiAwLjRlbTsgY29sb3I6ICM2NmE1ZGE7IH1cclxuIC5jYXJkLXByaWNlIC5kZXRhaWxzeyBsaXN0LXN0eWxlOiBub25lOyBtYXJnaW4tYm90dG9tOiAyNHB4OyBwYWRkaW5nOiAwIDE4cHg7IH1cclxuIC5jYXJkLXByaWNlIC5kZXRhaWxzIGxpeyB0ZXh0LWFsaWduOiBjZW50ZXI7IG1hcmdpbi1ib3R0b206IDhweDsgfVxyXG4gLmNhcmQtcHJpY2UgLmJ1eS1ub3d7IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cclxuIC5jYXJkLXByaWNlIHRhYmxlIC5wcmljZXsgZm9udC1zaXplOiAxLjJlbTsgZm9udC13ZWlnaHQ6IDcwMDsgdGV4dC1hbGlnbjogbGVmdDsgfVxyXG4gLmNhcmQtcHJpY2UgdGFibGUgLm5vdGV7IGNvbG9yOiAjNjY2OyBmb250LXNpemU6IDAuOGVtOyB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\r\n<app-footer></app-footer>\r\n<div id=\"fsModal\" class=\"modal animated bounceIn\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n\r\n  <!-- dialog -->\r\n  <div class=\"modal-dialog\">\r\n\r\n    <!-- content -->\r\n    <div class=\"modal-content\">\r\n\r\n      <!-- header -->\r\n      <div class=\"modal-header\">\r\n        <a class=\"signika\" ng-href=\"#\">\r\n          <h1 id=\"myModalLabel\" class=\"modal-title\" style=\"color:#986d99\"> bw.dev\r\n            <a href=\"https://github.com/bwilm\" target=\"_blank\">\r\n              <i class=\"fab fa-github\" style=\"color:#986d99\"></i>\r\n            </a>\r\n          </h1>\r\n        </a>\r\n      </div>\r\n      <!-- header -->\r\n\r\n      <!-- body -->\r\n      <div class=\"modal-body modalBg\">\r\n        <h2 style=\"color: black\">Web Development</h2>\r\n        <p style=\"background-color:white; color:rgb(98, 80, 116); font-size: 20px\">\r\n          I mainly use Angular in my projects, some of my earlier work with Angular.js and later with Angular 7. This website was written\r\n          with the latest version of Angular with Bootstrap as the UI. See some examples below.</p>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-4\">\r\n            <div class=\"card card-default\">\r\n              <a href=\"https://github.com/bwilm/proximo\" target=\"_blank\"class=\"card-link\">\r\n                <span class=\"card-img\">\r\n                  <img src=\"../assets/images/proximo19.png\" class=\"img-responsive\">\r\n                </span>\r\n                <span class=\"card-body\">\r\n                  <span class=\"h3 heading\">Proximo' (Angular JS)</span>\r\n                  <p>Proximo: Tinder for Food! A This project was a response to a tweet by the Canadian Prime Minister for a\r\n                    need of a Tinder for Food. Uses a google maps API to locate the user and finds restraunts within a certain\r\n                    distance and feeds photos to an Array, they are then marked with like or dislikes tags until the restraunt\r\n                    ID and number of likes are met. User is presented with a match!\r\n                  </p>\r\n                </span>\r\n              </a>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-sm-4\">\r\n            <div class=\"card card-default\">\r\n\r\n                <span class=\"card-img\">\r\n                  <img src=\"../assets/images/uxuiLarge.png\" class=\"img-responsive\">\r\n                </span>\r\n                <span class=\"card-body\">\r\n                  <span class=\"h3 heading\">UX/UI</span>\r\n                  <p>Creating new website wireframes using Adobe XD and the family of other Adobe products.</p>\r\n                </span>\r\n\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-sm-4\">\r\n            <div class=\"card card-default\">\r\n\r\n                <span class=\"card-img\">\r\n                  <img src=\"../assets/images/frameworks.png\" class=\"img-responsive\">\r\n                </span>\r\n                <span class=\"card-body\">\r\n                  <span class=\"h3 heading\">FrameWorks and Languages</span>\r\n                  <p> Angular, React, Swift, HTML, CSS, NodeJS, ASP.NET</p>\r\n                </span>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <h2 style=\"font-size: 2em; color: black;\">IOs Projects</h2>\r\n        <div class=\"row\">\r\n\r\n\r\n          <div class=\"col-sm-4\">\r\n\r\n            <div class=\"card card-default\">\r\n              <a href=\"https://www.github.com/bwilm/coinScout\" target=\"_blank\" class=\"card-link\">\r\n                <span class=\"card-img\">\r\n                  <img src=\"../assets/images/coinscout19.png\" class=\"img-responsive\">\r\n                </span>\r\n                <span class=\"card-body\">\r\n                  <span class=\"h3 heading\">Coinscout bitcoin tracker</span>\r\n                  <p> Real Time bitcoin price tracker, pick the currency and see the latest trend in bitcoin pricing.</p>\r\n                </span>\r\n              </a>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-4\">\r\n            <div class=\"card card-default\">\r\n              <a href=\"https://www.github.com/bwilm/justDoit\" target=\"_blank\" class=\"card-link\">\r\n                <span class=\"card-img\">\r\n                  <img src=\"../assets/images/justDoIt19.png\" class=\"img-responsive\">\r\n                </span>\r\n                <span class=\"card-body\">\r\n                  <span class=\"h3 heading\">JustDoIt Todo app</span>\r\n                  <p>A to do app that persist data onto the mobile device using Realm. Different color options and more.</p>\r\n                </span>\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- body -->\r\n\r\n      <!-- footer -->\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn-primary\" data-dismiss=\"modal\">\r\n          Go Back\r\n        </button>\r\n      </div>\r\n      <!-- footer -->\r\n\r\n    </div>\r\n    <!-- content -->\r\n\r\n  </div>\r\n  <!-- dialog -->\r\n\r\n</div>\r\n<!-- modal -->\r\n\r\n\r\n<div id=\"aboutModal\" class=\"modal animated bounceIn\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n\r\n  <!-- dialog -->\r\n  <div class=\"modal-dialog\">\r\n\r\n    <!-- content -->\r\n    <div class=\"modal-content\">\r\n\r\n      <!-- header -->\r\n      <div class=\"modal-header\">\r\n        <a class=\"signika\" ng-href=\"#\">\r\n          <h1 id=\"myModalLabel\" class=\"modal-title\" style=\"color:#986d99\"> about me\r\n          </h1>\r\n        </a>\r\n      </div>\r\n      <!-- header -->\r\n\r\n      <!-- body -->\r\n      <div class=\"modal-body aboutBg\" align=\"center\">\r\n        <h2 style=\"color: white\">Brandon Kyle W.</h2>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-4\" align=\"center\">\r\n            <div class=\"card card-default\">\r\n              <a href=\"#\" class=\"card-link\">\r\n                <span class=\"card-img\">\r\n                  <img src=\"../assets/images/profilepicture.png\" class=\"img-responsive\">\r\n                </span>\r\n                <span class=\"card-body\">\r\n                  <span class=\"h3 heading\">\"Friends call me Bran\"</span>\r\n                  <p>The best time to take control of your life is right now, this was a revolutionary thought in my mind about\r\n                    3 years ago before I became a software developer I decided I would utilize my talent for engineering\r\n                    and design and create websites and applications for people to enjoy. Outside of work I love to travel\r\n                    and find new places to eat. I havent found a cuisine yet that I havent enjoyed around the world!\r\n                  </p>\r\n                </span>\r\n              </a>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-sm-4\">\r\n          </div>\r\n\r\n          <div class=\"col-sm-4\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- body -->\r\n\r\n      <!-- footer -->\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn-primary\" data-dismiss=\"modal\">\r\n          Go Back\r\n        </button>\r\n      </div>\r\n      <!-- footer -->\r\n\r\n    </div>\r\n    <!-- content -->\r\n\r\n  </div>\r\n  <!-- dialog -->\r\n\r\n</div>\r\n<!-- modal -->\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'my-app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _weather_weather_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./weather/weather.component */ "./src/app/weather/weather.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngb_carousel_ngb_carousel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ngb-carousel/ngb-carousel.component */ "./src/app/ngb-carousel/ngb-carousel.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _weather_weather_component__WEBPACK_IMPORTED_MODULE_5__["WeatherComponent"],
                _ngb_carousel_ngb_carousel_component__WEBPACK_IMPORTED_MODULE_7__["NgbCarouselComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_9__["NavComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer navbar-fixed-bottom\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4 col-md-4\">\r\n      </div>\r\n\r\n      <div class=\"col-sm-4 col-md-4\" align=\"center\">\r\n        <div class=\"social\" align=\"center\" style=\"display:inline-block\">\r\n          <div class=\"ptext\" style=\"font-size: 30px\">\r\n            <a href=\"https://www.facebook.com/brandon.wilmott\" target=\"_blank\">\r\n              <i style=\"margin-left: 0px; color: rgb(169, 107, 182); float:left; font-size: 28px; padding-top: 5px;\" class=\"fab fa-facebook-f\"></i>\r\n            </a>\r\n            <a href=\"https://github.com/bwilm\" target=\"_blank\">\r\n              <i style=\"color:rgb(169, 107, 182); padding-left:30px;\" class=\"fab fa-github-alt\"></i>\r\n            </a>\r\n            <a href=\"https://www.instagram.com/nihon_naygro/?hl=en\" target=\"_blank\">\r\n              <i style=\"color: rgb(169, 107, 182); padding-left: 30px;\" class=\"fab fa-instagram\"></i>\r\n            </a>\r\n            <a href=\"https://www.linkedin.com/in/bwilmott/\" target=\"_blank\">\r\n              <i style=\"color: rgb(169, 107, 182); padding-left:30px;\" class=\"fab fa-linkedin-in\"></i>\r\n            </a>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-4 col-md-4\" align=\"center\">\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid{\r\n  background-color: rgb(255, 255, 255);\r\n  border: 0px;\r\n}\r\n.icon-bar{\r\n  background-color: rgb(169, 107, 182);\r\n}\r\n.navbar-default{\r\n  color: white;\r\n}\r\n.navbar-default {\r\n  background-color: rgb(169, 107, 182);\r\n  border-color: #2d4459;\r\n}\r\n.navbar-default .navbar-brand {\r\n  color: #ecf0f1;\r\n}\r\n.navbar-default .navbar-brand:hover,\r\n.navbar-default .navbar-brand:focus {\r\n  color: #714b79;\r\n}\r\n.navbar-default .navbar-text {\r\n  color: #bd79ca;\r\n}\r\n.navbar-default .navbar-nav > li > a {\r\n  color: #ecf0f1;\r\n}\r\n.navbar-default .navbar-nav > li > a:hover,\r\n.navbar-default .navbar-nav > li > a:focus {\r\n  color: #794686;\r\n}\r\n.navbar-default .navbar-nav > .active > a,\r\n.navbar-default .navbar-nav > .active > a:hover,\r\n.navbar-default .navbar-nav > .active > a:focus {\r\n  color: #814892;\r\n  background-color: #2d4459;\r\n}\r\n.navbar-default .navbar-nav > .open > a,\r\n.navbar-default .navbar-nav > .open > a:hover,\r\n.navbar-default .navbar-nav > .open > a:focus {\r\n  color: #714b79;\r\n  background-color: #2d4459;\r\n}\r\n.navbar-default .navbar-toggle {\r\n  border-color: #2d4459;\r\n}\r\n.navbar-default .navbar-toggle:hover,\r\n.navbar-default .navbar-toggle:focus {\r\n  background-color: #2d4459;\r\n}\r\n.navbar-default .navbar-toggle .icon-bar {\r\n  background-color: #ecf0f1;\r\n}\r\n.navbar-default .navbar-collapse,\r\n.navbar-default .navbar-form {\r\n  border-color: #ecf0f1;\r\n}\r\n.navbar-default .navbar-link {\r\n  color: #ecf0f1;\r\n}\r\n.navbar-default .navbar-link:hover {\r\n  color: #35404f;\r\n}\r\n.signika{\r\n  font-family: 'Signika Negative', sans-serif;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQW9DO0VBQ3BDLFdBQVc7QUFDYjtBQUNBO0VBQ0Usb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTs7RUFFRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7O0VBRUUsY0FBYztBQUNoQjtBQUNBOzs7RUFHRSxjQUFjO0VBQ2QseUJBQXlCO0FBQzNCO0FBQ0E7OztFQUdFLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBOztFQUVFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7O0VBRUUscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSwyQ0FBMkM7RUFDM0MiLCJmaWxlIjoic3JjL2FwcC9uYXYvbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlke1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICBib3JkZXI6IDBweDtcclxufVxyXG4uaWNvbi1iYXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2OSwgMTA3LCAxODIpO1xyXG59XHJcbi5uYXZiYXItZGVmYXVsdHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5uYXZiYXItZGVmYXVsdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2OSwgMTA3LCAxODIpO1xyXG4gIGJvcmRlci1jb2xvcjogIzJkNDQ1OTtcclxufVxyXG4ubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1icmFuZCB7XHJcbiAgY29sb3I6ICNlY2YwZjE7XHJcbn1cclxuLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItYnJhbmQ6aG92ZXIsXHJcbi5uYXZiYXItZGVmYXVsdCAubmF2YmFyLWJyYW5kOmZvY3VzIHtcclxuICBjb2xvcjogIzcxNGI3OTtcclxufVxyXG4ubmF2YmFyLWRlZmF1bHQgLm5hdmJhci10ZXh0IHtcclxuICBjb2xvcjogI2JkNzljYTtcclxufVxyXG4ubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgPiBsaSA+IGEge1xyXG4gIGNvbG9yOiAjZWNmMGYxO1xyXG59XHJcbi5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiA+IGxpID4gYTpob3ZlcixcclxuLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2ID4gbGkgPiBhOmZvY3VzIHtcclxuICBjb2xvcjogIzc5NDY4NjtcclxufVxyXG4ubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgPiAuYWN0aXZlID4gYSxcclxuLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2ID4gLmFjdGl2ZSA+IGE6aG92ZXIsXHJcbi5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiA+IC5hY3RpdmUgPiBhOmZvY3VzIHtcclxuICBjb2xvcjogIzgxNDg5MjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQ0NDU5O1xyXG59XHJcbi5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiA+IC5vcGVuID4gYSxcclxuLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2ID4gLm9wZW4gPiBhOmhvdmVyLFxyXG4ubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgPiAub3BlbiA+IGE6Zm9jdXMge1xyXG4gIGNvbG9yOiAjNzE0Yjc5O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZDQ0NTk7XHJcbn1cclxuLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItdG9nZ2xlIHtcclxuICBib3JkZXItY29sb3I6ICMyZDQ0NTk7XHJcbn1cclxuLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItdG9nZ2xlOmhvdmVyLFxyXG4ubmF2YmFyLWRlZmF1bHQgLm5hdmJhci10b2dnbGU6Zm9jdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZDQ0NTk7XHJcbn1cclxuLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItdG9nZ2xlIC5pY29uLWJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZjBmMTtcclxufVxyXG4ubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1jb2xsYXBzZSxcclxuLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItZm9ybSB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZWNmMGYxO1xyXG59XHJcbi5uYXZiYXItZGVmYXVsdCAubmF2YmFyLWxpbmsge1xyXG4gIGNvbG9yOiAjZWNmMGYxO1xyXG59XHJcbi5uYXZiYXItZGVmYXVsdCAubmF2YmFyLWxpbms6aG92ZXIge1xyXG4gIGNvbG9yOiAjMzU0MDRmO1xyXG59XHJcblxyXG4uc2lnbmlrYXtcclxuICBmb250LWZhbWlseTogJ1NpZ25pa2EgTmVnYXRpdmUnLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"navbar-header\">\r\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\" style=\"background-color:rgb(255, 255, 255); opacity: 0.7;\">\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n        </button>\r\n        <a style=\"color:#714b79;\"class=\"navbar-brand signika\" href=\"#\">bw.dev <app-weather></app-weather></a>\r\n      </div>\r\n      <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\r\n        <ul class=\"nav navbar-nav\">\r\n          <li><a style=\"color:#714b79\"data-toggle=\"modal\" data-target=\"#fsModal\" class=\"signika\">Portfolio</a></li>\r\n          <li><a style=\"color:#714b79\"class=\"signika\"href=\"#\" data-target=\"#aboutModal\"data-toggle=\"modal\">About Me</a></li>\r\n          <li><a style=\"color:#714b79\"class=\"signika\"href=\" mailto:bwilmott.dev@gmail.com\">Contact Me</a></li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/ngb-carousel/ngb-carousel.component.css":
/*!*********************************************************!*\
  !*** ./src/app/ngb-carousel/ngb-carousel.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25nYi1jYXJvdXNlbC9uZ2ItY2Fyb3VzZWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/ngb-carousel/ngb-carousel.component.html":
/*!**********************************************************!*\
  !*** ./src/app/ngb-carousel/ngb-carousel.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngb-carousel *ngIf=\"images\">\r\n  <ng-template ngbSlide>\r\n    <img [src]=\"images[0]\" alt=\"Random first slide\">\r\n    <div class=\"carousel-caption\">\r\n      <h3>First slide label</h3>\r\n      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\r\n    </div>\r\n  </ng-template>\r\n  <ng-template ngbSlide>\r\n    <img [src]=\"images[1]\" alt=\"Random second slide\">\r\n    <div class=\"carousel-caption\">\r\n      <h3>Second slide label</h3>\r\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\r\n    </div>\r\n  </ng-template>\r\n  <ng-template ngbSlide>\r\n    <img [src]=\"images[2]\" alt=\"Random third slide\">\r\n    <div class=\"carousel-caption\">\r\n      <h3>Third slide label</h3>\r\n      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\r\n    </div>\r\n  </ng-template>\r\n</ngb-carousel>\r\n"

/***/ }),

/***/ "./src/app/ngb-carousel/ngb-carousel.component.ts":
/*!********************************************************!*\
  !*** ./src/app/ngb-carousel/ngb-carousel.component.ts ***!
  \********************************************************/
/*! exports provided: NgbCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbCarouselComponent", function() { return NgbCarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NgbCarouselComponent = /** @class */ (function () {
    function NgbCarouselComponent() {
        this.images = [1, 2, 3].map(function () { return "https://picsum.photos/900/500?random&t=" + Math.random(); });
    }
    NgbCarouselComponent.prototype.ngOnInit = function () {
    };
    NgbCarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ngb-carousel',
            template: __webpack_require__(/*! ./ngb-carousel.component.html */ "./src/app/ngb-carousel/ngb-carousel.component.html"),
            styles: [__webpack_require__(/*! ./ngb-carousel.component.css */ "./src/app/ngb-carousel/ngb-carousel.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NgbCarouselComponent);
    return NgbCarouselComponent;
}());



/***/ }),

/***/ "./src/app/weather/weather.component.css":
/*!***********************************************!*\
  !*** ./src/app/weather/weather.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".weatherTemp{\r\n  font-size: 15px;\r\n  color: rgb(89, 32, 100);\r\n  font-family: 'Signika Negative', sans-serif;\r\n}\r\n.weatherName{\r\n  font-size: 15px;\r\n  color:rgb(89, 32, 100);\r\n  font-family: 'Signika Negative', sans-serif;\r\n}\r\n.weatherUI{\r\n  position: fixed;\r\n\r\n  margin: 0;\r\n  padding: 0;\r\n  display: inline-block;\r\n  opacity: 0.5;\r\n}\r\n.row{\r\n  max-width: 100%;\r\n}\r\n.weatherTemp {\r\n\r\n  display: block;\r\n  position: relative;\r\n  font-size: 15px;\r\n  font-weight: bolder;\r\n  color: rgb(89, 32, 100);\r\n  text-align: center;\r\n\r\n};\r\n.weatherCity {\r\n  text-align: center;\r\n  font-size: 20px;\r\n  color:rgb(89, 32, 100);\r\n  opacity: 0.5;\r\n\r\n}\r\n.farenheit {\r\n  padding-left: 5px;\r\n  padding-top: 10px;\r\n  padding-bottom: 5px;\r\n  display: inline-block;\r\n  font-size: 100px;\r\n  color: rgb(89, 32, 100);\r\n  font-weight: bolder;\r\n}\r\n.weatherIcon {\r\n\r\n  font-size: 15px;\r\n  color: rgb(89, 32, 100);\r\n  display: inline-block;\r\n}\r\n.weatherDescription {\r\n  color: rgb(89, 32, 100);\r\n  padding-bottom: 10px;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VhdGhlci93ZWF0aGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLDJDQUEyQztBQUM3QztBQUNBO0VBQ0UsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QiwyQ0FBMkM7QUFDN0M7QUFDQTtFQUNFLGVBQWU7O0VBRWYsU0FBUztFQUNULFVBQVU7RUFDVixxQkFBcUI7RUFDckIsWUFBWTtBQUNkO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7O0VBRUUsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7O0FBRXBCLENBQUE7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLFlBQVk7O0FBRWQ7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtBQUVBOztFQUVFLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsb0JBQW9CO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvd2VhdGhlci93ZWF0aGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VhdGhlclRlbXB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGNvbG9yOiByZ2IoODksIDMyLCAxMDApO1xyXG4gIGZvbnQtZmFtaWx5OiAnU2lnbmlrYSBOZWdhdGl2ZScsIHNhbnMtc2VyaWY7XHJcbn1cclxuLndlYXRoZXJOYW1le1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBjb2xvcjpyZ2IoODksIDMyLCAxMDApO1xyXG4gIGZvbnQtZmFtaWx5OiAnU2lnbmlrYSBOZWdhdGl2ZScsIHNhbnMtc2VyaWY7XHJcbn1cclxuLndlYXRoZXJVSXtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcblxyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuXHJcbi5yb3d7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ud2VhdGhlclRlbXAge1xyXG5cclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgY29sb3I6IHJnYig4OSwgMzIsIDEwMCk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxufTtcclxuXHJcbi53ZWF0aGVyQ2l0eSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjpyZ2IoODksIDMyLCAxMDApO1xyXG4gIG9wYWNpdHk6IDAuNTtcclxuXHJcbn1cclxuXHJcbi5mYXJlbmhlaXQge1xyXG4gIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTAwcHg7XHJcbiAgY29sb3I6IHJnYig4OSwgMzIsIDEwMCk7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG5cclxuLndlYXRoZXJJY29uIHtcclxuXHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGNvbG9yOiByZ2IoODksIDMyLCAxMDApO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLndlYXRoZXJEZXNjcmlwdGlvbiB7XHJcbiAgY29sb3I6IHJnYig4OSwgMzIsIDEwMCk7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/weather/weather.component.html":
/*!************************************************!*\
  !*** ./src/app/weather/weather.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n   <div *ngIf = \"loading == false; then thenBlock else elseBlock\"></div>\r\n    <ng-template #thenBlock>\r\n      <div class=\"weatherBox weatherComp\">\r\n\r\n          <div class=\"row\">\r\n\r\n              <div class=\"col-sm-6\">\r\n                <div class= \"weatherUI\">\r\n                    <div class=\"weatherName\">{{weatherInfo.name}}\r\n                        <div class=\"weatherIcon\">\r\n                            <i class =\"{{weatherIcon}}\"></i>\r\n                            <i>{{weatherInfo.main.icon}}</i>\r\n                            {{weatherInfo.main.temp | number: '1.0-0'  }}\r\n                          </div>\r\n                      </div>\r\n                    <div class=\"weatherTemp\">\r\n\r\n                    </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n    </ng-template>\r\n    <ng-template #elseBlock>\r\n      <div class=\"spinner-grow text-info\"></div>\r\n    </ng-template>\r\n\r\n"

/***/ }),

/***/ "./src/app/weather/weather.component.ts":
/*!**********************************************!*\
  !*** ./src/app/weather/weather.component.ts ***!
  \**********************************************/
/*! exports provided: WeatherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherComponent", function() { return WeatherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var WeatherComponent = /** @class */ (function () {
    function WeatherComponent(http) {
        this.http = http;
        this.apiRoot = 'https://api.openweathermap.org/data/2.5/weather?zip=23173,us&units=imperial&APPID=fa7e1ef0864a3e688d1833e791eac17d';
        this.results = [];
        this.loading = true;
    }
    WeatherComponent.prototype.getWeather = function () {
        return this.http.get(this.apiRoot)
            .toPromise();
    };
    WeatherComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, this.getWeather()];
                    case 1:
                        _a.weatherInfo = _b.sent();
                        this.getWeatherIcon();
                        this.loading = false;
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _b.sent();
                        this.loading = true;
                        console.log(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    WeatherComponent.prototype.getWeatherIcon = function () {
        var weatherCode = this.weatherInfo.weather[0].description.toString();
        switch (weatherCode) {
            case 'clear sky':
                this.weatherIcon = 'wi wi-day-sunny';
                break;
            case 'few clouds':
                this.weatherIcon = 'wi wi-day-sunny-overcast';
                break;
            case 'scattered clouds':
                this.weatherIcon = 'wi wi-day-cloudy';
                break;
            case 'broken clouds':
                this.weatherIcon = 'wi wi-day-cloudy-high';
                break;
            case 'rain':
            case 'moderate rain':
            case 'freezing rain':
            case 'light intensity shower rain':
                this.weatherIcon = 'wi wi-day-rain';
                break;
            case 'shower rain':
            case 'heavy inensity shower rain':
            case 'ragged shower rain':
            case 'shower rain':
            case 'heavy inensity rain':
            case 'very heavy rain':
            case 'extreme rain':
                this.weatherIcon = 'wi wi-day-showers';
                break;
            case 'thunderstorm':
            case 'thunderstorm with light rain':
            case 'thunderstorm with rain':
            case 'thunderstorm with heavy rain':
            case 'light thunderstorm':
            case 'heavy thunderstorm':
            case 'ragged thunderstorm':
            case 'thunderstorm with light drizzle':
            case 'thunderstorm with drizzle':
            case 'thunderstorm with heavy drizzle':
                this.weatherIcon = 'wi wi-day-thunderstorm';
                break;
            case 'snow':
            case 'light snow':
            case 'heavy snow':
            case 'sleet':
            case 'shower sleet':
            case 'light rain and snow':
            case 'rain and snow':
            case 'light shower snow':
            case 'shower snow':
            case 'heavy shower snow':
                this.weatherIcon = 'snowflake icon';
                break;
            case 'smoke':
            case 'haze':
            case 'sand, dust whirls':
            case 'fog':
            case 'sand':
            case 'dust':
            case 'volcanic ash':
            case 'squalls':
            case 'tornado':
            case 'mist':
                this.weatherIcon = 'wi wi-day-haze';
                break;
            case 'light rain':
            case 'light intensity drizzle':
            case 'drizzle':
            case 'heavy intensity drizzle':
            case 'light intensity drizzle rain':
            case 'drizzle rain':
            case 'heavy inensity drizzle rain':
            case 'shower rain and drizzle':
            case 'shower drizzle':
                this.weatherIcon = 'wi wi-day-sprinkle';
                break;
            default:
                this.weatherIcon = 'we wi-farenheit';
                break;
        }
    };
    WeatherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-weather',
            template: __webpack_require__(/*! ./weather.component.html */ "./src/app/weather/weather.component.html"),
            styles: [__webpack_require__(/*! ./weather.component.css */ "./src/app/weather/weather.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], WeatherComponent);
    return WeatherComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Bran/Desktop/mypersonal3/my-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map