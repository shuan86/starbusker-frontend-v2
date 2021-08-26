import React, { useState, useEffect, useRef, useCallback } from 'react';
import Heart from '../public/svg/heart.svg'
import Photo from '../public/img/photo.png'
import NextPage from '../public/svg/next-page.svg'
import '../public/css/showList.css'
import { ReponseType } from '../types/reponseType'
import { getBuskerPerformanceTime, getBuskerPerformanceData } from '../modules/busker'

// const onClickTest = async () => {
//     const time = await getBuskerPerformanceTime()
//     const getPerData = { time: '2021-08-16', page: 1 }
//     const per = await getBuskerPerformanceData({ time: '2021-07-21', page: 1 })
//     console.log(time);
//     console.log(per);
//     //共50個資料 每天
// }


const ShowListMember = ({ memberDataArray }) => {
    const [memberGroup, setMemberGroup] = useState([])
    useEffect(() => {
        let result = []
        memberDataArray.map((currentValue, i) => {
            result.push(
                <div className='show-list-member'>
                    {/* member-active 觸發的樣式*/}
                    <img src={Photo} alt="Photo" className='show-list-member-photo' />
                    <div className='show-list-member-data'>
                        <div className='show-list-member-name'>
                            <span className='show-list-member-name-account'>{currentValue.title}</span>
                            <div className='show-list-member-likes'>
                                <img src={Heart} alt='Heart' className='show-list-member-hearts' />
                                <span className='show-list-member-likes-count'>120</span>
                            </div>
                        </div>
                        <div className='show-list-member-description'>{currentValue.description}</div>
                    </div>
                </div>
            );
        });
        setMemberGroup(result);
    }, [memberDataArray])
    return (
        <>
            {memberGroup}
        </>
    )
}

const ShowListTimeline = ({ timeRangeArray, timeListState }) => {
    const [minRange, setMinRange] = useState([]);
    useEffect(() => {
        let minRangeArray = []
        timeRangeArray.map((currentValue, i) => {
            if (currentValue.oneQuarter.length > 0) {
                // minRangeArray.push('1')
                minRangeArray.push(
                    <div className='show-list-timeline'>
                        <div className='show-list--timeline-title'>{`${currentValue.hour}:00`}</div>
                        <div className='show-list-member-group'>
                            <ShowListMember memberDataArray={currentValue.oneQuarter} />
                        </div>
                    </div>
                );
            }
            if (currentValue.twoQuarters.length > 0) {
                // minRangeArray.push('2')
                minRangeArray.push(
                    <div className='show-list-timeline'>
                        <div className='show-list--timeline-title'>{`${currentValue.hour}:15`}</div>
                        <div className='show-list-member-group'>
                            <ShowListMember memberDataArray={currentValue.twoQuarters} />
                        </div>
                    </div>
                );
            }
            if (currentValue.threeQuarters.length > 0) {
                // minRangeArray.push('3')
                minRangeArray.push(
                    <div className='show-list-timeline'>
                        <div className='show-list--timeline-title'>{`${currentValue.hour}:30`}</div>
                        <div className='show-list-member-group'>
                            <ShowListMember memberDataArray={currentValue.threeQuarters} />
                        </div>
                    </div>
                );
            }
            if (currentValue.fourQuarters.length > 0) {
                // minRangeArray.push('4')
                minRangeArray.push(
                    <div className='show-list-timeline'>
                        <div className='show-list--timeline-title'>{`${currentValue.hour}:45`}</div>
                        <div className='show-list-member-group'>
                            <ShowListMember memberDataArray={currentValue.fourQuarters} />
                        </div>
                    </div>
                );
            }
        })
        setMinRange(minRangeArray)
    }, [timeRangeArray, timeListState])
    return (
        <>
            {minRange}
        </>
    )
}

const ShowListHeader = ({ timeListState, setSelectedTimeState, setSelectedPerformancePage }) => {

    return (
        <div className='show-list-header'>
            <h3>表演資訊列表</h3>
            <select name="performanceTime" id="performanceTime"
                onChange={(e) => {
                    const selectedTime = e.target.value;
                    setSelectedTimeState(selectedTime);
                    setSelectedPerformancePage(1);
                }}
            >
                {timeListState.map((time) => {
                    return (<option key={time} value={time}>{time.substr(0, 10)}</option>)
                })}
            </select>
        </div>
    )
}

