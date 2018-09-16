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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _device_device_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./device/device.component */ "./src/app/device/device.component.ts");
/* harmony import */ var _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./statistics/statistics.component */ "./src/app/statistics/statistics.component.ts");
/* harmony import */ var _config_config_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config/config.component */ "./src/app/config/config.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _cookbook_cookbook_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cookbook/cookbook.component */ "./src/app/cookbook/cookbook.component.ts");
/* harmony import */ var _cook_cook_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cook/cook.component */ "./src/app/cook/cook.component.ts");
/* harmony import */ var _config_detail_config_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./config-detail/config-detail.component */ "./src/app/config-detail/config-detail.component.ts");
/* harmony import */ var _market_market_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./market/market.component */ "./src/app/market/market.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: '', component: _cookbook_cookbook_component__WEBPACK_IMPORTED_MODULE_7__["CookbookComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'device', component: _device_device_component__WEBPACK_IMPORTED_MODULE_3__["DeviceComponent"] },
    { path: 'statistics', component: _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_4__["StatisticsComponent"] },
    { path: 'config', component: _config_config_component__WEBPACK_IMPORTED_MODULE_5__["ConfigComponent"] },
    { path: 'settings', component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_6__["SettingsComponent"] },
    { path: 'cookbook', component: _cookbook_cookbook_component__WEBPACK_IMPORTED_MODULE_7__["CookbookComponent"] },
    { path: 'cook', component: _cook_cook_component__WEBPACK_IMPORTED_MODULE_8__["CookComponent"] },
    { path: 'configDetail', component: _config_detail_config_detail_component__WEBPACK_IMPORTED_MODULE_9__["ConfigDetailComponent"] },
    { path: 'market', component: _market_market_component__WEBPACK_IMPORTED_MODULE_10__["MarketComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ons-navigator>\n  <ons-page>\n    <div class=\"page__background\"></div>\n    <div class=\"page__content\">\n      <app-tabbar></app-tabbar>\n    </div>\n  </ons-page>\n</ons-navigator>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'SauceX';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_onsenui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-onsenui */ "./node_modules/ngx-onsenui/ngx-onsenui.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _tabbar_tabbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabbar/tabbar.component */ "./src/app/tabbar/tabbar.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _device_device_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./device/device.component */ "./src/app/device/device.component.ts");
/* harmony import */ var _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./statistics/statistics.component */ "./src/app/statistics/statistics.component.ts");
/* harmony import */ var _config_config_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./config/config.component */ "./src/app/config/config.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _bottle_bottle_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./bottle/bottle.component */ "./src/app/bottle/bottle.component.ts");
/* harmony import */ var _chart_chart_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./chart/chart.component */ "./src/app/chart/chart.component.ts");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/fesm5/ngx-echarts.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _cookbook_cookbook_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./cookbook/cookbook.component */ "./src/app/cookbook/cookbook.component.ts");
/* harmony import */ var _cook_cook_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./cook/cook.component */ "./src/app/cook/cook.component.ts");
/* harmony import */ var _config_detail_config_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./config-detail/config-detail.component */ "./src/app/config-detail/config-detail.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _market_market_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./market/market.component */ "./src/app/market/market.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _tabbar_tabbar_component__WEBPACK_IMPORTED_MODULE_5__["TabbarComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _device_device_component__WEBPACK_IMPORTED_MODULE_8__["DeviceComponent"],
                _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_9__["StatisticsComponent"],
                _config_config_component__WEBPACK_IMPORTED_MODULE_10__["ConfigComponent"],
                _settings_settings_component__WEBPACK_IMPORTED_MODULE_11__["SettingsComponent"],
                _bottle_bottle_component__WEBPACK_IMPORTED_MODULE_12__["BottleComponent"],
                _chart_chart_component__WEBPACK_IMPORTED_MODULE_13__["ChartComponent"],
                _cookbook_cookbook_component__WEBPACK_IMPORTED_MODULE_16__["CookbookComponent"],
                _cook_cook_component__WEBPACK_IMPORTED_MODULE_17__["CookComponent"],
                _config_detail_config_detail_component__WEBPACK_IMPORTED_MODULE_18__["ConfigDetailComponent"],
                _market_market_component__WEBPACK_IMPORTED_MODULE_20__["MarketComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                ngx_onsenui__WEBPACK_IMPORTED_MODULE_2__["OnsenModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                ngx_echarts__WEBPACK_IMPORTED_MODULE_14__["NgxEchartsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            entryComponents: [_device_device_component__WEBPACK_IMPORTED_MODULE_8__["DeviceComponent"]],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"],
            ],
        })
    ], AppModule);
    return AppModule;
}());

Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(AppModule);


/***/ }),

