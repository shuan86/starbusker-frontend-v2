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
exports.LoginPage = void 0;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var react_router_dom_1 = require("react-router-dom");
var member_1 = require("../modules/member");
var routerPath_1 = require("../modules/routerPath");
var member_2 = require("../reducers/member");
var google_login_svg_1 = require("../public/svg/google-login.svg");
var facebook_login_svg_1 = require("../public/svg/facebook-login.svg");
var line_login_svg_1 = require("../public/svg/line-login.svg");
require("../public/css/loginPage.css");
exports.LoginPage = function () {
    var _a = react_1.useState('t0'), accountState = _a[0], setAccountState = _a[1];
    var _b = react_1.useState('123'), passwordState = _b[0], setPasswordState = _b[1];
    var history = react_router_dom_1.useHistory();
    var dispatch = react_redux_1.useDispatch();
    var onClicklogin = function () { return __awaiter(void 0, void 0, void 0, function () {
        var result, memberData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, member_1.login(accountState, passwordState)];
                case 1:
                    result = _a.sent();
                    if (result.status === 200) {
                        memberData = result.data;
                        console.log(memberData);
                        dispatch(member_2.setMemberAction(memberData));
                        history.push(routerPath_1.path.index);
                    }
                    else if (result.status === 400) {
                        //login parameter error
                    }
                    else if (result.status === 401) {
                        //login fail:membe is exist
                    }
                    else if (result.status === 500) {
                        //server is busying
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement("div", { className: 'wrap' },
        react_1["default"].createElement("div", { className: 'login' },
            react_1["default"].createElement("div", { className: 'login-form' },
                react_1["default"].createElement("div", { className: 'login-form-title' }, "\u767B\u5165"),
                react_1["default"].createElement("label", { htmlFor: 'login-account', className: 'login-label' },
                    "\u5E33\u865F",
                    react_1["default"].createElement("input", { type: 'text', id: 'login-account', placeholder: 'account', className: 'login-input', value: accountState, onChange: function (e) {
                            var value = e.target.value;
                            setAccountState(value);
                        } })),
                react_1["default"].createElement("label", { htmlFor: 'login-password', className: 'login-label' },
                    "\u5BC6\u78BC",
                    react_1["default"].createElement("input", { type: 'password', id: 'login-password', placeholder: 'password', className: 'login-input', value: passwordState, onChange: function (e) {
                            var value = e.target.value;
                            setPasswordState(value);
                        } })),
                react_1["default"].createElement("div", { className: 'login-admin' },
                    react_1["default"].createElement("a", { href: '#', className: 'login-admin-a' }, "\u5FD8\u8A18\u5BC6\u78BC"),
                    react_1["default"].createElement("a", { href: '#', className: 'login-admin-a' }, "\u986F\u793A\u5BC6\u78BC")),
                react_1["default"].createElement("button", { className: 'login-btn-send', onClick: function () { return onClicklogin(); } }, "\u767B\u5165"),
                react_1["default"].createElement("div", { className: 'login-quick-title' }, "\u5FEB\u901F\u767B\u5165"),
                react_1["default"].createElement("div", { className: 'login-quick-group' },
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("img", { src: google_login_svg_1["default"], alt: 'GoogleLogin' })),
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("img", { src: facebook_login_svg_1["default"], alt: 'FacebookLogin' })),
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("img", { src: line_login_svg_1["default"], alt: 'LineLogin' })))),
            react_1["default"].createElement("div", { className: 'login-create-account' },
                react_1["default"].createElement("a", { href: '#', className: 'login-create-account-a' },
                    "\u9084\u6C92\u6709\u5E33\u6236\uFF1F",
                    react_1["default"].createElement("span", { className: 'login-create-account-span' }, "\u5EFA\u7ACB\u5E33\u6236"))))));
};
