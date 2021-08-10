"use strict";
exports.__esModule = true;
exports.LoginPage = void 0;
var react_1 = require("react");
require("../public/css/loginpage.css");
var google_login_svg_1 = require("../public/svg/google-login.svg");
var facebook_login_svg_1 = require("../public/svg/facebook-login.svg");
var line_login_svg_1 = require("../public/svg/line-login.svg");
exports.LoginPage = function () {
    return (react_1["default"].createElement("div", { className: 'wrap' },
        react_1["default"].createElement("div", { className: 'login' },
            react_1["default"].createElement("div", { className: 'login-form' },
                react_1["default"].createElement("div", { className: 'login-form-title' }, "\u767B\u5165"),
                react_1["default"].createElement("label", { htmlFor: 'login-account', className: 'login-label' },
                    "\u5E33\u865F",
                    react_1["default"].createElement("input", { type: 'text', id: 'login-account', placeholder: 'account', className: 'login-input' })),
                react_1["default"].createElement("label", { htmlFor: 'login-password', className: 'login-label' },
                    "\u5BC6\u78BC",
                    react_1["default"].createElement("input", { type: 'password', id: 'login-password', placeholder: 'password', className: 'login-input' })),
                react_1["default"].createElement("div", { className: 'login-admin' },
                    react_1["default"].createElement("a", { href: '#', className: 'login-admin-a' }, "\u5FD8\u8A18\u5BC6\u78BC"),
                    react_1["default"].createElement("a", { href: '#', className: 'login-admin-a' }, "\u986F\u793A\u5BC6\u78BC")),
                react_1["default"].createElement("button", { className: 'login-btn-send' }, "\u767B\u5165"),
                react_1["default"].createElement("div", { className: 'login-quick-title' }, "\u5FEB\u901F\u767B\u5165"),
                react_1["default"].createElement("div", { className: 'login-quick-group' },
                    react_1["default"].createElement("div", { className: 'login-quick-icon' },
                        react_1["default"].createElement("img", { src: google_login_svg_1["default"], alt: 'GoogleLogin' })),
                    react_1["default"].createElement("div", { className: 'login-quick-icon' },
                        react_1["default"].createElement("img", { src: facebook_login_svg_1["default"], alt: 'FacebookLogin' })),
                    react_1["default"].createElement("div", { className: 'login-quick-icon' },
                        react_1["default"].createElement("img", { src: line_login_svg_1["default"], alt: 'LineLogin' })))),
            react_1["default"].createElement("div", { className: 'login-create-account' },
                react_1["default"].createElement("a", { href: '#', className: 'login-create-account-a' },
                    "\u9084\u6C92\u6709\u5E33\u6236\uFF1F",
                    react_1["default"].createElement("span", { className: 'login-create-account-span' }, "\u5EFA\u7ACB\u5E33\u6236"))))));
};
