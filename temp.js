"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var react_1 = require("react");
var ReactFlot = (function (_super) {
    __extends(ReactFlot, _super);
    function ReactFlot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ReactFlot.prototype.componentDidMount = function () {
    };
    ReactFlot.prototype.componentWillReceiveProps = function (nextProps) {
    };
    ReactFlot.prototype.draw = function (event, data) {
    };
    ReactFlot.prototype.render = function () {
        return (react_1["default"].createElement("div", null));
    };
    return ReactFlot;
}(react_1.Component));
exports["default"] = ReactFlot;
