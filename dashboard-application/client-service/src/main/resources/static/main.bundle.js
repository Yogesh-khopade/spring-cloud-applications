webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "app-d3-bar-chart {\r\n  width: 100%;\r\n}\r\n.bg-dark {\r\n    background-color: #1880cc!important;\r\n    margin-bottom:0px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//Main app component
let AppComponent = 
//Main app Class
class AppComponent {
    //lineDataset = lineData;
    constructor() {
        this.title = 'spring boot and angular 4 secure authentication';
    }
    //onInit Hook
    ngOnInit() {
    }
};
//static API_URL = "http://yblpvdakdwha01.yesbank.com:8600";
AppComponent.API_URL = "http://localhost:8600";
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")]
    })
    //Main app Class
    ,
    __metadata("design:paramtypes", [])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm2015/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm2015/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_register_register_component__ = __webpack_require__("./src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_account_service__ = __webpack_require__("./src/app/services/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_profile_profile_component__ = __webpack_require__("./src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_facebook__ = __webpack_require__("./node_modules/ngx-facebook/dist/esm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__urlPermission_url_permission__ = __webpack_require__("./src/app/urlPermission/url.permission.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__d3_axis_directive__ = __webpack_require__("./src/app/d3-axis.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_pie_chart_pie_component__ = __webpack_require__("./src/app/components/pie-chart/pie.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_data_service__ = __webpack_require__("./src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_barDataService_service__ = __webpack_require__("./src/app/services/barDataService.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_line_chart_line_chart_component__ = __webpack_require__("./src/app/components/line-chart/line-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_LineDataService_service__ = __webpack_require__("./src/app/services/LineDataService.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_d3graph_d3graph_component__ = __webpack_require__("./src/app/components/d3graph/d3graph.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_doughnut_chart_doughnut_component__ = __webpack_require__("./src/app/components/doughnut-chart/doughnut.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_doughnutDataService_service__ = __webpack_require__("./src/app/services/doughnutDataService.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_d3_ng2_service__ = __webpack_require__("./node_modules/d3-ng2-service/esm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_dashboard_search_dashboard_search_component__ = __webpack_require__("./src/app/components/dashboard-search/dashboard-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_dashboardSearch_service__ = __webpack_require__("./src/app/services/dashboardSearch.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













//import {D3BarChartComponent} from './components/bar-chart/bar-chart.component';




//import { StackedChartCompoent } from './components/Stackedbar-chart/stackedbar-chart.component';
//import { StackedbarDataService }  from './services/stackedbarDataService.service';
//import { MultiChartCompoent } from './components/multibar-chart/multibar-chart.component';




//import { funnelgraphComponent } from './components/funnel/funnel.component';


//import { LocalStorageModule,LocalStorageService } from 'angular-2-local-storage';
//import { AuthGuard } from './services/routeguard';
//import { AuthErrorHandler } from './services/auth-error-handler';
//import { AuthRequestOptions } from './services/auth-request';
//import { HTTP_INTERCEPTORS } from '@angular/common/http';
//import { Interceptor } from './services/token.interceptor';
//import { RoleGuardService } from './services/role-guard.service';


let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_10__app_routing__["a" /* routing */], __WEBPACK_IMPORTED_MODULE_11_ngx_facebook__["a" /* FacebookModule */].forRoot()
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_13__d3_axis_directive__["a" /* D3AxisDirective */],
            __WEBPACK_IMPORTED_MODULE_14__components_pie_chart_pie_component__["a" /* PieChartComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_line_chart_line_chart_component__["a" /* LineChartCompoent */],
            __WEBPACK_IMPORTED_MODULE_19__components_d3graph_d3graph_component__["a" /* D3graphComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_doughnut_chart_doughnut_component__["a" /* DoughnutChartComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_dashboard_search_dashboard_search_component__["a" /* DashboardSearchComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_8__services_account_service__["a" /* AccountService */], __WEBPACK_IMPORTED_MODULE_12__urlPermission_url_permission__["a" /* UrlPermission */], __WEBPACK_IMPORTED_MODULE_15__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_18__services_LineDataService_service__["a" /* LineDataService */], __WEBPACK_IMPORTED_MODULE_22_d3_ng2_service__["a" /* D3Service */], __WEBPACK_IMPORTED_MODULE_16__services_barDataService_service__["a" /* BarDataService */], __WEBPACK_IMPORTED_MODULE_21__services_doughnutDataService_service__["a" /* DoughnutDataService */], __WEBPACK_IMPORTED_MODULE_24__services_dashboardSearch_service__["a" /* DashboardSearchDataService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

/*
AuthGuard ,
 RoleGuardService,
 {
      provide: RequestOptions,
      useClass: AuthRequestOptions
    },{
      provide: ErrorHandler,
      useClass: AuthErrorHandler
    },
      { provide: HTTP_INTERCEPTORS,
        useClass: Interceptor,
        multi: true
      }
    */


/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm2015/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_profile_profile_component__ = __webpack_require__("./src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_register_register_component__ = __webpack_require__("./src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_dashboard_search_dashboard_search_component__ = __webpack_require__("./src/app/components/dashboard-search/dashboard-search.component.ts");




//import {UrlPermission} from "./urlPermission/url.permission";
//import { AuthGuard } from './services/routeguard';
//import { AuthErrorHandler } from './services/auth-error-handler';
//import { AuthRequestOptions } from './services/auth-request';

const appRoutes = [{
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_1__components_profile_profile_component__["a" /* ProfileComponent */]
        //canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_3__components_register_register_component__["a" /* RegisterComponent */]
    },
    {
        path: 'dashboardsearch',
        component: __WEBPACK_IMPORTED_MODULE_4__components_dashboard_search_dashboard_search_component__["a" /* DashboardSearchComponent */]
    },
    // otherwise redirect to profile
    {
        path: '**',
        redirectTo: '/login'
    }
];
const routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(appRoutes);
/* harmony export (immutable) */ __webpack_exports__["a"] = routing;

__WEBPACK_IMPORTED_MODULE_4__components_dashboard_search_dashboard_search_component__["a" /* DashboardSearchComponent */];


/***/ }),

/***/ "./src/app/components/d3graph/d3graph.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/d3graph/d3graph.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/d3graph/d3graph.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3graphComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm2015/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_ng2_service__ = __webpack_require__("./node_modules/d3-ng2-service/esm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_barDataService_service__ = __webpack_require__("./src/app/services/barDataService.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let D3graphComponent = class D3graphComponent {
    constructor(element, ngZone, d3Service, barDataService) {
        this.element = element;
        this.ngZone = ngZone;
        this.d3Service = d3Service;
        this.barDataService = barDataService;
        this.d3 = d3Service.getD3();
        this.parentNativeElement = element.nativeElement;
    }
    ngAfterViewInit() {
        let self = this;
        let d3 = this.d3;
        let d3ParentElement;
        let svg;
        let name;
        let yVal;
        let colors = [];
        /*let data: {
        name: string,
        yVal: number
        }[] = [];*/
        let padding = 30;
        let width = 400;
        let height = 400;
        let xScale;
        let yScale;
        let xColor;
        let xAxis;
        let yAxis;
        let BarData;
        if (this.parentNativeElement !== null) {
            svg = d3.select(this.parentNativeElement)
                .append('svg') // create an <svg> element
                .attr('width', width) // set its dimensions
                .attr('height', height);
            colors = ["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"];
            this.barDataService.getBardata().subscribe(data => {
                //console.log(data);
                this.BarData = data;
                xScale = d3.scaleBand()
                    .domain(this.BarData.map(function (d) {
                    return d.name;
                }))
                    .range([0, 350]);
                yScale = d3.scaleLinear()
                    .domain([0, d3.max(this.BarData, function (d) {
                        return d.yVal;
                    })])
                    .range([341, 0]);
                xAxis = d3.axisBottom(xScale) // d3.js v.4
                    .ticks(5)
                    .scale(xScale);
                yAxis = d3.axisLeft(xScale) // d3.js v.4
                    .scale(yScale)
                    .ticks(7);
                svg.append("g")
                    .attr("class", "axis")
                    .attr("transform", "translate(" + (padding) + "," + padding + ")")
                    .call(yAxis);
                svg.append('g') // create a <g> element
                    .attr('class', 'axis') // specify classes
                    .attr("transform", "translate(" + padding + "," + (height - padding) + ")")
                    .call(xAxis); // let the axis do its thing
                var rects = svg.selectAll('rect')
                    .data(this.BarData);
                rects.size();
                var newRects = rects.enter();
                newRects.append('rect')
                    .attr('x', function (d, i) {
                    return xScale(d.name);
                })
                    .attr('y', function (d) {
                    return yScale(d.yVal);
                })
                    .attr("transform", "translate(" + (padding - 5 + 35) + "," + (padding - 5) + ")")
                    .attr('height', function (d) {
                    return height - yScale(d.yVal) - (2 * padding) + 5;
                })
                    .attr('width', 30)
                    .attr('fill', function (d, i) {
                    return colors[i];
                });
            });
            /*  BarData = [{"name" : "Savings", "yVal" : 100},{"name" : "Current", "yVal" : 400},{"name" : "Fixed Deposit", "yVal" : 200},{"name" : "Recurring", "yVal" : 300},{"name" : "Abc", "yVal" : 500}];*/
        }
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
    __metadata("design:type", Array)
], D3graphComponent.prototype, "BarData", void 0);
D3graphComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-d3graph',
        template: __webpack_require__("./src/app/components/d3graph/d3graph.component.html"),
        styles: [__webpack_require__("./src/app/components/d3graph/d3graph.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */], __WEBPACK_IMPORTED_MODULE_2_d3_ng2_service__["a" /* D3Service */], __WEBPACK_IMPORTED_MODULE_3__services_barDataService_service__["a" /* BarDataService */]])
], D3graphComponent);



/***/ }),

/***/ "./src/app/components/dashboard-search/dashboard-search.component.css":
/***/ (function(module, exports) {

module.exports = "body { padding: 2em; }\r\n\r\n@media screen and (min-width: 768px){\r\n.container .jumbotron, .container-fluid .jumbotron {\r\n    padding-right: 30px;\r\n    padding-left: 30px;\r\n}\r\n.jumbotron {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n}\r\n}\r\n\r\n.wrapperContainer{\r\npadding:15px 30px;\r\n    background-color: #eee;\r\n    }\r\n\r\n/* Shared */\r\n\r\n.loginBtn {\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  position: relative;\r\n  /* width: 13em;  - apply for fixed size */\r\n  margin: 0.2em;\r\n  padding: 0 15px 0 46px;\r\n  border: none;\r\n  text-align: left;\r\n  line-height: 34px;\r\n  white-space: nowrap;\r\n  border-radius: 0.2em;\r\n  font-size: 16px;\r\n  color: #FFF;\r\n}\r\n\r\n.loginBtn:before {\r\n  content: \"\";\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 34px;\r\n  height: 100%;\r\n}\r\n\r\n.loginBtn:focus {\r\n  outline: none;\r\n}\r\n\r\n.loginBtn:active {\r\n  -webkit-box-shadow: inset 0 0 0 32px rgba(0,0,0,0.1);\r\n          box-shadow: inset 0 0 0 32px rgba(0,0,0,0.1);\r\n}\r\n\r\n/* Facebook */\r\n\r\n.loginBtn--facebook {\r\n  background-color: #4C69BA;\r\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#4C69BA), to(#3B55A0));\r\n  background-image: linear-gradient(#4C69BA, #3B55A0);\r\n  /*font-family: \"Helvetica neue\", Helvetica Neue, Helvetica, Arial, sans-serif;*/\r\n  text-shadow: 0 -1px 0 #354C8C;\r\n}\r\n\r\n.loginBtn--facebook:before {\r\n  border-right: #364e92 1px solid;\r\n  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png') 6px 6px no-repeat;\r\n}\r\n\r\n.loginBtn--facebook:hover,\r\n.loginBtn--facebook:focus {\r\n  background-color: #5B7BD5;\r\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#5B7BD5), to(#4864B1));\r\n  background-image: linear-gradient(#5B7BD5, #4864B1);\r\n}\r\n\r\n/* Google */\r\n\r\n.loginBtn--google {\r\n  /*font-family: \"Roboto\", Roboto, arial, sans-serif;*/\r\n  background: #DD4B39;\r\n}\r\n\r\n.loginBtn--google:before {\r\n  border-right: #BB3F30 1px solid;\r\n  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png') 6px 6px no-repeat;\r\n}\r\n\r\n.loginBtn--google:hover,\r\n.loginBtn--google:focus {\r\n  background: #E74B37;\r\n}\r\n\r\nbody, html {\r\n  height: 100%;\r\n  background-repeat: no-repeat;\r\n  background-image:none;\r\n  padding: 0;\r\n}\r\n\r\n.ybl-img {\r\n  width: 200px;\r\n  height: 96px;\r\n  alignment: left;\r\n  margin: 0 auto 10px;\r\n  display: block;\r\n  border-radius: 50%;\r\n}\r\n\r\n/*\r\n * Specific styles of signin component\r\n */\r\n\r\n/*\r\n * General styles\r\n */\r\n\r\nbody, html {\r\n  height: 100%;\r\n /* background-repeat: no-repeat;\r\n  background-image: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));*/\r\n  background-color: #717e84;\r\n}\r\n\r\n.card-container.card {\r\n  max-width: 350px;\r\n  padding: 40px 40px;\r\n}\r\n\r\n.btn {\r\n  font-weight: 700;\r\n  height: 36px;\r\n  -moz-user-select: none;\r\n  -webkit-user-select: none;\r\n  -ms-user-select: none;\r\n      user-select: none;\r\n  cursor: default;\r\n}\r\n\r\n/*\r\n * Card component\r\n */\r\n\r\n.card {\r\n  background-color: #F7F7F7;\r\n  /* just in case there no content*/\r\n  padding: 20px 25px 30px;\r\n  margin: 0 auto 25px;\r\n  margin-top: 50px;\r\n  /* shadows and rounded borders */\r\n  border-radius: 2px;\r\n  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.profile-img-card {\r\n  width: 96px;\r\n  height: 96px;\r\n  margin: 0 auto 10px;\r\n  display: block;\r\n  border-radius: 50%;\r\n}\r\n\r\n/*\r\n * Form styles\r\n */\r\n\r\n.profile-name-card {\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n  text-align: center;\r\n  margin: 10px 0 0;\r\n  min-height: 1em;\r\n}\r\n\r\n.reauth-email {\r\n  display: block;\r\n  color: #404040;\r\n  line-height: 2;\r\n  margin-bottom: 10px;\r\n  font-size: 14px;\r\n  text-align: center;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n  -webkit-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.form-signin #inputEmail,\r\n.form-signin #inputPassword {\r\n  direction: ltr;\r\n  height: 44px;\r\n  font-size: 16px;\r\n}\r\n\r\n.form-signin input[type=email],\r\n.form-signin input[type=password],\r\n.form-signin input[type=text],\r\n.form-signin button {\r\n  width: 100%;\r\n  display: block;\r\n  margin-bottom: 10px;\r\n  z-index: 1;\r\n  position: relative;\r\n  -webkit-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.form-signin .form-control:focus {\r\n  border-color: rgb(104, 145, 162);\r\n  outline: 0;\r\n  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgb(104, 145, 162);\r\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgb(104, 145, 162);\r\n}\r\n\r\n.btn.btn-signin {\r\n  /*background-color: #4d90fe;\r\n  background-color: rgb(104, 145, 162);*/\r\n  background-color: rgb(127, 205, 236);\r\n  /* background-color: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));*/\r\n  padding: 0px;\r\n  font-weight: 700;\r\n  font-size: 14px;\r\n  height: 36px;\r\n  border-radius: 3px;\r\n  border: none;\r\n  -webkit-transition: all 0.218s;\r\n  transition: all 0.218s;\r\n}\r\n\r\n.btn.btn-signin:hover,\r\n.btn.btn-signin:active,\r\n.btn.btn-signin:focus {\r\n  /* background-color: rgb(12, 97, 33); */\r\n  background-color: rgb(116, 160, 177);\r\n}\r\n\r\n.forgot-password {\r\n  color: rgb(104, 145, 162);\r\n}\r\n\r\n.forgot-password:hover,\r\n.forgot-password:active,\r\n.forgot-password:focus{\r\n  color: rgb(12, 97, 33);\r\n}\r\n\r\n.portfolio-item {\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.pagination {\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.tick text{\r\n  font-size: 12px;\r\n}\r\n\r\n.axis path,\r\n.axis line {\r\n  fill: none;\r\n  stroke: #4C5554;\r\n  stroke-width: 1;\r\n}\r\n\r\n.x.axis .tick line{\r\ndisplay: none\r\n}\r\n\r\n.domain{\r\n    display: block !important;\r\n    stroke: #4C5554 !important;\r\n     stroke-width: 2 !important;\r\n}\r\n\r\n/******** Page CSS *********/\r\n\r\n.profile-img-card {\r\n  width: 200px;\r\n  height: 65px;\r\n  margin: 0 auto 10px;\r\n  display: block;\r\n  border-radius: 50%;\r\n}\r\n\r\n.fixed-top {\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    left: 0;\r\n    z-index: 1030;\r\n}\r\n\r\n.bg-dark {\r\n    background-color: #1286da !important;\r\n    margin-bottom:0px;\r\n        border-radius: 0px;\r\n}\r\n\r\n@media (min-width: 992px){\r\n.navbar-expand-lg {\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n    -ms-flex-flow: row nowrap;\r\n    flex-flow: row nowrap;\r\n    -webkit-box-pack: start;\r\n    -ms-flex-pack: start;\r\n    justify-content: flex-start;\r\n}\r\n}\r\n\r\n.navbar-brand {\r\n    display: inline-block;\r\n    padding-top: .3125rem;\r\n    padding-bottom: .3125rem;\r\n    margin-right: 1rem;\r\n    font-size: 1.25rem;\r\n    line-height: inherit;\r\n    white-space: nowrap;\r\n        height: auto\r\n}\r\n\r\n.navbar {\r\n    position: relative;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n    flex-wrap: wrap;\r\n    -webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    -webkit-box-pack: justify;\r\n    -ms-flex-pack: justify;\r\n    justify-content: space-between;\r\n    padding: .5rem 1rem;\r\n}\r\n\r\n@media (min-width: 992px){\r\n.navbar-expand-lg>.container, .navbar-expand-lg>.container-fluid {\r\n    -ms-flex-wrap: nowrap;\r\n    flex-wrap: nowrap;\r\n}\r\n}\r\n\r\n.navbar>.container, .navbar>.container-fluid {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n    flex-wrap: wrap;\r\n    -webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    -webkit-box-pack: justify;\r\n    -ms-flex-pack: justify;\r\n    justify-content: space-between;\r\n}\r\n\r\n.container {\r\n    width: 100%;\r\n    padding-right: 15px;\r\n    padding-left: 15px;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n}\r\n\r\n.navbar-toggler:not(:disabled):not(.disabled) {\r\n    cursor: pointer;\r\n}\r\n\r\n.navbar-dark .navbar-toggler {\r\n    color: rgba(255,255,255,.5);\r\n    border-color: rgba(255,255,255,.1);\r\n}\r\n\r\n@media (min-width: 992px){\r\n.navbar-expand-lg .navbar-toggler {\r\n    display: none;\r\n}\r\n}\r\n\r\n[type=reset], [type=submit], button, html [type=button] {\r\n    -webkit-appearance: button;\r\n}\r\n\r\n.navbar-toggler {\r\n    padding: .25rem .75rem;\r\n    font-size: 1.25rem;\r\n    line-height: 1;\r\n    background-color: transparent;\r\n    border: 1px solid transparent;\r\n    border-radius: .25rem;\r\n}\r\n\r\n@media (min-width: 992px){\r\n.navbar-expand-lg .navbar-collapse {\r\n    display: -webkit-box!important;\r\n    display: -ms-flexbox!important;\r\n    display: flex!important;\r\n    -ms-flex-preferred-size: auto;\r\n    flex-basis: auto;\r\n}\r\n}\r\n\r\n.navbar-collapse {\r\n    -ms-flex-preferred-size: 100%;\r\n    flex-basis: 100%;\r\n    -webkit-box-flex: 1;\r\n    -ms-flex-positive: 1;\r\n    flex-grow: 1;\r\n    -webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n}\r\n\r\n.collapse {\r\n    display: none;\r\n}\r\n\r\n@media (min-width: 992px){\r\n.navbar-expand-lg .navbar-nav {\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n    -ms-flex-direction: row;\r\n    flex-direction: row;\r\n}\r\n}\r\n\r\n.ml-auto, .mx-auto {\r\n    margin-left: 120px !important;\r\n}\r\n\r\n.navbar-nav {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n    -ms-flex-direction: column;\r\n    flex-direction: column;\r\n    padding-left: 0;\r\n    margin-bottom: 0;\r\n    list-style: none;\r\n}\r\n\r\n@media (min-width: 992px){\r\n.navbar-expand-lg .navbar-nav {\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n    -ms-flex-direction: row;\r\n    flex-direction: row;\r\n}\r\n}\r\n\r\n.navbar-dark .navbar-nav .active>.nav-link, .navbar-dark .navbar-nav .nav-link.active, .navbar-dark .navbar-nav .nav-link.show, .navbar-dark .navbar-nav .show>.nav-link {\r\n    color: #fff;\r\n    text-decoration: none !important;\r\n}\r\n\r\n.navbar-dark .navbar-nav .nav-link {\r\n    color: #ffffff;\r\n}\r\n\r\n.nav > li > a:hover, .nav > li > a:focus ,\r\n.navbar-nav > li:hover, .nav > li > a:focus{\r\n    text-decoration: none !important;\r\n    background-color: #4283bb;\r\n}\r\n\r\n@media (min-width: 992px){\r\n.navbar-expand-lg .navbar-nav .nav-link {\r\n    padding-right: .5rem;\r\n    padding-left: .5rem;\r\n}\r\n}\r\n\r\n.navbar-nav .nav-link {\r\n    padding-right: 0;\r\n    padding-left: 0;\r\n}\r\n\r\n.navbar-nav > li {\r\n    float: left;\r\n    padding: 10px 15px;\r\n}\r\n\r\n.navbar-right{ margin-left: auto !important;}\r\n\r\n@media (min-width: 1200px){\r\n.container {\r\n    max-width: 1140px;\r\n}\r\n}\r\n\r\n.card {\r\n    background-color: #F7F7F7;\r\n    padding: 20px 25px 30px;\r\n    margin: 0px 0 0 0;\r\n    /* margin-top: 50px; */\r\n    border-radius: 2px;\r\n    -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n            box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.portfolio-item {\r\n    margin-top: 30px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\nul.recentsearch {\r\n                    width: 100%;\r\n                    padding: 0;\r\n                    margin: 0px;\r\n                    list-style-type: none;\r\n                }\r\n\r\nul.recentsearch li {\r\n                    width: 100%;\r\n                    padding: 0 0 10px 0;\r\n                    margin: 0px;\r\n                }\r\n\r\n.cardTitlebar{background-color: #1286da;\r\n                  padding: 10px 25px 1px;\r\n                  margin: 0px 0 0 0;\r\n                  border-radius: 2px;\r\n                  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n                  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n                  color: #ffffff;}\r\n\r\n.serchHeight{height:36px;}\r\n"

/***/ }),

/***/ "./src/app/components/dashboard-search/dashboard-search.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Navigation -->\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" href=\"#\"><img id=\"profile-img\" class=\"profile-img-card\" src=\"../../../assets/images/yes_bank_logo.png\" /></a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"#\">Home\n            <span class=\"sr-only\">(current)</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">About</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Services</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Contact</a>\n        </li>\n      </ul>\n      <ul class=\"navbar-nav navbar-right\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\"><span class=\"glyphicon glyphicon-log-in\"></span> LogOut</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<!-- Navigation -->\n<div class=\"container\">\n  <!-- Jumbotron Header -->\n  <div class=\"wrapperContainer\">\n<!--\n    <p class=\"lead\"><span class=\"name\">ABC </span>welcome to your dashboard</p>\n-->\n    <div class=\"row\">\n      <div class=\"profile_block\">\n      </div>\n      <!-- Page Content -->\n      <div class=\"container\">\n        <!-- Page Heading -->\n        <h2 class=\"my-4\">Landing page and Search Intelligence\n        </h2>\n        <div class=\"row\">\n          <div class=\"col-lg-7 \"></div>\n            <div class=\"col-sm-3 col-md-3 col-lg-5\">\n              <form class=\"navbar-form\" role=\"search\">\n                <div class=\"input-group\">\n                  <label>Cust. Id :</label><input type=\"text\" class=\"form-control serchHeight\" placeholder=\"Search\" name=\"q\">\n                  <div class=\"input-group-btn\">\n                    <button class=\"btn btn-default\" type=\"submit\"><i class=\"glyphicon glyphicon-search\"></i></button>\n                  </div>\n                </div>\n              </form>\n            </div>\n\n\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-6 portfolio-item\">\n            <div class=\"cardTitlebar\"><h4 class=\"card-title\">\n              Recent Searches\n            </h4></div>\n            <div class=\"card \">\n\n              <div class=\"card-body\">\n\n                <div style=\"width:400px;\">\n\n<ul class=\"recentsearch\">\n  <li *ngFor=\"let search of recentSearches\" >\n    <div> <label>Cust Id:</label><label>{{search.custId}}</label></div>\n    <div> <label>Name:</label><label>{{search.name}}</label></div>\n\n  </li>\n</ul>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-6 portfolio-item\">\n            <div class=\"cardTitlebar\"><h4 class=\"card-title\">\n              Favourite Customer List\n            </h4></div>\n            <div class=\"card \">\n\n              <div class=\"card-body\">\n\n                <div style=\"width:400px;\">\n\n                  <ul class=\"recentsearch\">\n                    <li *ngFor=\"let search of recentSearches\" >\n                      <div> <label>Cust Id:</label><label>{{search.custId}}</label></div>\n                      <div> <label>Name:</label><label>{{search.name}}</label></div>\n\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n          </div>\n\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/dashboard-search/dashboard-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm2015/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_dashboardSearch_service__ = __webpack_require__("./src/app/services/dashboardSearch.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let DashboardSearchComponent = class DashboardSearchComponent {
    constructor(DashboardSearchDataService, router) {
        this.DashboardSearchDataService = DashboardSearchDataService;
        this.router = router;
    }
    ngOnInit() {
        this.DashboardSearchDataService.$data.subscribe(data => {
            this.recentSearches = data;
        });
    }
};
DashboardSearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'dashboard-search',
        template: __webpack_require__("./src/app/components/dashboard-search/dashboard-search.component.html"),
        styles: [__webpack_require__("./src/app/components/dashboard-search/dashboard-search.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_dashboardSearch_service__["a" /* DashboardSearchDataService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
], DashboardSearchComponent);



/***/ }),

/***/ "./src/app/components/doughnut-chart/doughnut.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/doughnut-chart/doughnut.component.html":
/***/ (function(module, exports) {

module.exports = "<div #donutChart ></div>\n\n"

/***/ }),

/***/ "./src/app/components/doughnut-chart/doughnut.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoughnutChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm2015/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_doughnutDataService_service__ = __webpack_require__("./src/app/services/doughnutDataService.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3__ = __webpack_require__("./node_modules/d3/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let DoughnutChartComponent = class DoughnutChartComponent {
    constructor(container, doughnutDataService) {
        this.container = container;
        this.doughnutDataService = doughnutDataService;
        this.baseUrl = 'https://raw.githubusercontent.com/amanjain325/angular-2-d3-charts/master/src/';
    }
    ngAfterViewInit() {
        this.htmlElement = this.element.nativeElement;
        this.host = __WEBPACK_IMPORTED_MODULE_3_d3__["i" /* select */](this.htmlElement);
        this.doughnutDataService.getDoughnutdata().subscribe(data => {
            console.log(data);
            this.doughnutData = data;
            this.renderChart();
        });
        /*this.doughnutDataService.$data.subscribe(data => {
                   this.doughnutData = data;
                   this.renderChart();
               });
      */
    }
    renderChart() {
        let chartComponent = this;
        let imageWidth = 40;
        let imageHeight = 40;
        let width = 400;
        let height = 400;
        let radius = 250;
        let pie = __WEBPACK_IMPORTED_MODULE_3_d3__["f" /* pie */]().sort(null);
        let arc = __WEBPACK_IMPORTED_MODULE_3_d3__["a" /* arc */]()
            .outerRadius(150)
            .innerRadius(70);
        let arcNew = __WEBPACK_IMPORTED_MODULE_3_d3__["a" /* arc */]()
            .outerRadius(160)
            .innerRadius(70);
        let svg = __WEBPACK_IMPORTED_MODULE_3_d3__["i" /* select */](this.container.nativeElement).append('svg')
            .attr('width', 330)
            .attr('height', 330)
            .append('g')
            .attr('transform', 'translate(' + (width - radius + 10) + ',' + (height - radius + 10) + ')');
        let values = this.doughnutData.map(data => data.percentage);
        let Label = this.doughnutData.map(data => data.value);
        let doughnutColor = ["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"];
        let g = svg.selectAll('.arc')
            .data(pie(values))
            .enter().append('g')
            .attr('class', 'arc');
        g.append('path')
            .attr('d', arc)
            .style('stroke', 'white')
            .attr("fill", function (d, i) { return doughnutColor[i]; })
            .attr('id', function (d, i) {
            return chartComponent.doughnutData[i].event;
        });
        g.append('g')
            .attr("transform", (datum) => {
            datum.innerRadius = 0;
            datum.outerRadius = this.radius;
            return "translate(" + arc.centroid(datum) + ")";
        })
            .append('svg:image')
            .attr('xlink:href', function (d, i) {
            return chartComponent.baseUrl + chartComponent.doughnutData[i].img;
        })
            .attr('id', function (d, i) {
            return chartComponent.baseUrl + chartComponent.doughnutData[i].img;
        })
            .attr('width', imageWidth)
            .attr('height', imageHeight)
            .attr('x', -1 * imageWidth / 2)
            .attr('y', -1 * imageHeight / 2)
            .attr('cursor', 'pointer');
        svg.append('svg:image')
            .attr('id', 'center_image')
            .attr('x', -60)
            .attr('y', -60)
            .attr('width', 120)
            .attr('height', 120)
            .attr('cursor', 'pointer').attr('xlink:href', chartComponent.baseUrl + 'assets/img/6.png')
            .on('click', function click(d) {
            // alert('Middle circle clicked');
        });
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("donutChart"),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
], DoughnutChartComponent.prototype, "element", void 0);
DoughnutChartComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: "doughnut-chart",
        template: __webpack_require__("./src/app/components/doughnut-chart/doughnut.component.html"),
        styles: [__webpack_require__("./src/app/components/doughnut-chart/doughnut.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_2__services_doughnutDataService_service__["a" /* DoughnutDataService */]])
], DoughnutChartComponent);



/***/ }),

/***/ "./src/app/components/line-chart/line-chart.component.html":
/***/ (function(module, exports) {

module.exports = "<svg width=\"400\" height=\"400\"></svg>\n\n<!--<div>\n  <button (click)=\"getLinedata()\">Load profile</button>\n  {{ profile | json }}\n</div>-->\n"

/***/ }),

/***/ "./src/app/components/line-chart/line-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LineChartCompoent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm2015/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_LineDataService_service__ = __webpack_require__("./src/app/services/LineDataService.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3__ = __webpack_require__("./node_modules/d3/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let LineChartCompoent = class LineChartCompoent {
    constructor(container, LineDataService) {
        this.container = container;
        this.LineDataService = LineDataService;
        this.margin = {
            top: 5,
            right: 5,
            bottom: 60,
            left: 45
        };
    }
    ngAfterViewInit() {
        this.LineDataService.getLinedata().subscribe(data => {
            //console.log(data);
            this.data = data;
            this.initSvg();
            this.initAxis();
            this.drawAxis();
            this.drawLine();
        });
    }
    initSvg() {
        this.svg = __WEBPACK_IMPORTED_MODULE_3_d3__["i" /* select */](this.container.nativeElement)
            .select("svg");
        this.width = +this.svg.attr("width") - this.margin.left - this.margin.right;
        this.height = +this.svg.attr("height") - this.margin.top - this.margin.bottom;
        this.g = this.svg.append("g")
            .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
    }
    initAxis() {
        this.x = __WEBPACK_IMPORTED_MODULE_3_d3__["g" /* scaleBand */]()
            .rangeRound([0, this.width])
            .padding(5);
        this.y = __WEBPACK_IMPORTED_MODULE_3_d3__["h" /* scaleLinear */]()
            .rangeRound([this.height, 0]);
        this.x.domain(this.data.map((d) => d.date));
        this.y.domain([0, __WEBPACK_IMPORTED_MODULE_3_d3__["e" /* max */](this.data, (d) => d.total)]);
    }
    drawAxis() {
        this.g.append("g")
            .attr("class", "axis axis--x")
            .attr("transform", "translate(0," + this.height + ")")
            .call(__WEBPACK_IMPORTED_MODULE_3_d3__["b" /* axisBottom */](this.x))
            .selectAll("text")
            .style("text-anchor", "end")
            .attr("dx", "-.8em")
            .attr("dy", ".15em")
            .attr("transform", "rotate(-65)");
        this.g.append("g")
            .attr("class", "axis axis--y")
            .call(__WEBPACK_IMPORTED_MODULE_3_d3__["c" /* axisLeft */](this.y).ticks(6, "k"))
            .append("text")
            .attr("class", "axis-title")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", "0.71em")
            .attr("text-anchor", "end")
            .call(__WEBPACK_IMPORTED_MODULE_3_d3__["b" /* axisBottom */](this.y));
    }
    drawLine() {
        //console.log(this.data);
        this.valueline = __WEBPACK_IMPORTED_MODULE_3_d3__["d" /* line */]()
            .x((d) => {
            return this.x(d['date']);
        })
            .y((d) => {
            return this.y(d['total']);
        });
        this.g.append('path')
            .datum(this.data)
            .attr("class", "path")
            .attr("fill", "none")
            .attr("stroke", "#a05d56")
            .attr("stroke-width", 1.5)
            .attr("d", this.valueline(this.data));
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
    __metadata("design:type", Array)
], LineChartCompoent.prototype, "data", void 0);
LineChartCompoent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'line-chart',
        template: __webpack_require__("./src/app/components/line-chart/line-chart.component.html")
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_2__services_LineDataService_service__["a" /* LineDataService */]])
], LineChartCompoent);



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "/*\n * Specific styles of signin component\n */\n/*\n * General styles\n */\nbody, html {\n  height: 100%;\n /* background-repeat: no-repeat;\n  background-image: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));*/\n  background-color: #717e84;\n}\n.card-container.card {\n  max-width: 350px;\n  padding: 40px 40px;\n}\n.btn {\n  font-weight: 700;\n  height: 36px;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n      user-select: none;\n  cursor: default;\n}\n/*\n * Card component\n */\n.card {\n  background-color: #F7F7F7;\n  /* just in case there no content*/\n  padding: 20px 25px 30px;\n  margin: 0 auto 25px;\n  margin-top: 50px;\n  /* shadows and rounded borders */\n  border-radius: 2px;\n  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n}\n.profile-img-card {\n  width: 96px;\n  height: 96px;\n  margin: 0 auto 10px;\n  display: block;\n  border-radius: 50%;\n}\n/*\n * Form styles\n */\n.profile-name-card {\n  font-size: 16px;\n  font-weight: bold;\n  text-align: center;\n  margin: 10px 0 0;\n  min-height: 1em;\n}\n.reauth-email {\n  display: block;\n  color: #404040;\n  line-height: 2;\n  margin-bottom: 10px;\n  font-size: 14px;\n  text-align: center;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.form-signin #inputEmail,\n.form-signin #inputPassword {\n  direction: ltr;\n  height: 44px;\n  font-size: 16px;\n}\n.form-signin input[type=email],\n.form-signin input[type=password],\n.form-signin input[type=text],\n.form-signin button {\n  width: 100%;\n  display: block;\n  margin-bottom: 10px;\n  z-index: 1;\n  position: relative;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.form-signin .form-control:focus {\n  border-color: rgb(104, 145, 162);\n  outline: 0;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgb(104, 145, 162);\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgb(104, 145, 162);\n}\n.btn.btn-signin {\n  /*background-color: #4d90fe;\n  background-color: rgb(104, 145, 162);*/\n  background-color: rgb(127, 205, 236);\n  /* background-color: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));*/\n  padding: 0px;\n  font-weight: 700;\n  font-size: 14px;\n  height: 36px;\n  border-radius: 3px;\n  border: none;\n  -webkit-transition: all 0.218s;\n  transition: all 0.218s;\n}\n.btn.btn-signin:hover,\n.btn.btn-signin:active,\n.btn.btn-signin:focus {\n  /* background-color: rgb(12, 97, 33); */\n  background-color: rgb(116, 160, 177);\n}\n.forgot-password {\n  color: rgb(104, 145, 162);\n}\n.forgot-password:hover,\n.forgot-password:active,\n.forgot-password:focus{\n  color: rgb(12, 97, 33);\n}\n.portfolio-item {\n  margin-bottom: 30px;\n}\n.pagination {\n  margin-bottom: 30px;\n}\n.tick text{\n  font-size: 12px;\n}\n.axis path,\n.axis line {\n  fill: none;\n  stroke: #4C5554;\n  stroke-width: 1;\n}\n.x.axis .tick line{\ndisplay: none\n}\n.domain{\n    display: block !important;\n    stroke: #4C5554 !important;\n     stroke-width: 2 !important;\n}\n/******** Page CSS *********/\n.profile-img-card {\n  width: 200px;\n  height: 65px;\n  margin: 0 auto 10px;\n  display: block;\n  border-radius: 50%;\n}\n.fixed-top {\n    position: fixed;\n    top: 0;\n    right: 0;\n    left: 0;\n    z-index: 1030;\n}\n.bg-dark {\n    background-color: #48515887!important;\n}\n@media (min-width: 992px){\n.navbar-expand-lg {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -ms-flex-flow: row nowrap;\n    flex-flow: row nowrap;\n    -webkit-box-pack: start;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n}\n}\n.navbar-brand {\n    display: inline-block;\n    padding-top: .3125rem;\n    padding-bottom: .3125rem;\n    margin-right: 1rem;\n    font-size: 1.25rem;\n    line-height: inherit;\n    white-space: nowrap;\n        height: auto\n}\n.navbar {\n    position: relative;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n    flex-wrap: wrap;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    justify-content: space-between;\n    padding: .5rem 1rem;\n}\n@media (min-width: 992px){\n.navbar-expand-lg>.container, .navbar-expand-lg>.container-fluid {\n    -ms-flex-wrap: nowrap;\n    flex-wrap: nowrap;\n}\n}\n.navbar>.container, .navbar>.container-fluid {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n    flex-wrap: wrap;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    justify-content: space-between;\n}\n.container {\n    width: 100%;\n    padding-right: 15px;\n    padding-left: 15px;\n    margin-right: auto;\n    margin-left: auto;\n}\n.navbar-toggler:not(:disabled):not(.disabled) {\n    cursor: pointer;\n}\n.navbar-dark .navbar-toggler {\n    color: rgba(255,255,255,.5);\n    border-color: rgba(255,255,255,.1);\n}\n@media (min-width: 992px){\n.navbar-expand-lg .navbar-toggler {\n    display: none;\n}\n}\n[type=reset], [type=submit], button, html [type=button] {\n    -webkit-appearance: button;\n}\n.navbar-toggler {\n    padding: .25rem .75rem;\n    font-size: 1.25rem;\n    line-height: 1;\n    background-color: transparent;\n    border: 1px solid transparent;\n    border-radius: .25rem;\n}\n@media (min-width: 992px){\n.navbar-expand-lg .navbar-collapse {\n    display: -webkit-box!important;\n    display: -ms-flexbox!important;\n    display: flex!important;\n    -ms-flex-preferred-size: auto;\n    flex-basis: auto;\n}\n}\n.navbar-collapse {\n    -ms-flex-preferred-size: 100%;\n    flex-basis: 100%;\n    -webkit-box-flex: 1;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n}\n.collapse {\n    display: none;\n}\n@media (min-width: 992px){\n.navbar-expand-lg .navbar-nav {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: row;\n    flex-direction: row;\n}\n}\n.ml-auto, .mx-auto {\n    margin-left: 120px !important;\n}\n.navbar-nav {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    padding-left: 0;\n    margin-bottom: 0;\n    list-style: none;\n}\n@media (min-width: 992px){\n.navbar-expand-lg .navbar-nav {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: row;\n    flex-direction: row;\n}\n}\n.navbar-dark .navbar-nav .active>.nav-link, .navbar-dark .navbar-nav .nav-link.active, .navbar-dark .navbar-nav .nav-link.show, .navbar-dark .navbar-nav .show>.nav-link {\n    color: #fff;\n    text-decoration: none !important;\n}\n.navbar-dark .navbar-nav .nav-link {\n    color: #ffffff;\n}\n.nav > li > a:hover, .nav > li > a:focus ,\n.navbar-nav > li:hover, .nav > li > a:focus{\n    text-decoration: none !important;\n    background-color: #4283bb;\n}\n@media (min-width: 992px){\n.navbar-expand-lg .navbar-nav .nav-link {\n    padding-right: .5rem;\n    padding-left: .5rem;\n}\n}\n.navbar-nav .nav-link {\n    padding-right: 0;\n    padding-left: 0;\n}\n.navbar-nav > li {\n    float: left;\n    padding: 10px 15px;\n}\n.navbar-right{ margin-left: auto !important;}\n@media (min-width: 1200px){\n.container {\n    max-width: 1140px;\n}\n}\n"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n<div class=\"container\">\n  <div class=\"card card-container\">\n    <img id=\"profile-img\" class=\"profile-img-card\" src=\"../../../assets/images/yes_bank_logo.png\" />\n\n    <!--<p class=\"lead\"> Dashboard\n      </p>-->\n\n    <p id=\"profile-name\" class=\"profile-name-card\"></p>\n\n      <form name=\"form-signin\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\n        <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\n      <span id=\"reauth-email\" class=\"reauth-email\"></span>\n      <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" class=\"form-control\" id=\"username\" name=\"username\" pattern=\"[^ @]*@[^ @]*\" [(ngModel)]=\"user.username\" #username=\"ngModel\" required />\n        <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">an valid email is required</div>\n      </div>\n      <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" [(ngModel)]=\"user.password\" #password=\"ngModel\" required />\n        <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n      </div>\n      <div id=\"remember\" class=\"checkbox\">\n\n      </div>\n      <button class=\"btn btn-lg btn-primary btn-block btn-signin\" type=\"submit\">Sign in</button>\n    </form><!-- /form -->\n      <a [routerLink]=\"['/register']\" class=\"btn btn-link\">Create new Account!</a>\n  </div><!-- /card-container -->\n</div><!-- /container -->\n\n\n\n\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_model_user__ = __webpack_require__("./src/app/model/model.user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm2015/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let LoginComponent = class LoginComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.user = new __WEBPACK_IMPORTED_MODULE_1__model_model_user__["a" /* User */]();
    }
    ngOnInit() { }
    login() {
        this.authService.logIn(this.user)
            .subscribe(data => {
            this.router.navigate(['/dashboard']);
        }, err => {
            this.errorMessage = "Username or password is incorrect";
            this.router.navigate(['/']);
        });
        //  this.router.navigateByUrl('/dashboard');
    }
};
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("./src/app/components/login/login.component.html"),
        styles: [__webpack_require__("./src/app/components/login/login.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
], LoginComponent);



