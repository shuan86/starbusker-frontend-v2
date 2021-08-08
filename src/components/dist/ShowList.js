"use strict";
exports.__esModule = true;
exports.ShowListPagination = exports.ShowListMain = exports.ShowListHeader = void 0;
var react_1 = require("react");
var heart_svg_1 = require("../public/svg/heart.svg");
var photo_png_1 = require("../public/img/photo.png");
var next_page_svg_1 = require("../public/svg/next-page.svg");
require("../public/css/showlist.css");
var ShowListMember = function () {
    return (react_1["default"].createElement("div", { className: 'show-list-member' },
        react_1["default"].createElement("img", { src: photo_png_1["default"], alt: "Photo", className: 'show-list-member-photo' }),
        react_1["default"].createElement("div", { className: 'show-list-member-data' },
            react_1["default"].createElement("div", { className: 'show-list-member-name' },
                react_1["default"].createElement("span", { className: 'show-list-member-name-account' }, "\u8B1D\u5B5F\u8FEA"),
                react_1["default"].createElement("div", { className: 'show-list-member-likes' },
                    react_1["default"].createElement("img", { src: heart_svg_1["default"], alt: 'Heart', className: 'show-list-member-hearts' }),
                    react_1["default"].createElement("span", { className: 'show-list-member-likes-count' }, "120"))),
            react_1["default"].createElement("div", { className: 'show-list-member-description' }, "\u626F\u9234"))));
};
var ShowListTimeline = function () {
    return (react_1["default"].createElement("div", { className: 'show-list-timeline' },
        react_1["default"].createElement("div", { className: 'show-list--timeline-title' }, "13:30"),
        react_1["default"].createElement("div", { className: 'show-list-member-group' },
            react_1["default"].createElement(ShowListMember, null),
            react_1["default"].createElement(ShowListMember, null),
            react_1["default"].createElement(ShowListMember, null))));
};
exports.ShowListHeader = function () {
    return (react_1["default"].createElement("div", { className: 'show-list-header' },
        react_1["default"].createElement("h3", null, "\u8868\u6F14\u8CC7\u8A0A\u5217\u8868"),
        react_1["default"].createElement("select", { name: "", id: "" },
            react_1["default"].createElement("option", { value: "" }, "\u73FE\u5728"),
            react_1["default"].createElement("option", { value: "" }, "\u904E\u53BB"),
            react_1["default"].createElement("option", { value: "" }, "\u672A\u4F86"))));
};
exports.ShowListMain = function () {
    return (react_1["default"].createElement("div", { className: 'show-list-main' },
        react_1["default"].createElement(ShowListTimeline, null),
        react_1["default"].createElement(ShowListTimeline, null),
        react_1["default"].createElement(ShowListTimeline, null),
        react_1["default"].createElement(ShowListTimeline, null)));
};
exports.ShowListPagination = function () {
    return (react_1["default"].createElement("div", { className: 'show-list-pagination' },
        react_1["default"].createElement("ul", null,
            react_1["default"].createElement("li", { className: 'pagination-active' },
                react_1["default"].createElement("a", { href: "#" }, "1")),
            react_1["default"].createElement("li", null,
                react_1["default"].createElement("a", { href: "#" }, "2")),
            react_1["default"].createElement("li", null,
                react_1["default"].createElement("a", { href: "#" }, "3")),
            react_1["default"].createElement("li", null,
                react_1["default"].createElement("a", { href: "#" }, "...")),
            react_1["default"].createElement("li", null,
                react_1["default"].createElement("a", { href: "#" },
                    react_1["default"].createElement("img", { src: next_page_svg_1["default"], alt: 'NextPage' }))))));
};
