(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["infos-infos-module"],{

/***/ "Dvi4":
/*!***********************************************!*\
  !*** ./src/app/infos/infos-routing.module.ts ***!
  \***********************************************/
/*! exports provided: InfosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfosPageRoutingModule", function() { return InfosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _infos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./infos.page */ "Wa8T");




const routes = [
    {
        path: '',
        component: _infos_page__WEBPACK_IMPORTED_MODULE_3__["InfosPage"]
    }
];
let InfosPageRoutingModule = class InfosPageRoutingModule {
};
InfosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InfosPageRoutingModule);



/***/ }),

/***/ "LmZp":
/*!***************************************!*\
  !*** ./src/app/infos/infos.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmZvcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "S8/A":
/*!***************************************!*\
  !*** ./src/app/infos/infos.module.ts ***!
  \***************************************/
/*! exports provided: InfosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfosPageModule", function() { return InfosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _infos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./infos-routing.module */ "Dvi4");
/* harmony import */ var _infos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./infos.page */ "Wa8T");







let InfosPageModule = class InfosPageModule {
};
InfosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _infos_routing_module__WEBPACK_IMPORTED_MODULE_5__["InfosPageRoutingModule"]
        ],
        declarations: [_infos_page__WEBPACK_IMPORTED_MODULE_6__["InfosPage"]]
    })
], InfosPageModule);



/***/ }),

/***/ "Wa8T":
/*!*************************************!*\
  !*** ./src/app/infos/infos.page.ts ***!
  \*************************************/
/*! exports provided: InfosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfosPage", function() { return InfosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_infos_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./infos.page.html */ "e1+I");
/* harmony import */ var _infos_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./infos.page.scss */ "LmZp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let InfosPage = class InfosPage {
    constructor() { }
    ngOnInit() {
    }
};
InfosPage.ctorParameters = () => [];
InfosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-infos',
        template: _raw_loader_infos_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_infos_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], InfosPage);



/***/ }),

/***/ "e1+I":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/infos/infos.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\" class=\"ion-no-border\">\n  <ion-toolbar no-border>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content  [fullscreen]=\"true\">\n\n  <ion-header collapse=\"condense\" class=\"ion-no-border\">\n    <ion-toolbar  >\n      <ion-title size=\"large\">Informations</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=infos-infos-module.js.map