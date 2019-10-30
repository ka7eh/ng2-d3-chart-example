(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <button\n    type=\"submit\"\n    style=\"margin: 50px;\"\n    (click)=\"increase()\"\n  >\n    Increase\n  </button>\n\n  <span style=\"margin: 50px;\">\n    Year: {{ year }}\n    <button\n      type=\"submit\"\n      (click)=\"updateSelected(year - 1)\"\n    >\n      Down\n    </button>\n    <button\n      type=\"submit\"\n      (click)=\"updateSelected(year + 1)\"\n    >\n      Up\n    </button>\n  </span>\n</div>\n\n<app-d3-chart\n  [data]=\"data\"\n  [width]=\"width\"\n  [height]=\"height\"\n  [xAxisProps]=\"xAxisProps\"\n  [yAxisProps]=\"yAxisProps\"\n  [barStroke]=\"barStroke\"\n  [barStrokeWidth]=\"barStrokeWidth\"\n  [tooltipContent]=\"tooltipContent\"\n  [mouseOver]=\"mouseOver\"\n  [mouseOut]=\"mouseOut\"\n>\n</app-d3-chart>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/d3-chart/d3-chart.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/d3-chart/d3-chart.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg [attr.width]=\"width\" [attr.height]=\"height\"></svg>\n<div id=\"Tooltip\"></div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _mock_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mock-data */ "./src/app/mock-data.js");




let AppComponent = class AppComponent {
    constructor() {
        this.year = 2000;
        this.width = 960;
        this.height = 500;
        this.xAxisProps = {
            key: 'year',
            title: 'Year'
        };
        this.yAxisProps = {
            key: 'value',
            title: 'lb/acre'
        };
        this.data = _mock_data__WEBPACK_IMPORTED_MODULE_3__["default"];
        this.barStroke = (d) => d.selected ? 'red' : '#4682b4';
        this.barStrokeWidth = (d) => d.selected ? 3 : 1;
        this.tooltipContent = (d) => `${d.value} lb/acre`;
        this.mouseOver = (d, idx, rects) => {
            Object(d3__WEBPACK_IMPORTED_MODULE_2__["select"])(rects[idx]).attr('fill', 'brown');
        };
        this.mouseOut = (d, idx, rects) => {
            Object(d3__WEBPACK_IMPORTED_MODULE_2__["select"])(rects[idx]).attr('fill', '#4682b4');
        };
    }
    ngOnInit() {
        this.updateSelected(this.year);
    }
    increase() {
        this.data = this.data.map(({ year, value, selected }) => ({
            year,
            value: value + 1,
            selected
        }));
    }
    updateSelected(selectedYear) {
        this.year = selectedYear;
        this.data = this.data.map(({ year, value }) => ({
            year,
            value,
            selected: year === selectedYear
        }));
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _d3_chart_d3_chart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./d3-chart/d3-chart.component */ "./src/app/d3-chart/d3-chart.component.ts");





let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _d3_chart_d3_chart_component__WEBPACK_IMPORTED_MODULE_4__["D3ChartComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/d3-chart/d3-chart.component.css":
/*!*************************************************!*\
  !*** ./src/app/d3-chart/d3-chart.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2QzLWNoYXJ0L2QzLWNoYXJ0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/d3-chart/d3-chart.component.ts":
/*!************************************************!*\
  !*** ./src/app/d3-chart/d3-chart.component.ts ***!
  \************************************************/
/*! exports provided: D3ChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D3ChartComponent", function() { return D3ChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");



let D3ChartComponent = class D3ChartComponent {
    constructor() {
        this.marginTop = 50;
        this.marginRight = 20;
        this.marginBottom = 40;
        this.marginLeft = 60;
        this.mouseOver = () => { };
        this.mouseOut = () => { };
        this.click = () => { };
    }
    ngOnInit() {
        this.createChart();
    }
    ngOnChanges() {
        if (this.chartProps) {
            this.updateData();
        }
    }
    updateData() {
        {
            const { data, xAxisProps, yAxisProps, marginTop, marginBottom, height, barStroke = '#4682b4', barStrokeWidth = 1, barStrokeOpacity = 0.3, barFill = '#4682b4', barFillOpacity = 0.3, tooltipContent, mouseOver, mouseOut, click } = this;
            const { g, x, y, xAxisGroup, yAxisGroup, tooltip } = this.chartProps;
            x.domain(data.map((d) => d[xAxisProps.key]));
            y.domain([0, Object(d3__WEBPACK_IMPORTED_MODULE_2__["max"])(data, (d) => +d[yAxisProps.key])]);
            // X Axis
            const xAxis = Object(d3__WEBPACK_IMPORTED_MODULE_2__["axisBottom"])(x);
            xAxisGroup
                .call(xAxis)
                .selectAll('text')
                .attr('x', -25)
                .attr('y', -5)
                .attr('transform', 'rotate(-90)')
                .attr('fill', xAxisProps.textColor || 'currentColor')
                .attr('fill-opacity', xAxisProps.textOpacity || 0.3);
            xAxisGroup
                .selectAll('line,path')
                .style('stroke', xAxisProps.stroke || 'currentColor')
                .attr('stroke-width', xAxisProps.strokeWidth || 1);
            // Y Axis
            const yAxis = Object(d3__WEBPACK_IMPORTED_MODULE_2__["axisLeft"])(y);
            yAxisGroup
                .transition()
                .duration(500)
                .call(yAxis);
            yAxisGroup
                .selectAll('text')
                .attr('fill', yAxisProps.textColor || 'currentColor')
                .attr('fill-opacity', yAxisProps.textOpacity || 0.3);
            yAxisGroup
                .selectAll('line,path')
                .attr('stroke', yAxisProps.stroke || 'currentColor')
                .attr('stroke-width', yAxisProps.strokeWidth || 1);
            // Data join
            const bars = g.selectAll('rect')
                .data(data);
            // Exit
            bars.exit()
                .transition()
                .duration(500)
                .attr('y', y(0))
                .attr('height', 0)
                .remove();
            // Enter
            bars
                .enter()
                .append('rect')
                .attr('x', (d) => x(d[xAxisProps.key]))
                .attr('width', x.bandwidth)
                .attr('y', y(0))
                .attr('height', 0)
                .on('mouseover', mouseOver)
                .on('mouseout', mouseOut)
                .on('click', click)
                .on('mouseover', (d) => {
                if (tooltip) {
                    tooltip
                        .html(typeof tooltipContent === 'function' ? tooltipContent(d) : tooltipContent)
                        .transition()
                        .duration(200)
                        .style('opacity', .9)
                        .style('left', `${d3__WEBPACK_IMPORTED_MODULE_2__["event"].clientX}px`)
                        .style('top', `${d3__WEBPACK_IMPORTED_MODULE_2__["event"].clientY - 50}px`);
                }
            })
                .on('mouseout', () => {
                if (tooltip) {
                    tooltip
                        .transition()
                        .duration(500)
                        .style('opacity', 0);
                }
            })
                .merge(bars)
                .transition()
                .duration(500)
                .attr('y', (d) => y(+d[yAxisProps.key]))
                .attr('x', (d) => x(d[xAxisProps.key]))
                .attr('width', x.bandwidth)
                .attr('height', (d) => (height - marginBottom - marginTop) - y(d[yAxisProps.key]))
                .attr('stroke', barStroke)
                .attr('stroke-width', barStrokeWidth)
                .attr('stroke-opacity', barStrokeOpacity)
                .attr('fill', barFill)
                .attr('fill-opacity', barFillOpacity);
        }
    }
    createChart() {
        const { marginTop, marginBottom, marginLeft, marginRight, width, height, xAxisProps, yAxisProps, tooltipContent } = this;
        const svg = Object(d3__WEBPACK_IMPORTED_MODULE_2__["select"])('svg');
        const g = svg.append('g')
            .attr('width', width - marginLeft - marginRight)
            .attr('height', height - marginBottom - marginTop + 40)
            .attr('transform', `translate(${marginLeft},${marginTop})`);
        const xAxisGroup = g.append('g')
            .attr('class', 'xAxis')
            .attr('transform', `translate(0, ${height - marginBottom - marginTop})`);
        const yAxisGroup = g.append('g')
            .attr('class', 'yAxis');
        // X Scale
        const x = Object(d3__WEBPACK_IMPORTED_MODULE_2__["scaleBand"])()
            .range([0, width - marginLeft - marginRight])
            .paddingInner(0.1)
            .paddingOuter(0.3);
        if (xAxisProps.title) {
            g.append('text')
                .attr('x', (width - marginLeft - marginRight) / 2)
                .attr('y', height - marginTop - marginBottom + 50)
                .attr('text-anchor', 'middle')
                .attr('fill', xAxisProps.textColor || 'currentColor')
                .attr('fill-opacity', xAxisProps.textOpacity || 0.3)
                .text(xAxisProps.title);
        }
        // Y Scale
        const y = Object(d3__WEBPACK_IMPORTED_MODULE_2__["scaleLinear"])()
            .range([height - marginBottom - marginTop, 0]);
        if (yAxisProps.title) {
            g.append('text')
                .attr('x', -(height - marginBottom - marginTop) / 2)
                .attr('y', -30)
                .attr('text-anchor', 'middle')
                .attr('transform', 'rotate(-90)')
                .attr('fill', yAxisProps.textColor || 'currentColor')
                .attr('fill-opacity', yAxisProps.textOpacity || 0.3)
                .text(yAxisProps.title);
        }
        const tooltip = tooltipContent ?
            Object(d3__WEBPACK_IMPORTED_MODULE_2__["select"])('#Tooltip')
                .attr('class', 'tooltip')
                .style('position', 'fixed')
                .style('background', '#fff')
                .style('border-radius', '5px')
                .style('padding', '5px')
                .style('opacity', 0) :
            null;
        this.chartProps = {
            g,
            x,
            y,
            xAxisGroup,
            yAxisGroup,
            tooltip
        };
        this.updateData();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], D3ChartComponent.prototype, "width", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], D3ChartComponent.prototype, "height", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], D3ChartComponent.prototype, "marginTop", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], D3ChartComponent.prototype, "marginRight", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], D3ChartComponent.prototype, "marginBottom", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], D3ChartComponent.prototype, "marginLeft", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], D3ChartComponent.prototype, "xAxisProps", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], D3ChartComponent.prototype, "yAxisProps", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], D3ChartComponent.prototype, "barStroke", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], D3ChartComponent.prototype, "barStrokeWidth", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], D3ChartComponent.prototype, "barStrokeOpacity", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], D3ChartComponent.prototype, "barFill", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], D3ChartComponent.prototype, "barFillOpacity", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], D3ChartComponent.prototype, "tooltipContent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], D3ChartComponent.prototype, "data", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], D3ChartComponent.prototype, "mouseOver", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], D3ChartComponent.prototype, "mouseOut", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], D3ChartComponent.prototype, "click", void 0);
D3ChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-d3-chart',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./d3-chart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/d3-chart/d3-chart.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./d3-chart.component.css */ "./src/app/d3-chart/d3-chart.component.css")).default]
    })
], D3ChartComponent);



