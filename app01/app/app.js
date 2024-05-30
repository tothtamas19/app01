/*
* File: app01
* Author: Tóth Tamás
* Copyright: 2024, Tóth Tamás
* Group: Szoft V
* Date: 2024-05-30
* Github: https://github.com/tothtamas19/
* Licenc: GNU GPL
*/
var Elipszoid = /** @class */ (function () {
    function Elipszoid() {
        this.bindHtml();
        this.handleEvent();
    }
    Elipszoid.prototype.bindHtml = function () {
        this.aInput = document.querySelector("#a");
        this.bInput = document.querySelector("#b");
        this.cInput = document.querySelector("#c");
        this.areaInput = document.querySelector("#area");
        this.calcButton = document.querySelector("#calcButton");
    };
    Elipszoid.prototype.handleEvent = function () {
        var _this = this;
        var _a;
        (_a = this.calcButton) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
            _this.startCalc();
        });
    };
    Elipszoid.prototype.startCalc = function () {
        var _a, _b, _c;
        var a = Number((_a = this.aInput) === null || _a === void 0 ? void 0 : _a.value);
        var b = Number((_b = this.bInput) === null || _b === void 0 ? void 0 : _b.value);
        var c = Number((_c = this.bInput) === null || _c === void 0 ? void 0 : _c.value);
        var area = this.calcArea(a, b, c);
    };
    Elipszoid.prototype.calcArea = function (a, b, c) {
        var rad = (4 / 3) * Math.PI * a * b * c;
        return rad;
    };
    return Elipszoid;
}());
new Elipszoid();