/***/ }),

/***/ "./src/app/components/pie-chart/pie.component.css":
/***/ (function(module, exports) {

module.exports = "/*\n * Specific styles of signin component\n */\n/*\n * General styles\n */\nbody, html {\n  height: 100%;\n  background-repeat: no-repeat;\n /* background-image: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));*/\n background-image: -webkit-gradient(linear, left top, left bottom, from(rgb(104, 145, 162)), to(rgb(95, 121, 102)));\n background-image: linear-gradient(rgb(104, 145, 162), rgb(95, 121, 102));\n}\n.card-container.card {\n  max-width: 350px;\n  padding: 40px 40px;\n}\n.btn {\n  font-weight: 700;\n  height: 36px;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n      user-select: none;\n  cursor: default;\n}\n/*\n * Card component\n */\n.card {\n  background-color: #F7F7F7;\n  /* just in case there no content*/\n  padding: 20px 25px 30px;\n  margin: 0 auto 25px;\n  margin-top: 50px;\n  /* shadows and rounded borders */\n  border-radius: 2px;\n  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n}\n.profile-img-card {\n  width: 96px;\n  height: 96px;\n  margin: 0 auto 10px;\n  display: block;\n  border-radius: 50%;\n}\n/*\n * Form styles\n */\n.profile-name-card {\n  font-size: 16px;\n  font-weight: bold;\n  text-align: center;\n  margin: 10px 0 0;\n  min-height: 1em;\n}\n.reauth-email {\n  display: block;\n  color: #404040;\n  line-height: 2;\n  margin-bottom: 10px;\n  font-size: 14px;\n  text-align: center;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.form-signin #inputEmail,\n.form-signin #inputPassword {\n  direction: ltr;\n  height: 44px;\n  font-size: 16px;\n}\n.form-signin input[type=email],\n.form-signin input[type=password],\n.form-signin input[type=text],\n.form-signin button {\n  width: 100%;\n  display: block;\n  margin-bottom: 10px;\n  z-index: 1;\n  position: relative;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.form-signin .form-control:focus {\n  border-color: rgb(104, 145, 162);\n  outline: 0;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgb(104, 145, 162);\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgb(104, 145, 162);\n}\n.btn.btn-signin {\n  /*background-color: #4d90fe;\n  background-color: rgb(104, 145, 162);*/\n  background-color: rgb(127, 205, 236);\n  /* background-color: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));*/\n  padding: 0px;\n  font-weight: 700;\n  font-size: 14px;\n  height: 36px;\n  border-radius: 3px;\n  border: none;\n  -webkit-transition: all 0.218s;\n  transition: all 0.218s;\n}\n.btn.btn-signin:hover,\n.btn.btn-signin:active,\n.btn.btn-signin:focus {\n  /* background-color: rgb(12, 97, 33); */\n  background-color: rgb(116, 160, 177);\n}\n.forgot-password {\n  color: rgb(104, 145, 162);\n}\n.forgot-password:hover,\n.forgot-password:active,\n.forgot-password:focus{\n  color: rgb(12, 97, 33);\n}\n\n"

/***/ }),

