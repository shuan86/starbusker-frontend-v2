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
exports.EnrollPage = void 0;
var react_1 = require("react");
require("../public/css/enrollPage.css");
var member_1 = require("../modules/member");
var routerPath_1 = require("../modules/routerPath");
var react_router_dom_1 = require("react-router-dom");
var EnrollInputItem = function (_a) {
    var name = _a.name, inputType = _a.inputType, state = _a.state, setState = _a.setState, errorState = _a.errorState;
    return (react_1["default"].createElement("div", { className: "enroll-item" },
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("label", { htmlFor: name, className: 'enroll-label' }, name)),
        react_1["default"].createElement("input", { type: inputType, name: name, id: name, className: 'enroll-input', placeholder: name, value: state, onChange: function (e) {
                var v = e.target.value;
                setState(v);
            } }),
        react_1["default"].createElement("div", { className: "enroll-error-msg" },
            react_1["default"].createElement("p", null, errorState))));
};
var EnrollRadioItem = function (_a) {
    var name = _a.name, state = _a.state, setState = _a.setState, errorState = _a.errorState;
    return (react_1["default"].createElement("div", { className: "enroll-item" },
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("label", { htmlFor: name }, name)),
        react_1["default"].createElement("div", { className: 'enroll-input-radio' },
            react_1["default"].createElement("label", { htmlFor: "gender1", className: 'enroll-input-radio-gender' },
                react_1["default"].createElement("input", { type: "radio", name: "gender", value: "1", id: "gender1", onChange: function (e) {
                        var v = e.target.value;
                        setState(v == '1' ? true : false);
                    } }),
                " \u7537"),
            react_1["default"].createElement("label", { htmlFor: "gender0", className: 'enroll-input-radio-gender' },
                react_1["default"].createElement("input", { type: "radio", name: "gender", value: "0", id: "gender0", onChange: function (e) {
                        var v = e.target.value;
                        setState(v == '1' ? true : false);
                    } }),
                "\u5973")),
        react_1["default"].createElement("div", { className: "enroll-error-msg" },
            react_1["default"].createElement("p", null, errorState))));
};
exports.EnrollPage = function () {
    var _a = react_1.useState('busker'), nameState = _a[0], setNameState = _a[1];
    var _b = react_1.useState(''), nameErrorState = _b[0], setNameErrorState = _b[1];
    var _c = react_1.useState('t0'), accountState = _c[0], setAccountState = _c[1];
    var _d = react_1.useState(''), accountErrorState = _d[0], setAccountErrorState = _d[1];
    var _e = react_1.useState('123'), passwordState = _e[0], setPasswordState = _e[1];
    var _f = react_1.useState(''), passwordErrorState = _f[0], setPasswordErrorState = _f[1];
    var _g = react_1.useState('123'), repeatPasswordState = _g[0], setRepeatPasswordState = _g[1];
    var _h = react_1.useState(''), repeatPasswordErrorState = _h[0], setRepeatPasswordErrorState = _h[1];
    var _j = react_1.useState('account01@email.com'), emailState = _j[0], setEmailState = _j[1];
    var _k = react_1.useState(''), emailErrorState = _k[0], setEmailErrorState = _k[1];
    var _l = react_1.useState(true), genderState = _l[0], setGenderState = _l[1];
    var _m = react_1.useState(''), genderErrorState = _m[0], setGenderErrorState = _m[1];
    var history = react_router_dom_1.useHistory();
    var onClickEnroll = function () { return __awaiter(void 0, void 0, void 0, function () {
        var memberData, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    memberData = {
                        account: accountState,
                        password: passwordState,
                        email: emailState,
                        male: genderState,
                        name: nameState
                    };
                    return [4 /*yield*/, member_1.enroll(memberData)];
                case 1:
                    result = _a.sent();
                    if (result.status == 200) {
                        //enroll sucessful
                        history.push(routerPath_1.path.login);
                    }
                    else if (result.status == 400) {
                        //enroll parameter error
                    }
                    else if (result.status == 401) {
                        //enroll fail:membe is exist
                    }
                    else if (result.status == 500) {
                        //server is busying
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement("div", { className: "wrap", "data-testid": "newsPage" },
        react_1["default"].createElement("div", { className: "enroll" },
            react_1["default"].createElement("h1", { className: "enroll-header" }, "\u8A3B\u518A"),
            react_1["default"].createElement(EnrollInputItem, { name: '\u59D3\u540D', inputType: 'text', state: nameState, setState: setNameState, errorState: nameErrorState }),
            react_1["default"].createElement(EnrollRadioItem, { name: '\u6027\u5225', state: genderState, setState: setGenderState, errorState: genderErrorState }),
            react_1["default"].createElement(EnrollInputItem, { name: '\u96FB\u5B50\u4FE1\u7BB1', inputType: 'text', state: emailState, setState: setEmailState, errorState: emailErrorState }),
            react_1["default"].createElement(EnrollInputItem, { name: '\u5E33\u865F', inputType: 'text', state: accountState, setState: setAccountState, errorState: accountErrorState }),
            react_1["default"].createElement(EnrollInputItem, { name: '\u5BC6\u78BC', inputType: 'password', state: passwordState, setState: setPasswordState, errorState: passwordErrorState }),
            react_1["default"].createElement(EnrollInputItem, { name: '\u518D\u8F38\u5165\u4E00\u6B21\u5BC6\u78BC', inputType: 'password', state: repeatPasswordState, setState: setRepeatPasswordState, errorState: repeatPasswordErrorState }),
            react_1["default"].createElement("button", { className: 'enroll-btn-send', onClick: onClickEnroll, "data-testid": 'enroll-btn-send' }, "\u8A3B\u518A"))));
};