/***/ "./src/app/bottle/bottle.component.css":
/*!*********************************************!*\
  !*** ./src/app/bottle/bottle.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n  box-sizing: border-box;\r\n}\r\nhtml,\r\nbody {\r\n  height: 100%;\r\n}\r\nbody {\r\n  background-color: #1a1a1a;\r\n  font-family: sans-serif;\r\n  font-size: 15px;\r\n  color: #ccc;\r\n}\r\ninput[type=\"text\"] {\r\n  background-color: transparent;\r\n  margin-top: 30px;\r\n  border: 0;\r\n  border-bottom: solid 1px #8080ff;\r\n  text-align: center;\r\n  font-size: 20px;\r\n  color: #518bf0;\r\n  text-shadow: 0 0 3px #518bf0;\r\n  width: 45px;\r\n  display: inline-block;\r\n}\r\ninput:focus {\r\n  outline: 0;\r\n  border-bottom: dashed 1px #ff8080;\r\n}\r\ninput::-moz-selection {\r\n  color: #1a1a1a;\r\n  background-color: #c6e4ee;\r\n}\r\ninput::selection {\r\n  color: #1a1a1a;\r\n  background-color: #c6e4ee;\r\n}\r\n::-webkit-input-placeholder {\r\n  color: #7aa6f3;\r\n  text-shadow: 0 0 3px #7aa6f3;\r\n}\r\n:-moz-placeholder {\r\n  color: #7aa6f3;\r\n  text-shadow: 0 0 3px #7aa6f3;\r\n}\r\n::-moz-placeholder {\r\n  color: #7aa6f3;\r\n  text-shadow: 0 0 3px #7aa6f3;\r\n}\r\n:-ms-input-placeholder {\r\n  color: #7aa6f3;\r\n  text-shadow: 0 0 3px #7aa6f3;\r\n}\r\n.wrapper {\r\n\r\n  display: flex;\r\n  -o-box-align: center;\r\n  align-items: center;\r\n  -o-box-pack: center;\r\n  justify-content: center;\r\n  -o-box-orient: vertical;\r\n  flex-direction: column;\r\n  height: 100%;\r\n}\r\n.content {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: -webkit-flex;\r\n  -webkit-justify-content: center;\r\n}\r\n.green {\r\n  margin-top: 15px;\r\n}\r\n.green .progress,\r\n.red .progress,\r\n.orange .progress {\r\n  position: relative;\r\n  border-radius: 7%;\r\n  width: 52%;\r\n  padding-top: 70%;\r\n  height: 0;\r\n}\r\n.green .progress {\r\n  border: 2px solid #53fc53;\r\n}\r\n.green .progress {\r\n  box-shadow: 0 0 20px #029502;\r\n}\r\n.green .progress,\r\n.red .progress,\r\n.orange .progress {\r\n  transition: all 1s ease;\r\n}\r\n.green .progress .inner,\r\n.red .progress .inner,\r\n.orange .progress .inner {\r\n  position: absolute;\r\n  overflow: hidden;\r\n  z-index: 2;\r\n  border-radius: 5%;\r\n  top:0;\r\n  width: 100%;\r\n  height: 100%;\r\n  border: 1px solid #1a1a1a;\r\n  transition: all 1s ease;\r\n}\r\n.green .progress .inner .water,\r\n.red .progress .inner .water,\r\n.orange .progress .inner .water {\r\n  position: absolute;\r\n  z-index: 1;\r\n  width: 290%;\r\n  height: 200%;\r\n  left: -95%;\r\n  border-radius: 40%;\r\n  -webkit-animation-iteration-count: infinite;\r\n  animation-iteration-count: infinite;\r\n  -webkit-animation-timing-function: linear;\r\n  animation-timing-function: linear;\r\n  -webkit-animation-duration: 10s;\r\n  animation-duration: 10s;\r\n  -webkit-animation-name: spin;\r\n  animation-name: spin;\r\n  transition: all 1s ease;\r\n}\r\n.green .progress .inner .water {\r\n  background: rgba(83,252,83,0.5);\r\n  box-shadow: 0 0 20px #03bc03;\r\n}\r\n.red .progress .inner .water {\r\n  background: rgba(237,59,59,0.5);\r\n  box-shadow: 0 0 20px #9b0e0e;\r\n}\r\n.orange .progress .inner .water {\r\n  background: rgba(240,124,62,0.5);\r\n  box-shadow: 0 0 20px #a0400c;\r\n}\r\n.progress .inner .glare {\r\n  position: absolute;\r\n  left: 20%;\r\n  z-index: 5;\r\n  width: 20%;\r\n  height: 100%;\r\n  background-color: rgba(255,255,255,0.4);\r\n  transition: all 1s ease;\r\n}\r\n.progress .inner .glare2 {\r\n  left: 85%;\r\n  width: 15%;\r\n}\r\n.green .progress .inner .percent,\r\n.red .progress .inner .percent,\r\n.orange .progress .inner .percent,\r\n.label{\r\n  position: absolute;\r\n\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  font-weight: bold;\r\n  text-align: center;\r\n  z-index: 6;\r\n\r\n  font-size: 8vw;\r\n  transition: all 1s ease;\r\n}\r\n.percent{\r\n  top: 60%;\r\n}\r\n.label{\r\n  top: 30%;\r\n}\r\n.green .progress .inner .percent{\r\n  color: #03c603;\r\n  text-shadow: 0 0 10px #029502;\r\n}\r\n.red .progress .inner .percent {\r\n  color: #a30f0f;\r\n  text-shadow: 0 0 10px #7a0b0b;\r\n}\r\n.red {\r\n  margin-top: 15px;\r\n}\r\n.red .progress {\r\n  border: 2px solid #ed3b3b;\r\n}\r\n.red .progress {\r\n  box-shadow: 0 0 20px #7a0b0b;\r\n}\r\n.orange {\r\n  margin-top: 15px;\r\n}\r\n.orange .progress {\r\n  border: 2px solid #f07c3e;\r\n}\r\n.orange .progress {\r\n  box-shadow: 0 0 20px #7e320a;\r\n}\r\n.orange .progress .inner .percent {\r\n  color: #a8430d;\r\n}\r\n.orange .progress .inner .percent {\r\n  text-shadow: 0 0 10px #7e320a;\r\n}\r\n#copyright {\r\n  margin-top: 25px;\r\n  background-color: transparent;\r\n  font-size: 14px;\r\n  color: #b3b3b3;\r\n  text-align: center;\r\n}\r\n#copyright div {\r\n  margin-bottom: 10px;\r\n}\r\n#copyright a,\r\n#copyright a:link {\r\n  color: #808080;\r\n  text-decoration: none;\r\n  border-bottom: 1px solid #808080;\r\n  padding-bottom: 2px;\r\n}\r\n#copyright a:active {\r\n  color: #b3b3b3;\r\n}\r\n#copyright a:hover {\r\n  color: #b3b3b3;\r\n  border-bottom: 1px solid #b3b3b3;\r\n  padding-bottom: 4px;\r\n}\r\n.instructions {\r\n  display: inline-block;\r\n  margin: 5px 0;\r\n  font-size: 16px;\r\n}\r\n@-webkit-keyframes spin {\r\n  from {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n  to {\r\n    -webkit-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n@keyframes spin {\r\n  from {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n  to {\r\n    -webkit-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/bottle/bottle.component.html":
/*!**********************************************!*\
  !*** ./src/app/bottle/bottle.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"{{color}} content\">\n  <div class=\"progress\">\n    <div class=\"inner\">\n      <div class=\"percent label\"><span>{{label}}</span></div>\n      <div class=\"percent\"><span>{{value}}</span>%</div>\n      <div class=\"water\" [ngStyle]=\"{'top':(100-value)+'%'}\" ></div>\n      <div class=\"glare\"></div>\n      <div class=\"glare glare2\"></div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/bottle/bottle.component.ts":
/*!********************************************!*\
  !*** ./src/app/bottle/bottle.component.ts ***!
  \********************************************/
/*! exports provided: BottleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottleComponent", function() { return BottleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BottleComponent = /** @class */ (function () {
    function BottleComponent() {
        this.color = 'green';
        this.pRadioChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onModelChange = function () { };
        this.onTouchedCallback = function () { };
        this.onChangeCallback = function () { };
    }
    BottleComponent_1 = BottleComponent;
    BottleComponent.prototype.writeValue = function (value) {
        if (value !== this.value) {
            this.value = value;
        }
    };
    BottleComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    BottleComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    BottleComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BottleComponent.prototype, "label", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BottleComponent.prototype, "color", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], BottleComponent.prototype, "value", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('rb'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BottleComponent.prototype, "inputViewChild", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], BottleComponent.prototype, "pRadioChange", void 0);
    BottleComponent = BottleComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bottle',
            template: __webpack_require__(/*! ./bottle.component.html */ "./src/app/bottle/bottle.component.html"),
            styles: [__webpack_require__(/*! ./bottle.component.css */ "./src/app/bottle/bottle.component.css")],
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return BottleComponent_1; }),
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [])
    ], BottleComponent);
    return BottleComponent;
    var BottleComponent_1;
}());



/***/ }),

/***/ "./src/app/bottle/bottle.ts":
/*!**********************************!*\
  !*** ./src/app/bottle/bottle.ts ***!
  \**********************************/
/*! exports provided: Bottle, Color */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bottle", function() { return Bottle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return Color; });
var Bottle = /** @class */ (function () {
    function Bottle() {
        this._value = 0;
    }
    Object.defineProperty(Bottle.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._color = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bottle.prototype, "label", {
        get: function () {
            return this._label;
        },
        set: function (value) {
            this._label = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bottle.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    return Bottle;
}());

var Color;
(function (Color) {
    Color["green"] = "green";
    Color["orange"] = "orange";
    Color["red"] = "red";
})(Color || (Color = {}));


/***/ }),

/***/ "./src/app/chart/ChartData.ts":
/*!************************************!*\
  !*** ./src/app/chart/ChartData.ts ***!
  \************************************/
/*! exports provided: ChartData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartData", function() { return ChartData; });
var ChartData = /** @class */ (function () {
    function ChartData() {
    }
    return ChartData;
}());



/***/ }),

