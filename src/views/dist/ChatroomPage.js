"use strict";
exports.__esModule = true;
exports.ChatroomPage = void 0;
var react_1 = require("react");
var photo_png_1 = require("../public/img/photo.png");
var heart_svg_1 = require("../public/svg/heart.svg");
require("../public/css/chatroompage.css");
var ShowList_1 = require("../components/ShowList");
exports.ChatroomPage = function () {
    return (react_1["default"].createElement("div", { className: 'wrap' },
        react_1["default"].createElement("div", { className: 'chatroom' },
            react_1["default"].createElement("div", { className: 'chatroom-show-list' },
                react_1["default"].createElement(ShowList_1.ShowListHeader, null),
                react_1["default"].createElement(ShowList_1.ShowListMain, null),
                react_1["default"].createElement(ShowList_1.ShowListPagination, null)),
            react_1["default"].createElement("div", { className: 'chatroom-content' },
                react_1["default"].createElement("div", { className: 'chatroom-content-busker' },
                    react_1["default"].createElement("img", { src: photo_png_1["default"], alt: 'Photo', className: 'chatroom-content-busker-photo' }),
                    react_1["default"].createElement("div", { className: 'chatroom-content-busker-data' },
                        react_1["default"].createElement("div", { className: 'chatroom-content-busker-name' },
                            react_1["default"].createElement("span", { className: 'chatroom-content-busker-name-account' }, "\u8B1D\u5B5F\u8FEA"),
                            react_1["default"].createElement("div", { className: 'chatroom-content-busker-description' }, "\u626F\u9234"),
                            react_1["default"].createElement("div", { className: 'chatroom-content-busker-likes' },
                                react_1["default"].createElement("img", { src: heart_svg_1["default"], alt: 'Heart', className: 'chatroom-content-busker-hearts' }),
                                react_1["default"].createElement("span", { className: 'chatroom-content-busker-hearts-count' }, "120"))),
                        react_1["default"].createElement("p", { className: 'chatroom-content-busker-introduction' }, "\u591A\u9846\u626F\u9234\u540C\u6642\u6F14\u51FA\u591A\u9846\u626F\u9234\u540C\u6642\u6F14\u51FA\u591A\u9846\u626F\u9234\u540C\u6642\u6F14\u51FA\u591A\u9846\u626F\u9234\u540C\u6642\u6F14\u51FA\u591A\u9846\u626F\u9234\u540C\u6642\u6F14\u51FA\u591A\u9846\u626F\u9234\u540C\u6642\u6F14\u51FA\u591A\u9846\u626F\u9234\u540C\u6642\u6F14\u51FA\u591A\u9846\u626F\u9234\u540C\u6642\u6F14\u51FA"))),
                react_1["default"].createElement("div", { className: 'chatroom-content-visitor' },
                    react_1["default"].createElement("div", { className: 'chatroom-content-visitor-title' }, "\u7559\u8A00\u677F"),
                    react_1["default"].createElement("div", { className: 'chatroom-content-visitor-message' },
                        react_1["default"].createElement("div", { className: 'chatroom-content-visitor-message-row' },
                            react_1["default"].createElement("img", { src: photo_png_1["default"], alt: 'Photo', className: 'chatroom-content-visitor-message-avatar' }),
                            react_1["default"].createElement("div", { className: 'chatroom-content-visitor-message-name' }, "\u533F\u540D"),
                            react_1["default"].createElement("div", { className: 'chatroom-content-visitor-message-main' }, "\u6F14\u51FA\u7CBE\u5F69 !\u6F14\u51FA\u7CBE\u5F69 !\u6F14\u51FA\u7CBE\u5F69 !\u6F14\u51FA\u7CBE\u5F69 !\u6F14\u51FA\u7CBE\u5F69 !\u6F14\u51FA\u7CBE\u5F69"))),
                    react_1["default"].createElement("div", { className: 'chatroom-content-visitor-input' },
                        react_1["default"].createElement("img", { src: photo_png_1["default"], alt: 'Photo', className: 'chatroom-content-visitor-input-avatar' }),
                        react_1["default"].createElement("input", { type: 'text', placeholder: '\u6211\u8981\u7559\u8A00...', className: 'chatroom-content-visitor-input-box' }),
                        react_1["default"].createElement("button", { className: 'chatroom-content-visitor-input-btn-submit' }, "\u9001\u51FA")))))));
};
