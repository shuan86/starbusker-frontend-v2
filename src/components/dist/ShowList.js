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
var ShowListHeader = function (_a) {
    var timeListArrayState = _a.timeListArrayState, setSelectedTimeState = _a.setSelectedTimeState, setSelectedPerformancePage = _a.setSelectedPerformancePage;
    var dateOption = timeListArrayState.map(function (time) {
        return (react_1["default"].createElement("option", { key: time, value: time }, time.substr(0, 10)));
    });
    //:React.ReactNode
    return (react_1["default"].createElement("div", { className: 'show-list-header' },
        react_1["default"].createElement("h3", null, "\u8868\u6F14\u8CC7\u8A0A\u5217\u8868"),
        react_1["default"].createElement("select", { name: "performanceTime", id: "performanceTime", onChange: function (e) {
                var selectedTime = e.target.value;
                setSelectedTimeState(selectedTime);
                setSelectedPerformancePage(1);
            } }, dateOption)));
};
var ShowListMain = function (_a) {
    var performanceData = _a.performanceData;
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
    var _b = react_1.useState([]), timeRangeArray = _b[0], setTimeRangeArray = _b[1];
    react_1.useEffect(function () {
        var dataListArray = performanceData[0];
        var allHourArray = [];
        var allHourClassArray = [];
        for (var i = 0; i < dataListArray.length; i++) {
            var timeHour = Number(dataListArray[i].time.substr(11, 2));
            var timeMin = Number(dataListArray[i].time.substr(14, 2));
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
    var _c = react_1.useState([]), quartersLine = _c[0], setQuartersLine = _c[1]; //原timeline
    react_1.useEffect(function () {
        var quartersLineRangeArray = [];
        timeRangeArray.map(function (currentValue, i) {
            if (currentValue.oneQuarter.length > 0) {
                // minRangeArray.push('1')
                quartersLineRangeArray.push(react_1["default"].createElement("div", { className: 'show-list-timeline' },
                    react_1["default"].createElement("div", { className: 'show-list--timeline-title' }, currentValue.hour + ":00"),
                    react_1["default"].createElement("div", { className: 'show-list-member-group' },
                        react_1["default"].createElement(ShowListMember, { memberDataArray: currentValue.oneQuarter }))));
            }
            if (currentValue.twoQuarters.length > 0) {
                // minRangeArray.push('2')
                quartersLineRangeArray.push(react_1["default"].createElement("div", { className: 'show-list-timeline' },
                    react_1["default"].createElement("div", { className: 'show-list--timeline-title' }, currentValue.hour + ":15"),
                    react_1["default"].createElement("div", { className: 'show-list-member-group' },
                        react_1["default"].createElement(ShowListMember, { memberDataArray: currentValue.twoQuarters }))));
            }
            if (currentValue.threeQuarters.length > 0) {
                // minRangeArray.push('3')
                quartersLineRangeArray.push(react_1["default"].createElement("div", { className: 'show-list-timeline' },
                    react_1["default"].createElement("div", { className: 'show-list--timeline-title' }, currentValue.hour + ":30"),
                    react_1["default"].createElement("div", { className: 'show-list-member-group' },
                        react_1["default"].createElement(ShowListMember, { memberDataArray: currentValue.threeQuarters }))));
            }
            if (currentValue.fourQuarters.length > 0) {
                // minRangeArray.push('4')
                quartersLineRangeArray.push(react_1["default"].createElement("div", { className: 'show-list-timeline' },
                    react_1["default"].createElement("div", { className: 'show-list--timeline-title' }, currentValue.hour + ":45"),
                    react_1["default"].createElement("div", { className: 'show-list-member-group' },
                        react_1["default"].createElement(ShowListMember, { memberDataArray: currentValue.fourQuarters }))));
            }
        });
        setQuartersLine(quartersLineRangeArray);
    }, [timeRangeArray]);
    return (react_1["default"].createElement("div", { className: 'show-list-main' }, quartersLine));
};
var ShowListMember = function (_a) {
    var memberDataArray = _a.memberDataArray;
    var _b = react_1.useState([]), memberGroup = _b[0], setMemberGroup = _b[1];
    var onClickMember = function (id) {
        console.log(id);
    };
    react_1.useEffect(function () {
        var result = [];
        memberDataArray.map(function (currentValue, i) {
            result.push(react_1["default"].createElement("div", { className: 'show-list-member', onClick: function () { return onClickMember(currentValue.id); } },
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
var ShowListPagination = function (_a) {
    var setSelectedPerformancePage = _a.setSelectedPerformancePage, selectedPerformancePage = _a.selectedPerformancePage, allPerformanceItems = _a.allPerformanceItems;
    var _b = react_1.useState(10), pageNumberLimitState = _b[0], setPageNumberLimitState = _b[1];
    var _c = react_1.useState(5), eachPageNumberLimitState = _c[0], setEachPageNumberLimitState = _c[1];
    var _d = react_1.useState(5), maxPageNumberLimitState = _d[0], setMaxPageNumberLimitState = _d[1];
    var _e = react_1.useState(0), minPageNumberLimitState = _e[0], setMinPageNumberLimitState = _e[1];
    var allPages = Math.ceil(allPerformanceItems / pageNumberLimitState);
    var onClickSelected = function (event) {
        //back to top
        window.scroll(0, 0);
        setSelectedPerformancePage(Number(event.target.value));
    };
    console.log(selectedPerformancePage);
    var onClickNextPage = function () {
        var tempLimit = 0;
        if (selectedPerformancePage + 1 > maxPageNumberLimitState) {
            tempLimit = eachPageNumberLimitState;
        }
        setSelectedPerformancePage(function (pre) { return pre + 1; });
        setMaxPageNumberLimitState(function (pre) { return pre + tempLimit; });
        setMinPageNumberLimitState(function (pre) { return pre + tempLimit; });
    };
    var onClickPrePage = function () {
        var tempLimit = 0;
        if ((selectedPerformancePage - 1) % eachPageNumberLimitState == 0) {
            tempLimit = eachPageNumberLimitState;
        }
        setSelectedPerformancePage(function (pre) { return pre - 1; });
        setMaxPageNumberLimitState(function (pre) { return pre - tempLimit; });
        setMinPageNumberLimitState(function (pre) { return pre - tempLimit; });
    };
    var onClickNextRange = function () {
        setSelectedPerformancePage(function (pre) { return pre + eachPageNumberLimitState > allPages ? pre = allPages : pre + eachPageNumberLimitState; });
        setMaxPageNumberLimitState(function (pre) { return pre + eachPageNumberLimitState; });
        setMinPageNumberLimitState(function (pre) { return pre + eachPageNumberLimitState; });
    };
    var onClickPreRange = function () {
        setSelectedPerformancePage(function (pre) { return pre <= eachPageNumberLimitState ? pre = 1 : pre - eachPageNumberLimitState; });
        setMaxPageNumberLimitState(function (pre) { return pre > eachPageNumberLimitState ? pre - eachPageNumberLimitState : eachPageNumberLimitState; });
        setMinPageNumberLimitState(function (pre) { return pre > eachPageNumberLimitState ? pre - eachPageNumberLimitState : 0; });
    };
    var pages = [];
    for (var i = 1; i <= allPages; i++) {
        pages.push(i);
    }
    var renderPageNumbers = pages.map(function (number, index) {
        if (number > minPageNumberLimitState && number < maxPageNumberLimitState + 1) {
            return (react_1["default"].createElement("li", { key: index },
                react_1["default"].createElement("button", { className: "show-list-pagination-button " + (selectedPerformancePage === number ? "show-list-pagination-active" : null), value: number, onClick: onClickSelected }, number)));
        }
        else {
            return null;
        }
    });
    return (react_1["default"].createElement("div", { className: 'show-list-pagination' },
        react_1["default"].createElement("ul", null,
            selectedPerformancePage === 1 ? null : react_1["default"].createElement("li", null,
                react_1["default"].createElement("button", { className: 'show-list-pagination-button', onClick: onClickPrePage },
                    react_1["default"].createElement("img", { style: { transform: 'scaleX(-1)' }, src: next_page_svg_1["default"], alt: 'NextPage' }))),
            minPageNumberLimitState == 0 ? null : react_1["default"].createElement("li", null,
                react_1["default"].createElement("button", { className: 'show-list-pagination-button', onClick: onClickPreRange }, "...")),
            renderPageNumbers,
            maxPageNumberLimitState + eachPageNumberLimitState > allPages ? null : react_1["default"].createElement("li", null,
                react_1["default"].createElement("button", { className: 'show-list-pagination-button', onClick: onClickNextRange }, "...")),
            selectedPerformancePage === allPages ? null : react_1["default"].createElement("li", null,
                react_1["default"].createElement("button", { className: 'show-list-pagination-button', onClick: onClickNextPage },
                    react_1["default"].createElement("img", { src: next_page_svg_1["default"], alt: 'NextPage' }))))));
};
exports.ShowList = function () {
    var _a = react_1.useState([[{ id: 0, title: "default", description: "default", time: "2021-07-21T05:05:01.000Z", lineMoney: 0, latitude: 121.52316423760928, longitude: 25.09499813282317 }], 0]), performanceData = _a[0], setPerformanceData = _a[1];
    var _b = react_1.useState(''), selectedTimeState = _b[0], setSelectedTimeState = _b[1];
    var _c = react_1.useState(1), selectedPerformancePage = _c[0], setSelectedPerformancePage = _c[1];
    var _d = react_1.useState([]), timeListArrayState = _d[0], setTimeListArrayState = _d[1];
    var _e = react_1.useState(''), errorState = _e[0], setErrorState = _e[1];
    var _f = react_1.useState(true), statusState = _f[0], setStatusState = _f[1];
    react_1.useEffect(function () {
        var getTime = function () { return __awaiter(void 0, void 0, void 0, function () {
            var result, error, status, timeStampArray, time;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, busker_1.getBuskerPerformanceTime()];
                    case 1:
                        result = _a.sent();
                        error = '';
                        status = true;
                        timeStampArray = [];
                        if (result.status == 200) {
                            time = result.data;
                            timeStampArray = time.map(function (object) { return object.time.substr(0, 10); });
                        }
                        else if (result.status == 500) {
                            error = 'server is busying';
                            status = false;
                        }
                        setErrorState(function (pre) { return pre + error; });
                        setStatusState(function (pre) { return pre == false ? pre : status; });
                        // setTimeListState(result)
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
            var result, performance, error, status;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (selectedTimeState.length === 0)
                            return [2 /*return*/]; //空值不請求
                        return [4 /*yield*/, busker_1.getBuskerPerformanceData({ time: selectedTimeState, page: selectedPerformancePage })];
                    case 1:
                        result = _a.sent();
                        error = '';
                        status = true;
                        if (result.status == 200) {
                            performance = result.data;
                        }
                        else if (result.status == 400) {
                            error = 'Error:400; parameter error';
                            status = false;
                        }
                        else if (result.status == 500) {
                            error = 'Error:500; server is busying';
                            status = false;
                        }
                        else {
                            error = 'unknown error';
                            status = false;
                        }
                        setErrorState(function (pre) { return pre + error; });
                        setStatusState(function (pre) { return pre == false ? pre : status; });
                        setPerformanceData(performance);
                        return [2 /*return*/];
                }
            });
        }); };
        getPerformanceData();
    }, [selectedTimeState, selectedPerformancePage]);
    return (react_1["default"].createElement(react_1["default"].Fragment, null, statusState ?
        react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(ShowListHeader, { timeListArrayState: timeListArrayState, setSelectedTimeState: setSelectedTimeState, setSelectedPerformancePage: setSelectedPerformancePage }),
            react_1["default"].createElement(ShowListMain, { performanceData: performanceData }),
            react_1["default"].createElement(ShowListPagination, { setSelectedPerformancePage: setSelectedPerformancePage, selectedPerformancePage: selectedPerformancePage, allPerformanceItems: performanceData[1] }))
        : errorState));
};
