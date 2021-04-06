(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["calendar-calendar-module"],{

/***/ "+PTa":
/*!*********************************************!*\
  !*** ./src/app/calendar/calendar.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-avatar {\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNhbGVuZGFyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUFDSiIsImZpbGUiOiJjYWxlbmRhci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYXZhdGFye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufSJdfQ== */");

/***/ }),

/***/ "JrV2":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/calendar/calendar.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\" class=\"ion-no-border\">\n  <ion-toolbar >\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content  [fullscreen]=\"true\">\n\n  <ion-header collapse=\"condense\" class=\"ion-no-border\">\n    <ion-toolbar  >\n      <ion-title   size=\"large\">Calendrier</ion-title>\n    </ion-toolbar>\n  </ion-header>\n<ion-content>\n\n  <ion-segment scrollable swipe-gesture=\"true\" color=\"primary\" (ionChange)=\"segmentChanged($event)\" value=\"heart\">\n    <ion-segment-button value=\"home\">\n      <p>Passé</p>\n    </ion-segment-button>\n    <ion-segment-button value=\"heart\">\n      <p>Prochainement</p>\n    </ion-segment-button>\n  </ion-segment>\n\n  <ion-list>\n    <ion-list-header>\n      Mars\n    </ion-list-header>\n\n    <ion-item>\n      <ion-avatar slot=\"start\">\n        <h2>13</h2>\n      </ion-avatar>\n      <ion-label>\n        <h2>MOM 2021</h2>\n        <h3>Meeting de marseille</h3>\n        <p>du 13 au 16 mars 2021</p>\n      </ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar slot=\"start\">\n        <h2>20</h2>\n      </ion-avatar>\n      <ion-label>\n        <h2>Vacances</h2>\n        <h3>Changement d'horaires</h3>\n        <p>du 20 au 27 mars 2021</p>\n      </ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar slot=\"start\">\n        <h2>30</h2>\n      </ion-avatar>\n      <ion-label>\n        <h2>MOM 2021</h2>\n        <h3>Meeting de marseille</h3>\n        <p>du 13 au 16 mars 2021</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header>\n      Avril\n    </ion-list-header>\n\n    <ion-item>\n      <ion-avatar slot=\"start\">\n        <img src=\"./avatar-poe.png\">\n      </ion-avatar>\n      <ion-label>\n        <h2>Poe</h2>\n        <h3>New Ride</h3>\n        <p>I just upgraded my X-Wing. Next time...</p>\n      </ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar slot=\"start\">\n        <img src=\"./avatar-ben.png\">\n      </ion-avatar>\n      <ion-label>\n        <h2>Ben</h2>\n        <h3>Move Along</h3>\n        <p>These aren't the droids you're looking for...</p>\n      </ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar slot=\"start\">\n        <img src=\"./avatar-leia.png\">\n      </ion-avatar>\n      <ion-label>\n        <h2>Leia</h2>\n        <h3>You're My Only Hope</h3>\n        <p>I've placed information vital to the survival...</p>\n      </ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar slot=\"start\">\n        <img src=\"./avatar-yoda.png\">\n      </ion-avatar>\n      <ion-label>\n        <h2>Yoda</h2>\n        <h3>Size matters not</h3>\n        <p>Do or do not. There is no try...</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n");

/***/ }),

/***/ "KIgb":
/*!*****************************************************!*\
  !*** ./src/app/calendar/calendar-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: CalendarPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarPageRoutingModule", function() { return CalendarPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _calendar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calendar.page */ "P7s2");




const routes = [
    {
        path: '',
        component: _calendar_page__WEBPACK_IMPORTED_MODULE_3__["CalendarPage"]
    }
];
let CalendarPageRoutingModule = class CalendarPageRoutingModule {
};
CalendarPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CalendarPageRoutingModule);



/***/ }),

/***/ "O51e":
/*!*********************************************!*\
  !*** ./src/app/calendar/calendar.module.ts ***!
  \*********************************************/
/*! exports provided: CalendarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarPageModule", function() { return CalendarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _calendar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calendar-routing.module */ "KIgb");
/* harmony import */ var _calendar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calendar.page */ "P7s2");







let CalendarPageModule = class CalendarPageModule {
};
CalendarPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _calendar_routing_module__WEBPACK_IMPORTED_MODULE_5__["CalendarPageRoutingModule"]
        ],
        declarations: [_calendar_page__WEBPACK_IMPORTED_MODULE_6__["CalendarPage"]]
    })
], CalendarPageModule);



/***/ }),

/***/ "P7s2":
/*!*******************************************!*\
  !*** ./src/app/calendar/calendar.page.ts ***!
  \*******************************************/
/*! exports provided: CalendarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarPage", function() { return CalendarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_calendar_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./calendar.page.html */ "JrV2");
/* harmony import */ var _calendar_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar.page.scss */ "+PTa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let CalendarPage = class CalendarPage {
    constructor() { }
    ngOnInit() {
    }
};
CalendarPage.ctorParameters = () => [];
CalendarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-calendar',
        template: _raw_loader_calendar_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_calendar_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CalendarPage);



/***/ })

}]);
//# sourceMappingURL=calendar-calendar-module.js.map