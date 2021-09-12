import { MemberType } from "../types/memberType";
import { ChatroomPage } from "../views/ChatroomPage";
type ChatroomPageType = {
    buskerId: number,
    performanceId: number
}

const initialState: ChatroomPageType = {
    buskerId: 0,
    performanceId: 0
}
const InitialChatroomActionName = 'InitialChatroomAction'
const SetChatroomActionName = 'SetChatroomAction'
type ActionType = {
    type: string,
    payload: {
        n: ChatroomPageType
    }
}
export const setMemberAction = (n: ChatroomPageType): ActionType => ({
    type: SetChatroomActionName,
    payload: {
        n
    }
})
export const initialMemberAction = (): ActionType => ({
    type: InitialChatroomActionName,
    payload: {
        n: initialState
    }
})
export const chatroomReducer = (state: ChatroomPageType = initialState, action: ActionType): ChatroomPageType => {
    switch (action.type) {
        case SetChatroomActionName:
            return action.payload.n
        case InitialChatroomActionName:
            return initialState
        default:
            return state
    }
}