/***/ "./src/app/chart/chart.component.css":
/*!*******************************************!*\
  !*** ./src/app/chart/chart.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/chart/chart.component.html":
/*!********************************************!*\
  !*** ./src/app/chart/chart.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-accent-info\">\n  <div class=\"card-body\">\n    <h4 class=\"card-title\">最近50天酱料食用量(ml)</h4>\n    <div class=\"mt-4\">\n        <div echarts [options]=\"options\" class=\"demo-chart\"></div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/chart/chart.component.ts":
/*!******************************************!*\
  !*** ./src/app/chart/chart.component.ts ***!
  \******************************************/
/*! exports provided: ChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartComponent", function() { return ChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChartComponent = /** @class */ (function () {
    function ChartComponent() {
        this.innerValue = [];
        this.onTouchedCallback = function () { };
        this.onChangeCallback = function () { };
    }
    ChartComponent_1 = ChartComponent;
    Object.defineProperty(ChartComponent.prototype, "value", {
        get: function () {
            return this.innerValue;
        },
        set: function (v) {
            if (v !== this.innerValue) {
                this.innerValue = v;
                this.onChangeCallback(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    ChartComponent.prototype.writeValue = function (value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
        if (this.innerValue) {
            this.ngOnInit();
        }
    };
    ChartComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    ChartComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    ChartComponent.prototype.ngOnInit = function () {
        var xAxisData = [];
        var data1 = [];
        var data2 = [];
        for (var i = 0; i < 50; i++) {
            var day = new Date();
            day.setDate(day.getDate() - (50 - i));
            xAxisData.push((day.getMonth() + 1) + '-' + day.getDate());
            data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
            data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
        }
        this.options = {
            legend: {
                data: [],
                align: 'left'
            },
            tooltip: {},
            xAxis: {
                data: xAxisData,
                silent: false,
                splitLine: {
                    show: false
                }
            },
            yAxis: {},
            series: [],
            animationEasing: 'elasticOut',
            animationDelayUpdate: function (idx) {
                return idx * 5;
            }
        };
        this.drawData();
    };
    ChartComponent.prototype.drawData = function () {
        for (var _i = 0, _a = this.innerValue; _i < _a.length; _i++) {
            var data = _a[_i];
            this.options.legend.data.push(data.name);
            this.options.series.push({
                name: data.name,
                type: 'bar',
                data: data.data,
                animationDelay: function (idx) {
                    return idx * 10;
                }
            });
        }
    };
    ChartComponent = ChartComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chart',
            template: __webpack_require__(/*! ./chart.component.html */ "./src/app/chart/chart.component.html"),
            styles: [__webpack_require__(/*! ./chart.component.css */ "./src/app/chart/chart.component.css")],
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return ChartComponent_1; }),
                    multi: true
                }
            ],
        }),
        __metadata("design:paramtypes", [])
    ], ChartComponent);
    return ChartComponent;
    var ChartComponent_1;
}());



/***/ }),

/***/ "./src/app/config-detail/config-detail.component.css":
/*!***********************************************************!*\
  !*** ./src/app/config-detail/config-detail.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table{\r\n  width:100%;\r\n}\r\ntable tr td:nth-child(1) {\r\n  width:50px;\r\n  text-align:right;\r\n}\r\ntable tr td:nth-child(3) {\r\n  width:50px;\r\n  text-align:right;\r\n}\r\n.left{\r\n  margin-left: 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/config-detail/config-detail.component.html":
/*!************************************************************!*\
  !*** ./src/app/config-detail/config-detail.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ons-page>\n  <ons-toolbar>\n    <div class=\"left\" [routerLink]=\"'/config'\" routerLinkActive='active'>&lt;</div>\n    <div class=\"center\">新增酱料配置</div>\n  </ons-toolbar>\n  <div class=\"content\" style=\"background: white;\">\n    <ons-card>\n      <ons-input placeholder=\"名称\" [(value)]=\"value.name\" style=\"width:100%\"></ons-input>\n    </ons-card>\n\n    <ons-list modifier=\"inset\">\n      <ons-list-item>\n        <div class=\"title\">配比</div>\n        <table>\n          <tr *ngFor=\"let name of bottleSet; let i = index\">\n            <td>{{name}}</td>\n            <td><ons-range modifier=\"material\" [(value)]=\"value.values[i]\" style=\"width:100%\"></ons-range></td>\n            <td>{{value.values[i]}}ml</td>\n          </tr>\n        </table>\n      </ons-list-item>\n      <ons-list-item modifier=\"longdivider\">自动混合酱料\n        <div class=\"right\">\n          <ons-switch [value]=\"value.mix\"></ons-switch>\n        </div>\n      </ons-list-item>\n    </ons-list>\n    <ons-card>\n      <ons-button style=\"width:100%;margin-bottom: 10px\" (click)=\"save()\" [disabled]=\"!value.name\">保存</ons-button>\n    </ons-card>\n  </div>\n\n</ons-page>\n"

/***/ }),

/***/ "./src/app/config-detail/config-detail.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/config-detail/config-detail.component.ts ***!
  \**********************************************************/
/*! exports provided: ConfigDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigDetailComponent", function() { return ConfigDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _configDetail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configDetail */ "./src/app/config-detail/configDetail.ts");
/* harmony import */ var onsenui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! onsenui */ "./node_modules/onsenui/js/onsenui.js");
/* harmony import */ var onsenui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(onsenui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _mock_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mock.service */ "./src/app/mock.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ConfigDetailComponent = /** @class */ (function () {
    function ConfigDetailComponent(route) {
        var _this = this;
        this.route = route;
        this.bottleSet = _configDetail__WEBPACK_IMPORTED_MODULE_1__["ConfigDetail"].BottleSet;
        this.cloudConfigs = _mock_service__WEBPACK_IMPORTED_MODULE_4__["MockService"].getCloudConfigs();
        this.route.queryParams.subscribe(function (queryParams) {
            var id = queryParams.id;
            if (id) {
                _this.value = _this.cloudConfigs[id];
                _this.value.id = id;
            }
            else {
                _this.value = new _configDetail__WEBPACK_IMPORTED_MODULE_1__["ConfigDetail"]();
            }
        });
    }
    ConfigDetailComponent.prototype.ngOnInit = function () {
    };
    ConfigDetailComponent.prototype.save = function () {
        if (!this.value.id) {
            this.cloudConfigs.push(this.value);
            this.value.id = this.cloudConfigs.length;
        }
        onsenui__WEBPACK_IMPORTED_MODULE_2__["notification"].toast('保存成功!', { timeout: 2000 });
    };
    ConfigDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-config-detail',
            template: __webpack_require__(/*! ./config-detail.component.html */ "./src/app/config-detail/config-detail.component.html"),
            styles: [__webpack_require__(/*! ./config-detail.component.css */ "./src/app/config-detail/config-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ConfigDetailComponent);
    return ConfigDetailComponent;
}());



/***/ }),