const ShowListMain = ({ performanceData, timeListState }) => {
    type HourRangeType = {
        hour: string;
        oneQuarter: [];
        twoQuarters: [];
        threeQuarters: [];
        fourQuarters: [];
    }
    const [timeRangeArray, setTimeRangeArray] = useState<HourRangeType[]>([])
    useEffect(() => {
        if (performanceData.status !== 200) return
        const dataListArray = performanceData.data[0]
        class HourRange {
            hour: string;
            oneQuarter: [];
            twoQuarters: [];
            threeQuarters: [];
            fourQuarters: [];
            constructor(hour, oneQuarter, twoQuarters, threeQuarters, fourQuarters) {
                this.hour = hour
                this.oneQuarter = oneQuarter // 0-14
                this.twoQuarters = twoQuarters // 15-29
                this.threeQuarters = threeQuarters // 30-44
                this.fourQuarters = fourQuarters // 45-59
            }
        }

        let allHourArray = [];
        let allHourClassArray = [];
        for (let i = 0; i < dataListArray.length; i++) {
            let timeHour = dataListArray[i].time.substr(11, 2);
            let timeMin = dataListArray[i].time.substr(14, 2);
            let isRepeat = false;
            let allHourArrayLength = allHourArray.length;
            let indexRepeat = 0;
            if (allHourArrayLength == 0) {
                allHourArray.push(timeHour);
            }
            while (indexRepeat < allHourArrayLength) {
                if (allHourArrayLength > 1) indexRepeat++
                if (allHourArray[indexRepeat] === timeHour) {
                    isRepeat = true;
                    break;
                } else {
                    allHourArray.push(timeHour);
                    break;
                }
            }

            if (isRepeat == false) {
                let newHour = new HourRange(timeHour, [], [], [], [])
                allHourClassArray.push(newHour)
            }

            let indexHour = 0
            for (let j = 0; j < allHourClassArray.length; j++) {
                if (allHourClassArray[j].hour === timeHour) indexHour = j
            }//找輪到這次的小時是第幾個小時
            // console.log(`${timeHour}:${timeMin}'time lines active'`);
            if (timeMin >= 0 && timeMin < 15) {
                allHourClassArray[indexHour].oneQuarter.push(dataListArray[i])
            } else if (timeMin >= 15 && timeMin <= 29) {
                allHourClassArray[indexHour].twoQuarters.push(dataListArray[i])
            } else if (timeMin >= 30 && timeMin <= 44) {
                allHourClassArray[indexHour].threeQuarters.push(dataListArray[i])
            } else if (timeMin >= 45 && timeMin <= 59) {
                allHourClassArray[indexHour].fourQuarters.push(dataListArray[i])
            } else {
                console.log(`${timeHour}:${timeMin}'time lines timeMin error'`);
            }
        }
        setTimeRangeArray(allHourClassArray)
    }, [performanceData])

    return (
        <div className='show-list-main'>
            < ShowListTimeline timeRangeArray={timeRangeArray} timeListState={timeListState} />
        </div>
    )
}

const ShowListPagination = ({ setSelectedPerformancePage, selectedPerformancePage }) => {
    const [paginationArrayState, setPaginationArrayState] = useState([])
    useEffect(() => {
        let paginationArray = []
        const onClickSelected = (v) => {
            //back to top
            window.scroll(0, 0)
            setSelectedPerformancePage(v)
        }
        for (let i = 1; i <= 10; i++) {
            paginationArray.push(
                <li><button className={`show-list-pagination-button ${selectedPerformancePage === i ? `show-list-pagination-active` : null}`} value={i} onClick={() => onClickSelected(i)}>{i}</button></li>
            );
        }
        setPaginationArrayState(paginationArray)

    }, [selectedPerformancePage])
    const onClickChangePage = (value) => {
        window.scroll(0, 0);//back to top
        const next = 1
        const last = -1
        let page = 0
        if (value == 'next') {
            if (selectedPerformancePage < 10) {
                page = next
            }
        } else if (value == 'last') {
            if (selectedPerformancePage > 1) {
                page = last
            }
        };
        setSelectedPerformancePage(() => selectedPerformancePage + page)
    }
    return (
        <div className='show-list-pagination'>
            <ul>
                {selectedPerformancePage === 1 ? null : <li><button className='show-list-pagination-button' onClick={(() => onClickChangePage('last'))}><img style={{ transform: 'scaleX(-1)' }} src={NextPage} alt='NextPage' /></button></li>}
                {paginationArrayState}
                {selectedPerformancePage === 10 ? null : <li><button className='show-list-pagination-button' onClick={(() => onClickChangePage('next'))}><img src={NextPage} alt='NextPage' /></button></li>}
            </ul>
        </div>
    )
}

export const ShowList = () => {
    const [timeListState, setTimeListState] = useState<ReponseType>({ status: 400, data: [{ time: '' }] })
    const [performanceData, setPerformanceData] = useState<ReponseType>({ status: 400, data: [[{ description: "default", latitude: 121.52316423760928, lineMoney: 0, longitude: 25.09499813282317, time: "2021-07-21T05:05:01.000Z", title: "default" }], 0] })
    const [selectedTimeState, setSelectedTimeState] = useState<string>('')
    const [selectedPerformancePage, setSelectedPerformancePage] = useState<number>(1)
    const [timeListArrayState, setTimeListArrayState] = useState<string[]>([])
    useEffect(() => {
        const getTime = async () => {
            const time = await getBuskerPerformanceTime();
            if (time.status != 200) { return }
            let t = time.data as Array<{ time: string }>
            const timeStampArray = t.map((object) => { return object.time.substr(0, 10) })
            setTimeListState(time)
            setTimeListArrayState(timeStampArray)
            setSelectedTimeState(timeStampArray[0]);
        }
        getTime();
    }, [])

    useEffect(() => {
        const getPerformanceData = async () => {
            if (selectedTimeState.length === 0) return //空值不請求
            const performance = await getBuskerPerformanceData({ time: selectedTimeState, page: selectedPerformancePage })
            setPerformanceData(performance)
        }
        getPerformanceData();
        //     const per = await getBuskerPerformanceData({ time: '2021-07-21', page: 1 })
    }, [selectedTimeState, selectedPerformancePage])

    return (
        <>
            <ShowListHeader timeListState={timeListArrayState} setSelectedTimeState={setSelectedTimeState} setSelectedPerformancePage={setSelectedPerformancePage} />
            <ShowListMain performanceData={performanceData} timeListState={timeListState} />
            <ShowListPagination setSelectedPerformancePage={setSelectedPerformancePage} selectedPerformancePage={selectedPerformancePage} />
        </>
    )
}