/***/ }),

/***/ "./src/app/mock-data.js":
/*!******************************!*\
  !*** ./src/app/mock-data.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([
    {
      year: 1980,
      value: 5.6,
    },
    {
      year: 1981,
      value: 10.1,
    },
    {
      year: 1982,
      value: 11.9,
    },
    {
      year: 1983,
      value: 12.9,
    },
    {
      year: 1984,
      value: 11.3,
    },
    {
      year: 1985,
      value: 9.4,
    },
    {
      year: 1986,
      value: 10.4,
    },
    {
      year: 1987,
      value: 6.1,
    },
    {
      year: 1988,
      value: 8.3,
    },
    {
      year: 1989,
      value: 7,
    },
    {
      year: 1990,
      value: 11.9,
    },
    {
      year: 1991,
      value: 12.8,
    },
    {
      year: 1992,
      value: 8.3,
    },
    {
      year: 1993,
      value: 19.4,
    },
    {
      year: 1994,
      value: 10,
    },
    {
      year: 1995,
      value: 9.5,
    },
    {
      year: 1996,
      value: 11.3,
    },
    {
      year: 1997,
      value: 8,
    },
    {
      year: 1998,
      value: 14.4,
    },
    {
      year: 1999,
      value: 11.7,
    },
    {
      year: 2000,
      value: 6.4,
    },
    {
      year: 2001,
      value: 8.9,
    },
    {
      year: 2002,
      value: 15,
    },
    {
      year: 2003,
      value: 4.6,
    },
    {
      year: 2004,
      value: 10.8,
    },
    {
      year: 2005,
      value: 8.2,
    },
    {
      year: 2006,
      value: 6.7,
    },
    {
      year: 2007,
      value: 9.2,
    },
    {
      year: 2008,
      value: 7.5,
    },
    {
      year: 2009,
      value: 13.2,
    },
    {
      year: 2010,
      value: 12.2,
    },
    {
      year: 2011,
      value: 11.7,
    },
    {
      year: 2012,
      value: 4.8,
    },
    {
      year: 2013,
      value: 14.5,
    },
    {
      year: 2014,
      value: 6.5,
    },
    {
      year: 2015,
      value: 10.1,
    },
    {
      year: 2016,
      value: 12.4,
    },
    {
      year: 2017,
      value: 13.2,
    },
]);


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/kaveh/Workspace/dev/_sandbox/js/ng-d3-chart/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map