"use strict";
exports.__esModule = true;
exports.BuskerRecordPage = void 0;
var react_1 = require("react");
var photo_png_1 = require("../public/img/photo.png");
require("../public/css/buskerrecordpage.css");
var BuskerRecordChatroomRow = function () {
    return (react_1["default"].createElement("div", { className: 'busker-record-item-chatroom-message-row' },
        react_1["default"].createElement("img", { src: photo_png_1["default"], alt: 'Photo', className: 'busker-record-item-chatroom-message-avatar' }),
        react_1["default"].createElement("div", { className: 'busker-record-item-chatroom-message-name' }, "\u533F\u540D"),
        react_1["default"].createElement("div", { className: 'busker-record-item-chatroom-message-main' }, "\u6F14\u51FA\u7CBE\u5F69 !\u6F14\u51FA\u7CBE\u5F69 !\u6F14\u51FA\u7CBE\u5F69 !\u6F14\u51FA\u7CBE\u5F69 !\u6F14\u51FA\u7CBE\u5F69 !\u6F14\u51FA\u7CBE\u5F69\u6F14\u51FA\u7CBE\u5F69 !\u6F14\u51FA\u7CBE\u5F69 !\u6F14\u51FA\u7CBE\u5F69 !\u6F14\u51FA\u7CBE\u5F69 !\u6F14\u51FA\u7CBE\u5F69 !\u6F14\u51FA\u7CBE\u5F69\u6F14\u51FA\u7CBE\u5F69 "),
        react_1["default"].createElement("div", { className: 'busker-record-item-chatroom-message-time' }, "14:30pm")));
};
var BuskerRecordItem = function () {
    var x = 0;
    var t1 = [];
    while (x < 15) {
        t1.push(react_1["default"].createElement(BuskerRecordChatroomRow, null));
        x++;
    }
    return (react_1["default"].createElement("div", { className: 'busker-record-item' },
        react_1["default"].createElement("div", { className: 'busker-record-item-title' },
            react_1["default"].createElement("h3", { className: 'busker-record-item-title-data' }, "\u7559\u8A00\u677F"),
            react_1["default"].createElement("span", { className: 'busker-record-item-title-data' }, "\u8868\u6F14\u8005\uFF1A\u8B1D\u5B5F\u8FEA"),
            react_1["default"].createElement("span", { className: 'busker-record-item-title-data' }, "\u8868\u6F14\u6642\u9593-0527")),
        react_1["default"].createElement("div", { className: 'busker-record-item-chatroom' }, t1)));
};
var BuskerRecordListItem = function () {
    return (react_1["default"].createElement("div", { className: 'busker-record-list-title' },
        react_1["default"].createElement("span", { className: 'busker-record-list-title-data' }, "\u8868\u6F14\u8005\uFF1A\u8B1D\u5B5F\u8FEA"),
        react_1["default"].createElement("span", { className: 'busker-record-list-title-data' }, "\u8868\u6F14\u6642\u9593-0527")));
};
var BuskerRecordList = function () {
    var x = 0;
    var t1 = [];
    while (x < 15) {
        t1.push(react_1["default"].createElement(BuskerRecordListItem, null));
        x++;
    }
    return (react_1["default"].createElement("div", { className: 'busker-record-list' }, t1));
};
exports.BuskerRecordPage = function () {
    return (react_1["default"].createElement("div", { className: 'wrap' },
        react_1["default"].createElement("div", { className: 'busker-record' },
            react_1["default"].createElement("div", { className: 'busker-record-title' }, "\u7559\u8A00\u7D00\u9304"),
            react_1["default"].createElement("div", { className: 'busker-record-group' },
                react_1["default"].createElement(BuskerRecordList, null),
                react_1["default"].createElement(BuskerRecordItem, null)))));
};
