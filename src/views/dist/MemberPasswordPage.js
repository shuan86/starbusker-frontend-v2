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
exports.MemberPasswordPage = void 0;
var react_1 = require("react");
var MemberSidebar_1 = require("../components/MemberSidebar");
var BuskerInput_1 = require("../components/BuskerInput");
exports.MemberPasswordPage = function () {
    var _a = react_1.useState(''), memberPasswordFirst = _a[0], setMemberPasswordFirst = _a[1];
    var _b = react_1.useState(''), memberPasswordSecond = _b[0], setMemberPasswordSecond = _b[1];
    var _c = react_1.useState(''), memberPasswordErrorState = _c[0], setMemberPasswordErrorState = _c[1];
    //未完成＊＊＊
    var onClickSubmit = function () { return __awaiter(void 0, void 0, void 0, function () {
        var hasError, passwordError, data;
        return __generator(this, function (_a) {
            hasError = true;
            passwordError = '';
            if (memberPasswordFirst !== memberPasswordSecond) {
                passwordError = '請重新確認密碼是否輸入相同';
                hasError = false;
            }
            if (hasError) {
                data = { password: memberPasswordSecond };
                // result = await putMemberPassword(data)
            }
            setMemberPasswordErrorState(passwordError);
            return [2 /*return*/];
        });
    }); };
    //未完成＊＊＊
    return (react_1["default"].createElement("div", { className: 'wrap' },
        react_1["default"].createElement("div", { className: "member-info" },
            react_1["default"].createElement(BuskerInput_1.BuskerInputTitle, { title: '\u500B\u4EBA\u8A2D\u5B9A' }),
            react_1["default"].createElement("div", { className: "member-info-group" },
                react_1["default"].createElement(MemberSidebar_1.MemberSidebar, null),
                react_1["default"].createElement("div", { className: "member-info-account" },
                    react_1["default"].createElement("div", { className: 'member-info-account-title' }, "\u57FA\u672C\u8CC7\u6599"),
                    react_1["default"].createElement("div", { className: "member-info-password-group" },
                        react_1["default"].createElement(BuskerInput_1.BuskerInputBox, { name: 'passowrd', title: '\u65B0\u5BC6\u78BC', inputType: 'password', state: memberPasswordFirst, setState: setMemberPasswordFirst, errorState: '' }),
                        react_1["default"].createElement(BuskerInput_1.BuskerInputBox, { name: 'secondPassword', title: '\u518D\u6B21\u8F38\u5165\u5BC6\u78BC', inputType: 'password', state: memberPasswordSecond, setState: setMemberPasswordSecond, errorState: memberPasswordErrorState }),
                        react_1["default"].createElement(BuskerInput_1.BuskerInputBtn, { title: '\u66F4\u6539\u5BC6\u78BC', onClick: onClickSubmit })))))));
};
