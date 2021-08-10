"use strict";
exports.__esModule = true;
exports.HomePage = void 0;
var react_1 = require("react");
require("../public/css/homepage.css");
var ShowList_1 = require("../components/ShowList");
exports.HomePage = function () {
    return (react_1["default"].createElement("div", { className: 'wrap' },
        react_1["default"].createElement("div", { className: 'home' },
            react_1["default"].createElement("div", { className: 'home-map' }),
            react_1["default"].createElement("div", { className: 'home-show-list' },
                react_1["default"].createElement(ShowList_1.ShowListHeader, null),
                react_1["default"].createElement(ShowList_1.ShowListMain, null),
                react_1["default"].createElement(ShowList_1.ShowListPagination, null)))));
};
