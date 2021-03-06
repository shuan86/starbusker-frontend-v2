"use strict";
exports.__esModule = true;
exports.apiPath = exports.path = void 0;
var Path = /** @class */ (function () {
    function Path() {
        this.busker_comment_board = '/busker_comment_board';
        this.busker_apply_performance = '/busker_apply_performance';
        this.busker_data = '/busker_data';
        this.busker_apply = '/busker_apply';
        this.member_info = '/member_info';
        this.member_password = '/member_password';
        this.comments_record = '/comments_record';
        this.chatroom = '/chatroom';
        this.busker = '/busker';
        this.enroll = '/enroll';
        this.login = '/login';
        this.index = '/index';
    }
    return Path;
}());
exports.path = new Path();
var APIPATH = /** @class */ (function () {
    function APIPATH() {
        this.member = 'member';
        this.busker = 'busker';
        this.login = 'login';
        this.logout = 'logout';
        this.memberInfo = 'memberInfo';
        this.performances = 'performances';
        this.performancesTime = 'performancesTime';
        this.performance = 'performance';
        this.getBuskerInfo = 'busker';
    }
    return APIPATH;
}());
exports.apiPath = new APIPATH();
