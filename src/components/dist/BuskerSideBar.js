"use strict";
exports.__esModule = true;
exports.BuskerSidebar = void 0;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var busker_info_photo_png_1 = require("../public/img/busker-info-photo.png");
var busker_page_icon_svg_1 = require("../public/svg/busker-page-icon.svg");
var busker_data_icon_svg_1 = require("../public/svg/busker-data-icon.svg");
var busker_performance_icon_svg_1 = require("../public/svg/busker-performance-icon.svg");
var busker_comment_icon_svg_1 = require("../public/svg/busker-comment-icon.svg");
require("../public/css/buskerSidebar.css");
var routerPath_1 = require("../modules/routerPath");
var SidebarItem = function (_a) {
    var icon = _a.icon, name = _a.name, path = _a.path;
    var location = react_router_dom_1.useLocation();
    var pathLocation = JSON.stringify(location);
    var pageLocattion = JSON.parse(pathLocation);
    var history = react_router_dom_1.useHistory();
    var onClickSidebarItem = function (path) {
        history.push(path);
    };
    return (react_1["default"].createElement("div", { className: pageLocattion.pathname == path ? 'busker-sidebar-item busker-sidebar-item-active' : 'busker-sidebar-item', onClick: function () { return onClickSidebarItem(path); } },
        react_1["default"].createElement("img", { src: icon, className: 'busker-sidebar-item-icon' }),
        react_1["default"].createElement("div", { className: 'busker-sidebar-item-name' }, name)));
};
exports.BuskerSidebar = function () {
    return (react_1["default"].createElement("div", { className: 'busker-sidebar' },
        react_1["default"].createElement("img", { src: busker_info_photo_png_1["default"], alt: 'Photo', className: 'busker-sidebar-photo' }),
        react_1["default"].createElement("h3", { className: 'busker-sidebar-name' }, "\u8B1D\u5B5F\u8FEA"),
        react_1["default"].createElement(SidebarItem, { icon: busker_page_icon_svg_1["default"], name: '\u8CC7\u8A0A\u7E3D\u89BD', path: routerPath_1.path.busker }),
        react_1["default"].createElement(SidebarItem, { icon: busker_data_icon_svg_1["default"], name: '\u6D1E\u5BDF\u5206\u6790', path: routerPath_1.path.busker_data }),
        react_1["default"].createElement(SidebarItem, { icon: busker_performance_icon_svg_1["default"], name: '\u6F14\u51FA\u767B\u8A18', path: routerPath_1.path.busker_apply_performance }),
        react_1["default"].createElement(SidebarItem, { icon: busker_comment_icon_svg_1["default"], name: '\u7559\u8A00\u677F', path: routerPath_1.path.busker_comment_board })));
};
