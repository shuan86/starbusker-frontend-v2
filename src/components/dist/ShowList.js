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
exports.ShowListPagination = exports.ShowListMain = exports.ShowListHeader = void 0;
var react_1 = require("react");
var heart_svg_1 = require("../public/svg/heart.svg");
var photo_png_1 = require("../public/img/photo.png");
var next_page_svg_1 = require("../public/svg/next-page.svg");
require("../public/css/showList.css");
var member_1 = require("../modules/member");
var onClickTest = function () { return __awaiter(void 0, void 0, void 0, function () {
    var time, getPerData, per;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, member_1.getBuskerPerformanceTime()];
            case 1:
                time = _a.sent();
                getPerData = { time: '2021-08-16', page: 1 };
                return [4 /*yield*/, member_1.getBuskerPerformanceData({ time: '2021-08-16', page: 1 })];
            case 2:
                per = _a.sent();
                console.log(time);
                console.log(per);
                return [2 /*return*/];
        }
    });
}); };
var ShowListMember = function () {
    // useEffect(() => {
    //     const test = async () => {
    //         const r = await getTime()
    //         console.log('r:', r);
    //     }
    //     test()
    // }, [])
    return (react_1["default"].createElement("div", { className: 'show-list-member' },
        react_1["default"].createElement("img", { src: photo_png_1["default"], alt: "Photo", className: 'show-list-member-photo' }),
        react_1["default"].createElement("div", { className: 'show-list-member-data' },
            react_1["default"].createElement("div", { className: 'show-list-member-name' },
                react_1["default"].createElement("span", { className: 'show-list-member-name-account' }, "\u8B1D\u5B5F\u8FEA"),
                react_1["default"].createElement("div", { className: 'show-list-member-likes' },
                    react_1["default"].createElement("img", { src: heart_svg_1["default"], alt: 'Heart', className: 'show-list-member-hearts' }),
                    react_1["default"].createElement("span", { className: 'show-list-member-likes-count' }, "120"))),
            react_1["default"].createElement("div", { className: 'show-list-member-description' }, "\u626F\u9234"))));
};
var ShowListTimeline = function () {
    return (react_1["default"].createElement("div", { className: 'show-list-timeline' },
        react_1["default"].createElement("div", { className: 'show-list--timeline-title' }, "13:30"),
        react_1["default"].createElement("div", { className: 'show-list-member-group' },
            react_1["default"].createElement(ShowListMember, null),
            react_1["default"].createElement(ShowListMember, null),
            react_1["default"].createElement(ShowListMember, null))));
};
exports.ShowListHeader = function () {
    return (react_1["default"].createElement("div", { className: 'show-list-header' },
        react_1["default"].createElement("h3", null, "\u8868\u6F14\u8CC7\u8A0A\u5217\u8868"),
        react_1["default"].createElement("select", { name: "", id: "" },
            react_1["default"].createElement("option", { value: "" }, "\u73FE\u5728"),
            react_1["default"].createElement("option", { value: "" }, "\u904E\u53BB"),
            react_1["default"].createElement("option", { value: "" }, "\u672A\u4F86"))));
};
exports.ShowListMain = function () {
    return (react_1["default"].createElement("div", { className: 'show-list-main' },
        react_1["default"].createElement(ShowListTimeline, null),
        react_1["default"].createElement(ShowListTimeline, null),
        react_1["default"].createElement(ShowListTimeline, null),
        react_1["default"].createElement(ShowListTimeline, null),
        react_1["default"].createElement(ShowListTimeline, null),
        react_1["default"].createElement(ShowListTimeline, null),
        react_1["default"].createElement(ShowListTimeline, null),
        react_1["default"].createElement("button", { onClick: onClickTest }, "Test")));
};
exports.ShowListPagination = function () {
    return (react_1["default"].createElement("div", { className: 'show-list-pagination' },
        react_1["default"].createElement("ul", null,
            react_1["default"].createElement("li", { className: 'pagination-active' },
                react_1["default"].createElement("a", { href: "#" }, "1")),
            react_1["default"].createElement("li", null,
                react_1["default"].createElement("a", { href: "#" }, "2")),
            react_1["default"].createElement("li", null,
                react_1["default"].createElement("a", { href: "#" }, "3")),
            react_1["default"].createElement("li", null,
                react_1["default"].createElement("a", { href: "#" }, "...")),
            react_1["default"].createElement("li", null,
                react_1["default"].createElement("a", { href: "#" },
                    react_1["default"].createElement("img", { src: next_page_svg_1["default"], alt: 'NextPage' }))))));
};
