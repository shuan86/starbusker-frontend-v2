"use strict";
exports.__esModule = true;
exports.BuskerDataPage = void 0;
var react_1 = require("react");
var BuskerSidebar_1 = require("../components/BuskerSidebar");
require("../public/css/buskerDataPage.css");
exports.BuskerDataPage = function () {
    return (react_1["default"].createElement("div", { className: 'wrap' },
        react_1["default"].createElement("div", { className: 'busker-data' },
            react_1["default"].createElement(BuskerSidebar_1.BuskerSidebar, null),
            react_1["default"].createElement("div", { className: 'busker-data-group' },
                react_1["default"].createElement("div", { className: 'busker-data-item' },
                    react_1["default"].createElement("div", { className: 'busker-data-item-title' }, "\u6700\u65B0\u8868\u6F14\u7559\u8A00\u4EBA\u6B21"),
                    react_1["default"].createElement("div", { className: 'busker-data-item-content' })),
                react_1["default"].createElement("div", { className: 'busker-data-item' },
                    react_1["default"].createElement("div", { className: 'busker-data-item-title' }, "\u672C\u9031\u7559\u8A00\u4EBA\u6578"),
                    react_1["default"].createElement("div", { className: 'busker-data-item-content' }))))));
};
