import { MemberType } from "../types/memberType";

const initialState: MemberType = {
    account: '',
    male: true,
    email: '',
    name: '',
    exp: 0,
    avatar: '',
}
const MemberReducerAction = 'setMemberReducer'
type ActionType = {
    type: typeof MemberReducerAction,
    payload: {
        n: MemberType
    }
}
export const setMemberReducer = (n: MemberType): ActionType => ({
    type: MemberReducerAction,
    payload: {
        n
    }
})
export const memberReducer = (state: MemberType = initialState, action: ActionType): MemberType => {
    switch (action.type) {
        case MemberReducerAction:
            return action.payload.n
        default:
            return state
    }
}

