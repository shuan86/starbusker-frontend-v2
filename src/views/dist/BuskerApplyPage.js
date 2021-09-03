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
exports.BuskerApplyPage = void 0;
var react_1 = require("react");
var react_router_1 = require("react-router");
var react_redux_1 = require("react-redux");
var BuskerInput_1 = require("../components/BuskerInput");
var MemberSidebar_1 = require("../components/MemberSidebar");
require("../public/css/buskerApply.css");
var member_1 = require("../modules/member");
var buskerType_1 = require("../types/buskerType");
var routerPath_1 = require("../modules/routerPath");
var ApplyForm = function (_a) {
    var setPerformanceTypeState = _a.setPerformanceTypeState, setPerformanceDescriptionState = _a.setPerformanceDescriptionState, performanceDescriptionState = _a.performanceDescriptionState, performanceTypeState = _a.performanceTypeState, setIsApplyState = _a.setIsApplyState;
    var _b = react_1.useState(''), submitResultError = _b[0], setSubmitResultError = _b[1];
    var _c = react_1.useState(''), performanceDescriptionErrorState = _c[0], setPerformanceDescriptionErrorState = _c[1];
    var onClickSubmit = function () { return __awaiter(void 0, void 0, void 0, function () {
        var errorDescription, result, resultError, isApply, applyData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    errorDescription = '';
                    resultError = '';
                    isApply = false;
                    if (!(performanceDescriptionState.length < 200 || performanceDescriptionState.length > 1)) return [3 /*break*/, 2];
                    applyData = { description: performanceDescriptionState, type: performanceTypeState };
                    return [4 /*yield*/, member_1.postApplyBusker(applyData)];
                case 1:
                    result = _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    errorDescription = '輸入內容請小於200個字，大於1個字';
                    _a.label = 3;
                case 3:
                    if (result.status == 200) {
                        resultError = '';
                        isApply = true;
                    }
                    else if (result.status == 400) {
                        resultError = "parameter error";
                    }
                    else if (result.status == 401) {
                        resultError = "failed to apply\u3001you aren't member";
                    }
                    else if (result.status == 500) {
                        resultError = "server is busying";
                    }
                    console.log(result);
                    setIsApplyState(isApply);
                    setSubmitResultError(resultError);
                    setPerformanceDescriptionErrorState(errorDescription);
                    return [2 /*return*/];
            }
        });
    }); };
    var mapEnum = function (enumerable, fn) {
        // get all the members of the enum
        var enumMembers = Object.keys(enumerable).map(function (key) { return enumerable[key]; });
        // we are only interested in the numeric identifiers as these represent the values
        var enumValues = enumMembers.filter(function (v) { return typeof v === "number"; });
        // now map through the enum values
        return enumValues.map(function (m) { return fn(m); });
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "busker-apply-item" },
            react_1["default"].createElement("label", { className: 'busker-input-label', style: { color: 'red' } }, submitResultError),
            react_1["default"].createElement("label", { htmlFor: "perfomanceType", className: 'busker-input-label' },
                "\u8868\u6F14\u985E\u578B",
                react_1["default"].createElement("select", { name: "perfomanceType", id: "perfomanceType", className: 'busker-apply-select', onChange: function (e) {
                        var performanceType = Number(e.target.value);
                        console.log(performanceType);
                        setPerformanceTypeState(performanceType);
                    } }, mapEnum(buskerType_1.BuskerTypeEnum, function (v) {
                    return (react_1["default"].createElement("option", { key: v, value: v }, buskerType_1.BuskerTypeEnum[v]));
                }))),
            react_1["default"].createElement(BuskerInput_1.BuskerInputLogin, null),
            react_1["default"].createElement("label", { htmlFor: "description", className: 'busker-input-label' },
                "\u7C21\u4ECB",
                react_1["default"].createElement("textarea", { name: "description", id: "description", cols: 1, rows: 10, className: 'busker-apply-textarea', onChange: function (e) { var performanceDescription = e.target.value; setPerformanceDescriptionState(performanceDescription); } })),
            react_1["default"].createElement("div", { className: "busker-input-error" }, performanceDescriptionErrorState),
            react_1["default"].createElement("div", { className: "busker-apply-btn" },
                react_1["default"].createElement(BuskerInput_1.BuskerInputBtn, { title: '\u78BA\u8A8D\u9001\u51FA', onClick: onClickSubmit })))));
};
var ApplyResult = function () {
    var history = react_router_1.useHistory();
    var onClickSubmit = function () {
        history.push(routerPath_1.path.busker);
    };
    return (react_1["default"].createElement("div", { className: 'busker-apply-result' },
        react_1["default"].createElement("div", { className: 'busker-apply-result-title' }, "\u6210\u529F\u7533\u8ACB\u6210\u70BA\u8868\u6F14\u8005"),
        react_1["default"].createElement(BuskerInput_1.BuskerInputBtn, { title: '\u524D\u5F80\u8868\u6F14\u8005\u8A2D\u5B9A', onClick: onClickSubmit })));
};
exports.BuskerApplyPage = function () {
    var _a = react_1.useState(0), performanceTypeState = _a[0], setPerformanceTypeState = _a[1];
    var _b = react_1.useState(''), performanceDescriptionState = _b[0], setPerformanceDescriptionState = _b[1];
    var _c = react_1.useState(false), isApply = _c[0], setIsApplyState = _c[1];
    var memberData = react_redux_1.useSelector(function (s) { return s.memberReducer; });
    console.log(memberData);
    var isBusker = memberData.isBusker;
    react_1.useEffect(function () {
        var isBusker = memberData.isBusker;
        setIsApplyState(isBusker);
    }, []);
    return (react_1["default"].createElement("div", { className: 'wrap' },
        react_1["default"].createElement("div", { className: "busker-apply" },
            react_1["default"].createElement(BuskerInput_1.BuskerInputTitle, { title: '\u8868\u6F14\u8005\u7533\u8ACB' }),
            react_1["default"].createElement("div", { className: "busker-apply-group" },
                react_1["default"].createElement(MemberSidebar_1.MemberSidebar, null),
                react_1["default"].createElement("div", { className: "busker-apply-content" }, isApply ? react_1["default"].createElement(ApplyResult, null) :
                    react_1["default"].createElement(ApplyForm, { setPerformanceTypeState: setPerformanceTypeState, setPerformanceDescriptionState: setPerformanceDescriptionState, performanceDescriptionState: performanceDescriptionState, performanceTypeState: performanceTypeState, setIsApplyState: setIsApplyState }))))));
};