/***/ "./src/app/components/pie-chart/pie.component.html":
/***/ (function(module, exports) {

module.exports = "<div #containerPieChart></div>\n"

/***/ }),

/***/ "./src/app/components/pie-chart/pie.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PieChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("./src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3__ = __webpack_require__("./node_modules/d3/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { IData } from '../../data.interface';


let PieChartComponent = class PieChartComponent {
    constructor(dataService) {
        this.dataService = dataService;
    }
    ngAfterViewInit() {
        this.htmlElement = this.element.nativeElement;
        this.host = __WEBPACK_IMPORTED_MODULE_2_d3__["i" /* select */](this.htmlElement);
        this.dataService.getPiedata().subscribe(data => {
            // console.log(data);
            this.pieData = data;
            this.buildPie();
        });
        /* this.dataService.$data.subscribe(data => {
             this.pieData = data;
             this.buildPie();
         });*/
    }
    buildPie() {
        this.width = 400;
        this.height = 400;
        this.radius = Math.min(this.width, this.height) / 2;
        this.host.html("");
        let innerRadius = this.radius - 50;
        let outerRadius = this.radius - 10;
        this.svg = this.host.append("svg")
            .attr("viewBox", `0 0 ${this.width} ${this.height}`)
            .data([this.pieData])
            .attr('width', this.width)
            .attr('height', this.height)
            .append("g")
            .attr("transform", `translate(${this.width / 2},${this.height / 2})`)
            .append("g").attr("class", "slices")
            .append("g").attr("class", "labels")
            .append("g").attr("class", "lines");
        // console.log(this.pieData);
        /*let pie = D3.pie().value((function(d) { return d}));*/
        /* let pie = D3.pie().value((function(d) {
             return d
         }));*/
        // notice accessor receives d of type Datum
        /*let pie = D3.pie<pieData>().sort(null).value((d:pieData):number => d.CASES);*/
        /*let pie = D3.pie().sort(null).value(function(d) { return d });*/
        /* let pie = D3.pie<pieData>().value(function((d: pieData) => d));*/
        let path = __WEBPACK_IMPORTED_MODULE_2_d3__["a" /* arc */]().outerRadius(this.radius - 10).innerRadius(0);
        let label = __WEBPACK_IMPORTED_MODULE_2_d3__["a" /* arc */]().outerRadius(this.radius - 40).innerRadius(this.radius - 40);
        let values = this.pieData.map(data => data.CASES);
        let Label = this.pieData.map(data => data.QUEUE_NM);
        //console.log(values);
        // console.log(this.radius);
        /*let pie = D3.pie<pieData>().value((d: pieData) => {return (d.CASES);});*/
        let pie = __WEBPACK_IMPORTED_MODULE_2_d3__["f" /* pie */]().sort(null);
        let arc = this.svg.selectAll('.arc')
            .data(pie(values))
            .enter()
            .append('g')
            .attr('class', 'arc')
            .on("mouseover", function () {
            tooltip.style("display", null);
        });
        let tooltip = __WEBPACK_IMPORTED_MODULE_2_d3__["i" /* select */]("body").append("div")
            .attr("class", "tooltip")
            .style("opacity", 0.5);
        tooltip.append("rect")
            .attr("width", 30)
            .attr("height", 20)
            .attr("fill", "#ffffff")
            .style("opacity", 0.5);
        tooltip.append("div")
            .attr("x", 15)
            .attr("dy", "1.2em")
            .style("text-anchor", "middle")
            .attr("font-size", "1.5em")
            .attr("font-weight", "bold");
        let pieColor = ["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"];
        arc.append("path")
            .attr("d", path)
            .attr("fill", function (d, i) { return pieColor[i]; });
        arc.append("text")
            .attr("transform", (datum) => {
            datum.innerRadius = 0;
            datum.outerRadius = this.radius;
            return "translate(" + label.centroid(datum) + ")";
        })
            .text((datum, index) => this.pieData[index].QUEUE_NM + " (" + (this.pieData[index].CASES) + "%)")
            .style("fill", "#fff")
            .style("text-anchor", "middle");
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("containerPieChart"),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
], PieChartComponent.prototype, "element", void 0);
PieChartComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: "pie-chart",
        template: __webpack_require__("./src/app/components/pie-chart/pie.component.html"),
        styles: [__webpack_require__("./src/app/components/pie-chart/pie.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]])
], PieChartComponent);



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = "body { padding: 2em; }\r\n\r\n\r\n/* Shared */\r\n\r\n\r\n.loginBtn {\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  position: relative;\r\n  /* width: 13em;  - apply for fixed size */\r\n  margin: 0.2em;\r\n  padding: 0 15px 0 46px;\r\n  border: none;\r\n  text-align: left;\r\n  line-height: 34px;\r\n  white-space: nowrap;\r\n  border-radius: 0.2em;\r\n  font-size: 16px;\r\n  color: #FFF;\r\n}\r\n\r\n\r\n.loginBtn:before {\r\n  content: \"\";\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 34px;\r\n  height: 100%;\r\n}\r\n\r\n\r\n.loginBtn:focus {\r\n  outline: none;\r\n}\r\n\r\n\r\n.loginBtn:active {\r\n  -webkit-box-shadow: inset 0 0 0 32px rgba(0,0,0,0.1);\r\n          box-shadow: inset 0 0 0 32px rgba(0,0,0,0.1);\r\n}\r\n\r\n\r\n/* Facebook */\r\n\r\n\r\n.loginBtn--facebook {\r\n  background-color: #4C69BA;\r\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#4C69BA), to(#3B55A0));\r\n  background-image: linear-gradient(#4C69BA, #3B55A0);\r\n  /*font-family: \"Helvetica neue\", Helvetica Neue, Helvetica, Arial, sans-serif;*/\r\n  text-shadow: 0 -1px 0 #354C8C;\r\n}\r\n\r\n\r\n.loginBtn--facebook:before {\r\n  border-right: #364e92 1px solid;\r\n  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png') 6px 6px no-repeat;\r\n}\r\n\r\n\r\n.loginBtn--facebook:hover,\r\n.loginBtn--facebook:focus {\r\n  background-color: #5B7BD5;\r\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#5B7BD5), to(#4864B1));\r\n  background-image: linear-gradient(#5B7BD5, #4864B1);\r\n}\r\n\r\n\r\n/* Google */\r\n\r\n\r\n.loginBtn--google {\r\n  /*font-family: \"Roboto\", Roboto, arial, sans-serif;*/\r\n  background: #DD4B39;\r\n}\r\n\r\n\r\n.loginBtn--google:before {\r\n  border-right: #BB3F30 1px solid;\r\n  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png') 6px 6px no-repeat;\r\n}\r\n\r\n\r\n.loginBtn--google:hover,\r\n.loginBtn--google:focus {\r\n  background: #E74B37;\r\n}\r\n\r\n\r\nbody, html {\r\n  height: 100%;\r\n  background-repeat: no-repeat;\r\n  background-image:none;\r\n  padding: 0;\r\n}\r\n\r\n\r\n.ybl-img {\r\n  width: 200px;\r\n  height: 96px;\r\n  alignment: left;\r\n  margin: 0 auto 10px;\r\n  display: block;\r\n  border-radius: 50%;\r\n}\r\n\r\n\r\n/*\r\n * Specific styles of signin component\r\n */\r\n\r\n\r\n/*\r\n * General styles\r\n */\r\n\r\n\r\nbody, html {\r\n  height: 100%;\r\n /* background-repeat: no-repeat;\r\n  background-image: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));*/\r\n  background-color: #717e84;\r\n}\r\n\r\n\r\n.card-container.card {\r\n  max-width: 350px;\r\n  padding: 40px 40px;\r\n}\r\n\r\n\r\n.btn {\r\n  font-weight: 700;\r\n  height: 36px;\r\n  -moz-user-select: none;\r\n  -webkit-user-select: none;\r\n  -ms-user-select: none;\r\n      user-select: none;\r\n  cursor: default;\r\n}\r\n\r\n\r\n/*\r\n * Card component\r\n */\r\n\r\n\r\n.card {\r\n  background-color: #F7F7F7;\r\n  /* just in case there no content*/\r\n  padding: 20px 25px 30px;\r\n  margin: 0 auto 25px;\r\n  margin-top: 50px;\r\n  /* shadows and rounded borders */\r\n  border-radius: 2px;\r\n  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n\r\n.profile-img-card {\r\n  width: 96px;\r\n  height: 96px;\r\n  margin: 0 auto 10px;\r\n  display: block;\r\n  border-radius: 50%;\r\n}\r\n\r\n\r\n/*\r\n * Form styles\r\n */\r\n\r\n\r\n.profile-name-card {\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n  text-align: center;\r\n  margin: 10px 0 0;\r\n  min-height: 1em;\r\n}\r\n\r\n\r\n.reauth-email {\r\n  display: block;\r\n  color: #404040;\r\n  line-height: 2;\r\n  margin-bottom: 10px;\r\n  font-size: 14px;\r\n  text-align: center;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n  -webkit-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n}\r\n\r\n\r\n.form-signin #inputEmail,\r\n.form-signin #inputPassword {\r\n  direction: ltr;\r\n  height: 44px;\r\n  font-size: 16px;\r\n}\r\n\r\n\r\n.form-signin input[type=email],\r\n.form-signin input[type=password],\r\n.form-signin input[type=text],\r\n.form-signin button {\r\n  width: 100%;\r\n  display: block;\r\n  margin-bottom: 10px;\r\n  z-index: 1;\r\n  position: relative;\r\n  -webkit-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n}\r\n\r\n\r\n.form-signin .form-control:focus {\r\n  border-color: rgb(104, 145, 162);\r\n  outline: 0;\r\n  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgb(104, 145, 162);\r\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgb(104, 145, 162);\r\n}\r\n\r\n\r\n.btn.btn-signin {\r\n  /*background-color: #4d90fe;\r\n  background-color: rgb(104, 145, 162);*/\r\n  background-color: rgb(127, 205, 236);\r\n  /* background-color: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));*/\r\n  padding: 0px;\r\n  font-weight: 700;\r\n  font-size: 14px;\r\n  height: 36px;\r\n  border-radius: 3px;\r\n  border: none;\r\n  -webkit-transition: all 0.218s;\r\n  transition: all 0.218s;\r\n}\r\n\r\n\r\n.btn.btn-signin:hover,\r\n.btn.btn-signin:active,\r\n.btn.btn-signin:focus {\r\n  /* background-color: rgb(12, 97, 33); */\r\n  background-color: rgb(116, 160, 177);\r\n}\r\n\r\n\r\n.forgot-password {\r\n  color: rgb(104, 145, 162);\r\n}\r\n\r\n\r\n.forgot-password:hover,\r\n.forgot-password:active,\r\n.forgot-password:focus{\r\n  color: rgb(12, 97, 33);\r\n}\r\n\r\n\r\n.portfolio-item {\r\n  margin-bottom: 30px;\r\n}\r\n\r\n\r\n.pagination {\r\n  margin-bottom: 30px;\r\n}\r\n\r\n\r\n.tick text{\r\n  font-size: 12px;\r\n}\r\n\r\n\r\n.axis path,\r\n.axis line {\r\n  fill: none;\r\n  stroke: #4C5554;\r\n  stroke-width: 1;\r\n}\r\n\r\n\r\n.x.axis .tick line{\r\ndisplay: none\r\n}\r\n\r\n\r\n.domain{\r\n    display: block !important;\r\n    stroke: #4C5554 !important;\r\n     stroke-width: 2 !important;\r\n}\r\n\r\n\r\n/******** Page CSS *********/\r\n\r\n\r\n.profile-img-card {\r\n  width: 200px;\r\n  height: 65px;\r\n  margin: 0 auto 10px;\r\n  display: block;\r\n  border-radius: 50%;\r\n}\r\n\r\n\r\n.fixed-top {\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    left: 0;\r\n    z-index: 1030;\r\n}\r\n\r\n\r\n.bg-dark {\r\n    background-color: #48515887!important;\r\n}\r\n\r\n\r\n@media (min-width: 992px){\r\n.navbar-expand-lg {\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n    -ms-flex-flow: row nowrap;\r\n    flex-flow: row nowrap;\r\n    -webkit-box-pack: start;\r\n    -ms-flex-pack: start;\r\n    justify-content: flex-start;\r\n}\r\n}\r\n\r\n\r\n.navbar-brand {\r\n    display: inline-block;\r\n    padding-top: .3125rem;\r\n    padding-bottom: .3125rem;\r\n    margin-right: 1rem;\r\n    font-size: 1.25rem;\r\n    line-height: inherit;\r\n    white-space: nowrap;\r\n        height: auto\r\n}\r\n\r\n\r\n.navbar {\r\n    position: relative;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n    flex-wrap: wrap;\r\n    -webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    -webkit-box-pack: justify;\r\n    -ms-flex-pack: justify;\r\n    justify-content: space-between;\r\n    padding: .5rem 1rem;\r\n}\r\n\r\n\r\n@media (min-width: 992px){\r\n.navbar-expand-lg>.container, .navbar-expand-lg>.container-fluid {\r\n    -ms-flex-wrap: nowrap;\r\n    flex-wrap: nowrap;\r\n}\r\n}\r\n\r\n\r\n.navbar>.container, .navbar>.container-fluid {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n    flex-wrap: wrap;\r\n    -webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    -webkit-box-pack: justify;\r\n    -ms-flex-pack: justify;\r\n    justify-content: space-between;\r\n}\r\n\r\n\r\n.container {\r\n    width: 100%;\r\n    padding-right: 15px;\r\n    padding-left: 15px;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n}\r\n\r\n\r\n.navbar-toggler:not(:disabled):not(.disabled) {\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.navbar-dark .navbar-toggler {\r\n    color: rgba(255,255,255,.5);\r\n    border-color: rgba(255,255,255,.1);\r\n}\r\n\r\n\r\n@media (min-width: 992px){\r\n.navbar-expand-lg .navbar-toggler {\r\n    display: none;\r\n}\r\n}\r\n\r\n\r\n[type=reset], [type=submit], button, html [type=button] {\r\n    -webkit-appearance: button;\r\n}\r\n\r\n\r\n.navbar-toggler {\r\n    padding: .25rem .75rem;\r\n    font-size: 1.25rem;\r\n    line-height: 1;\r\n    background-color: transparent;\r\n    border: 1px solid transparent;\r\n    border-radius: .25rem;\r\n}\r\n\r\n\r\n@media (min-width: 992px){\r\n.navbar-expand-lg .navbar-collapse {\r\n    display: -webkit-box!important;\r\n    display: -ms-flexbox!important;\r\n    display: flex!important;\r\n    -ms-flex-preferred-size: auto;\r\n    flex-basis: auto;\r\n}\r\n}\r\n\r\n\r\n.navbar-collapse {\r\n    -ms-flex-preferred-size: 100%;\r\n    flex-basis: 100%;\r\n    -webkit-box-flex: 1;\r\n    -ms-flex-positive: 1;\r\n    flex-grow: 1;\r\n    -webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n}\r\n\r\n\r\n.collapse {\r\n    display: none;\r\n}\r\n\r\n\r\n@media (min-width: 992px){\r\n.navbar-expand-lg .navbar-nav {\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n    -ms-flex-direction: row;\r\n    flex-direction: row;\r\n}\r\n}\r\n\r\n\r\n.ml-auto, .mx-auto {\r\n    margin-left: 120px !important;\r\n}\r\n\r\n\r\n.navbar-nav {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n    -ms-flex-direction: column;\r\n    flex-direction: column;\r\n    padding-left: 0;\r\n    margin-bottom: 0;\r\n    list-style: none;\r\n}\r\n\r\n\r\n@media (min-width: 992px){\r\n.navbar-expand-lg .navbar-nav {\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n    -ms-flex-direction: row;\r\n    flex-direction: row;\r\n}\r\n}\r\n\r\n\r\n.navbar-dark .navbar-nav .active>.nav-link, .navbar-dark .navbar-nav .nav-link.active, .navbar-dark .navbar-nav .nav-link.show, .navbar-dark .navbar-nav .show>.nav-link {\r\n    color: #fff;\r\n    text-decoration: none !important;\r\n}\r\n\r\n\r\n.navbar-dark .navbar-nav .nav-link {\r\n    color: #ffffff;\r\n}\r\n\r\n\r\n.nav > li > a:hover, .nav > li > a:focus ,\r\n.navbar-nav > li:hover, .nav > li > a:focus{\r\n    text-decoration: none !important;\r\n    background-color: #4283bb;\r\n}\r\n\r\n\r\n@media (min-width: 992px){\r\n.navbar-expand-lg .navbar-nav .nav-link {\r\n    padding-right: .5rem;\r\n    padding-left: .5rem;\r\n}\r\n}\r\n\r\n\r\n.navbar-nav .nav-link {\r\n    padding-right: 0;\r\n    padding-left: 0;\r\n}\r\n\r\n\r\n.navbar-nav > li {\r\n    float: left;\r\n    padding: 10px 15px;\r\n}\r\n\r\n\r\n.navbar-right{ margin-left: auto !important;}\r\n\r\n\r\n@media (min-width: 1200px){\r\n.container {\r\n    max-width: 1140px;\r\n}\r\n}\r\n\r\n\r\n.card[_ngcontent-c1] {\r\n    background-color: #F7F7F7;\r\n    padding: 20px 25px 30px;\r\n    margin: 0px 0 0 0;\r\n    /* margin-top: 50px; */\r\n    border-radius: 2px;\r\n    -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n            box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n\r\n.portfolio-item[_ngcontent-c1] {\r\n    margin-top: 30px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Navigation -->\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" href=\"#\"><img id=\"profile-img\" class=\"profile-img-card\" src=\"../../../assets/images/yes_bank_logo.png\" /></a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" >Home\n            <span class=\"sr-only\">(current)</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" >About</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" >Services</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" >Contact</a>\n        </li>\n      </ul>\n      <ul class=\"navbar-nav navbar-right\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\"  (click)=\"onClick($event)\"><span class=\"glyphicon glyphicon-log-in\"></span> LogOut</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<!-- Navigation -->\n<div class=\"container\">\n  <!-- Jumbotron Header -->\n  <div class=\"jumbotron my-4\">\n    <p class=\"lead\"><span class=\"name\">ABC </span>welcome to your dashboard</p>\n    <div class=\"row\">\n      <div class=\"profile_block\">\n      </div>\n      <!-- Page Content -->\n      <div class=\"container\">\n        <!-- Page Heading -->\n        <h2 class=\"my-4\">Dashboard\n        </h2>\n        <div class=\"row\">\n          <div class=\"col-lg-6 portfolio-item\">\n            <div class=\"card h-100\">\n              <div class=\"card-body\">\n                <h4 class=\"card-title\">\n                  No. of Accounts Opened Per Year\n                </h4>\n                <div style=\"width:400px; height:400px;\">\n                  <app-d3graph></app-d3graph>\n                  <!-- <multibar-stacked></multibar-stacked>-->\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-6 portfolio-item\">\n            <div class=\"card h-100\">\n              <div class=\"card-body\">\n                <h4 class=\"card-title\">\n                  Credit Card Spend Per Year\n                </h4>\n                <div style=\"width:400px; height:400px;\">\n                  <pie-chart></pie-chart>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-6 portfolio-item\">\n            <div class=\"card h-100\">\n              <div class=\"card-body\">\n                <h4 class=\"card-title\" >\n                  Banks social connect in 2016\n                </h4>\n                <div style=\"width:400px; height:400px; text-align:center; padding:47px 0;\">\n                 <doughnut-chart></doughnut-chart>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-6 portfolio-item\">\n            <div class=\"card h-100\">\n              <div class=\"card-body\">\n                <h4 class=\"card-title\">\n                  Avg.Customer Acquisition Cost | Last Month\n                </h4>\n\n                <line-chart [data]=\"lineDataset\"></line-chart>\n              </div>\n            </div>\n          </div>\n\n          <!--<div class=\"col-lg-6 portfolio-item\">\n            <div class=\"card h-100\">\n              <div class=\"card-body\">\n                <h4 class=\"card-title\">\n                  Avg.Customer Acquisition Cost | Last Month\n                </h4>\n                <funnel-graph></funnel-graph>\n\n              </div>\n            </div>\n          </div>-->\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm2015/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let ProfileComponent = class ProfileComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    ngOnInit() { }
    // login out from the app
    onClick(event) {
        event.preventDefault(); // Prevents browser following the link
        /*onBeforeUnload() {
            this.deleteAllCookies();
        };*/
        localStorage.removeItem('currentUser');
        sessionStorage.removeItem('currentUser');
        sessionStorage.removeItem('currentUserPass');
        this.router.navigate(['/login']);
        /*this.authService.logOut()
                  .subscribe(
                      data => {
                          this.router.navigate(['/login']);
                      },
                      error => {
  
                      });*/
    }
    deleteAllCookies() {
        var cookies = document.cookie.split(";");
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i];
            var eqPos = cookie.indexOf("=");
            var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        }
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('window:onbeforeunload', ['$event'])
    // login out from the app
    ,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Event]),
    __metadata("design:returntype", void 0)
], ProfileComponent.prototype, "onClick", null);
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("./src/app/components/profile/profile.component.html"),
        styles: [__webpack_require__("./src/app/components/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
], ProfileComponent);



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/***/ (function(module, exports) {

module.exports = "/*\n * Specific styles of signin component\n */\n/*\n * General styles\n */\nbody, html {\n  height: 100%;\n  background-repeat: no-repeat;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(rgb(104, 145, 162)), to(rgb(12, 97, 33)));\n  background-image: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));\n}\n.card-container.card {\n  max-width: 350px;\n  padding: 40px 40px;\n}\n.btn {\n  font-weight: 700;\n  height: 36px;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n      user-select: none;\n  cursor: default;\n}\n/*\n * Card component\n */\n.card {\n  background-color: #F7F7F7;\n  /* just in case there no content*/\n  padding: 20px 25px 30px;\n  margin: 0 auto 25px;\n  margin-top: 50px;\n  /* shadows and rounded borders */\n  border-radius: 2px;\n  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n}\n.profile-img-card {\n  width: 96px;\n  height: 96px;\n  margin: 0 auto 10px;\n  display: block;\n  border-radius: 50%;\n}\n/*\n * Form styles\n */\n.profile-name-card {\n  font-size: 16px;\n  font-weight: bold;\n  text-align: center;\n  margin: 10px 0 0;\n  min-height: 1em;\n}\n.reauth-email {\n  display: block;\n  color: #404040;\n  line-height: 2;\n  margin-bottom: 10px;\n  font-size: 14px;\n  text-align: center;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.form-signin #inputEmail,\n.form-signin #inputPassword {\n  direction: ltr;\n  height: 44px;\n  font-size: 16px;\n}\n.form-signin input[type=email],\n.form-signin input[type=password],\n.form-signin input[type=text],\n.form-signin button {\n  width: 100%;\n  display: block;\n  margin-bottom: 10px;\n  z-index: 1;\n  position: relative;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.form-signin .form-control:focus {\n  border-color: rgb(104, 145, 162);\n  outline: 0;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgb(104, 145, 162);\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgb(104, 145, 162);\n}\n.btn.btn-signin,.btn-cancel {\n  /*background-color: #4d90fe; */\n  background-color: rgb(104, 145, 162);\n  /* background-color: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));*/\n  padding: 0px;\n  font-weight: 700;\n  font-size: 14px;\n  height: 36px;\n  border-radius: 3px;\n  border: none;\n  -webkit-transition: all 0.218s;\n  transition: all 0.218s;\n}\n.btn.btn-cancel {\n  background-color: rgb(255, 34, 24);\n}\n.btn.btn-signin:hover,\n.btn.btn-signin:active,\n.btn.btn-signin:focus {\n  background-color: rgb(12, 97, 33);\n}\n.forgot-password {\n  color: rgb(104, 145, 162);\n}\n.forgot-password:hover,\n.forgot-password:active,\n.forgot-password:focus{\n  color: rgb(12, 97, 33);\n}\n"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"container\">\n  <div class=\"card card-container\">\n    <img id=\"profile-img\" class=\"profile-img-card\" src=\"//ssl.gstatic.com/accounts/ui/avatar_2x.png\" />\n    <p id=\"profile-name\" class=\"profile-name-card\"></p>\n\n    <form name=\"form\" (ngSubmit)=\"f.form.valid && register()\" #f=\"ngForm\" novalidate>\n      <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\n      <span id=\"reauth-email\" class=\"reauth-email\"></span>\n      <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !fullName.valid }\">\n        <label for=\"fullName\">Full Name</label>\n        <input type=\"text\" class=\"form-control\" name=\"fullName\" id=\"fullName\" [(ngModel)]=\"user.fullName\" #fullName=\"ngModel\" required />\n        <div *ngIf=\"f.submitted && !fullName.valid\" class=\"help-block\">The full Name is required</div>\n      </div>\n      <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n        <label for=\"username\">Email Address</label>\n        <input type=\"text\" class=\"form-control\" name=\"username\" id=\"username\" pattern=\"[^ @]*@[^ @]*\" [(ngModel)]=\"user.username\" #username=\"ngModel\" required />\n        <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">\n\n          <div *ngIf=\"username.errors.required\">\n            Email is required.\n          </div>\n          <div *ngIf=\"username.errors.pattern\">\n            A valid email address is required\n          </div>\n\n        </div>\n      </div>\n      <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" class=\"form-control\" name=\"password\" id=\"password\"[(ngModel)]=\"user.password\" #password=\"ngModel\" required minlength=\"4\" />\n        <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">\n\n          <div *ngIf=\"password.errors.required\">\n            password is required.\n          </div>\n          <div *ngIf=\"password.errors.minlength\">\n            password must be at least 4 characters long.\n          </div>\n\n        </div>\n      </div>\n      <div id=\"remember\" class=\"checkbox\">\n\n      </div>\n      <button class=\"btn btn-lg btn-primary btn-block btn-signin\" type=\"submit\">Create Account</button>\n      <button [routerLink]=\"['/login']\" class=\"btn btn-lg btn-danger btn-block btn-cancel\" type=\"button\">Cancel</button>\n\n    </form><!-- /form -->\n\n  </div><!-- /card-container -->\n</div><!-- /container -->\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_model_user__ = __webpack_require__("./src/app/model/model.user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_account_service__ = __webpack_require__("./src/app/services/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm2015/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let RegisterComponent = class RegisterComponent {
    constructor(accountService, router) {
        this.accountService = accountService;
        this.router = router;
        this.user = new __WEBPACK_IMPORTED_MODULE_1__model_model_user__["a" /* User */]();
    }
    ngOnInit() { }
    register() {
        this.accountService.createAccount(this.user).subscribe(data => {
            this.router.navigate(['/login']);
        }, err => {
            console.log(err);
            this.errorMessage = "username already exist";
        });
    }
};
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("./src/app/components/register/register.component.html"),
        styles: [__webpack_require__("./src/app/components/register/register.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_account_service__["a" /* AccountService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
], RegisterComponent);



/***/ }),

