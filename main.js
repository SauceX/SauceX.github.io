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
                _config_detail_config_detail_component__WEBPACK_IMPORTED_MODULE_18__["ConfigDetailComponent"]
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

module.exports = "* {\n  box-sizing: border-box;\n}\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  background-color: #1a1a1a;\n  font-family: sans-serif;\n  font-size: 15px;\n  color: #ccc;\n}\ninput[type=\"text\"] {\n  background-color: transparent;\n  margin-top: 30px;\n  border: 0;\n  border-bottom: solid 1px #8080ff;\n  text-align: center;\n  font-size: 20px;\n  color: #518bf0;\n  text-shadow: 0 0 3px #518bf0;\n  width: 45px;\n  display: inline-block;\n}\ninput:focus {\n  outline: 0;\n  border-bottom: dashed 1px #ff8080;\n}\ninput::-moz-selection {\n  color: #1a1a1a;\n  background-color: #c6e4ee;\n}\ninput::selection {\n  color: #1a1a1a;\n  background-color: #c6e4ee;\n}\n::-webkit-input-placeholder {\n  color: #7aa6f3;\n  text-shadow: 0 0 3px #7aa6f3;\n}\n:-moz-placeholder {\n  color: #7aa6f3;\n  text-shadow: 0 0 3px #7aa6f3;\n}\n::-moz-placeholder {\n  color: #7aa6f3;\n  text-shadow: 0 0 3px #7aa6f3;\n}\n:-ms-input-placeholder {\n  color: #7aa6f3;\n  text-shadow: 0 0 3px #7aa6f3;\n}\n.wrapper {\n\n  display: flex;\n  -o-box-align: center;\n  align-items: center;\n  -o-box-pack: center;\n  justify-content: center;\n  -o-box-orient: vertical;\n  flex-direction: column;\n  height: 100%;\n}\n.content {\n  width: 100%;\n  height: 100%;\n  display: -webkit-flex;\n  -webkit-justify-content: center;\n}\n.green {\n  margin-top: 15px;\n}\n.green .progress,\n.red .progress,\n.orange .progress {\n  position: relative;\n  border-radius: 7%;\n  width: 52%;\n  padding-top: 70%;\n  height: 0;\n}\n.green .progress {\n  border: 2px solid #53fc53;\n}\n.green .progress {\n  box-shadow: 0 0 20px #029502;\n}\n.green .progress,\n.red .progress,\n.orange .progress {\n  transition: all 1s ease;\n}\n.green .progress .inner,\n.red .progress .inner,\n.orange .progress .inner {\n  position: absolute;\n  overflow: hidden;\n  z-index: 2;\n  border-radius: 5%;\n  top:0;\n  width: 100%;\n  height: 100%;\n  border: 1px solid #1a1a1a;\n  transition: all 1s ease;\n}\n.green .progress .inner .water,\n.red .progress .inner .water,\n.orange .progress .inner .water {\n  position: absolute;\n  z-index: 1;\n  width: 290%;\n  height: 200%;\n  left: -95%;\n  border-radius: 40%;\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n  -webkit-animation-timing-function: linear;\n  animation-timing-function: linear;\n  -webkit-animation-duration: 10s;\n  animation-duration: 10s;\n  -webkit-animation-name: spin;\n  animation-name: spin;\n  transition: all 1s ease;\n}\n.green .progress .inner .water {\n  background: rgba(83,252,83,0.5);\n  box-shadow: 0 0 20px #03bc03;\n}\n.red .progress .inner .water {\n  background: rgba(237,59,59,0.5);\n  box-shadow: 0 0 20px #9b0e0e;\n}\n.orange .progress .inner .water {\n  background: rgba(240,124,62,0.5);\n  box-shadow: 0 0 20px #a0400c;\n}\n.progress .inner .glare {\n  position: absolute;\n  left: 20%;\n  z-index: 5;\n  width: 20%;\n  height: 100%;\n  background-color: rgba(255,255,255,0.4);\n  transition: all 1s ease;\n}\n.progress .inner .glare2 {\n  left: 85%;\n  width: 15%;\n}\n.green .progress .inner .percent,\n.red .progress .inner .percent,\n.orange .progress .inner .percent,\n.label{\n  position: absolute;\n\n  left: 0;\n  width: 100%;\n  height: 100%;\n  font-weight: bold;\n  text-align: center;\n  z-index: 6;\n\n  font-size: 8vw;\n  transition: all 1s ease;\n}\n.percent{\n  top: 60%;\n}\n.label{\n  top: 30%;\n}\n.green .progress .inner .percent{\n  color: #03c603;\n  text-shadow: 0 0 10px #029502;\n}\n.red .progress .inner .percent {\n  color: #a30f0f;\n  text-shadow: 0 0 10px #7a0b0b;\n}\n.red {\n  margin-top: 15px;\n}\n.red .progress {\n  border: 2px solid #ed3b3b;\n}\n.red .progress {\n  box-shadow: 0 0 20px #7a0b0b;\n}\n.orange {\n  margin-top: 15px;\n}\n.orange .progress {\n  border: 2px solid #f07c3e;\n}\n.orange .progress {\n  box-shadow: 0 0 20px #7e320a;\n}\n.orange .progress .inner .percent {\n  color: #a8430d;\n}\n.orange .progress .inner .percent {\n  text-shadow: 0 0 10px #7e320a;\n}\n#copyright {\n  margin-top: 25px;\n  background-color: transparent;\n  font-size: 14px;\n  color: #b3b3b3;\n  text-align: center;\n}\n#copyright div {\n  margin-bottom: 10px;\n}\n#copyright a,\n#copyright a:link {\n  color: #808080;\n  text-decoration: none;\n  border-bottom: 1px solid #808080;\n  padding-bottom: 2px;\n}\n#copyright a:active {\n  color: #b3b3b3;\n}\n#copyright a:hover {\n  color: #b3b3b3;\n  border-bottom: 1px solid #b3b3b3;\n  padding-bottom: 4px;\n}\n.instructions {\n  display: inline-block;\n  margin: 5px 0;\n  font-size: 16px;\n}\n@-webkit-keyframes spin {\n  from {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n@keyframes spin {\n  from {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n"

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
        for (var i = 50; i < 100; i++) {
            var day = new Date();
            day.setDate(day.getDate() - (100 - i));
            xAxisData.push(day.getMonth() + '-' + day.getDate());
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

module.exports = "table{\n  width:100%;\n}\ntable tr td:nth-child(1) {\n  width:50px;\n  text-align:right;\n}\ntable tr td:nth-child(3) {\n  width:50px;\n  text-align:right;\n}\n.left{\n  margin-left: 20px;\n}\n"

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

module.exports = "ons-list{\n  margin-top: 10px;\n}\nons-list-header{\n  width: 100%;\n}\n.right-btn{\n  /*position: absolute;*/\n  /*top: 0;*/\n  /*right: 0;*/\n  /*margin-top: 5px;*/\n  /*margin-right: 15px;*/\n\n}\n.right-btn ons-fab{\n\n  font-size: 20px;\n}\n\n"

/***/ }),

