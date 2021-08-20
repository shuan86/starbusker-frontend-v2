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
exports.MemberInfoPage = void 0;
var react_1 = require("react");
var busker_info_photo_png_1 = require("../public/img/busker-info-photo.png");
require("../public/css/buskerInfoPage.css");
var member_1 = require("../modules/member");
var BuskerInput_1 = require("../components/BuskerInput");
var MemberSidebar_1 = require("../components/MemberSidebar");
exports.MemberInfoPage = function () {
    var _a = react_1.useState('謝孟迪'), memberName = _a[0], setMemberName = _a[1];
    var _b = react_1.useState(''), memberNameErrorState = _b[0], setMemberNameErrorState = _b[1];
    var _c = react_1.useState('account'), memberAccount = _c[0], setMemberAccount = _c[1];
    var _d = react_1.useState('account@gmail.com'), memberEmail = _d[0], setMemberEmail = _d[1];
    var _e = react_1.useState(''), memberEmailErrorState = _e[0], setMemberEmailErrorState = _e[1];
    var _f = react_1.useState('123456'), memberPasswordFirst = _f[0], setMemberPasswordFirst = _f[1];
    var _g = react_1.useState('123456'), memberPasswordSecond = _g[0], setMemberPasswordSecond = _g[1];
    var _h = react_1.useState(''), memberPasswordErrorState = _h[0], setMemberPasswordErrorState = _h[1];
    var _j = react_1.useState(0), memberExp = _j[0], setMemberExp = _j[1];
    var _k = react_1.useState(''), memberAvatar = _k[0], setMemberAvatar = _k[1];
    var _l = react_1.useState(true), memberMale = _l[0], setMemberMale = _l[1];
    var fetchData = function () { return __awaiter(void 0, void 0, void 0, function () {
        var result, memberData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, member_1.getMemberInfo()];
                case 1:
                    result = _a.sent();
                    result.data = JSON.stringify(result.data);
                    memberData = JSON.parse(result.data);
                    setMemberName(memberData.name);
                    setMemberAccount(memberData.account);
                    setMemberEmail(memberData.email);
                    setMemberMale(memberData.male);
                    setMemberAvatar(memberData.avatar);
                    setMemberExp(memberData.exp);
                    return [2 /*return*/, memberData];
            }
        });
    }); };
    react_1.useEffect(function () {
        fetchData();
    }, []);
    var isChangeContent = function () {
    };
    var onClickSubmit = function () { return __awaiter(void 0, void 0, void 0, function () {
        var regex, nameError, emailError, passwordError, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                    nameError = '';
                    emailError = '';
                    passwordError = '';
                    if (memberName.length > 20 || memberName.length < 2) {
                        nameError = '輸入內容長度需大於2個字，小於20個字';
                    }
                    if (!regex.test(memberEmail)) {
                        emailError = '請輸入正確的email格式';
                    }
                    if (!(memberPasswordFirst !== memberPasswordSecond)) return [3 /*break*/, 1];
                    passwordError = '請重新確認密碼是否輸入相同';
                    return [3 /*break*/, 3];
                case 1:
                    console.log('else');
                    data = { name: memberName, email: memberEmail, password: memberPasswordSecond };
                    return [4 /*yield*/, member_1.putMemberInfo(data)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    console.log('setState');
                    setMemberNameErrorState(nameError);
                    setMemberEmailErrorState(emailError);
                    setMemberPasswordErrorState(passwordError);
                    return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement("div", { className: 'wrap' },
        react_1["default"].createElement("div", { className: 'busker-info' },
            react_1["default"].createElement(BuskerInput_1.BuskerInputTitle, { title: '\u500B\u4EBA\u8A2D\u5B9A' }),
            react_1["default"].createElement("div", { className: 'busker-info-group' },
                react_1["default"].createElement(MemberSidebar_1.MemberSidebar, null),
                react_1["default"].createElement("div", { className: 'busker-info-account' },
                    react_1["default"].createElement("div", { className: 'busker-info-account-title' }, "\u57FA\u672C\u8CC7\u6599"),
                    react_1["default"].createElement("div", { className: 'busker-info-account-group' },
                        react_1["default"].createElement("div", { className: 'busker-info-account-photo' },
                            react_1["default"].createElement("img", { src: busker_info_photo_png_1["default"], alt: 'Photo', className: 'busker-info-account-photo-photo' }),
                            react_1["default"].createElement("button", { className: 'busker-info-account-photo-btn' }, "\u66F4\u6539\u982D\u50CF")),
                        react_1["default"].createElement("div", { className: 'busker-info-account-data' },
                            react_1["default"].createElement(BuskerInput_1.BuskerInputBox, { name: 'name', title: '\u59D3\u540D', inputType: 'text', state: memberName, setState: setMemberName, errorState: memberNameErrorState }),
                            react_1["default"].createElement(BuskerInput_1.BuskerInputBox, { name: 'account', title: '\u5E33\u865F', inputType: 'text', state: memberAccount, setState: setMemberAccount, errorState: '' }),
                            react_1["default"].createElement(BuskerInput_1.BuskerInputBox, { name: 'email', title: '\u96FB\u5B50\u4FE1\u7BB1', inputType: 'email', state: memberEmail, setState: setMemberEmail, errorState: memberEmailErrorState }),
                            react_1["default"].createElement(BuskerInput_1.BuskerInputBox, { name: 'passowrd', title: '\u5BC6\u78BC', inputType: 'password', state: memberPasswordFirst, setState: setMemberPasswordFirst, errorState: '' }),
                            react_1["default"].createElement(BuskerInput_1.BuskerInputBox, { name: 'secondPassword', title: '\u518D\u6B21\u8F38\u5165\u5BC6\u78BC', inputType: 'password', state: memberPasswordSecond, setState: setMemberPasswordSecond, errorState: memberPasswordErrorState }),
                            react_1["default"].createElement(BuskerInput_1.BuskerInputLogin, null),
                            react_1["default"].createElement(BuskerInput_1.BuskerInputBtn, { title: '\u78BA\u8A8D\u4FEE\u6539', onClick: function () { onClickSubmit(); }, disalbed: isChangeContent() }))))))));
};