/***/ "./src/app/d3-axis.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3AxisDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("./node_modules/d3/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let D3AxisDirective = class D3AxisDirective {
    constructor(el) {
        this.el = el;
        this.orientation = 'horizontal';
        this.initialized = false;
    }
    drawAxis() {
        switch (this.orientation) {
            case 'horizontal':
                __WEBPACK_IMPORTED_MODULE_1_d3__["i" /* select */](this.el.nativeElement).call(__WEBPACK_IMPORTED_MODULE_1_d3__["b" /* axisBottom */](this.scale));
                break;
            case 'vertical':
                __WEBPACK_IMPORTED_MODULE_1_d3__["i" /* select */](this.el.nativeElement).call(__WEBPACK_IMPORTED_MODULE_1_d3__["c" /* axisLeft */](this.scale));
        }
    }
    ngAfterViewInit() {
        // all the Inputs will be set before this gets called.
        // D3 needs to wait for view init to modify it
        this.initialized = true;
        this.drawAxis();
    }
    ngOnChanges() {
        if (this.initialized) {
            this.drawAxis();
        }
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
    __metadata("design:type", Object)
], D3AxisDirective.prototype, "scale", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
    __metadata("design:type", String)
], D3AxisDirective.prototype, "orientation", void 0);
D3AxisDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
        selector: '[appD3Axis]'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
], D3AxisDirective);



