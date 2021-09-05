import React, { useState, useEffect, useRef, useCallback, Dispatch } from 'react';
import Heart from '../public/svg/heart.svg'
import defaultAvatar from '../public/img/busker-info-default-photo.png'
import NextPage from '../public/svg/next-page.svg'
import '../public/css/showList.css'
import { ResPerformancesDataType } from '../types/responseType'
import { getBuskerPerformanceTime, getBuskerPerformanceData } from '../modules/busker'
import { off } from 'process';
import { useHistory } from "react-router";
import { path } from "../modules/routerPath";

interface ShowListHeaderProps {
    timeListArrayState: string[],
    setSelectedTimeState: Dispatch<React.SetStateAction<string>>,
    setSelectedPerformancePage: Dispatch<React.SetStateAction<number>>,
}
interface ShowListMainProps {
    performanceData: ResPerformancesDataType
}
interface ShowListMemberProps {
    memberDataArray: [MemberData] | []
}
interface ShowListPaginationProps {
    setSelectedPerformancePage: Dispatch<React.SetStateAction<number>>,
    selectedPerformancePage: number,
    allPerformanceItems: number,
}

type MemberData = {
    description: string,
    id: number,
    latitude: number,
    lineMoney: number,
    longitude: number,
    time: string,
    title: string
}

const ShowListHeader: React.FC<ShowListHeaderProps> = ({ timeListArrayState, setSelectedTimeState, setSelectedPerformancePage }) => {
    const dateOption: React.ReactNode = timeListArrayState.map((time) => {
        return (<option key={time} value={time}>{time.substr(0, 10)}</option>)
    })
    //:React.ReactNode
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
                {dateOption}
            </select>
        </div>
    )
}

