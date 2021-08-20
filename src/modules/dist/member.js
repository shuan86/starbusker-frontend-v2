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
exports.getTime = exports.getBuskerPerformanceTime = exports.getBuskerPerformance = exports.postApplyPerformance = exports.postApplyBusker = exports.putMemberInfo = exports.getMemberInfo = exports.enroll = exports.logout = exports.login = void 0;
var routerPath_1 = require("../modules/routerPath");
var request = require("./request");
exports.login = function (account, password) { return __awaiter(void 0, void 0, void 0, function () {
    var jsonData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                jsonData = JSON.stringify({ account: account, password: password });
                return [4 /*yield*/, request.encryptPost(routerPath_1.apiPath.login, jsonData)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.logout = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, request.post(routerPath_1.apiPath.logout, '')];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.enroll = function (data) { return __awaiter(void 0, void 0, void 0, function () {
    var jsonData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                jsonData = JSON.stringify(data);
                return [4 /*yield*/, request.encryptPost(routerPath_1.apiPath.member, jsonData)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.getMemberInfo = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, request.get(routerPath_1.apiPath.memberInfo, '')];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.putMemberInfo = function (data) { return __awaiter(void 0, void 0, void 0, function () {
    var jsonData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                jsonData = JSON.stringify(data);
                return [4 /*yield*/, request.encryptPut(routerPath_1.apiPath.memberInfo, jsonData)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.postApplyBusker = function (data) { return __awaiter(void 0, void 0, void 0, function () {
    var jsonData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                jsonData = JSON.stringify(data);
                console.log('send applyBusker');
                return [4 /*yield*/, request.post(routerPath_1.apiPath.busker, jsonData)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.postApplyPerformance = function (data) { return __awaiter(void 0, void 0, void 0, function () {
    var jsonData;
    return __generator(this, function (_a) {
        jsonData = JSON.stringify(data);
        request.encryptPost(routerPath_1.apiPath.performance, jsonData);
        return [2 /*return*/];
    });
}); };
exports.getBuskerPerformance = function () { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, request.get(routerPath_1.apiPath.performances, '')];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
exports.getBuskerPerformanceTime = function () { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, request.get(routerPath_1.apiPath.performancesTime, '')];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
exports.getTime = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('send applyBusker');
                return [4 /*yield*/, request.get(routerPath_1.apiPath.performancesTime, '')];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