/***/ }),

/***/ "./src/app/model/model.user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class User {
    constructor() {
        this.username = "";
        this.password = "";
        this.fullName = "";
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = User;



/***/ }),

/***/ "./src/app/services/LineDataService.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LineDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm2015/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm2015/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let LineDataService = class LineDataService {
    //let response;
    //currentUser:string;
    constructor(http, authService, router) {
        this.http = http;
        this.authService = authService;
        this.router = router;
        //  this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    getLinedata() {
        let headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Accept', 'application/json');
        var base64Credential = btoa(sessionStorage.getItem('currentUser') + ':' + sessionStorage.getItem('currentUserPass'));
        headers.append("Authorization", "Basic " + base64Credential);
        let options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]();
        options.headers = headers;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */].API_URL + "/customer/getline", options)
            .map(res => res.json());
        //  private dataSubject = new BehaviorSubject<lineData[]>(this.lineData);
        //  $data = this.dataSubject.asObservable();
    }
};
LineDataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
], LineDataService);



/***/ }),

/***/ "./src/app/services/account.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let AccountService = class AccountService {
    constructor(http) {
        this.http = http;
    }
    createAccount(user) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */].API_URL + '/account/register', user)
            .map(resp => resp.json());
    }
};
AccountService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], AccountService);



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_model_user__ = __webpack_require__("./src/app/model/model.user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm2015/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm2015/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import * as jwt_decode from 'jwt-decode';
//export const TOKEN_NAME: string = 'jwt_token';
let AuthService = class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        /*
        private url: string = 'api/auth';
        private headers = new Headers({ 'Content-Type': 'application/json' });
        */
        this.authenticated = false;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__model_model_user__["a" /* User */]();
    }
    logIn(user) {
        let headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Accept', 'application/json');
        headers.append('X-Requested-With', 'XMLHttpRequest');
        // creating base64 encoded String from user name and password
        var base64Credential = btoa(user.username + ':' + user.password);
        headers.append("Authorization", "Basic " + base64Credential);
        sessionStorage.setItem('currentUser', user.username);
        sessionStorage.setItem('currentUserPass', user.password);
        let options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]();
        options.headers = headers;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */].API_URL + "/customer/login", options)
            .map((response) => {
            // login successful if there's a jwt token in the response
            let user = response.json().principal; // the returned user object is a principal object
            if (user) {
                // store user details  in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
        });
    }
    logOut() {
        localStorage.removeItem('currentUser');
        sessionStorage.removeItem('currentUser');
        sessionStorage.removeItem('currentUserPass');
        //this.cookies.removeAll();
        // remove user from local storage to log user out
        /*  return this.http.post(AppComponent.API_URL + "logout", {})
            .map((response: Response) => {
              localStorage.removeItem('currentUser');
              sessionStorage.removeItem('currentUser' );
              sessionStorage.removeItem('currentUserPass');
            });*/
    }
    //To get next call with token
    nextcall(user) {
        const headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Authorization', 'Bearer ' + sessionStorage.getItem('access_token'));
        return this.http.get('/users/user', { headers })
            .map(res => res.json());
    }
};
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
], AuthService);



