"use strict";
exports.__esModule = true;
exports.MemberSidebar = void 0;
var react_1 = require("react");
var routerPath_1 = require("../modules/routerPath");
var react_redux_1 = require("react-redux");
var react_router_dom_1 = require("react-router-dom");
exports.MemberSidebar = function () {
    var history = react_router_dom_1.useHistory();
    var location = react_router_dom_1.useLocation();
    var memberData = react_redux_1.useSelector(function (s) { return s.memberReducer; });
    var onClickMemberInfo = function () {
        history.push(routerPath_1.path.member_info);
    };
    var onClickApplyBusker = function () {
        history.push(routerPath_1.path.busker_apply);
    };
    var onClickMemberPassword = function () {
        history.push(routerPath_1.path.member_password);
    };
    return (react_1["default"].createElement("div", { className: 'member-info-list' },
        react_1["default"].createElement("button", { className: "member-info-list-item " + (location.pathname === routerPath_1.path.member_info ? 'member-info-list-active' : ''), onClick: onClickMemberInfo }, "\u57FA\u672C\u8CC7\u6599"),
        memberData.isBusker ? null : react_1["default"].createElement("button", { className: "member-info-list-item " + (location.pathname === routerPath_1.path.busker_apply ? 'member-info-list-active' : ''), onClick: onClickApplyBusker }, "\u7533\u8ACB\u6210\u70BA\u8868\u6F14\u8005"),
        react_1["default"].createElement("button", { className: "member-info-list-item " + (location.pathname === routerPath_1.path.member_password ? 'member-info-list-active' : ''), onClick: onClickMemberPassword }, "\u5BC6\u78BC\u8A2D\u5B9A")));
};
