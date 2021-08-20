"use strict";
exports.__esModule = true;
exports.BuskerApplyPerformancePage = void 0;
var react_1 = require("react");
var BuskerSidebar_1 = require("../components/BuskerSidebar");
require("../public/css/buskerApplyPerformancePage.css");
var busker_apply_performance_successful_icon_svg_1 = require("../public/svg/busker-apply-performance-successful-icon.svg");
var member_1 = require("../modules/member");
var BuskerApplyPerformanceInput = function (_a) {
    var name = _a.name, inputType = _a.inputType, state = _a.state, setState = _a.setState, errorState = _a.errorState;
    return (react_1["default"].createElement("label", { htmlFor: name, className: 'busker-performance-label' },
        name,
        react_1["default"].createElement("input", { type: inputType, name: name, id: name, placeholder: state, value: state, onChange: function (e) {
                var v = e.target.value;
                setState(v);
            }, className: 'busker-performance-input' })));
};
var BuskerApplyForm = function () {
    var _a = react_1.useState(''), performanceItem = _a[0], setPerformanceItem = _a[1];
    var _b = react_1.useState(''), performanceDate = _b[0], setPerformanceDate = _b[1];
    var _c = react_1.useState(''), performanceLocation = _c[0], setPerformanceLocation = _c[1];
    var _d = react_1.useState(''), performanceTime = _d[0], setPerformanceTime = _d[1];
    var _e = react_1.useState(''), performanceDescription = _e[0], setPerformanceDescription = _e[1];
    var onClickSubmit = function () {
        var result = { title: performanceItem, description: performanceDescription, time: performanceDate + performanceTime, location: performanceLocation };
        console.log(result);
        member_1.postApplyPerformance(result);
    };
    // console.log(`BuskerApplyPerformancePage:${performanceItem}${performanceDate}${performanceLocation}${performanceTime}${performanceDescription}`);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: 'busker-performance-title' }, "\u8868\u6F14\u767B\u8A18"),
        react_1["default"].createElement("div", { className: 'busker-performance-form' },
            react_1["default"].createElement("div", { className: 'busker-performance-description' },
                react_1["default"].createElement("div", { className: 'busker-performance-description-title' }, "\u8868\u6F14\u5167\u5BB9\u4ECB\u7D39"),
                react_1["default"].createElement("textarea", { placeholder: '\u7C21\u77ED\u5167\u5BB9\u7C21\u4ECB', className: 'busker-performance-description-textarea', onChange: function (e) { var v = e.target.value; setPerformanceDescription(v); } })),
            react_1["default"].createElement("div", { className: 'busker-performance-data' },
                react_1["default"].createElement(BuskerApplyPerformanceInput, { name: '\u8868\u6F14\u9805\u76EE', inputType: 'text', state: performanceItem, setState: setPerformanceItem, errorState: '' }),
                react_1["default"].createElement(BuskerApplyPerformanceInput, { name: '\u8868\u6F14\u65E5\u671F', inputType: 'date', state: performanceDate, setState: setPerformanceDate, errorState: '' }),
                react_1["default"].createElement(BuskerApplyPerformanceInput, { name: '\u8868\u6F14\u5730\u9EDE', inputType: 'text', state: performanceLocation, setState: setPerformanceLocation, errorState: '' }),
                react_1["default"].createElement(BuskerApplyPerformanceInput, { name: '\u8868\u6F14\u6642\u9593', inputType: 'time', state: performanceTime, setState: setPerformanceTime, errorState: '' })),
            react_1["default"].createElement("div", { className: 'busker-performance-googlemap' }),
            react_1["default"].createElement("button", { className: 'busker-performance-btn-submit', onClick: onClickSubmit }, "\u9001\u51FA\u767B\u8A18"))));
};
var BuskerApplyResult = function () {
    // { buskerName, buskerPhone, buskerEmail, performanceItem, performanceDate, performanceTime, performanceLocation, performanceDescription, isCancel }
    var BuskerApplyItem = function (_a) {
        var title = _a.title, content = _a.content;
        return (react_1["default"].createElement("div", { className: 'busker-performance-apply-item' },
            react_1["default"].createElement("div", { className: 'busker-performance-apply-item-title' }, title),
            react_1["default"].createElement("div", { className: 'busker-performance-apply-item-content' }, content)));
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: 'busker-performance-apply' },
            react_1["default"].createElement("div", { className: 'busker-performance-apply-title', style: { color: 'var(--orange)' } },
                react_1["default"].createElement("img", { src: busker_apply_performance_successful_icon_svg_1["default"], alt: 'applyapplyIcon', className: 'busker-performance-apply-icon' }),
                "\u5DF2\u6210\u529F\u767B\u8A18"),
            react_1["default"].createElement("div", { className: 'busker-performance-apply-subtitle' }, "\u767B\u8A18\u8CC7\u8A0A\u5982\u4E0B\uFF1A"),
            react_1["default"].createElement("div", { className: 'busker-performance-apply-form' },
                react_1["default"].createElement(BuskerApplyItem, { title: '\u85DD\u4EBA\u59D3\u540D', content: '\u8B1D\u5B5F\u8FEA' }),
                react_1["default"].createElement(BuskerApplyItem, { title: '\u8868\u6F14\u9805\u76EE', content: '\u626F\u9234' }),
                react_1["default"].createElement(BuskerApplyItem, { title: '\u806F\u7D61\u96FB\u8A71', content: '0912-123-456' }),
                react_1["default"].createElement(BuskerApplyItem, { title: '\u8868\u6F14\u65E5\u671F', content: '7\u670829\u65E52021\u5E74' }),
                react_1["default"].createElement(BuskerApplyItem, { title: '\u96FB\u5B50\u4FE1\u7BB1', content: 'account@gmail.com' }),
                react_1["default"].createElement(BuskerApplyItem, { title: '\u8868\u6F14\u6642\u9593', content: '13:30' }),
                react_1["default"].createElement(BuskerApplyItem, { title: '\u8868\u6F14\u5730\u9EDE', content: '\u5922\u60F3\u5EE3\u5834' }),
                react_1["default"].createElement(BuskerApplyItem, { title: '\u7C21\u4ECB', content: '\u6709\u5920\u626F\u7684\u626F\u9234\u8868\u6F14' })),
            react_1["default"].createElement("div", { className: 'busker-performance-apply-googlemap' }),
            react_1["default"].createElement("div", { className: 'busker-performance-apply-btn-group' },
                react_1["default"].createElement("button", { className: 'busker-performance-apply-btn' }, "\u53D6\u6D88\u767B\u8A18"),
                react_1["default"].createElement("button", { className: 'busker-performance-apply-btn' }, "\u518D\u6B21\u767B\u8A18")))));
};
exports.BuskerApplyPerformancePage = function () {
    return (react_1["default"].createElement("div", { className: 'wrap' },
        react_1["default"].createElement("div", { className: 'busker-performance' },
            react_1["default"].createElement(BuskerSidebar_1.BuskerSidebar, null),
            react_1["default"].createElement("div", { className: 'busker-performance-group' },
                react_1["default"].createElement(BuskerApplyForm, null)))));
};