/***/ }),

/***/ "./src/app/services/barDataService.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm2015/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm2015/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let BarDataService = class BarDataService {
    //let response;
    //currentUser:string;
    constructor(http, authService, router) {
        this.http = http;
        this.authService = authService;
        this.router = router;
        //  this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    getBardata() {
        let headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Accept', 'application/json');
        var base64Credential = btoa(sessionStorage.getItem('currentUser') + ':' + sessionStorage.getItem('currentUserPass'));
        headers.append("Authorization", "Basic " + base64Credential);
        let options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]();
        options.headers = headers;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */].API_URL + "/customer/getbar", options)
            .map(res => res.json());
        //  private dataSubject = new BehaviorSubject<lineData[]>(this.lineData);
        //  $data = this.dataSubject.asObservable();
    }
};
BarDataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
], BarDataService);



/***/ }),

/***/ "./src/app/services/dashboardSearch.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardSearchDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm2015/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm2015/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm2015/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let DashboardSearchDataService = class DashboardSearchDataService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.dashboardSearchData = [{
                "custId": 278694,
                "name": "Anirudha Saxena"
            }, {
                "custId": 545378,
                "name": "Akashdeep Sinha"
            }, {
                "custId": 452891,
                "name": "Shikha Sharma"
            }, {
                "custId": 345671,
                "name": "Kunal Roy"
            }, {
                "custId": 995372,
                "name": "Ashish Singal"
            }, {
                "custId": 345623,
                "name": "Aru Joshi"
            }, {
                "custId": 865325,
                "name": "Anil Roy"
            }, {
                "custId": 123123,
                "name": "Abhi Shinde"
            }, {
                "custId": 497423,
                "name": "Shleey Sen"
            }, {
                "custId": 342618,
                "name": "Akashay Tripathi"
            }];
        this.dataSubject = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](this.dashboardSearchData);
        this.$data = this.dataSubject.asObservable();
    }
};
DashboardSearchDataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
], DashboardSearchDataService);



