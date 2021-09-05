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
    const result = await request.get(apiPath.getBuskerInfo, jsonData)
    return result
}
export const deleteBuskerPerformance = async (id: number) => {
    const jsonData = JSON.stringify({ id });
    const result = await request.deleteRequest(apiPath.performance, jsonData)
    return result
}