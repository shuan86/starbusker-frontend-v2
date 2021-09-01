export type ApplyPerformanceType = {
    title: string
    description: string
    time: Date
    location: string
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