/***/ }),

/***/ "./src/app/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm2015/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm2015/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let DataService = class DataService {
    constructor(http, authService, router) {
        this.http = http;
        this.authService = authService;
        this.router = router;
        //  this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    getPiedata() {
        let headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Accept', 'application/json');
        var base64Credential = btoa(sessionStorage.getItem('currentUser') + ':' + sessionStorage.getItem('currentUserPass'));
        headers.append("Authorization", "Basic " + base64Credential);
        let options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]();
        options.headers = headers;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */].API_URL + "/customer/getpi", options)
            .map(res => res.json());
    }
};
DataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
], DataService);



/***/ }),

/***/ "./src/app/services/doughnutDataService.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoughnutDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm2015/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm2015/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let DoughnutDataService = class DoughnutDataService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
    }
    /*private doughnutData: doughnutData[] =[{
                "event": 2,
                "id": 0,
                "label": "slice 1",
                "percentage": 10,
                "value": 10,
                "img":"assets/img/1.png"
    
              }, {
                "event": 4,
                "id": 1,
                "label": "slice 2",
                "percentage": 20,
                "value": 20,
                "img":"assets/img/2.png"
              }, {
                "event": 8,
                "id": 2,
                "label": "slice 3",
                "percentage": 30,
                "value": 30,
                "img":"assets/img/3.png"
    
              }, {
                "event": 10,
                "id": 3,
                "label": "slice 4",
                "percentage": 20,
                "value": 20,
                "img":"assets/img/4.png"
              }, {
                "event": 20,
                "id": 4,
                "label": "slice 5",
                "percentage": 20,
                "value": 10,
                "img":"assets/img/5.png"
              }];
    
          private dataSubject = new BehaviorSubject<doughnutData[]>(this.doughnutData);
    
         $data = this.dataSubject.asObservable();*/
    getDoughnutdata() {
        let headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Accept', 'application/json');
        var base64Credential = btoa(sessionStorage.getItem('currentUser') + ':' + sessionStorage.getItem('currentUserPass'));
        headers.append("Authorization", "Basic " + base64Credential);
        let options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]();
        options.headers = headers;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */].API_URL + "/customer/getdoughnut", options)
            .map(res => res.json());
    }
};
DoughnutDataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
], DoughnutDataService);



/***/ }),

/***/ "./src/app/urlPermission/url.permission.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrlPermission; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm2015/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let UrlPermission = class UrlPermission {
    constructor(router) {
        this.router = router;
    }
    canActivate(route, state) {
        return true;
        /*if (localStorage.getItem('currentUser')) {
          // logged in so return true
          return true;
        }
    
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
      }*/
    }
};
UrlPermission = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
], UrlPermission);



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const environment = {
    production: true
};
/* harmony export (immutable) */ __webpack_exports__["a"] = environment;



/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm2015/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map