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
exports.ShowList = void 0;
var react_1 = require("react");
var heart_svg_1 = require("../public/svg/heart.svg");
var photo_png_1 = require("../public/img/photo.png");
var next_page_svg_1 = require("../public/svg/next-page.svg");
require("../public/css/showList.css");
var busker_1 = require("../modules/busker");
// const onClickTest = async () => {
//     const time = await getBuskerPerformanceTime()
//     const getPerData = { time: '2021-08-16', page: 1 }
//     const per = await getBuskerPerformanceData({ time: '2021-07-21', page: 1 })
//     console.log(time);
//     console.log(per);
//     //共50個資料 每天
// }
var ShowListMember = function (_a) {
    var memberDataArray = _a.memberDataArray;
    var _b = react_1.useState([]), memberGroup = _b[0], setMemberGroup = _b[1];
    react_1.useEffect(function () {
        var result = [];
        memberDataArray.map(function (currentValue, i) {
            result.push(react_1["default"].createElement("div", { className: 'show-list-member' },
                react_1["default"].createElement("img", { src: photo_png_1["default"], alt: "Photo", className: 'show-list-member-photo' }),
                react_1["default"].createElement("div", { className: 'show-list-member-data' },
                    react_1["default"].createElement("div", { className: 'show-list-member-name' },
                        react_1["default"].createElement("span", { className: 'show-list-member-name-account' }, currentValue.title),
                        react_1["default"].createElement("div", { className: 'show-list-member-likes' },
                            react_1["default"].createElement("img", { src: heart_svg_1["default"], alt: 'Heart', className: 'show-list-member-hearts' }),
                            react_1["default"].createElement("span", { className: 'show-list-member-likes-count' }, "120"))),
                    react_1["default"].createElement("div", { className: 'show-list-member-description' }, currentValue.description))));
        });
        setMemberGroup(result);
    }, [memberDataArray]);
    return (react_1["default"].createElement(react_1["default"].Fragment, null, memberGroup));
};
var ShowListTimeline = function (_a) {
    var timeRangeArray = _a.timeRangeArray, timeListState = _a.timeListState;
    var _b = react_1.useState([]), minRange = _b[0], setMinRange = _b[1];
    react_1.useEffect(function () {
        var minRangeArray = [];
        timeRangeArray.map(function (currentValue, i) {
            if (currentValue.oneQuarter.length > 0) {
                // minRangeArray.push('1')
                minRangeArray.push(react_1["default"].createElement("div", { className: 'show-list-timeline' },
                    react_1["default"].createElement("div", { className: 'show-list--timeline-title' }, currentValue.hour + ":00"),
                    react_1["default"].createElement("div", { className: 'show-list-member-group' },
                        react_1["default"].createElement(ShowListMember, { memberDataArray: currentValue.oneQuarter }))));
            }
            if (currentValue.twoQuarters.length > 0) {
                // minRangeArray.push('2')
                minRangeArray.push(react_1["default"].createElement("div", { className: 'show-list-timeline' },
                    react_1["default"].createElement("div", { className: 'show-list--timeline-title' }, currentValue.hour + ":15"),
                    react_1["default"].createElement("div", { className: 'show-list-member-group' },
                        react_1["default"].createElement(ShowListMember, { memberDataArray: currentValue.twoQuarters }))));
            }
            if (currentValue.threeQuarters.length > 0) {
                // minRangeArray.push('3')
                minRangeArray.push(react_1["default"].createElement("div", { className: 'show-list-timeline' },
                    react_1["default"].createElement("div", { className: 'show-list--timeline-title' }, currentValue.hour + ":30"),
                    react_1["default"].createElement("div", { className: 'show-list-member-group' },
                        react_1["default"].createElement(ShowListMember, { memberDataArray: currentValue.threeQuarters }))));
            }
            if (currentValue.fourQuarters.length > 0) {
                // minRangeArray.push('4')
                minRangeArray.push(react_1["default"].createElement("div", { className: 'show-list-timeline' },
                    react_1["default"].createElement("div", { className: 'show-list--timeline-title' }, currentValue.hour + ":45"),
                    react_1["default"].createElement("div", { className: 'show-list-member-group' },
                        react_1["default"].createElement(ShowListMember, { memberDataArray: currentValue.fourQuarters }))));
            }
        });
        setMinRange(minRangeArray);
    }, [timeRangeArray, timeListState]);
    return (react_1["default"].createElement(react_1["default"].Fragment, null, minRange));
};
var ShowListHeader = function (_a) {
    var timeListState = _a.timeListState, setSelectedTimeState = _a.setSelectedTimeState, setSelectedPerformancePage = _a.setSelectedPerformancePage;
    return (react_1["default"].createElement("div", { className: 'show-list-header' },
        react_1["default"].createElement("h3", null, "\u8868\u6F14\u8CC7\u8A0A\u5217\u8868"),
        react_1["default"].createElement("select", { name: "performanceTime", id: "performanceTime", onChange: function (e) {
                var selectedTime = e.target.value;
                setSelectedTimeState(selectedTime);
                setSelectedPerformancePage(1);
            } }, timeListState.map(function (time) {
            return (react_1["default"].createElement("option", { key: time, value: time }, time.substr(0, 10)));
        }))));
};
var ShowListMain = function (_a) {
    var performanceData = _a.performanceData, timeListState = _a.timeListState;
    var _b = react_1.useState([]), timeRangeArray = _b[0], setTimeRangeArray = _b[1];
    react_1.useEffect(function () {
        if (performanceData.status !== 200)
            return;
        var dataListArray = performanceData.data[0];
        var HourRange = /** @class */ (function () {
            function HourRange(hour, oneQuarter, twoQuarters, threeQuarters, fourQuarters) {
                this.hour = hour;
                this.oneQuarter = oneQuarter; // 0-14
                this.twoQuarters = twoQuarters; // 15-29
                this.threeQuarters = threeQuarters; // 30-44
                this.fourQuarters = fourQuarters; // 45-59
            }
            return HourRange;
        }());
        var allHourArray = [];
        var allHourClassArray = [];
        for (var i = 0; i < dataListArray.length; i++) {
            var timeHour = dataListArray[i].time.substr(11, 2);
            var timeMin = dataListArray[i].time.substr(14, 2);
            var isRepeat = false;
            var allHourArrayLength = allHourArray.length;
            var indexRepeat = 0;
            if (allHourArrayLength == 0) {
                allHourArray.push(timeHour);
            }
            while (indexRepeat < allHourArrayLength) {
                if (allHourArrayLength > 1)
                    indexRepeat++;
                if (allHourArray[indexRepeat] === timeHour) {
                    isRepeat = true;
                    break;
                }
                else {
                    allHourArray.push(timeHour);
                    break;
                }
            }
            if (isRepeat == false) {
                var newHour = new HourRange(timeHour, [], [], [], []);
                allHourClassArray.push(newHour);
            }
            var indexHour = 0;
            for (var j = 0; j < allHourClassArray.length; j++) {
                if (allHourClassArray[j].hour === timeHour)
                    indexHour = j;
            } //找輪到這次的小時是第幾個小時
            // console.log(`${timeHour}:${timeMin}'time lines active'`);
            if (timeMin >= 0 && timeMin < 15) {
                allHourClassArray[indexHour].oneQuarter.push(dataListArray[i]);
            }
            else if (timeMin >= 15 && timeMin <= 29) {
                allHourClassArray[indexHour].twoQuarters.push(dataListArray[i]);
            }
            else if (timeMin >= 30 && timeMin <= 44) {
                allHourClassArray[indexHour].threeQuarters.push(dataListArray[i]);
            }
            else if (timeMin >= 45 && timeMin <= 59) {
                allHourClassArray[indexHour].fourQuarters.push(dataListArray[i]);
            }
            else {
                console.log(timeHour + ":" + timeMin + "'time lines timeMin error'");
            }
        }
        setTimeRangeArray(allHourClassArray);
    }, [performanceData]);
    return (react_1["default"].createElement("div", { className: 'show-list-main' },
        react_1["default"].createElement(ShowListTimeline, { timeRangeArray: timeRangeArray, timeListState: timeListState })));
};
var ShowListPagination = function (_a) {
    var setSelectedPerformancePage = _a.setSelectedPerformancePage, selectedPerformancePage = _a.selectedPerformancePage;
    var _b = react_1.useState([]), paginationArrayState = _b[0], setPaginationArrayState = _b[1];
    react_1.useEffect(function () {
        var paginationArray = [];
        var onClickSelected = function (v) {
            //back to top
            window.scroll(0, 0);
            setSelectedPerformancePage(v);
        };
        var _loop_1 = function (i) {
            paginationArray.push(react_1["default"].createElement("li", null,
                react_1["default"].createElement("button", { className: "show-list-pagination-button " + (selectedPerformancePage === i ? "show-list-pagination-active" : null), value: i, onClick: function () { return onClickSelected(i); } }, i)));
        };
        for (var i = 1; i <= 10; i++) {
            _loop_1(i);
        }
        setPaginationArrayState(paginationArray);
    }, [selectedPerformancePage]);
    var onClickChangePage = function (value) {
        window.scroll(0, 0); //back to top
        var next = 1;
        var last = -1;
        var page = 0;
        if (value == 'next') {
            if (selectedPerformancePage < 10) {
                page = next;
            }
        }
        else if (value == 'last') {
            if (selectedPerformancePage > 1) {
                page = last;
            }
        }
        ;
        setSelectedPerformancePage(function () { return selectedPerformancePage + page; });
    };
    return (react_1["default"].createElement("div", { className: 'show-list-pagination' },
        react_1["default"].createElement("ul", null,
            selectedPerformancePage === 1 ? null : react_1["default"].createElement("li", null,
                react_1["default"].createElement("button", { className: 'show-list-pagination-button', onClick: (function () { return onClickChangePage('last'); }) },
                    react_1["default"].createElement("img", { style: { transform: 'scaleX(-1)' }, src: next_page_svg_1["default"], alt: 'NextPage' }))),
            paginationArrayState,
            selectedPerformancePage === 10 ? null : react_1["default"].createElement("li", null,
                react_1["default"].createElement("button", { className: 'show-list-pagination-button', onClick: (function () { return onClickChangePage('next'); }) },
                    react_1["default"].createElement("img", { src: next_page_svg_1["default"], alt: 'NextPage' }))))));
};
exports.ShowList = function () {
    var _a = react_1.useState({ status: 400, data: [{ time: '' }] }), timeListState = _a[0], setTimeListState = _a[1];
    var _b = react_1.useState({ status: 400, data: [[{ description: "default", latitude: 121.52316423760928, lineMoney: 0, longitude: 25.09499813282317, time: "2021-07-21T05:05:01.000Z", title: "default" }], 0] }), performanceData = _b[0], setPerformanceData = _b[1];
    var _c = react_1.useState(''), selectedTimeState = _c[0], setSelectedTimeState = _c[1];
    var _d = react_1.useState(1), selectedPerformancePage = _d[0], setSelectedPerformancePage = _d[1];
    var _e = react_1.useState([]), timeListArrayState = _e[0], setTimeListArrayState = _e[1];
    react_1.useEffect(function () {
        var getTime = function () { return __awaiter(void 0, void 0, void 0, function () {
            var time, timeStampArray;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, busker_1.getBuskerPerformanceTime()];
                    case 1:
                        time = _a.sent();
                        timeStampArray = time.data.map(function (object) { return object.time.substr(0, 10); });
                        setTimeListState(time);
                        setTimeListArrayState(timeStampArray);
                        setSelectedTimeState(timeStampArray[0]);
                        return [2 /*return*/];
                }
            });
        }); };
        getTime();
    }, []);
    react_1.useEffect(function () {
        var getPerformanceData = function () { return __awaiter(void 0, void 0, void 0, function () {
            var performance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (selectedTimeState.length === 0)
                            return [2 /*return*/]; //空值不請求
                        return [4 /*yield*/, busker_1.getBuskerPerformanceData({ time: selectedTimeState, page: selectedPerformancePage })];
                    case 1:
                        performance = _a.sent();
                        setPerformanceData(performance);
                        return [2 /*return*/];
                }
            });
        }); };
        getPerformanceData();
        //     const per = await getBuskerPerformanceData({ time: '2021-07-21', page: 1 })
    }, [selectedTimeState, selectedPerformancePage]);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(ShowListHeader, { timeListState: timeListArrayState, setSelectedTimeState: setSelectedTimeState, setSelectedPerformancePage: setSelectedPerformancePage }),
        react_1["default"].createElement(ShowListMain, { performanceData: performanceData, timeListState: timeListState }),
        react_1["default"].createElement(ShowListPagination, { setSelectedPerformancePage: setSelectedPerformancePage, selectedPerformancePage: selectedPerformancePage })));
};