/***/ "./src/app/config-detail/configDetail.ts":
/*!***********************************************!*\
  !*** ./src/app/config-detail/configDetail.ts ***!
  \***********************************************/
/*! exports provided: ConfigDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigDetail", function() { return ConfigDetail; });
var ConfigDetail = /** @class */ (function () {
    function ConfigDetail() {
        this._name = '';
        this._values = [0, 0, 0, 0];
        this._mix = false;
    }
    Object.defineProperty(ConfigDetail.prototype, "mix", {
        get: function () {
            return this._mix;
        },
        set: function (value) {
            this._mix = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigDetail.prototype, "values", {
        get: function () {
            return this._values;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigDetail.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    ConfigDetail.BottleSet = ['酱油', '醋', '香油', '料酒'];
    return ConfigDetail;
}());



/***/ }),

/***/ "./src/app/config/config.component.css":
/*!*********************************************!*\
  !*** ./src/app/config/config.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ons-list{\r\n  margin-top: 10px;\r\n}\r\nons-list-header{\r\n  width: 100%;\r\n}\r\n.right-btn{\r\n  /*position: absolute;*/\r\n  /*top: 0;*/\r\n  /*right: 0;*/\r\n  /*margin-top: 5px;*/\r\n  /*margin-right: 15px;*/\r\n\r\n}\r\n.right-btn ons-fab{\r\n\r\n  font-size: 20px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/config/config.component.html":
/*!**********************************************!*\
  !*** ./src/app/config/config.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ons-page>\r\n\r\n  <ons-toolbar>\r\n    <div class=\"center\">偏好配置</div>\r\n  </ons-toolbar>\r\n\r\n  <ons-list modifier=\"inset\">\r\n    <ons-list-item style=\"background-color: #eee;\">智能设备端配置 同步于 {{now|date:'yyyy-MM-dd HH:mm:ss'}}</ons-list-item>\r\n    <ons-list-item *ngFor=\"let config of iotConfigs; let i = index\" modifier=\"longdivider\">{{i}}: {{config.name||'(空)'}}</ons-list-item>\r\n  </ons-list>\r\n  <ons-list modifier=\"inset\">\r\n    <ons-list-item style=\"background-color: #eee;\" modifier=\"nodivider\"><div class=\"center\">云端存储配置</div>\r\n      <div class=\"right\">\r\n        <ons-fab modifier=\"mini\" [routerLink]=\"'/configDetail'\" routerLinkActive='active'><ons-icon icon=\"fa-plus\"></ons-icon></ons-fab>\r\n      </div>\r\n    </ons-list-item>\r\n    <ons-list-item *ngFor=\"let config of cloudConfigs; let i = index\" modifier=\"longdivider\"\r\n                   [routerLink]=\"'/configDetail'\" [queryParams]=\"{id:i}\">\r\n      {{config.name||'无名'}}\r\n      <div class=\"right\">\r\n        <ons-button (click)=\"showActionSheet(i, $event)\">上传</ons-button>\r\n      </div>\r\n    </ons-list-item>\r\n  </ons-list>\r\n\r\n</ons-page>\r\n"

/***/ }),

/***/ "./src/app/config/config.component.ts":
/*!********************************************!*\
  !*** ./src/app/config/config.component.ts ***!
  \********************************************/
/*! exports provided: ConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigComponent", function() { return ConfigComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mock.service */ "./src/app/mock.service.ts");
/* harmony import */ var onsenui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! onsenui */ "./node_modules/onsenui/js/onsenui.js");
/* harmony import */ var onsenui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(onsenui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iot_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../iot.service */ "./src/app/iot.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConfigComponent = /** @class */ (function () {
    function ConfigComponent(iotService) {
        this.iotService = iotService;
        this.now = new Date();
        this.iotConfigs = _mock_service__WEBPACK_IMPORTED_MODULE_1__["MockService"].getIotConfigs();
        this.cloudConfigs = _mock_service__WEBPACK_IMPORTED_MODULE_1__["MockService"].getCloudConfigs();
    }
    ConfigComponent.prototype.ngOnInit = function () {
    };
    ConfigComponent.prototype.showActionSheet = function (id, event) {
        var that = this;
        event.stopPropagation();
        var slotArr = this.iotConfigs.map(function (item, index) {
            var name = item.name;
            if (name) {
                return {
                    label: index + ': ' + name,
                    modifier: 'destructive'
                };
            }
            else {
                return index + ': (空)';
            }
        });
        slotArr.push({
            label: '取消',
            icon: 'md-close'
        });
        onsenui__WEBPACK_IMPORTED_MODULE_2__["openActionSheet"]({
            title: '请选择编号:',
            cancelable: true,
            buttons: slotArr,
            animation: 'default',
            callback: function (i) { that.checkAndUpdate(id, i); }
        });
    };
    ConfigComponent.prototype.checkAndUpdate = function (id, to) {
        var _this = this;
        console.log(id + ',' + to);
        if (to > 7) {
            return;
        }
        if (this.iotConfigs[to].name) {
            onsenui__WEBPACK_IMPORTED_MODULE_2__["notification"].confirm({
                message: "\u7F16\u53F7" + to + "\u5DF2\u5B58\u5728\u914D\u7F6E:" + this.iotConfigs[to].name + ",\u786E\u5B9A\u8986\u76D6\u4E3A" + this.cloudConfigs[id].name + "\u5417?",
                title: '注意',
                cancelable: true,
                callback: function (i) {
                    if (i !== -1) {
                        _this.update(id, to);
                    }
                }
            });
        }
        else {
            this.update(id, to);
        }
    };
    ConfigComponent.prototype.update = function (id, to) {
        var _this = this;
        var cloudCook = this.cloudConfigs[id];
        cloudCook.order = to;
        this.iotService.postCook(cloudCook).subscribe(function (data) {
            console.log(data);
            _this.iotConfigs[to] = cloudCook;
            onsenui__WEBPACK_IMPORTED_MODULE_2__["notification"].toast('上传成功!', { timeout: 2000 });
            _this.now = new Date();
        }, function (error) {
            onsenui__WEBPACK_IMPORTED_MODULE_2__["notification"].toast('上传失败!', { timeout: 2000 });
            console.error(error);
        });
    };
    ConfigComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-config',
            template: __webpack_require__(/*! ./config.component.html */ "./src/app/config/config.component.html"),
            styles: [__webpack_require__(/*! ./config.component.css */ "./src/app/config/config.component.css")]
        }),
        __metadata("design:paramtypes", [_iot_service__WEBPACK_IMPORTED_MODULE_3__["IotService"]])
    ], ConfigComponent);
    return ConfigComponent;
}());



/***/ }),

