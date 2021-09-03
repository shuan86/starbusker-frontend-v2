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
var react_router_1 = require("react-router");
var routerPath_1 = require("../modules/routerPath");
var busker_info_default_photo_png_1 = require("../public/img/busker-info-default-photo.png");
var member_1 = require("../modules/member");
var BuskerInput_1 = require("../components/BuskerInput");
var MemberSidebar_1 = require("../components/MemberSidebar");
require("../public/css/memberInfoPage.css");
exports.MemberInfoPage = function () {
    var _a = react_1.useState(''), fechDataErrorState = _a[0], setFechDataErrorState = _a[1];
    var _b = react_1.useState(''), submitResultErrorState = _b[0], setSubmitResultErrorState = _b[1];
    var _c = react_1.useState('謝孟迪'), memberName = _c[0], setMemberName = _c[1];
    var _d = react_1.useState(''), memberNameErrorState = _d[0], setMemberNameErrorState = _d[1];
    var _e = react_1.useState('account'), memberAccount = _e[0], setMemberAccount = _e[1];
    var _f = react_1.useState('account@gmail.com'), memberEmail = _f[0], setMemberEmail = _f[1];
    var _g = react_1.useState(''), memberEmailErrorState = _g[0], setMemberEmailErrorState = _g[1];
    var _h = react_1.useState('123'), memberPasswordFirst = _h[0], setMemberPasswordFirst = _h[1];
    var _j = react_1.useState('123'), memberPasswordSecond = _j[0], setMemberPasswordSecond = _j[1];
    var _k = react_1.useState(''), memberPasswordErrorState = _k[0], setMemberPasswordErrorState = _k[1];
    var _l = react_1.useState(0), memberExp = _l[0], setMemberExp = _l[1];
    var _m = react_1.useState(true), memberMale = _m[0], setMemberMale = _m[1];
    var _o = react_1.useState(null), avatarState = _o[0], setAvatarState = _o[1];
    var _p = react_1.useState(null), avatarPreviewState = _p[0], setAvatarPreviewState = _p[1];
    var _q = react_1.useState(''), avatarErrorState = _q[0], setAvatarErrorState = _q[1];
    var history = react_router_1.useHistory();
    var fetchData = function () { return __awaiter(void 0, void 0, void 0, function () {
        var result, memberData, error;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, member_1.getMemberInfo()];
                case 1:
                    result = _a.sent();
                    console.log(result.status);
                    result.data = JSON.stringify(result.data);
                    error = '';
                    if (result.status == 200) {
                        memberData = JSON.parse(result.data);
                    }
                    else if (result.status == 400 || result.status == 401) {
                        history.push(routerPath_1.path.login);
                        error = "Error:" + result.status + " failed to get member info\u3001you aren't member ";
                        return [2 /*return*/];
                    }
                    else if (result.status == 501) {
                        history.push(routerPath_1.path.login);
                        error = "Error:" + result.status + " failed to get member info\u3001you aren't member ";
                        return [2 /*return*/];
                    }
                    else {
                        error = "unknown error";
                    }
                    console.log('fetchData:', memberData);
                    setFechDataErrorState(error);
                    setMemberName(memberData.name);
                    setMemberAccount(memberData.account);
                    setMemberEmail(memberData.email);
                    setMemberMale(memberData.male);
                    // setMemberAvatar(memberData.avatar);
                    setAvatarPreviewState(memberData.avatar == '' ? busker_info_default_photo_png_1["default"] : "data:image/png;base64," + memberData.avatar);
                    setMemberExp(memberData.exp);
                    return [2 /*return*/, memberData];
            }
        });
    }); };
    react_1.useEffect(function () {
        fetchData();
        return function () {
        };
    }, []);
    var onClickSubmit = function () { return __awaiter(void 0, void 0, void 0, function () {
        var regex, nameError, emailError, passwordError, submitResultError, hasError, result, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                    nameError = '';
                    emailError = '';
                    passwordError = '';
                    hasError = true;
                    if (memberName.length > 20 || memberName.length < 2) {
                        nameError = '輸入內容長度需大於2個字，小於20個字';
                        hasError = false;
                    }
                    if (!regex.test(memberEmail)) {
                        emailError = '請輸入正確的email格式';
                        hasError = false;
                    }
                    if (memberPasswordFirst !== memberPasswordSecond) {
                        passwordError = '請重新確認密碼是否輸入相同';
                        hasError = false;
                    }
                    if (!hasError) return [3 /*break*/, 2];
                    data = { name: memberName, email: memberEmail, password: memberPasswordSecond, avatar: avatarState };
                    return [4 /*yield*/, member_1.putMemberInfo(data)];
                case 1:
                    result = _a.sent();
                    _a.label = 2;
                case 2:
                    console.log(result);
                    if (result.status == 200) {
                        submitResultError = '';
                    }
                    else if (result.status == 400 || result.status == 401) {
                        submitResultError = "Error:" + result.status + " failed to get member info\u3001you aren't member ";
                        return [2 /*return*/];
                    }
                    else if (result.status == 500) {
                        submitResultError = "Error:" + result.status + " server is busying ";
                        return [2 /*return*/];
                    }
                    else {
                        submitResultError = "unknown error";
                    }
                    setSubmitResultErrorState(submitResultError);
                    setMemberNameErrorState(nameError);
                    setMemberEmailErrorState(emailError);
                    setMemberPasswordErrorState(passwordError);
                    return [2 /*return*/];
            }
        });
    }); };
    var onClickUpdateImage = function (e) {
        var reader = new FileReader();
        reader.readAsDataURL(e.currentTarget.files[0]);
        reader.onload = function () {
            if (reader.readyState == 2) {
                setAvatarPreviewState(reader.result);
            }
        };
        setAvatarState(e.currentTarget.files[0]);
    };
    return (react_1["default"].createElement("div", { className: 'wrap' },
        react_1["default"].createElement("div", { className: 'member-info' },
            react_1["default"].createElement(BuskerInput_1.BuskerInputTitle, { title: '\u500B\u4EBA\u8A2D\u5B9A' }),
            react_1["default"].createElement("div", { className: 'member-info-group' },
                react_1["default"].createElement(MemberSidebar_1.MemberSidebar, null),
                react_1["default"].createElement("div", { className: 'member-info-account' },
                    react_1["default"].createElement("div", { className: 'member-info-account-title' }, "\u57FA\u672C\u8CC7\u6599"),
                    react_1["default"].createElement("div", { className: 'member-info-account-group' },
                        react_1["default"].createElement("div", { className: 'member-info-account-photo' },
                            react_1["default"].createElement("div", null,
                                react_1["default"].createElement("img", { src: avatarPreviewState == '' || null ? busker_info_default_photo_png_1["default"] : avatarPreviewState, alt: 'Photo', className: 'member-info-account-photo-photo' })),
                            react_1["default"].createElement("div", null,
                                react_1["default"].createElement("label", { className: "member-info-account-photo-btn", htmlFor: "avatar" }, "\u66F4\u6539\u982D\u50CF")),
                            react_1["default"].createElement("input", { type: "file", accept: "image/*", name: "image-upload", id: "avatar", onChange: onClickUpdateImage, className: 'member-info-avatar' })),
                        react_1["default"].createElement("div", { className: 'member-info-account-data' },
                            react_1["default"].createElement(BuskerInput_1.BuskerInputBox, { name: 'name', title: '\u59D3\u540D', inputType: 'text', state: memberName, setState: setMemberName, errorState: memberNameErrorState }),
                            react_1["default"].createElement(BuskerInput_1.BuskerInputBox, { name: 'account', title: '\u5E33\u865F', inputType: 'text', state: memberAccount, setState: setMemberAccount, errorState: '' }),
                            react_1["default"].createElement(BuskerInput_1.BuskerInputBox, { name: 'email', title: '\u96FB\u5B50\u4FE1\u7BB1', inputType: 'email', state: memberEmail, setState: setMemberEmail, errorState: memberEmailErrorState }),
                            react_1["default"].createElement(BuskerInput_1.BuskerInputBox, { name: 'passowrd', title: '\u5BC6\u78BC', inputType: 'password', state: memberPasswordFirst, setState: setMemberPasswordFirst, errorState: '' }),
                            react_1["default"].createElement(BuskerInput_1.BuskerInputBox, { name: 'secondPassword', title: '\u518D\u6B21\u8F38\u5165\u5BC6\u78BC', inputType: 'password', state: memberPasswordSecond, setState: setMemberPasswordSecond, errorState: memberPasswordErrorState }),
                            react_1["default"].createElement(BuskerInput_1.BuskerInputLogin, null),
                            react_1["default"].createElement(BuskerInput_1.BuskerInputBtn, { title: '\u78BA\u8A8D\u4FEE\u6539', onClick: onClickSubmit }),
                            react_1["default"].createElement("div", null, submitResultErrorState))))))));
};
