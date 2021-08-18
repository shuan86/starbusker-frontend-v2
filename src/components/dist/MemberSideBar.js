"use strict";
exports.__esModule = true;
exports.MemberSidebar = void 0;
var react_1 = require("react");
var routerPath_1 = require("../modules/routerPath");
var react_router_dom_1 = require("react-router-dom");
exports.MemberSidebar = function () {
    var history = react_router_dom_1.useHistory();
    var location = react_router_dom_1.useLocation();
    var onClickMemberInfo = function () {
        history.push(routerPath_1.path.member_info);
    };
    var onClickApplyBusker = function () {
        history.push(routerPath_1.path.busker_apply);
    };
    return (react_1["default"].createElement("div", { className: 'busker-info-list' },
        react_1["default"].createElement("button", { className: "busker-info-list-item " + (location.pathname === routerPath_1.path.member_info ? 'busker-info-list-active' : ''), onClick: onClickMemberInfo }, "\u57FA\u672C\u8CC7\u6599"),
        react_1["default"].createElement("button", { className: "busker-info-list-item " + (location.pathname === routerPath_1.path.busker_apply ? 'busker-info-list-active' : ''), onClick: onClickApplyBusker }, "\u7533\u8ACB\u6210\u70BA\u8868\u6F14\u8005")));
};
