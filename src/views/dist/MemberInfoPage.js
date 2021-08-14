"use strict";
exports.__esModule = true;
exports.MemberInfoPage = void 0;
var react_1 = require("react");
var busker_info_photo_png_1 = require("../public/img/busker-info-photo.png");
require("../public/css/buskerInfoPage.css");
var BuskerInput_1 = require("../components/BuskerInput");
exports.MemberInfoPage = function () {
    return (react_1["default"].createElement("div", { className: 'wrap' },
        react_1["default"].createElement("div", { className: 'busker-info' },
            react_1["default"].createElement(BuskerInput_1.BuskerInputTitle, { title: '\u500B\u4EBA\u8A2D\u5B9A' }),
            react_1["default"].createElement("div", { className: 'busker-info-group' },
                react_1["default"].createElement("div", { className: 'busker-info-list' },
                    react_1["default"].createElement("button", { className: 'busker-info-list-item busker-info-list-active' }, "\u57FA\u672C\u8CC7\u6599"),
                    react_1["default"].createElement("button", { className: 'busker-info-list-item' }, "\u7533\u8ACB\u6210\u70BA\u8868\u6F14\u8005")),
                react_1["default"].createElement("div", { className: 'busker-info-account' },
                    react_1["default"].createElement("div", { className: 'busker-info-account-title' }, "\u57FA\u672C\u8CC7\u6599"),
                    react_1["default"].createElement("div", { className: 'busker-info-account-group' },
                        react_1["default"].createElement("div", { className: 'busker-info-account-photo' },
                            react_1["default"].createElement("img", { src: busker_info_photo_png_1["default"], alt: 'Photo', className: 'busker-info-account-photo-photo' }),
                            react_1["default"].createElement("button", { className: 'busker-info-account-photo-btn' }, "\u66F4\u6539\u982D\u50CF")),
                        react_1["default"].createElement("div", { className: 'busker-info-account-data' },
                            react_1["default"].createElement(BuskerInput_1.BuskerInputBox, null),
                            react_1["default"].createElement(BuskerInput_1.BuskerInputBox, null),
                            react_1["default"].createElement(BuskerInput_1.BuskerInputBox, null),
                            react_1["default"].createElement(BuskerInput_1.BuskerInputBox, null),
                            react_1["default"].createElement(BuskerInput_1.BuskerInputBox, null),
                            react_1["default"].createElement(BuskerInput_1.BuskerInputLogin, null),
                            react_1["default"].createElement(BuskerInput_1.BuskerInputBtn, { title: '\u78BA\u8A8D\u4FEE\u6539' }))))))));
};
