import React, { useEffect, useState } from 'react';
import { BuskerSidebar } from "../components/BuskerSidebar";
import '../public/css/buskerPage.css'
import { Bar } from 'react-chartjs-2';
import Calendar from 'react-calendar';
import { BarType, OptionsType } from "../types/chartType";
import { ResHighestComentAmountType, ResHighestOnlineAmountType, ResFuturePerformanceDataType, ResPerformanceDonateType } from "../types/buskerType";
import { getCommentAmount, getOnlineAmount, getFuturePerformancesData, getPerformanceDonate as getPerformancesDonate } from "../modules/busker";
import moment from "moment";
import '../public/css/calendar.css';
import Modal from 'react-modal';
import { BuskerApplyResult } from "../components/BuskerApplyResult";
import MoneySize from '../public/svg/money-size.svg'
import MoneySizeHand from '../public/svg/money-size-hand.svg'

const BuskerPageItem = ({ title, content }) => {
    return (
        <div className="busker-page-item">
            <div className="busker-page-item-title">{title}</div>
            <div className="busker-page-item-content" >{content}</div>
        </div>
    )
}
const barOptions: OptionsType = {
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
const BarContent = ({ data }) => {
    return (
        <>
            {data && <Bar data={data} options={barOptions} height={1} width={1} />}
        </>
    )
}




const CalendarContent = ({ loadDataArr }: { loadDataArr: ResFuturePerformanceDataType[] }) => {
    return (
        <div className="busker-page-item-content " style={{ height: '100%' }}>
            <Calendar
                selectRange={false}
                tileClassName={({ date, view }) => {
                    if (loadDataArr &&
                        loadDataArr.find(x => x.time.indexOf(moment(date).format("YYYY/MM/DD")) >= 0)) {
                        return 'title-Hight-light'
                    }
                }}
            /></div>
    )
}
const PerformanceDashboard = ({ loadDataArr }: { loadDataArr: ResFuturePerformanceDataType[] }) => {
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
    const [performanceDataState, setPerformanceData] = useState<ResFuturePerformanceDataType>(null)
    const openModal = () => {
        setModalIsOpen(true);
    }
    const closeModal = () => {
        setModalIsOpen(false);
    }
    // const customStyles = {
    //     content: {
    //         display: 'flex',
    //         justifyContent: 'center',
    //     },
    // };
    return (
        <div className='busker-page-item-content'>
            {
                loadDataArr && loadDataArr.map((v, i) => {
                    return (
                        <div className="busker-page-performanceDashboard-item" key={`performanceDashboard-item${i}`}>
                            <div className="busker-page-performanceDashboard-item-info">
                                <div className="busker-page-performanceDashboard-item-time">
                                    {v.time}
                                </div>
                                <div className="busker-page-performanceDashboard-item-title">
                                    ???????????? :{v.title}
                                </div>
                                <div className="busker-page-performanceDashboard-item-location">
                                    ???????????? :{v.location}
                                </div>
                            </div>
                            <div>
                                <button className='busker-page-performanceDashboard-item-btn' onClick={() => {
                                    openModal()
                                    setPerformanceData(v)
                                }}>??????</button>
                            </div>
                        </div>
                    )



                })
            }
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                // style={customStyles}
                className="custom-styles"
            >
                <BuskerApplyResult resPerformanceData={performanceDataState} />

            </Modal>
        </div>
    )
}
export const BuskerPage = () => {
    const [onlineAmountBarState, setOnlineAmountBarState] = useState<BarType>(null)
    const [newestCommentState, setNewsCommentState] = useState<BarType>(null)
    const [futurePerformancesState, setFuturePerformancesState] = useState<ResFuturePerformanceDataType[]>(null)
    const [performanceDonateState, setPerformanceDonateState] = useState<number>(0)

    useEffect(() => {
        const getData = async () => {
            const futurePerformancesResult = await getFuturePerformancesData()
            const onlineAmountResult = await getOnlineAmount()
            const commentAmountResult = await getCommentAmount()
            const performanceDonateResult = await getPerformancesDonate()

            setFuturePerformancesState(pre => {
                if (futurePerformancesResult.status == 200) {
                    const resData = futurePerformancesResult.data as ResFuturePerformanceDataType[]
                    return resData
                }
                return pre
            })
            setOnlineAmountBarState(pre => {
                if (onlineAmountResult.status == 200) {
                    // highestOnlineAmount: 9, time: '2021-10-09 00:00:01'
                    const resData = onlineAmountResult.data as ResHighestOnlineAmountType[]
                    const labelArr: string[] = []
                    const dataArr: number[] = []
                    for (let i = resData.length - 1; i >= 0; i--) {
                        const yearMonthDate = resData[i].time.split(' ')[0]
                        labelArr.push(yearMonthDate)
                        dataArr.push(resData[i].highestOnlineAmount)
                    }

                    const barData: BarType = {
                        labels: [...labelArr],
                        datasets: [
                            {
                                label: '',
                                data: dataArr,
                                backgroundColor: [
                                    'rgba(119, 141, 169)',
                                    'rgba(119, 141, 169)',
                                    'rgba(119, 141, 169)',
                                    'rgba(119, 141, 169)',
                                    'rgba(119, 141, 169)',
                                    'rgba(119, 141, 169)',
                                    'rgba(119, 141, 169)'
                                ],
                                borderColor: [
                                    'rgba(119, 141, 169)',
                                    'rgba(119, 141, 169)',
                                    'rgba(119, 141, 169)',
                                    'rgba(119, 141, 169)',
                                    'rgba(119, 141, 169)',
                                    'rgba(119, 141, 169)',
                                    'rgba(119, 141, 169)'
                                ],
                                borderWidth: 1,
                            },
                        ],
                    }
                    return barData
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
                    const barData: BarType = {
                        labels: [...labelArr],
                        datasets: [
                            {
                                label: '',
                                data: [...dataArr],
                                backgroundColor: [
                                    'rgba(119, 141, 169)',
                                    'rgba(119, 141, 169)',
                                    'rgba(119, 141, 169)',
                                    'rgba(119, 141, 169)',
                                    'rgba(119, 141, 169)',
                                    'rgba(119, 141, 169)',
                                    'rgba(119, 141, 169)',
                                ],
                                borderColor: [
                                    'rgba(119, 141, 169)',
                                    'rgba(119, 141, 169)',
                                    'rgba(119, 141, 169)',
                                    'rgba(119, 141, 169',
                                    'rgba(119, 141, 169)',
                                    'rgba(119, 141, 169)',
                                    'rgba(119, 141, 169)',

                                ],
                                borderWidth: 1,
                            },
                        ],
                    }
                    return barData
                }
                return pre
            })
            setPerformanceDonateState(pre => {
                if (performanceDonateResult.status == 200) {
                    const resData = performanceDonateResult.data as ResPerformanceDonateType

                    return resData.amount
                }
                return pre
            })
        }
        getData()
    }, [])

    return (
        <div className='wrap'>
            <div className="busker-page">
                <BuskerSidebar />

                <div className="busker-page-group">

                    <BuskerPageItem title='??????????????????' content={<BarContent data={onlineAmountBarState} />} />
                    <BuskerPageItem title='??????????????????' content={<BarContent data={newestCommentState} />} />

                    <div className="busker-page-schedule-title">
                        ?????????
                    </div>

                    <div className="busker-page-schedule">
                        <CalendarContent loadDataArr={futurePerformancesState} />
                    </div>
                    {
                        futurePerformancesState && futurePerformancesState.length > 0 ?
                            <div className="busker-page-performanceDashboard">
                                <PerformanceDashboard loadDataArr={futurePerformancesState} />
                            </div> : "you don't have any data"
                    }
                    <div className="busker-page-schedule-title">
                        ????????????
                    </div>
                    <div className="busker-page-donate">
                        <div className="busker-page-donate-title">
                            <img src={MoneySizeHand} alt="" />

                            <p>??????????????????:</p>
                        </div>
                        <div className="busker-page-donate-amount">
                            <img src={MoneySize} alt="" />
                            <p>{performanceDonateState}???</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

