"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.ChatroomPage = void 0;
var react_1 = require("react");
var photo_png_1 = require("../public/img/photo.png");
var heart_svg_1 = require("../public/svg/heart.svg");
require("../public/css/chatroomPage.css");
var ShowList_1 = require("../components/ShowList");
var socket_1 = require("../modules/socket");
var member_1 = require("../modules/member");
exports.ChatroomPage = function () {
    var onClickMsg = function () {
        socket_1.socket.emit('msg', '123');
        console.log('socket ');
    };
    var onClickMemberInfo = function () { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, member_1.getMemberInfo()];
                case 1:
                    result = _a.sent();
                    console.log('memberInfo:', result);
                    return [2 /*return*/];
            }
        });
    }); };
    react_1.useEffect(function () {
        var test = function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                socket_1.socket.connect();
                console.log('socket ');
                return [2 /*return*/];
            });
        }); };
        test();
        return function () {
        };
    }, []);
    return (react_1["default"].createElement("div", { className: 'wrap' },
        react_1["default"].createElement("div", { className: 'chatroom' },
            react_1["default"].createElement("div", { className: 'chatroom-show-list' },
                react_1["default"].createElement(ShowList_1.ShowList, null)),
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
                        react_1["default"].createElement("button", { className: 'chatroom-content-visitor-input-btn-submit', onClick: function () { return onClickMsg(); } }, "\u9001\u51FA")))))));
};