/***/ "./src/app/cook/cook.component.css":
/*!*****************************************!*\
  !*** ./src/app/cook/cook.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table.dataintable {\r\n  margin-top:15px;\r\n  border-collapse:collapse;\r\n  /*border:1px solid #aaa;*/\r\n  width:100%;\r\n}\r\n\r\ntable.dataintable th {\r\n  vertical-align:baseline;\r\n  padding:5px 15px 5px 6px;\r\n  background-color:#3F3F3F;\r\n  /*border:1px solid #3F3F3F;*/\r\n  text-align:left;\r\n  color:#fff;\r\n}\r\n\r\ntable.dataintable td {\r\n  vertical-align:text-top;\r\n  padding:6px 15px 6px 6px;\r\n  /*border:1px solid #aaa;*/\r\n}\r\n\r\ntable.dataintable tr:nth-child(odd) {\r\n  background-color:#F5F5F5;\r\n}\r\n\r\ntable.dataintable tr:nth-child(even) {\r\n  background-color:#fff;\r\n}\r\n\r\ntable.dataintable tr td:nth-child(2) {\r\n  text-align:right;\r\n}\r\n\r\ntable.dataintable pre {\r\n  width:auto;\r\n  margin:0;\r\n  padding:0;\r\n  border:0;\r\n  background-color:transparent;\r\n}\r\n\r\ntable.dataintable p {margin:0 0 2px 0;}\r\n\r\n.content{\r\n  background-color: white !important;\r\n}\r\n\r\n.left{\r\n  margin-left: 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/cook/cook.component.html":
/*!******************************************!*\
  !*** ./src/app/cook/cook.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ons-page>\n  <ons-toolbar>\n    <div class=\"left\" [routerLink]=\"'/cookbook'\" routerLinkActive='active'>&lt;</div>\n    <div class=\"center\">钟水饺的饺子蘸料</div>\n  </ons-toolbar>\n\n\n  <div class=\"content\" style=\"background: white;\">\n    <img style=\"width:100%\" src=\"../../img/jiaozi.jpg\" alt=\"\">\n    <ons-card>\n    <div class=\"title\">钟水饺的饺子蘸料</div>\n    第一次在张妈妈川菜馆吃钟水饺就被红油甜辣口迷住了，回来后也查了不少配方，复制酱油什么的好麻烦……\n    直到有天夜里特别想这口，又觉得跑去安定门太麻烦，里自己试着弄了下蘸料，居然意外的好吃，而且好简单！\n    (￣_,￣ ),虽然跟钟水饺还是不一样，但是，我觉得好吃啊！\n    </ons-card>\n    <ons-card>\n      <div class=\"title\">配料</div>\n    <table class=\"dataintable\">\n      <tbody>\n\n      <tr>\n        <td>酱油</td>\n        <td>100ml</td>\n      </tr>\n\n      <tr>\n        <td>醋</td>\n        <td>40ml</td>\n      </tr>\n\n      <tr>\n        <td>芝麻油</td>\n        <td>10nl</td>\n      </tr>\n\n      <tr>\n        <td>糖</td>\n        <td>20g</td>\n      </tr>\n\n      <tr>\n        <td>蒜</td>\n        <td>50g</td>\n      </tr>\n      </tbody></table>\n    </ons-card>\n    <ons-card>\n      <ons-button style=\"width:100%;margin-bottom: 10px\" (click)=\"toastStart()\">立刻开始</ons-button>\n      <ons-button style=\"width:100%\" (click)=\"toastSync()\">添加到收藏</ons-button>\n    </ons-card>\n  </div>\n\n</ons-page>\n\n"

/***/ }),

/***/ "./src/app/cook/cook.component.ts":
/*!****************************************!*\
  !*** ./src/app/cook/cook.component.ts ***!
  \****************************************/
/*! exports provided: CookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookComponent", function() { return CookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var onsenui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! onsenui */ "./node_modules/onsenui/js/onsenui.js");
/* harmony import */ var onsenui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(onsenui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iot_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../iot.service */ "./src/app/iot.service.ts");
/* harmony import */ var _mock_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mock.service */ "./src/app/mock.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CookComponent = /** @class */ (function () {
    function CookComponent(iotService) {
        this.iotService = iotService;
        this.cloudConfigs = _mock_service__WEBPACK_IMPORTED_MODULE_3__["MockService"].getCloudConfigs();
        this.iotConfigs = _mock_service__WEBPACK_IMPORTED_MODULE_3__["MockService"].getIotConfigs();
        this.cook = { name: '钟水饺的饺子蘸料', order: 0, values: [100, 40, 10, 0] };
    }
    CookComponent.prototype.ngOnInit = function () {
    };
    CookComponent.prototype.toastStart = function () {
        var _this = this;
        this.iotService.postCook(this.cook).subscribe(function (result) {
            console.log(result);
            _this.iotConfigs[0] = _this.cook;
            onsenui__WEBPACK_IMPORTED_MODULE_1__["notification"].toast('已同步至终端,在臻美味智能酱料罐上按开始键后即出蘸料!', { timeout: 3000 });
        }, function (error) {
            onsenui__WEBPACK_IMPORTED_MODULE_1__["notification"].toast('同步失败!', { timeout: 2000 });
            console.error(error);
        });
    };
    CookComponent.prototype.toastSync = function () {
        if (!this.cook.id) {
            this.cloudConfigs.push(this.cook);
            this.cook.id = this.cloudConfigs.length;
        }
        onsenui__WEBPACK_IMPORTED_MODULE_1__["notification"].toast('搜藏成功!', { timeout: 2000 });
    };
    CookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cook',
            template: __webpack_require__(/*! ./cook.component.html */ "./src/app/cook/cook.component.html"),
            styles: [__webpack_require__(/*! ./cook.component.css */ "./src/app/cook/cook.component.css")]
        }),
        __metadata("design:paramtypes", [_iot_service__WEBPACK_IMPORTED_MODULE_2__["IotService"]])
    ], CookComponent);
    return CookComponent;
}());



/***/ }),

/***/ "./src/app/cookbook/cookbook.component.css":
/*!*************************************************!*\
  !*** ./src/app/cookbook/cookbook.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cookbook/cookbook.component.html":
/*!**************************************************!*\
  !*** ./src/app/cookbook/cookbook.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img style=\"width:100%\" [src]=\"'../../img/cookbook2.jpg'\" usemap=\"#cookbookMap\">\n\n<map name=\"cookbookMap\">\n\n  <area shape=\"rect\" coords=\"11,158,236,504\" [routerLink]=\"'/cook'\" routerLinkActive='active'>\n\n</map>\n"

/***/ }),

/***/ "./src/app/cookbook/cookbook.component.ts":
/*!************************************************!*\
  !*** ./src/app/cookbook/cookbook.component.ts ***!
  \************************************************/
/*! exports provided: CookbookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookbookComponent", function() { return CookbookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CookbookComponent = /** @class */ (function () {
    function CookbookComponent() {
    }
    CookbookComponent.prototype.ngOnInit = function () {
    };
    CookbookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cookbook',
            template: __webpack_require__(/*! ./cookbook.component.html */ "./src/app/cookbook/cookbook.component.html"),
            styles: [__webpack_require__(/*! ./cookbook.component.css */ "./src/app/cookbook/cookbook.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CookbookComponent);
    return CookbookComponent;
}());



/***/ }),

/***/ "./src/app/device/device.component.css":
/*!*********************************************!*\
  !*** ./src/app/device/device.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/device/device.component.html":
/*!**********************************************!*\
  !*** ./src/app/device/device.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ons-page>\n  <ons-toolbar>\n    <div class=\"center\">酱料偏好配置</div>\n  </ons-toolbar>\n  <ons-list modifier=\"inset\">\n    <ons-list-header>智能设备端配置 同步于 {{now|date:'yyyy-MM-dd HH:mm:ss'}}</ons-list-header>\n    <ons-list-item modifier=\"longdivider\">老婆的饺子蘸料</ons-list-item>\n    <ons-list-item modifier=\"longdivider\">北京烤鸭完美组合</ons-list-item>\n  </ons-list>\n  <ons-list modifier=\"inset\">\n    <ons-list-header>云端存储配置</ons-list-header>\n    <ons-list-item modifier=\"longdivider\">老婆的饺子蘸料</ons-list-item>\n    <ons-list-item modifier=\"longdivider\">北京烤鸭完美组合</ons-list-item>\n  </ons-list>\n</ons-page>\n"

/***/ }),

