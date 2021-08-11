import { MemberType } from "../types/memberType";

const initialState: MemberType = {
    account: '',
    male: true,
    email: '',
    name: '',
    exp: 0,
    avatar: '',
}
const InitialMemberReducerAction = 'InitialMemberReducerAction'
const SetMemberReducerAction = 'SetMemberReducerAction'
type ActionType = {
    type: string,
    payload: {
        n: MemberType
    }
}
export const setMemberReducer = (n: MemberType): ActionType => ({
    type: SetMemberReducerAction,
    payload: {
        n
    }
})
export const initialMemberReducer = (): ActionType => ({
    type: InitialMemberReducerAction,
    payload: {
        n: initialState
    }
})
export const memberReducer = (state: MemberType = initialState, action: ActionType): MemberType => {
    switch (action.type) {
        case SetMemberReducerAction:
            return action.payload.n
        case InitialMemberReducerAction:
            return action.payload.n
        default:
            return state
    }
}

