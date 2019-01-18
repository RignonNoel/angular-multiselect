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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <a href=\"https://github.com/RignonNoel/angular-multiselect\" class=\"header__item\">\n    Go to the Github repository\n  </a>\n</div>\n<div class=\"content\">\n  Little package to easily select multiple choices of a big set of data. It's perfect for manage ManyToMany relationships in your admin panel for example.\n\n  <div class=\"content__section\">\n    <div class=\"content__section__title\">\n      Demo\n    </div>\n    <div class=\"content__section__content\">\n      <multiselect [list]=\"choicesAvailable\"\n                   [(selected)]=\"selectedChoices\"\n                   labelProperty=\"name\"\n                   (searchBar)=\"filter($event)\">\n      </multiselect>\n\n      <p>\n        It's easy to see the result in realtime with the variable we bind to the component:\n      </p>\n      <p>\n        <b>Number of choices:</b> {{ selectedChoices.length }}<br/>\n        <b>Last choice:</b>\n        <span *ngIf=\"selectedChoices.length > 0\">\n          {{ selectedChoices[selectedChoices.length - 1].name }}\n        </span>\n        <span *ngIf=\"selectedChoices.length <= 0\">\n          None\n        </span>\n      </p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  display: flex;\n  width: 100%;\n  background-color: #FF4500; }\n  .header__item {\n    padding: 20px 20px;\n    color: white;\n    text-transform: uppercase;\n    font-weight: 600;\n    text-decoration: none;\n    font-size: 0.8em; }\n  .header__item:hover {\n      background-color: #ff8f66; }\n  .content {\n  padding: 40px;\n  min-height: 100vh; }\n  .content__section {\n    margin-top: 40px; }\n  .content__section__title {\n      border-bottom: 5px double black;\n      margin-bottom: 30px;\n      font-weight: 600;\n      text-transform: uppercase; }\n  .content__section__content__code {\n      background-color: lightgrey;\n      border-color: grey;\n      color: black;\n      padding: 15px; }\n"

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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.allChoices = [];
        this.choicesAvailable = [];
        this.selectedChoices = [];
        for (var index = 0; index <= 200; index++) {
            this.allChoices.push({
                name: 'Choice ' + index.toString(),
            });
        }
        this.choicesAvailable = this.allChoices;
    }
    AppComponent.prototype.filter = function (search) {
        console.log(search);
        if (search != '') {
            this.choicesAvailable = [];
            for (var _i = 0, _a = this.allChoices; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.name.indexOf(search) >= 0) {
                    this.choicesAvailable.push(item);
                }
            }
        }
        else {
            this.choicesAvailable = this.allChoices;
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _modules_multiselect_multiselect_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/multiselect/multiselect.module */ "./src/app/modules/multiselect/multiselect.module.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _modules_multiselect_multiselect_module__WEBPACK_IMPORTED_MODULE_3__["MultiselectModule"]
            ],
            providers: [],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/modules/multiselect/multiselect.component.html":
/*!****************************************************************!*\
  !*** ./src/app/modules/multiselect/multiselect.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"multiselect\">\n  <input [(ngModel)]=\"searchBarText\"\n         class=\"multiselect__searchbar\"\n         (keypress)=\"triggerSearch()\"\n         type=\"text\"\n         [placeholder]=\"settings.searchBarPlaceholder\"/>\n  <div class=\"multiselect__columns\">\n    <div class=\"multiselect__columns__column\">\n      <div class=\"multiselect__columns__column__title\">\n        {{ settings.listLabel }}\n      </div>\n      <div class=\"multiselect__columns__column__list\">\n        <div class=\"multiselect__columns__column__list__empty\" *ngIf=\"!list || list.length < 1\">\n          {{ settings.listEmptyLabel }}\n        </div>\n        <div *ngFor=\"let item of list\" class=\"multiselect__columns__column__list__item\">\n          <div *ngIf=\"!isSelected(item)\" (dblclick)=\"select(item)\">\n            {{ item[labelProperty] }}\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"multiselect__columns__column\">\n      <div class=\"multiselect__columns__column__title\">\n        {{ settings.selectedLabel }}\n      </div>\n      <div class=\"multiselect__columns__column__list\">\n        <div class=\"multiselect__columns__column__list__empty\" *ngIf=\"!selected || selected.length < 1\">\n          {{ settings.selectedEmptyLabel }}\n        </div>\n        <div *ngFor=\"let item of selected\"  (dblclick)=\"unselect(item)\" class=\"multiselect__columns__column__list__item\">\n          {{ item[labelProperty] }}\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/multiselect/multiselect.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/modules/multiselect/multiselect.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".multiselect__searchbar {\n  box-sizing: border-box;\n  border: 1px solid lightgrey;\n  padding: 10px;\n  width: 100%;\n  background: none;\n  color: black; }\n\n.multiselect__columns {\n  display: flex;\n  justify-content: space-between; }\n\n.multiselect__columns__column {\n    flex: 1;\n    margin-top: 20px;\n    margin-right: 30px; }\n\n.multiselect__columns__column:last-child {\n      margin-right: 0; }\n\n.multiselect__columns__column__title {\n      text-transform: uppercase;\n      font-weight: 600;\n      font-size: 0.8em; }\n\n.multiselect__columns__column__list {\n      height: 150px;\n      border: 1px solid lightgrey;\n      overflow: auto; }\n\n.multiselect__columns__column__list__item {\n        padding: 0 5px; }\n\n.multiselect__columns__column__list__item:hover {\n          background-color: lightgrey;\n          cursor: pointer; }\n\n.multiselect__columns__column__list__empty {\n        height: 100%;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        background-color: lightgrey; }\n"

/***/ }),

