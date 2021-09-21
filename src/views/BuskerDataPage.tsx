import React, { useState, useEffect } from 'react';
import { BuskerSidebar } from '../components/BuskerSidebar';
import '../public/css/buskerDataPage.css'
import { Line } from 'react-chartjs-2';
import { LineType } from "../types/chartType";
import { getCommentAmount, getWeekCommentAmount } from "../modules/busker";
import { ResHighestComentAmountType, ResWeekComentAmountType } from "../types/buskerType";

export const BuskerDataPage = () => {
    const [newestCommentState, setNewsCommentState] = useState<LineType>({
        labels: [],
        datasets: [
            {
                label: '',
                data: [],
                fill: false,
                backgroundColor: 'rgb(119, 141, 169)',
                borderColor: 'rgba(119, 141, 169)',
            },
        ],
    })
    const [weekCommentState, setweekCommentState] = useState<LineType>({
        labels: [],
        datasets: [
            {
                label: '',
                data: [],
                fill: false,
                backgroundColor: 'rgb(119, 141, 169)',
                borderColor: 'rgba(119, 141, 169)',
            },
        ],
    })
    useEffect(() => {
        const getData = async () => {
            const weekAmountResult = await getWeekCommentAmount()
            const commentAmountResult = await getCommentAmount()

            setweekCommentState(pre => {
                if (weekAmountResult.status == 200) {
                    // highestOnlineAmount: 9, time: '2021-10-09 00:00:01'
                    const resData = weekAmountResult.data as ResWeekComentAmountType[]
                    const labelArr: string[] = []
                    const dataArr: number[] = []
                    for (let i = resData.length - 1; i >= 0; i--) {
                        labelArr.push(resData[i].time)
                        dataArr.push(resData[i].count)
                    }
                    const lineData: LineType = {
                        labels: labelArr,
                        datasets: [
                            {
                                label: '',
                                data: dataArr,
                                fill: false,
                                backgroundColor: 'rgb(119, 141, 169)',
                                borderColor: 'rgba(119, 141, 169)',
                            },
                        ],

                    }
                    return lineData
                }
                return pre
            })
            setNewsCommentState(pre => {
                if (commentAmountResult.status == 200) {
                    // highestOnlineAmount: 9, time: '2021-10-09 00:00:01'
                    const resData = commentAmountResult.data as ResHighestComentAmountType[]
                    const labelArr: string[] = []
                    const dataArr: number[] = []
                    for (let i = resData.length - 1; i >= 0; i--) {
                        labelArr.push(resData[i].time)
                        dataArr.push(resData[i].count)
                    }
                    const lineData: LineType = {
                        labels: labelArr,
                        datasets: [
                            {
                                label: '',
                                data: dataArr,
                                fill: false,
                                backgroundColor: 'rgb(119, 141, 169)',
                                borderColor: 'rgba(119, 141, 169)',
                            },
                        ],

                    }
                    return lineData
                }
                return pre
            })
        }
        getData()
        return () => {

        }
    }, [])

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };
    return (
        <div className='wrap'>
            <div className='busker-data'>
                <BuskerSidebar />
                <div className='busker-data-group'>
                    <div className='busker-data-item'>
                        <div className='busker-data-item-title'>最新表演留言人次</div>
                        <div className='busker-data-item-content'>
                            <Line data={newestCommentState} options={options} height={0.5} width={0.5} />
                        </div>
                    </div>
                    <div className='busker-data-item'>
                        <div className='busker-data-item-title'>本週留言人數</div>
                        <div className='busker-data-item-content'>
                            <Line data={weekCommentState} options={options} height={0.5} width={0.5} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

