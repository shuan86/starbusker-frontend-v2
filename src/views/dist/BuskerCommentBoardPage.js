"use strict";
exports.__esModule = true;
exports.BuskerCommentBoardPage = void 0;
var react_1 = require("react");
var BuskerSidebar_1 = require("../components/BuskerSidebar");
var photo_png_1 = require("../public/img/photo.png");
var comment_good_svg_1 = require("../public/svg/comment-good.svg");
require("../public/css/buskerCommentBoardPage.css");
var BuskerCommentBoardItem = function (_a) {
    var name = _a.name;
    return (react_1["default"].createElement("div", { className: 'busker-commentboard-item' }, name));
};
var BuskerCommentBoardContentRow = function (_a) {
    var avatar = _a.avatar, name = _a.name, text = _a.text;
    return (react_1["default"].createElement("div", { className: 'busker-commentboard-content-row' },
        react_1["default"].createElement("img", { src: avatar, className: 'busker-commentboard-content-avatar' }),
        react_1["default"].createElement("div", { className: 'busker-commentboard-content-name' }, name),
        react_1["default"].createElement("div", { className: 'busker-commentboard-content-text' }, text),
        react_1["default"].createElement("img", { src: comment_good_svg_1["default"], className: 'busker-commentboard-content-good' })));
};
exports.BuskerCommentBoardPage = function () {
    return (react_1["default"].createElement("div", { className: 'wrap' },
        react_1["default"].createElement("div", { className: 'busker-commentboard' },
            react_1["default"].createElement(BuskerSidebar_1.BuskerSidebar, null),
            react_1["default"].createElement("div", { className: 'busker-commentboard-group' },
                react_1["default"].createElement("div", { className: 'busker-commentboard-list' },
                    react_1["default"].createElement(BuskerCommentBoardItem, { name: '0705\u7559\u8A00\u677F' })),
                react_1["default"].createElement("div", { className: 'busker-commentboard-content' },
                    react_1["default"].createElement("div", { className: 'busker-commentboard-content-title' }, "0705\u7559\u8A00\u677F"),
                    react_1["default"].createElement("div", { className: 'busker-commentboard-content-group' },
                        react_1["default"].createElement(BuskerCommentBoardContentRow, { avatar: photo_png_1["default"], name: '\u66B1\u540D', text: '\u7CBE\u5F69\u6F14\u51FA\uFF01\u7CBE\u5F69\u6F14\u51FA\uFF01\u7CBE\u5F69\u6F14\u51FA\uFF01\u7CBE\u5F69\u6F14\u51FA\uFF01\u7CBE\u5F69\u6F14\u51FA\uFF01\u7CBE\u5F69\u6F14' }),
                        react_1["default"].createElement(BuskerCommentBoardContentRow, { avatar: photo_png_1["default"], name: '\u66B1\u540D', text: '\u7CBE\u5F69\u6F14\u51FA\uFF01\u7CBE\u5F69\u6F14\u51FA\uFF01\u7CBE\u5F69\u6F14\u51FA\uFF01\u7CBE\u5F69\u6F14\u51FA\uFF01\u7CBE\u5F69\u6F14\u51FA\uFF01\u7CBE\u5F69\u6F14' })))))));
};
