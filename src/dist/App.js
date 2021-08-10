"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Nav_1 = require("./components/Nav");
var Footer_1 = require("./components/Footer");
var LoginPage_1 = require("./views/LoginPage");
var EnrollPage_1 = require("./views/EnrollPage");
var HomePage_1 = require("./views/HomePage");
var BuskerPage_1 = require("./views/BuskerPage");
var ChatroomPage_1 = require("./views/ChatroomPage");
var BuskerRecordPage_1 = require("./views/BuskerRecordPage");
var BuskerInfoPage_1 = require("./views/BuskerInfoPage");
var BuskerApplyPage_1 = require("./views/BuskerApplyPage");
var BuskerDataPage_1 = require("./views/BuskerDataPage");
var BuskerApplyPerformancePage_1 = require("./views/BuskerApplyPerformancePage");
var BuskerCommentBoardPage_1 = require("./views/BuskerCommentBoardPage");
var routerPath_1 = require("./modules/routerPath");
require("./public/css/main.css");
require("./public/css/normalize.css");
var App = function () {
    return (react_1["default"].createElement(react_router_dom_1.HashRouter, null,
        react_1["default"].createElement("div", { className: 'container' },
            react_1["default"].createElement(Nav_1.Nav, null),
            react_1["default"].createElement(react_router_dom_1.Switch, null,
                react_1["default"].createElement(react_router_dom_1.Route, { path: routerPath_1.path.busker_comment_board, component: BuskerCommentBoardPage_1.BuskerCommentBoardPage }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: routerPath_1.path.busker_apply_performance, component: BuskerApplyPerformancePage_1.BuskerApplyPerformancePage }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: routerPath_1.path.busker_data, component: BuskerDataPage_1.BuskerDataPage }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: routerPath_1.path.busker_apply, component: BuskerApplyPage_1.BuskerApplyPage }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: routerPath_1.path.busker_info, component: BuskerInfoPage_1.BuskerInfoPage }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: routerPath_1.path.busker_record, component: BuskerRecordPage_1.BuskerRecordPage }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: routerPath_1.path.chatroom, component: ChatroomPage_1.ChatroomPage }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: routerPath_1.path.busker, component: BuskerPage_1.BuskerPage }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: routerPath_1.path.enroll, component: EnrollPage_1.EnrollPage }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: routerPath_1.path.login, component: LoginPage_1.LoginPage }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: routerPath_1.path.index, component: HomePage_1.HomePage })),
            react_1["default"].createElement(Footer_1.Footer, null))));
};
exports["default"] = App;