const ShowListMain: React.FC<ShowListMainProps> = ({ performanceData }) => {
    type HourRangeType = {
        hour: string;
        oneQuarter: [];
        twoQuarters: [];
        threeQuarters: [];
        fourQuarters: [];
    }
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

    const [timeRangeArray, setTimeRangeArray] = useState<HourRangeType[]>([])
    useEffect(() => {
        const dataListArray = performanceData[0]
        let allHourArray = [];
        //6,7
        let allHourClassArray = [];
        //HourRange hour:6 , [{...}] [{...}] [] []
        //HourRange hour:7 , [] [] [{...}] []
        for (let i = 0; i < dataListArray.length; i++) {
            let timeHour = Number(dataListArray[i].time.substr(11, 2));
            let timeMin = Number(dataListArray[i].time.substr(14, 2));
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

    const [quartersLine, setQuartersLine] = useState([]);//原timeline
    useEffect(() => {
        const quartersLineRangeArray: React.ReactNode[] = []
        timeRangeArray.map((currentValue, i) => {
            if (currentValue.oneQuarter.length > 0) {
                // minRangeArray.push('1')
                quartersLineRangeArray.push(
                    <div className='show-list-timeline' key={`oneQuarter${i}`}>
                        <div className='show-list--timeline-title'>{`${currentValue.hour}:00`}</div>
                        <div className='show-list-member-group'>
                            <ShowListMember memberDataArray={currentValue.oneQuarter} />
                        </div>
                    </div>
                );
            }
            if (currentValue.twoQuarters.length > 0) {
                // minRangeArray.push('2')
                quartersLineRangeArray.push(
                    <div className='show-list-timeline' key={`twoQuarters${i}`}>
                        <div className='show-list--timeline-title'>{`${currentValue.hour}:15`}</div>
                        <div className='show-list-member-group'>
                            <ShowListMember memberDataArray={currentValue.twoQuarters} />
                        </div>
                    </div>
                );
            }
            if (currentValue.threeQuarters.length > 0) {
                // minRangeArray.push('3')
                quartersLineRangeArray.push(
                    <div className='show-list-timeline' key={`threeQuarters${i}`}>
                        <div className='show-list--timeline-title'>{`${currentValue.hour}:30`}</div>
                        <div className='show-list-member-group'>
                            <ShowListMember memberDataArray={currentValue.threeQuarters} />
                        </div>
                    </div>
                );
            }
            if (currentValue.fourQuarters.length > 0) {
                // minRangeArray.push('4')
                quartersLineRangeArray.push(
                    <div className='show-list-timeline' key={`fourQuarters${i}`}>
                        <div className='show-list--timeline-title'>{`${currentValue.hour}:45`}</div>
                        <div className='show-list-member-group'>
                            <ShowListMember memberDataArray={currentValue.fourQuarters} />
                        </div>
                    </div>
                );
            }
        })
        setQuartersLine(quartersLineRangeArray)
    }, [timeRangeArray])

    return (
        <div className='show-list-main'>
            {quartersLine}
        </div>
    )
}

const ShowListMember: React.FC<ShowListMemberProps> = ({ memberDataArray }) => {
    const [memberGroup, setMemberGroup] = useState<string[]>([])//JSX
    const history = useHistory()
    const onClickMember = (id) => {
        console.log(id);
        history.push({
            pathname: `${path.chatroom}/${id}`,

        })
    }
    useEffect(() => {
        let result = []
        console.log(memberDataArray);

        memberDataArray.map((currentValue, i) => {
            result.push(
                <div className='show-list-member' onClick={() => onClickMember(currentValue.id)} key={`show-list${i}`}>
                    {/* member-active 觸發的樣式*/}
                    <img src={currentValue.avatar == '' || currentValue.avatar == undefined ? defaultAvatar : `data:image/png;base64,${currentValue.avatar}`} alt="Photo" className='show-list-member-photo' />
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

const ShowListPagination: React.FC<ShowListPaginationProps> = ({ setSelectedPerformancePage, selectedPerformancePage, allPerformanceItems }) => {
    const [pageNumberLimitState, setPageNumberLimitState] = useState<number>(10);
    const [eachPageNumberLimitState, setEachPageNumberLimitState] = useState<number>(5);
    const [maxPageNumberLimitState, setMaxPageNumberLimitState] = useState<number>(5);
    const [minPageNumberLimitState, setMinPageNumberLimitState] = useState<number>(0);
    const allPages = Math.ceil(allPerformanceItems / pageNumberLimitState);
    const onClickSelected = (event) => {
        //back to top
        window.scroll(0, 0)
        setSelectedPerformancePage(Number(event.target.value))
    }

    const onClickNextPage = () => {
        let tempLimit = 0
        if (selectedPerformancePage + 1 > maxPageNumberLimitState) {
            tempLimit = eachPageNumberLimitState
        }
        setSelectedPerformancePage(pre => pre + 1)
        setMaxPageNumberLimitState(pre => pre + tempLimit);
        setMinPageNumberLimitState(pre => pre + tempLimit);
    }
    const onClickPrePage = () => {
        let tempLimit = 0
        if ((selectedPerformancePage - 1) % eachPageNumberLimitState == 0) {
            tempLimit = eachPageNumberLimitState
        }
        setSelectedPerformancePage(pre => pre - 1)
        setMaxPageNumberLimitState(pre => pre - tempLimit);
        setMinPageNumberLimitState(pre => pre - tempLimit);
    }
    const onClickNextRange = () => {
        setSelectedPerformancePage(pre => pre + eachPageNumberLimitState > allPages ? pre = allPages : pre + eachPageNumberLimitState);
        setMaxPageNumberLimitState(pre => pre + eachPageNumberLimitState);
        setMinPageNumberLimitState(pre => pre + eachPageNumberLimitState);
    }
    const onClickPreRange = () => {
        setSelectedPerformancePage(pre => pre <= eachPageNumberLimitState ? pre = 1 : pre - eachPageNumberLimitState);
        setMaxPageNumberLimitState(pre => pre > eachPageNumberLimitState ? pre - eachPageNumberLimitState : eachPageNumberLimitState);
        setMinPageNumberLimitState(pre => pre > eachPageNumberLimitState ? pre - eachPageNumberLimitState : 0);
    }
    const pages: number[] = []
    for (let i = 1; i <= allPages; i++) {
        pages.push(i)
    }
    const renderPageNumbers = pages.map((number, i) => {
        if (number > minPageNumberLimitState && number < maxPageNumberLimitState + 1) {
            return (
                <li key={`renderPageNumbers${i}`}><button
                    className={`show-list-pagination-button ${selectedPerformancePage === number ? `show-list-pagination-active` : null}`}
                    value={number}
                    onClick={onClickSelected}
                >
                    {number}
                </button></li>
            );
        } else {
            return null
        }
    })
    return (
        <div className='show-list-pagination'>
            <ul>
                {selectedPerformancePage === 1 ? null : <li><button className='show-list-pagination-button' onClick={onClickPrePage}><img style={{ transform: 'scaleX(-1)' }} src={NextPage} alt='NextPage' /></button></li>}
                {minPageNumberLimitState == 0 ? null : <li><button className='show-list-pagination-button' onClick={onClickPreRange}>...</button></li>}
                {renderPageNumbers}
                {allPages - selectedPerformancePage < 5 && allPages - minPageNumberLimitState < 5 ? null : <li><button className='show-list-pagination-button' onClick={onClickNextRange}>...</button></li>}
                {selectedPerformancePage === allPages ? null : <li><button className='show-list-pagination-button' onClick={onClickNextPage}><img src={NextPage} alt='NextPage' /></button></li>}
            </ul>
        </div>
    )
}

export const ShowList: React.FC = () => {
    const [performanceData, setPerformanceData] = useState<ResPerformancesDataType>([[{ id: 0, title: "default", description: "default", time: "2021-07-21T05:05:01.000Z", lineMoney: 0, latitude: 121.52316423760928, longitude: 25.09499813282317 }], 0]);
    const [selectedTimeState, setSelectedTimeState] = useState<string>('');
    const [selectedPerformancePage, setSelectedPerformancePage] = useState<number>(1);
    const [timeListArrayState, setTimeListArrayState] = useState<string[]>([]);
    const [errorState, setErrorState] = useState<string>('');
    const [statusState, setStatusState] = useState<boolean>(true);
    useEffect(() => {
        const getTime = async () => {
            const result = await getBuskerPerformanceTime();
            let error = ''
            let status = true
            let timeStampArray = []
            if (result.status == 200) {
                let time = result.data as Array<{ time: string }>
                timeStampArray = time.map((object) => { return object.time.substr(0, 10) })
            } else if (result.status == 500) {
                error = 'server is busying'
                status = false
            }
            setErrorState(pre => pre + error)
            setStatusState(pre => pre == false ? pre : status)
            setTimeListArrayState(timeStampArray)
            setSelectedTimeState(timeStampArray[0]);
        }
        getTime();
    }, [])
    useEffect(() => {
        const getPerformanceData = async () => {
            if (selectedTimeState.length === 0) return //空值不請求
            const result = await getBuskerPerformanceData({ time: selectedTimeState, page: selectedPerformancePage });
            let performance: ResPerformancesDataType
            let error = ''
            let status = true
            if (result.status == 200) {
                performance = result.data as ResPerformancesDataType
            } else if (result.status == 400) {
                error = 'Error:400; parameter error'
                status = false
            } else if (result.status == 500) {
                error = 'Error:500; server is busying'
                status = false
            } else {
                error = 'unknown error'
                status = false
            }
            setErrorState(pre => pre + error);
            setStatusState(pre => pre == false ? pre : status);
            setPerformanceData(performance);
        }
        getPerformanceData();
    }, [selectedTimeState, selectedPerformancePage])

    return (
        <>
            {statusState ?
                <>
                    <ShowListHeader timeListArrayState={timeListArrayState} setSelectedTimeState={setSelectedTimeState} setSelectedPerformancePage={setSelectedPerformancePage} />
                    <ShowListMain performanceData={performanceData} />
                    <ShowListPagination setSelectedPerformancePage={setSelectedPerformancePage} selectedPerformancePage={selectedPerformancePage} allPerformanceItems={performanceData[1]} />
                </>
                : errorState}
        </>
    )
}