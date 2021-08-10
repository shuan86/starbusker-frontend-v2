"use strict";
exports.__esModule = true;
exports.Footer = void 0;
var react_1 = require("react");
var facebook_icon_svg_1 = require("../public/svg/facebook-icon.svg");
var instagram_icon_svg_1 = require("../public/svg/instagram-icon.svg");
require("../public/css/footer.css");
exports.Footer = function () {
    return (react_1["default"].createElement("div", { className: 'footer-wrap' },
        react_1["default"].createElement("div", null),
        react_1["default"].createElement("div", { className: 'footer' },
            react_1["default"].createElement("div", { className: "footer-logo" }, "Starbusker"),
            react_1["default"].createElement("div", { className: "footer-social-media" },
                react_1["default"].createElement("img", { src: facebook_icon_svg_1["default"], alt: "FacebookIcon" }),
                react_1["default"].createElement("img", { src: instagram_icon_svg_1["default"], alt: "InstagramIcon" })),
            react_1["default"].createElement("div", { className: "footer-copyright" }, "@2021 by Starbusker"))));
};