/***/ "./src/app/modules/multiselect/multiselect.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/multiselect/multiselect.component.ts ***!
  \**************************************************************/
/*! exports provided: MultiselectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiselectComponent", function() { return MultiselectComponent; });
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

var MultiselectComponent = /** @class */ (function () {
    function MultiselectComponent() {
        this.labelProperty = 'label';
        this.selected = [];
        this.list = [];
        this.doneTypingInterval = 1500;
        this.searchBar = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    MultiselectComponent.prototype.ngOnInit = function () {
        if (!this.settings) {
            this.settings = {
                searchBarPlaceholder: 'Type here to filter the list..',
                listLabel: 'List of choices',
                listEmptyLabel: 'No choices available',
                selectedLabel: 'Selected choices',
                selectedEmptyLabel: 'No choice selected',
            };
        }
    };
    MultiselectComponent.prototype.ngOnChanges = function () { };
    MultiselectComponent.prototype.isSelected = function (item) {
        var index = this.selected.indexOf(item);
        if (index > -1) {
            return true;
        }
    };
    MultiselectComponent.prototype.triggerSearch = function () {
        var _this = this;
        clearTimeout(this.typingTimer);
        this.typingTimer = setTimeout(function () {
            _this.filterList();
        }, this.doneTypingInterval);
    };
    MultiselectComponent.prototype.filterList = function () {
        this.searchBar.emit(this.searchBarText);
    };
    MultiselectComponent.prototype.select = function (item) {
        this.selected.push(item);
    };
    MultiselectComponent.prototype.unselect = function (item) {
        var index = this.selected.indexOf(item);
        if (index > -1) {
            this.selected.splice(index, 1);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MultiselectComponent.prototype, "labelProperty", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MultiselectComponent.prototype, "selected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MultiselectComponent.prototype, "list", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MultiselectComponent.prototype, "settings", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], MultiselectComponent.prototype, "searchBar", void 0);
    MultiselectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'multiselect',
            template: __webpack_require__(/*! ./multiselect.component.html */ "./src/app/modules/multiselect/multiselect.component.html"),
            styles: [__webpack_require__(/*! ./multiselect.component.scss */ "./src/app/modules/multiselect/multiselect.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MultiselectComponent);
    return MultiselectComponent;
}());



/***/ }),

/***/ "./src/app/modules/multiselect/multiselect.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/multiselect/multiselect.module.ts ***!
  \***********************************************************/
/*! exports provided: MultiselectModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiselectModule", function() { return MultiselectModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _multiselect_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./multiselect.component */ "./src/app/modules/multiselect/multiselect.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MultiselectModule = /** @class */ (function () {
    function MultiselectModule() {
    }
    MultiselectModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            ],
            declarations: [
                _multiselect_component__WEBPACK_IMPORTED_MODULE_3__["MultiselectComponent"],
            ],
            exports: [
                _multiselect_component__WEBPACK_IMPORTED_MODULE_3__["MultiselectComponent"],
            ]
        })
    ], MultiselectModule);
    return MultiselectModule;
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

module.exports = __webpack_require__(/*! /home/rignonnoel/Code/angular-multiselect/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map