/***/ "./src/app/device/device.component.ts":
/*!********************************************!*\
  !*** ./src/app/device/device.component.ts ***!
  \********************************************/
/*! exports provided: DeviceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceComponent", function() { return DeviceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DeviceComponent = /** @class */ (function () {
    function DeviceComponent() {
        this.now = new Date();
    }
    DeviceComponent.prototype.ngOnInit = function () {
    };
    DeviceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-device',
            template: __webpack_require__(/*! ./device.component.html */ "./src/app/device/device.component.html"),
            styles: [__webpack_require__(/*! ./device.component.css */ "./src/app/device/device.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DeviceComponent);
    return DeviceComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg{\r\n  position: absolute;\r\n  top:0;\r\n  left:0;\r\n  height:100%;\r\n  width: 100%;\r\n  border: solid 1px;\r\n  z-index: -1;\r\n  background-image: url('sauceX-bg.jpg');\r\n  background-size:100% 100%;\r\n}\r\n.main-page{\r\n  background-color: rgba(255,255,255,0.4);\r\n}\r\nons-page.page--material__background.page__background{\r\n  background-color: rgba(255,255,255,0);\r\n}\r\n.bottle-grid{\r\n\r\n  margin: 0; /* 与外界元素的距离为0 */\r\n  width: 100%; /* 宽度根据元素内容调整 */\r\n  padding: 0; /* 与内部元素的距离为0 */\r\n}\r\n.bottle-grid ul{\r\n  width: 100%;\r\n  padding: 30px 0 0 0;\r\n  list-style:none; /* 去掉ul前面的符号 */\r\n}\r\n.bottle-grid li{\r\n  float:left; /* 向左漂移，将竖排变为横排 */\r\n  width: 49%;\r\n  padding-top:50%;\r\n  text-align: center;\r\n  position: relative;\r\n}\r\n.bottle-grid li app-bottle{\r\n  position: absolute;\r\n  width: 100%;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg\"></div>\n<ons-page [transparent]=\"true\" style=\"opacity: 0.8;\" class=\"main-page\">\n  <ons-toolbar>\n    <div class=\"center\">信息统计</div>\n  </ons-toolbar>\n  <ons-list >\n    <ons-list-title>更新于 {{now|date:'yyyy-MM-dd hh:mm:ss'}}</ons-list-title>\n    <ons-list-item>\n      <div class=\"bottle-grid\">\n        <ul>\n          <li *ngFor=\"let bottle of bottles; let i = index\"><app-bottle [value]=\"bottle.value\" [color]=\"bottle.color\" [label]=\"bottle.label\"></app-bottle></li>\n        </ul>\n      </div>\n    </ons-list-item>\n  </ons-list>\n  <app-chart [(ngModel)]=\"chartDataArr\"></app-chart>\n  <div class=\"card card-accent-info\">\n    <div class=\"card-body\">\n      <div class=\"mt-4\">\n      <div echarts [options]=\"optionsSalt\" class=\"demo-chart\"></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"card card-accent-info\">\n    <div class=\"card-body\">\n      <div class=\"mt-4\">\n        <div echarts [options]=\"optionsDiet\" class=\"demo-chart\"></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"card card-accent-info\">\n    <div class=\"card-body\">\n      <h4 class=\"card-title\">健康饮食指导建议</h4>\n      <div class=\"mt-4\">\n        您摄入的碳水化合物比例过高, 容易引起肥胖和营养不良。建议适当增加蛋奶鱼肉等富含蛋白质的食物。钠盐的摄入量在合理范围内。如果从事体育锻炼或体力劳动, 可适当增加钠盐摄入。\n      </div>\n    </div>\n  </div>\n</ons-page>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bottle_bottle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bottle/bottle */ "./src/app/bottle/bottle.ts");
/* harmony import */ var _chart_ChartData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chart/ChartData */ "./src/app/chart/ChartData.ts");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! echarts */ "./node_modules/echarts/dist/echarts.min.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(echarts__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.now = new Date();
        this.bottles = [
            { 'label': '酱油', 'color': _bottle_bottle__WEBPACK_IMPORTED_MODULE_1__["Color"].orange, 'value': 22 },
            { 'label': '醋', 'color': _bottle_bottle__WEBPACK_IMPORTED_MODULE_1__["Color"].green, 'value': 55 },
            { 'label': '香油', 'color': _bottle_bottle__WEBPACK_IMPORTED_MODULE_1__["Color"].red, 'value': 75 },
            { 'label': '料酒', 'color': _bottle_bottle__WEBPACK_IMPORTED_MODULE_1__["Color"].orange, 'value': 92 }
        ];
        this.chartDataArr = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.chartData_01 = new _chart_ChartData__WEBPACK_IMPORTED_MODULE_2__["ChartData"]();
        this.chartData_01.name = '酱油01';
        this.chartData_01.data = [];
        for (var i = 0; i < 50; i++) {
            this.chartData_01.data.push(Math.floor(Math.random() * 120));
        }
        this.chartData_02 = new _chart_ChartData__WEBPACK_IMPORTED_MODULE_2__["ChartData"]();
        this.chartData_02.name = '醋02';
        this.chartData_02.data = [];
        for (var i = 0; i < 50; i++) {
            this.chartData_02.data.push(Math.floor(Math.random() * 70));
        }
        this.chartDataArr.push(this.chartData_01);
        this.chartDataArr.push(this.chartData_02);
        console.log(JSON.stringify(this.chartDataArr));
        var xAxisData = [];
        for (var i = 0; i < 20; i++) {
            var day = new Date();
            day.setDate(day.getDate() - (20 - i));
            xAxisData.push((day.getMonth() + 1) + '-' + day.getDate());
        }
        this.optionsSalt = {
            title: {
                text: '最近20天钠盐摄入量(10mg)'
            },
            xAxis: {
                data: xAxisData,
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                z: 10
            },
            yAxis: {
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#999'
                    }
                }
            },
            dataZoom: [
                {
                    type: 'inside'
                }
            ],
            series: [
                {
                    type: 'bar',
                    itemStyle: {
                        normal: { color: 'rgba(0,0,0,0.05)' }
                    },
                    barGap: '-100%',
                    barCategoryGap: '40%',
                    data: [],
                    animation: false
                },
                {
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            color: new echarts__WEBPACK_IMPORTED_MODULE_3__["graphic"].LinearGradient(0, 0, 0, 1, [
                                { offset: 0, color: '#83bff6' },
                                { offset: 0.5, color: '#188df0' },
                                { offset: 1, color: '#188df0' }
                            ])
                        },
                        emphasis: {
                            color: new echarts__WEBPACK_IMPORTED_MODULE_3__["graphic"].LinearGradient(0, 0, 0, 1, [
                                { offset: 0, color: '#2378f7' },
                                { offset: 0.7, color: '#2378f7' },
                                { offset: 1, color: '#83bff6' }
                            ])
                        }
                    },
                    data: [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220]
                }
            ]
        };
        this.optionsDiet = {
            title: {
                text: '营养物质摄入比例',
                subtext: '近5日平均值',
                x: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
                x: 'center',
                y: 'bottom',
                data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
            },
            calculable: true,
            series: [
                {
                    name: 'area',
                    type: 'pie',
                    radius: [30, 110],
                    roseType: 'area',
                    data: [
                        { value: 500, name: '碳水化合物' },
                        { value: 25, name: '脂肪' },
                        { value: 15, name: '蛋白质' },
                    ]
                }
            ]
        };
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/iot.service.ts":
/*!********************************!*\
  !*** ./src/app/iot.service.ts ***!
  \********************************/
