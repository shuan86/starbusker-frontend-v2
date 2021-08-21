import { EnrollMemberType, UpdateMemberInfoType, ApplyBuskerType, ApplyPerformanceType, PerformancesDataType } from "../types/memberType";
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
export const getMemberInfo = async () => {
    return await request.get(apiPath.memberInfo, '')
}
export const putMemberInfo = async (data: UpdateMemberInfoType) => {
    const jsonData = JSON.stringify(data)
    return await request.encryptPut(apiPath.memberInfo, jsonData)
}
export const postApplyBusker = async (data: ApplyBuskerType) => {
    const jsonData = JSON.stringify(data);
    console.log('send applyBusker');

    return await request.post(apiPath.busker, jsonData)
}

export const postApplyPerformance = async (data: ApplyPerformanceType) => {
    const jsonData = JSON.stringify(data);
    request.encryptPost(apiPath.performance, jsonData)
}

export const getBuskerPerformanceData = async (data: PerformancesDataType) => {
    console.log(data);
    const jsonData = JSON.stringify(data);
    let result = await request.get(apiPath.performances, jsonData)
    return result
}

export const getBuskerPerformanceTime = async () => {
    let result = await request.get(apiPath.performancesTime, '')
    return result
}

export const getTime = async () => {
    console.log('send applyBusker');

    return await request.get(apiPath.performancesTime, '')
}