"use strict";
exports.__esModule = true;
exports.BuskerPage = void 0;
var react_1 = require("react");
var BuskerSidebar_1 = require("../components/BuskerSidebar");
require("../public/css/buskerPage.css");
var BuskerPageItem = function (_a) {
    var title = _a.title, content = _a.content;
    return (react_1["default"].createElement("div", { className: "busker-page-item" },
        react_1["default"].createElement("div", { className: "busker-page-item-title" }, title),
        react_1["default"].createElement("div", { className: "busker-page-item-content" }, content)));
};
exports.BuskerPage = function () {
    var viewCountContent = function () {
        return (react_1["default"].createElement("div", null, "viewCountContent"));
    };
    var commentCountContent = function () {
        return (react_1["default"].createElement("div", null, "commentCountContent"));
    };
    var calendarContent = function () {
        return (react_1["default"].createElement("div", null, "calendarContent"));
    };
    var newestCommentContent = function () {
        return (react_1["default"].createElement("div", null, "newestCommentContent"));
    };
    return (react_1["default"].createElement("div", { className: 'wrap' },
        react_1["default"].createElement("div", { className: "busker-page" },
            react_1["default"].createElement(BuskerSidebar_1.BuskerSidebar, null),
            react_1["default"].createElement("div", { className: "busker-page-group" },
                react_1["default"].createElement(BuskerPageItem, { title: '\u89C0\u770B\u4EBA\u6578', content: viewCountContent() }),
                react_1["default"].createElement(BuskerPageItem, { title: '\u7559\u8A00\u4EBA\u6578', content: commentCountContent() }),
                react_1["default"].createElement(BuskerPageItem, { title: '\u884C\u4E8B\u66C6', content: calendarContent() }),
                react_1["default"].createElement(BuskerPageItem, { title: '\u6700\u65B0\u7559\u8A00', content: newestCommentContent() })))));
};
