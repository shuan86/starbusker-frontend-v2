"use strict";
exports.__esModule = true;
exports.memberReducer = exports.initialMemberAction = exports.setMemberAction = void 0;
var initialState = {
    account: '',
    male: true,
    email: '',
    name: '',
    exp: 0,
    avatar: '',
    isBusker: false
};
var InitialMemberReducerActionName = 'InitialMemberReducerAction';
var SetMemberReducerActionName = 'SetMemberReducerAction';
exports.setMemberAction = function (n) { return ({
    type: SetMemberReducerActionName,
    payload: {
        n: n
    }
}); };
exports.initialMemberAction = function () { return ({
    type: InitialMemberReducerActionName,
    payload: {
        n: initialState
    }
}); };
exports.memberReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case SetMemberReducerActionName:
            return action.payload.n;
        case InitialMemberReducerActionName:
            return action.payload.n;
        default:
            return state;
    }
};