/***/ "./src/app/config/config.component.html":
/*!**********************************************!*\
  !*** ./src/app/config/config.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ons-page>\n\n  <ons-toolbar>\n    <div class=\"center\">酱料偏好配置</div>\n  </ons-toolbar>\n\n  <ons-list modifier=\"inset\">\n    <ons-list-item style=\"background-color: #eee;\">智能设备端配置 同步于 {{now|date:'yyyy-MM-dd hh:mm:ss'}}</ons-list-item>\n    <ons-list-item *ngFor=\"let config of iotConfigs; let i = index\" modifier=\"longdivider\">{{i}}: {{config.name||'(空)'}}</ons-list-item>\n  </ons-list>\n  <ons-list modifier=\"inset\">\n    <ons-list-item style=\"background-color: #eee;\" modifier=\"nodivider\"><div class=\"center\">云端存储配置</div>\n      <div class=\"right\">\n        <ons-fab modifier=\"mini\" [routerLink]=\"'/configDetail'\" routerLinkActive='active'><ons-icon icon=\"fa-plus\"></ons-icon></ons-fab>\n      </div>\n    </ons-list-item>\n    <ons-list-item *ngFor=\"let config of cloudConfigs; let i = index\" modifier=\"longdivider\"\n                   [routerLink]=\"'/configDetail'\" [queryParams]=\"{id:i}\">\n      {{config.name||'无名'}}\n      <div class=\"right\">\n        <ons-switch [value]=\"true\"></ons-switch>\n      </div>\n    </ons-list-item>\n  </ons-list>\n\n</ons-page>\n"

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
    function ConfigComponent() {
        this.now = new Date();
        this.iotConfigs = _mock_service__WEBPACK_IMPORTED_MODULE_1__["MockService"].getIotConfigs();
        this.cloudConfigs = _mock_service__WEBPACK_IMPORTED_MODULE_1__["MockService"].getCloudConfigs();
    }
    ConfigComponent.prototype.ngOnInit = function () {
    };
    ConfigComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-config',
            template: __webpack_require__(/*! ./config.component.html */ "./src/app/config/config.component.html"),
            styles: [__webpack_require__(/*! ./config.component.css */ "./src/app/config/config.component.css")]
        }),
        __metadata("design:paramtypes", [])
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

