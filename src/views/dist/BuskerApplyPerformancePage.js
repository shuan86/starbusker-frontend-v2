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
exports.BuskerApplyPerformancePage = void 0;
var react_1 = require("react");
var BuskerSidebar_1 = require("../components/BuskerSidebar");
require("../public/css/buskerApplyPerformancePage.css");
var busker_apply_performance_successful_icon_svg_1 = require("../public/svg/busker-apply-performance-successful-icon.svg");
var busker_1 = require("../modules/busker");
var BuskerApplyForm = function () {
    var BuskerApplyPerformanceInput = function (_a) {
        var name = _a.name, inputType = _a.inputType, state = _a.state, setState = _a.setState, errorState = _a.errorState;
        return (react_1["default"].createElement("label", { htmlFor: name, className: 'busker-performance-label' },
            name,
            react_1["default"].createElement("input", { type: inputType, name: name, id: name, placeholder: state, value: state, onChange: function (e) {
                    var v = e.target.value;
                    setState(v);
                }, className: 'busker-performance-input' })));
    };
    var _a = react_1.useState(''), performanceItem = _a[0], setPerformanceItem = _a[1];
    var _b = react_1.useState(''), performanceDate = _b[0], setPerformanceDate = _b[1];
    var _c = react_1.useState(''), performanceLocation = _c[0], setPerformanceLocation = _c[1];
    var _d = react_1.useState(''), performanceTime = _d[0], setPerformanceTime = _d[1];
    var _e = react_1.useState(''), performanceDescription = _e[0], setPerformanceDescription = _e[1];
    var setCurrentData = function (year, month, date, hour, minute, second) {
        if (hour === void 0) { hour = 0; }
        if (minute === void 0) { minute = 0; }
        if (second === void 0) { second = 0; }
        var dateOBJ = new Date();
        dateOBJ.setUTCFullYear(year);
        dateOBJ.setMonth(month - 1);
        dateOBJ.setDate(date);
        dateOBJ.setHours(hour);
        dateOBJ.setMinutes(minute);
        dateOBJ.setSeconds(second);
        return dateOBJ;
    };
    var onClickSubmit = function () { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    result = { title: performanceItem, description: performanceDescription, time: setCurrentData(2021, 7, 15, 6, 6, 30), location: performanceLocation };
                    console.log(result);
                    return [4 /*yield*/, busker_1.postApplyPerformance(result)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
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
var BuskerApplyResult = function (_a) {
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
