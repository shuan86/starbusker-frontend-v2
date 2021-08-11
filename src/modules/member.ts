import { EnrollMemberType, UpdateMemberInfoType } from "../types/memberType";
import { apiPath } from '../modules/routerPath'
import * as request from "./request";
export const login = async (account: string, password: string) => {
    const jsonData = JSON.stringify({ account, password })
    return await request.encryptPost(apiPath.login, jsonData)
}
export const logout = async () => {
    return await request.post(apiPath.logout, '')
}
export const enroll = async (data: EnrollMemberType) => {
    //class->json string->encrypt
    const jsonData = JSON.stringify(data)
    return await request.encryptPost(apiPath.member, jsonData)
}
