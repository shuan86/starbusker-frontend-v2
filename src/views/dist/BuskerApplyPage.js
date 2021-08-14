"use strict";
exports.__esModule = true;
exports.BuskerApplyPage = void 0;
var react_1 = require("react");
var BuskerInput_1 = require("../components/BuskerInput");
require("../public/css/buskerApply.css");
exports.BuskerApplyPage = function () {
    return (react_1["default"].createElement("div", { className: 'wrap' },
        react_1["default"].createElement("div", { className: "busker-apply" },
            react_1["default"].createElement(BuskerInput_1.BuskerInputTitle, { title: '\u8868\u6F14\u8005\u7533\u8ACB' }),
            react_1["default"].createElement("div", { className: "busker-apply-group" },
                react_1["default"].createElement("div", { className: "busker-apply-item" },
                    react_1["default"].createElement(BuskerInput_1.BuskerInputBox, null),
                    react_1["default"].createElement(BuskerInput_1.BuskerInputBox, null),
                    react_1["default"].createElement(BuskerInput_1.BuskerInputBox, null),
                    react_1["default"].createElement(BuskerInput_1.BuskerInputBox, null)),
                react_1["default"].createElement("div", { className: "busker-apply-item" },
                    react_1["default"].createElement(BuskerInput_1.BuskerInputBox, null),
                    react_1["default"].createElement("label", { htmlFor: "", className: 'busker-input-label' },
                        "\u8868\u6F14\u7E23\u5E02",
                        react_1["default"].createElement("select", { name: "", id: "", className: 'busker-apply-select' },
                            react_1["default"].createElement("option", { value: "" }, "\u53F0\u5317\u5E02"))),
                    react_1["default"].createElement(BuskerInput_1.BuskerInputLogin, null),
                    react_1["default"].createElement("label", { htmlFor: "", className: 'busker-input-label' },
                        "\u7C21\u4ECB",
                        react_1["default"].createElement("textarea", { name: "", id: "", cols: 30, rows: 10, className: 'busker-apply-textarea' })),
                    react_1["default"].createElement("div", { className: "busker-apply-btn" },
                        react_1["default"].createElement(BuskerInput_1.BuskerInputBtn, { title: '\u78BA\u8A8D\u9001\u51FA' })))))));
};