module.exports = "table.dataintable {\n  margin-top:15px;\n  border-collapse:collapse;\n  /*border:1px solid #aaa;*/\n  width:100%;\n}\n\ntable.dataintable th {\n  vertical-align:baseline;\n  padding:5px 15px 5px 6px;\n  background-color:#3F3F3F;\n  /*border:1px solid #3F3F3F;*/\n  text-align:left;\n  color:#fff;\n}\n\ntable.dataintable td {\n  vertical-align:text-top;\n  padding:6px 15px 6px 6px;\n  /*border:1px solid #aaa;*/\n}\n\ntable.dataintable tr:nth-child(odd) {\n  background-color:#F5F5F5;\n}\n\ntable.dataintable tr:nth-child(even) {\n  background-color:#fff;\n}\n\ntable.dataintable tr td:nth-child(2) {\n  text-align:right;\n}\n\ntable.dataintable pre {\n  width:auto;\n  margin:0;\n  padding:0;\n  border:0;\n  background-color:transparent;\n}\n\ntable.dataintable p {margin:0 0 2px 0;}\n\n.content{\n  background-color: white !important;\n}\n"

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
    }
    CookComponent.prototype.ngOnInit = function () {
    };
    CookComponent.prototype.toastStart = function () {
        this.iotService.postCook().subscribe(function (result) { return console.log(result); });
        onsenui__WEBPACK_IMPORTED_MODULE_1__["notification"].toast('已同步至终端,在臻美味智能酱料罐上按开始键后即出蘸料!', { timeout: 5000 });
    };
    CookComponent.prototype.toastSync = function () {
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

module.exports = "<img style=\"width:100%\" [src]=\"'../../img/cookbook.jpg'\" usemap=\"#cookbookMap\">\n\n<map name=\"cookbookMap\">\n\n  <area shape=\"rect\" coords=\"11,158,236,504\" [routerLink]=\"'/cook'\" routerLinkActive='active'>\n\n</map>\n"

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

module.exports = "<ons-page>\n  <ons-toolbar>\n    <div class=\"center\">酱料偏好配置</div>\n  </ons-toolbar>\n  <ons-list modifier=\"inset\">\n    <ons-list-header>智能设备端配置 同步于 {{now|date:'yyyy-MM-dd hh:mm:ss'}}</ons-list-header>\n    <ons-list-item modifier=\"longdivider\">老婆的饺子蘸料</ons-list-item>\n    <ons-list-item modifier=\"longdivider\">北京烤鸭完美组合</ons-list-item>\n  </ons-list>\n  <ons-list modifier=\"inset\">\n    <ons-list-header>云端存储配置</ons-list-header>\n    <ons-list-item modifier=\"longdivider\">老婆的饺子蘸料</ons-list-item>\n    <ons-list-item modifier=\"longdivider\">北京烤鸭完美组合</ons-list-item>\n  </ons-list>\n</ons-page>\n"

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

module.exports = ".bg{\n  position: absolute;\n  top:0;\n  left:0;\n  height:100%;\n  width: 100%;\n  border: solid 1px;\n  z-index: -1;\n  background-image: url('sauceX-bg.jpg');\n  background-size:100% 100%;\n}\n.main-page{\n  background-color: rgba(255,255,255,0.4);\n}\nons-page.page--material__background.page__background{\n  background-color: rgba(255,255,255,0);\n}\n.bottle-grid{\n\n  margin: 0; /* 与外界元素的距离为0 */\n  width: 100%; /* 宽度根据元素内容调整 */\n  padding: 0; /* 与内部元素的距离为0 */\n}\n.bottle-grid ul{\n  width: 100%;\n  padding: 30px 0 0 0;\n  list-style:none; /* 去掉ul前面的符号 */\n}\n.bottle-grid li{\n  float:left; /* 向左漂移，将竖排变为横排 */\n  width: 49%;\n  padding-top:50%;\n  text-align: center;\n  position: relative;\n}\n.bottle-grid li app-bottle{\n  position: absolute;\n  width: 100%;\n  top: 0;\n  left: 0;\n}\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg\"></div>\n<ons-page [transparent]=\"true\" style=\"opacity: 0.8;\" class=\"main-page\">\n  <ons-toolbar>\n    <div class=\"center\">酱料罐信息</div>\n  </ons-toolbar>\n  <ons-list >\n    <ons-list-title>更新于 {{now|date:'yyyy-MM-dd hh:mm:ss'}}</ons-list-title>\n    <ons-list-item>\n      <div class=\"bottle-grid\">\n        <ul>\n          <li *ngFor=\"let bottle of bottles; let i = index\"><app-bottle [value]=\"bottle.value\" [color]=\"bottle.color\" [label]=\"bottle.label\"></app-bottle></li>\n        </ul>\n      </div>\n    </ons-list-item>\n  </ons-list>\n</ons-page>\n"

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
            { 'label': '料酒', 'color': _bottle_bottle__WEBPACK_IMPORTED_MODULE_1__["Color"].red, 'value': 75 },
            { 'label': '香油', 'color': _bottle_bottle__WEBPACK_IMPORTED_MODULE_1__["Color"].orange, 'value': 92 }
        ];
        // const bottle: Bottle = new Bottle();
        // bottle.value = 22;
        // bottle.color = Color.green;
        // bottle.label = '酱油';
        // const bottle2: Bottle = new Bottle();
        // bottle2.value = 88;
        // bottle2.color = Color.red;
        // bottle2.label = '醋';
        // this.bottles.push(bottle);
        // this.bottles.push(bottle2);
    }
    HomeComponent.prototype.ngOnInit = function () {
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
    IotService.prototype.postCook = function () {
        var formData = new FormData();
        formData.append('Order', '0');
        formData.append('Name', '殷振南测试02');
        formData.append('condiment1', '20');
        formData.append('condiment2', '5');
        formData.append('condiment3', '0');
        formData.append('condiment4', '0');
        return this.http.post(this.iotUrl, formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () { return console.log("postCook"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('postCook', '')));
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

module.exports = ".top-bar{\n  background-color: black;\n  text-align: center;\n  height: 24px;\n  font-size: 16px;\n  line-height: 24px;\n  color: #ffffff;\n}\n.list-item__thumbnail {\n  width: 80px;\n  height: 80px;\n  margin: 10px;\n}\n.icon-grid{\n\n  margin: 0; /* 与外界元素的距离为0 */\n  width: 100%; /* 宽度根据元素内容调整 */\n  padding: 0; /* 与内部元素的距离为0 */\n}\n.icon-grid ul{\n  padding: 30px 0 0 0;\n  list-style:none; /* 去掉ul前面的符号 */\n}\n.icon-grid li{\n  float:left; /* 向左漂移，将竖排变为横排 */\n  width: 33%;\n  height: 120px;\n  text-align: center;\n}\n.icon-grid ons-icon{\n  border: 2px solid;\n  width: 50px;\n  height: 50px;\n  font-size: 30px;\n  line-height: 50px;\n  border-radius: 50%;\n}\n.icon-grid span{\n  font-size: 14px;\n  line-height: 30px;\n}\n.ib1{\n  border-color: deepskyblue;\n  color: deepskyblue;\n}\n.ib2{\n  border-color: forestgreen;\n  color: forestgreen;\n}\n.ib3{\n  border-color: darkkhaki;\n  color: darkkhaki;\n}\n.ib4{\n  border-color: darkslateblue;\n  color: darkslateblue;\n}\n.ib5{\n  border-color: crimson;\n  color: crimson;\n}\n.ib6{\n  border-color: dodgerblue;\n  color: dodgerblue;\n}\n.ib7{\n  border-color: sienna;\n  color: deepskyblue;\n}\n.ib8{\n  border-color: darkgreen;\n  color: darkgreen;\n}\n.ib9{\n  border-color: sienna;\n  color: sienna;\n}\n.bottom-bar{\n  text-align: center;\n  height: 24px;\n  font-size: 12px;\n  line-height: 24px;\n  color: #aaaaaa;\n}\n"

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

module.exports = "app-tabbar {\n  position: absolute;\n  top:0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.tabbar {\n  text-align: center;\n  position: absolute;\n  left:0;\n  right: 0;\n  bottom: 0;\n  height: 49px;\n}\n.tabbar--material a.active {\n  /*background-color: #26a69a;*/\n}\n.tabbar:not(.tab-bar--material) a.active {\n  color: royalblue;\n}\nmain {\n  position: absolute;\n  top: 0;\n  bottom: 50px;\n  left: 0;\n  right: 0;\n  overflow: auto;\n}\n"

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
            { path: 'cookbook', label: '首页', },
            { path: 'home', label: '烹饪', },
            { path: 'config', label: 'config', icon: 'fa-plus', },
            { path: 'statistics', label: '商业', },
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

module.exports = __webpack_require__(/*! /Users/yinzhennan/work/github/SauceX-App/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map