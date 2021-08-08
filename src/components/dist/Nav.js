"use strict";
exports.__esModule = true;
exports.Nav = void 0;
var react_1 = require("react");
require("../public/css/nav.css");
var react_router_dom_1 = require("react-router-dom");
var routerPath_1 = require("../modules/routerPath");
exports.Nav = function () {
    var history = react_router_dom_1.useHistory();
    return (react_1["default"].createElement("div", { className: 'nav-wrap' },
        react_1["default"].createElement("div", { className: 'nav' },
            react_1["default"].createElement("div", { className: 'nav-logo', onClick: function () { return history.push(routerPath_1.path.index); } }, "StarBusker"),
            react_1["default"].createElement("div", { className: 'nav-button' },
                react_1["default"].createElement("div", { className: 'nav-text nav-right', onClick: function () { return history.push(routerPath_1.path.index); } }, "\u9996\u9801"),
                react_1["default"].createElement("div", { className: 'nav-text', onClick: function () { return history.push(routerPath_1.path.login); } }, "\u767B\u5165"),
                react_1["default"].createElement("div", { className: 'nav-text', "data-testid": "nav-enroll", onClick: function () { return history.push(routerPath_1.path.enroll); } },
                    react_1["default"].createElement("button", { className: 'nav-btn-enroll' }, "\u8A3B\u518A"))))));
};
