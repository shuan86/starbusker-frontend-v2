export type ResponseType = {
    status: number;
    data: string | object
}

// export type ResPerformancesDataType = [
//     [{
//         id: number,
//         title: string,
//         description: string,
//         time: string,
//         lineMoney: number,
//         latitude: number,
//         longitude: number
//     }],
//     number//amount page
// ]
export type PerformancesDataType = {
    name: string,
    buskerId: number,
    performanceId: number,
    title: string,
    description: string,
    time: string,
    lineMoney: number,
    latitude: number,
    longitude: number,
    avatar: string,
    location: string
}
export type ResPerformancesDataType = {
    dataArr: PerformancesDataType[],
    dataAmount: number//amount page
}
// export type PerformancesDataType = {
//     id: number,
//     title: string,
//     description: string,
//     time: string,
//     lineMoney: number,
//     latitude: number,
//     longitude: number
// }
// export type ResPerformancesDataType = {
//     :PerformancesDataType
// number//amount page
// }
