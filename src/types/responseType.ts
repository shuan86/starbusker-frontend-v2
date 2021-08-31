export type ResponseType = {
    status: number;
    data: string | object
}

export type ResPerformancesDataType = [
    [{
        id: number,
        title: string,
        description: string,
        time: string,
        lineMoney: number,
        latitude: number,
        longitude: number
    }],
    number//amount page
]
