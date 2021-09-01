import { EnrollMemberType, UpdateMemberInfoType, ApplyBuskerType } from "../types/memberType";
import { apiPath } from '../modules/routerPath'
import { encrypt } from '../modules/rsa'

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
export const getMemberInfo = async () => {
    return await request.get(apiPath.memberInfo, '')
}
export const putMemberInfo = async (data: UpdateMemberInfoType) => {
    const formData = new FormData()
    formData.append('name', data.name)
    formData.append('email', data.email)
    formData.append('password', encrypt(data.password))
    formData.append('avatar', data.avatar)
    return await request.putFormData(apiPath.memberInfo, formData)
}

export const postApplyBusker = async (data: ApplyBuskerType) => {
    const jsonData = JSON.stringify(data);
    console.log('send applyBusker');

    return await request.post(apiPath.busker, jsonData)
}