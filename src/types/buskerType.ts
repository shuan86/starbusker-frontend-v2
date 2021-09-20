export type ApplyPerformanceType = {
    title: string
    description: string
    time: string
    location: string
    latitude: number
    longitude: number
}
export type ResApplyPerformanceType = {
    performanceId: number
    name: string,
    email: string,
    location: string,
    description: string,
    title: string,
    time: string,
    longitude: number,
    latitude: number
}
export type ResHighestOnlineAmountType = {
    highestOnlineAmount: number,
    time: string
}
export type ResHighestComentAmountType = {
    count: number,
    time: string
}
export type ResWeekComentAmountType = {
    count: number
    time: string
}
export type ResPerformanceDonateType = {
    amount: number
}
export type ReqPerformancesDataType = {
    time: string
    page: number
}
export type ResFuturePerformanceDataType = {
    performanceId: number
    name: string,
    email: string,
    location: string,
    description: string,
    title: string,
    time: string,
    longitude: number,
    latitude: number
}
export class GetBuskerInfoType {
    name: string
    type: number
    description: string
    likeAmount: number
    avatar: string
    linePayOrderUrl: string
}
export class ResPerformanceInfoType {
    name: string
    type: number
    description: string
    likeAmount: number
    avatar: string
    linePayOrderUrl: string
}
export type ConfirmLinePayOrderType = {
    transactionId: string
    orderId: string
}
export enum BuskerType {
    other,
    singer,
    drawer,
    drummer
}
export enum BuskerTypeEnum { '其他' = 0, '歌手' = 1, '畫家' = 2, '鼓手' = 3 };
