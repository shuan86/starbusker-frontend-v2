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
exports.Nav = void 0;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var routerPath_1 = require("../modules/routerPath");
var member_1 = require("../modules/member");
var react_redux_1 = require("react-redux");
var member_2 = require("../reducers/member");
require("../public/css/nav.css");
var user_circle_svg_1 = require("../public/svg/user-circle.svg");
exports.Nav = function () {
    var ref = react_1.useRef(null);
    var history = react_router_dom_1.useHistory();
    var dispath = react_redux_1.useDispatch();
    var memberData = react_redux_1.useSelector(function (s) { return s.memberReducer; });
    console.log("" + JSON.stringify(memberData));
    var _a = react_1.useState(false), isMenuOpenState = _a[0], setMenuOpenState = _a[1];
    var NotLogin = function () {
        return (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement("div", { className: 'nav-text', onClick: function () { return history.push(routerPath_1.path.login); } }, "\u767B\u5165"),
            react_1["default"].createElement("div", { className: 'nav-text', onClick: function () { return history.push(routerPath_1.path.enroll); } },
                react_1["default"].createElement("button", { className: 'nav-btn-enroll' }, "\u8A3B\u518A"))));
    };
    var Login = function () {
        var onClickLogout = function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        history.push(routerPath_1.path.index);
                        return [4 /*yield*/, member_1.logout()];
                    case 1:
                        _a.sent();
                        dispath(member_2.initialMemberReducer());
                        setMenuOpenState(false);
                        return [2 /*return*/];
                }
            });
        }); };
        var onClickBusker = function () {
            history.push(routerPath_1.path.busker);
            setMenuOpenState(false);
        };
        return (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement("div", { className: 'nav-text', onClick: function () { return history.push(routerPath_1.path.chatroom); } }, "\u7559\u8A00"),
            react_1["default"].createElement("div", { className: 'nav-text ' },
                react_1["default"].createElement("img", { className: ' nav-user-icon', src: user_circle_svg_1["default"], alt: 'user', onClick: function () { return setMenuOpenState(function (pre) { return !pre; }); } })),
            isMenuOpenState && (react_1["default"].createElement("div", { className: "nav-user-btn-list", ref: ref },
                react_1["default"].createElement("div", { className: "nav-user-photo" }),
                react_1["default"].createElement("div", { className: "nav-user-name", onClick: function () {
                        setMenuOpenState(false);
                        history.push(routerPath_1.path.comments_record);
                    } }, memberData.account),
                react_1["default"].createElement("div", { className: "nav-user-btn-item", onClick: function () {
                        setMenuOpenState(false);
                        history.push(routerPath_1.path.comments_record);
                    } }, "\u7559\u8A00\u7D00\u9304"),
                react_1["default"].createElement("div", { className: "nav-user-btn-item", onClick: function () {
                        setMenuOpenState(false);
                        history.push(routerPath_1.path.member_info);
                    } }, "\u500B\u4EBA\u8A2D\u5B9A"),
                react_1["default"].createElement("div", { className: "nav-user-btn-item nav-user-btn-item-logout", onClick: onClickLogout }, "\u767B\u51FA"),
                react_1["default"].createElement("div", { className: "nav-user-btn-item nav-user-btn-item-busker", onClick: onClickBusker }, "\u8868\u6F14\u8005")))));
    };
    react_1.useEffect(function () {
        var checkIfClickedOutside = function (e) {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if (isMenuOpenState && ref.current && !ref.current.contains(e.target)) {
                setMenuOpenState(false);
            }
        };
        document.addEventListener("mousedown", checkIfClickedOutside);
        return function () {
            // Cleanup the event listener
            document.removeEventListener("mousedown", checkIfClickedOutside);
        };
    }, [isMenuOpenState]);
    return (react_1["default"].createElement("div", { className: 'nav-wrap' },
        react_1["default"].createElement("div", { className: 'nav' },
            react_1["default"].createElement("div", { className: 'nav-logo', onClick: function () { return history.push(routerPath_1.path.index); } }, "StarBusker"),
            react_1["default"].createElement("div", { className: 'nav-button' },
                react_1["default"].createElement("div", { className: 'nav-text nav-right', onClick: function () { return history.push(routerPath_1.path.index); } }, "\u9996\u9801"),
                memberData.account == '' ? react_1["default"].createElement(NotLogin, null) : react_1["default"].createElement(Login, null)))));
};
