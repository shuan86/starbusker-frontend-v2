export type ApplyPerformanceType = {
    title: string
    description: string
    time: string
    location: string
    latitude: number
    longitude: number
}
export type ResApplyPerformanceType = {
    id: number
    name: string,
    email: string,
    location: string,
    description: string,
    title: string,
    time: string,
    longitude: number,
    latitude: number
}
export type ReqPerformancesDataType = {
    time: string
    page: number
}
export class GetBuskerInfoType {
    name: string
    type: number
    description: string
    likeAmount: number
    avatar: string

}
export enum BuskerType {
    other,
    singer,
    drawer,
    drummer
}
export enum BuskerTypeEnum { '其他' = 0, '歌手' = 1, '畫家' = 2, '鼓手' = 3 };