/*! exports provided: IotService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IotService", function() { return IotService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IotService = /** @class */ (function () {
    function IotService(http) {
        this.http = http;
        this.iotUrl = 'https://test.miniqiang.com'; // URL to web api
    }
    IotService.prototype.postCook = function (cook) {
        var formData = new FormData();
        formData.append('Order', cook.order);
        formData.append('Name', cook.name);
        formData.append('condiment1', cook.values[0]);
        formData.append('condiment2', cook.values[1]);
        formData.append('condiment3', cook.values[2]);
        formData.append('condiment4', cook.values[3]);
        return this.http.post(this.iotUrl, formData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () { return console.log("postCook"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('postCook', '')));
    };
    IotService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        console.log(result);
        return function (error) {
            console.log("222");
            // TODO: send the error to remote logging infrastructure
            console.error('got error while ' + operation);
            console.error(error); // log to console instead
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    IotService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], IotService);
    return IotService;
}());



/***/ }),

/***/ "./src/app/market/market.component.css":
/*!*********************************************!*\
  !*** ./src/app/market/market.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/market/market.component.html":
/*!**********************************************!*\
  !*** ./src/app/market/market.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ons-page>\n  <ons-toolbar>\n    <div class=\"center\">商城</div>\n  </ons-toolbar>\n  <img style=\"width:100%\" [src]=\"'../../img/market.PNG'\"/>\n</ons-page>\n"

/***/ }),

/***/ "./src/app/market/market.component.ts":
/*!********************************************!*\
  !*** ./src/app/market/market.component.ts ***!
  \********************************************/
/*! exports provided: MarketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketComponent", function() { return MarketComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MarketComponent = /** @class */ (function () {
    function MarketComponent() {
    }
    MarketComponent.prototype.ngOnInit = function () {
    };
    MarketComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-market',
            template: __webpack_require__(/*! ./market.component.html */ "./src/app/market/market.component.html"),
            styles: [__webpack_require__(/*! ./market.component.css */ "./src/app/market/market.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MarketComponent);
    return MarketComponent;
}());



/***/ }),

/***/ "./src/app/mock.service.ts":
/*!*********************************!*\
  !*** ./src/app/mock.service.ts ***!
  \*********************************/
/*! exports provided: MockService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockService", function() { return MockService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MockService = /** @class */ (function () {
    function MockService() {
    }
    MockService_1 = MockService;
    MockService.getIotConfigs = function () {
        return MockService_1.iotConfigs;
    };
    MockService.getCloudConfigs = function () {
        return MockService_1.cloudConfigs;
    };
    MockService.iotConfigs = [
        { name: '默认配置', values: [20, 5, 0, 0] },
        { name: '老婆的饺子蘸料', values: [33, 35, 2, 2] },
        { name: '北京烤鸭完美组合', values: [33, 2, 2, 0] },
        { name: '某种神秘酱料', values: [69, 69, 69, 69] },
        {},
        {},
        {},
        {},
    ];
    MockService.cloudConfigs = [
        { name: '老婆的饺子蘸料', values: [33, 35, 2, 2] },
        { name: '北京烤鸭完美组合', values: [33, 2, 2, 0] },
        { name: '五香牛肉-网红推荐', values: [20, 0, 4, 4] },
        { name: '健康饮食推荐', values: [1, 1, 1, 1] },
    ];
    MockService = MockService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], MockService);
    return MockService;
    var MockService_1;
}());



/***/ }),

/***/ "./src/app/settings/settings.component.css":
/*!*************************************************!*\
  !*** ./src/app/settings/settings.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top-bar{\r\n  background-color: black;\r\n  text-align: center;\r\n  height: 24px;\r\n  font-size: 16px;\r\n  line-height: 24px;\r\n  color: #ffffff;\r\n}\r\n.list-item__thumbnail {\r\n  width: 80px;\r\n  height: 80px;\r\n  margin: 10px;\r\n}\r\n.icon-grid{\r\n\r\n  margin: 0; /* 与外界元素的距离为0 */\r\n  width: 100%; /* 宽度根据元素内容调整 */\r\n  padding: 0; /* 与内部元素的距离为0 */\r\n}\r\n.icon-grid ul{\r\n  padding: 30px 0 0 0;\r\n  list-style:none; /* 去掉ul前面的符号 */\r\n}\r\n.icon-grid li{\r\n  float:left; /* 向左漂移，将竖排变为横排 */\r\n  width: 33%;\r\n  height: 120px;\r\n  text-align: center;\r\n}\r\n.icon-grid ons-icon{\r\n  border: 2px solid;\r\n  width: 50px;\r\n  height: 50px;\r\n  font-size: 30px;\r\n  line-height: 50px;\r\n  border-radius: 50%;\r\n}\r\n.icon-grid span{\r\n  font-size: 14px;\r\n  line-height: 30px;\r\n}\r\n.ib1{\r\n  border-color: deepskyblue;\r\n  color: deepskyblue;\r\n}\r\n.ib2{\r\n  border-color: forestgreen;\r\n  color: forestgreen;\r\n}\r\n.ib3{\r\n  border-color: darkkhaki;\r\n  color: darkkhaki;\r\n}\r\n.ib4{\r\n  border-color: darkslateblue;\r\n  color: darkslateblue;\r\n}\r\n.ib5{\r\n  border-color: crimson;\r\n  color: crimson;\r\n}\r\n.ib6{\r\n  border-color: dodgerblue;\r\n  color: dodgerblue;\r\n}\r\n.ib7{\r\n  border-color: sienna;\r\n  color: deepskyblue;\r\n}\r\n.ib8{\r\n  border-color: darkgreen;\r\n  color: darkgreen;\r\n}\r\n.ib9{\r\n  border-color: sienna;\r\n  color: sienna;\r\n}\r\n.bottom-bar{\r\n  text-align: center;\r\n  height: 24px;\r\n  font-size: 12px;\r\n  line-height: 24px;\r\n  color: #aaaaaa;\r\n}\r\n"

/***/ }),

