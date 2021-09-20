import { EnrollMemberType, UpdateMemberInfoType, ApplyBuskerType, UpdatePassword } from "../types/memberType";
import { apiPath } from '../modules/routerPath'
import { encrypt } from '../modules/rsa'
import defaultAvatar from '../public/img/busker-info-default-photo.png'

import * as request from "./request";
export const login = async (account: string, password: string) => {
    const jsonData = JSON.stringify({ account, password })
    return await request.encryptPost(apiPath.login, jsonData)
}
export const loginWithLine = async () => {
    window.location.href = `${request.getHost()}/${apiPath.line}`
}
export const loginWithFB = async () => {
    window.location.href = `${request.getHost()}/${apiPath.fb}`
}
export const loginWithGoogle = async () => {
    window.location.href = `${request.getHost()}/${apiPath.google}`
}
export const parseAvatarImage = (img: string) => {

    if (img == '' || img == undefined) {
        return defaultAvatar
    }
    else {
        const imgStr = atob(img);
        if (imgStr.indexOf("http://") == 0 || imgStr.indexOf("https://") == 0) {
            return imgStr
        }
        else {
            return `data:image/png;base64,${img}`
        }
    }

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
    formData.append('avatar', data.avatar)
    return await request.putFormData(apiPath.memberInfo, formData)
}
export const postApplyBusker = async (data: ApplyBuskerType) => {
    const jsonData = JSON.stringify(data);
    return await request.post(apiPath.busker, jsonData)
}
export const putMemberPassword = async (data: UpdatePassword) => {
    const jsonData = JSON.stringify(data);
    return await request.encryptPut(apiPath.password, jsonData)
}