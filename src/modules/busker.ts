import { ApplyPerformanceType, ReqPerformancesDataType } from "../types/buskerType";
import { apiPath } from '../modules/routerPath'
import * as request from "./request";

export const postApplyPerformance = async (data: ApplyPerformanceType) => {
    const jsonData = JSON.stringify(data);
    const result = request.post(apiPath.performance, jsonData)
    return result
}

export const getBuskerPerformanceData = async (data: ReqPerformancesDataType) => {
    const jsonData = JSON.stringify(data);
    const result = await request.get(apiPath.performances, jsonData)
    return result
}

export const getBuskerPerformanceTime = async () => {
    const result = await request.get(apiPath.performancesTime, '')
    return result
}
export const getBuskerInfo = async (id: number) => {
    const jsonData = JSON.stringify({ id });
    const result = await request.get(apiPath.busker, jsonData)
    return result
}
export const deleteBuskerPerformance = async (performanceId: number) => {
    const jsonData = JSON.stringify({ performanceId });
    const result = await request.deleteRequest(apiPath.performance, jsonData)
    return result
}
export const getOnlineAmount = async () => {
    const result = await request.get(apiPath.onlineAmount, '')
    return result
}
export const getCommentAmount = async () => {
    const result = await request.get(apiPath.commentAmount, '')
    return result
}
export const getWeekCommentAmount = async () => {
    const result = await request.get(apiPath.weekCommentAmount, '')
    return result
}
export const getFuturePerformancesData = async () => {
    const result = await request.get(apiPath.futurePerformancesData, '')
    return result
}