/***/ "./src/app/settings/settings.component.html":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ons-page>\n  <ons-toolbar>\n    <div class=\"center\">我的设置</div>\n  </ons-toolbar>\n  <div class=\"content\">\n    <ons-list>\n      <ons-list-item style=\"background-color: #fafafa\">\n        <div class=\"left\">\n          <img class=\"list-item__thumbnail\" src=\"https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83erw4M6eiclcUhVahyQWV5pwe1O7HntiaR8Ilu4ibbb6Y0ymTU08c0icIJP1N2s1tkw9gamRHYUueWpqoQ/132\">\n        </div>\n        <br>\n        <div class=\"center\" style=\"background-size: 100% 0px;\">\n          <span class=\"list-item__title\" style=\"margin: 10px;\">吃货大佬  <ons-fab modifier=\"mini\"><ons-icon icon=\"fa-list\"></ons-icon></ons-fab></span>\n          <span class=\"list-item__subtitle\" style=\"margin: 10px;\"><ons-icon icon=\"fa-mobile\" size=\"24px\"></ons-icon> 手机号码: 188-8888-8888</span>\n        </div>\n      </ons-list-item>\n      <ons-list-item class=\"icon-grid\">\n        <ul>\n          <li><ons-icon class=\"ib1\" icon=\"fa-user\"></ons-icon><br><span>账号</span></li>\n          <li><ons-icon class=\"ib2\" icon=\"fa-cloud\"></ons-icon><br><span>云服务</span></li>\n          <li><ons-icon class=\"ib3\" icon=\"fa-comment\"></ons-icon><br><span>消息</span></li>\n          <li><ons-icon class=\"ib4\" icon=\"fa-info\"></ons-icon><br><span>关于</span></li>\n          <li><ons-icon class=\"ib5\" icon=\"question\"></ons-icon><br><span>帮助</span></li>\n          <li><ons-icon class=\"ib6\" icon=\"fa-cog\"></ons-icon><br><span>设置</span></li>\n          <li><ons-icon class=\"ib7\" icon=\"fa-headphones\"></ons-icon><br><span>客服</span></li>\n          <li><ons-icon class=\"ib8\" icon=\"fa-thumbs-up\"></ons-icon><br><span>推荐</span></li>\n          <li><ons-icon class=\"ib9\" icon=\"fa-sign-out\"></ons-icon><br><span>退出</span></li>\n        </ul>\n      </ons-list-item>\n    </ons-list>\n    <ons-bottom-toolbar class=\"bottom-bar\">\n      智能调料盒云服务 v0.0.1\n    </ons-bottom-toolbar>\n  </div>\n</ons-page>\n"

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsComponent = /** @class */ (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/statistics/statistics.component.css":
/*!*****************************************************!*\
  !*** ./src/app/statistics/statistics.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/statistics/statistics.component.html":
/*!******************************************************!*\
  !*** ./src/app/statistics/statistics.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ons-page>\n  <ons-toolbar>\n    <div class=\"center\">酱料食用统计</div>\n  </ons-toolbar>\n  <app-chart [(ngModel)]=\"chartDataArr\"></app-chart>\n</ons-page>\n"

/***/ }),

/***/ "./src/app/statistics/statistics.component.ts":
/*!****************************************************!*\
  !*** ./src/app/statistics/statistics.component.ts ***!
  \****************************************************/
/*! exports provided: StatisticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsComponent", function() { return StatisticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _chart_ChartData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chart/ChartData */ "./src/app/chart/ChartData.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StatisticsComponent = /** @class */ (function () {
    function StatisticsComponent() {
        this.chartDataArr = [];
    }
    StatisticsComponent.prototype.ngOnInit = function () {
        this.chartData_01 = new _chart_ChartData__WEBPACK_IMPORTED_MODULE_1__["ChartData"]();
        this.chartData_01.name = '酱油01';
        this.chartData_01.data = [];
        for (var i = 0; i < 50; i++) {
            this.chartData_01.data.push(Math.floor(Math.random() * 120));
        }
        this.chartData_02 = new _chart_ChartData__WEBPACK_IMPORTED_MODULE_1__["ChartData"]();
        this.chartData_02.name = '醋02';
        this.chartData_02.data = [];
        for (var i = 0; i < 50; i++) {
            this.chartData_02.data.push(Math.floor(Math.random() * 70));
        }
        this.chartDataArr.push(this.chartData_01);
        this.chartDataArr.push(this.chartData_02);
        console.log(JSON.stringify(this.chartDataArr));
    };
    StatisticsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-statistics',
            template: __webpack_require__(/*! ./statistics.component.html */ "./src/app/statistics/statistics.component.html"),
            styles: [__webpack_require__(/*! ./statistics.component.css */ "./src/app/statistics/statistics.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StatisticsComponent);
    return StatisticsComponent;
}());



/***/ }),

/***/ "./src/app/tabbar/tabbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/tabbar/tabbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-tabbar {\r\n  position: absolute;\r\n  top:0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n.tabbar {\r\n  text-align: center;\r\n  position: absolute;\r\n  left:0;\r\n  right: 0;\r\n  bottom: 0;\r\n  height: 49px;\r\n}\r\n.tabbar--material a.active {\r\n  /*background-color: #26a69a;*/\r\n}\r\n.tabbar:not(.tab-bar--material) a.active {\r\n  color: royalblue;\r\n}\r\nmain {\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 50px;\r\n  left: 0;\r\n  right: 0;\r\n  overflow: auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/tabbar/tabbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/tabbar/tabbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"tabbar\" [class.tabbar--material]=\"material\">\n  <label class=\"tabbar__item\" [class.tabbar--material__item]=\"material\" *ngFor=\"let tab of tabs; let i = index\">\n    <!-- <input type=\"radio\" label=\"tabbar\" [checked]=\"tab === selectedTab\"> -->\n    <a class=\"tabbar__button\" [class.tabbar--material__button]=\"material\" [routerLink]=\"[tab.path]\" routerLinkActive='active'>\n      <ng-template [ngIf]=\"tab.icon\">\n      <ons-icon class=\"ons-icon fa {{tab.icon}}\" size=\"24px\"></ons-icon><br>\n      </ng-template>\n      {{tab.label}}\n    </a>\n  </label>\n</nav>\n\n<main>\n  <router-outlet></router-outlet>\n</main>\n"

/***/ }),

/***/ "./src/app/tabbar/tabbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/tabbar/tabbar.component.ts ***!
  \********************************************/
/*! exports provided: TabbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabbarComponent", function() { return TabbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_onsenui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-onsenui */ "./node_modules/ngx-onsenui/ngx-onsenui.js");
/* harmony import */ var _device_device_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../device/device.component */ "./src/app/device/device.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabbarComponent = /** @class */ (function () {
    function TabbarComponent() {
        this.device = _device_device_component__WEBPACK_IMPORTED_MODULE_2__["DeviceComponent"];
        this.tabs = [
            { path: 'cookbook', label: '菜谱', },
            { path: 'home', label: '状态', },
            { path: 'config', label: 'config', icon: 'fa-plus', },
            { path: 'market', label: '商城', },
            { path: 'settings', label: '我的', },
        ];
        this.material = ngx_onsenui__WEBPACK_IMPORTED_MODULE_1__["onsPlatform"].isAndroid();
    }
    TabbarComponent.prototype.updateStyle = function (platform) {
        this.material = platform === 'ios';
    };
    TabbarComponent.prototype.ngOnInit = function () {
    };
    TabbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tabbar',
            template: __webpack_require__(/*! ./tabbar.component.html */ "./src/app/tabbar/tabbar.component.html"),
            styles: [__webpack_require__(/*! ./tabbar.component.css */ "./src/app/tabbar/tabbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TabbarComponent);
    return TabbarComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\github\SauceX\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map