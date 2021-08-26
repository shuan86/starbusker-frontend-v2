import { ApplyPerformanceType, PerformancesDataType } from "../types/buskerType";
import { apiPath } from '../modules/routerPath'
import * as request from "./request";

export const postApplyPerformance = async (data: ApplyPerformanceType) => {
    const jsonData = JSON.stringify(data);
    request.post(apiPath.performance, jsonData)
}

export const getBuskerPerformanceData = async (data: PerformancesDataType) => {
    const jsonData = JSON.stringify(data);
    let result = await request.get(apiPath.performances, jsonData)
    return result
}

export const getBuskerPerformanceTime = async () => {
    let result = await request.get(apiPath.performancesTime, '')
    return result
}