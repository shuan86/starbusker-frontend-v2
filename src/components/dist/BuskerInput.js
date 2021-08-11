"use strict";
exports.__esModule = true;
exports.BuskerInputBtn = exports.BuskerInputLogin = exports.BuskerInputBox = exports.BuskerInputTitle = void 0;
var react_1 = require("react");
var facebook_login_svg_1 = require("../public/svg/facebook-login.svg");
var google_login_svg_1 = require("../public/svg/google-login.svg");
var line_login_svg_1 = require("../public/svg/line-login.svg");
require("../public/css/buskerinput.css");
exports.BuskerInputTitle = function (_a) {
    var title = _a.title;
    return (react_1["default"].createElement("div", { className: 'busker-input-title' }, title));
};
exports.BuskerInputBox = function () {
    return (react_1["default"].createElement("div", { className: 'busker-input-box' },
        react_1["default"].createElement("label", { className: 'busker-input-label', htmlFor: 'name' },
            "\u59D3\u540D",
            react_1["default"].createElement("input", { type: 'text', id: 'name', value: '\u7F85\u58EB\u6B3D', className: 'busker-input-input' }))));
};
exports.BuskerInputLogin = function () {
    return (react_1["default"].createElement("div", { className: 'busker-input-item-login' },
        react_1["default"].createElement("div", { className: "busker-input-item-login-title" }, "\u5E33\u865F\u7D81\u5B9A"),
        react_1["default"].createElement("div", { className: "busker-input-item-login-group" },
            react_1["default"].createElement("img", { className: 'busker-input-item-login-icon', src: facebook_login_svg_1["default"], alt: 'FacebookLogin' }),
            react_1["default"].createElement("img", { className: 'busker-input-item-login-icon', src: google_login_svg_1["default"], alt: 'GoogleLogin' }),
            react_1["default"].createElement("img", { className: 'busker-input-item-login-icon', src: line_login_svg_1["default"], alt: 'LineLogin' }))));
};
exports.BuskerInputBtn = function (_a) {
    var title = _a.title;
    return (react_1["default"].createElement("div", { className: "busker-input-btn" }, title));
};
