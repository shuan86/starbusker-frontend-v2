import { MemberType, LoginModeEnum } from "../types/memberType";
const initialState: MemberType = {
    account: '',
    male: true,
    email: '',
    name: '',
    exp: 0,
    avatar: '',
    isBusker: false,
    loginMode: LoginModeEnum.local
}
const InitialMemberReducerActionName = 'InitialMemberReducerAction'
const SetMemberReducerActionName = 'SetMemberReducerAction'
type ActionType = {
    type: string,
    payload: {
        n: MemberType
    }
}
export const setMemberAction = (n: MemberType): ActionType => ({
    type: SetMemberReducerActionName,
    payload: {
        n
    }
})
export const initialMemberAction = (): ActionType => ({
    type: InitialMemberReducerActionName,
    payload: {
        n: initialState
    }
})
export const memberReducer = (state: MemberType = initialState, action: ActionType): MemberType => {
    switch (action.type) {
        case SetMemberReducerActionName:
            return action.payload.n
        case InitialMemberReducerActionName:
            return action.payload.n
        default:
            return state
    }
}

