import React, { useState, useEffect, useRef } from 'react';
import { BuskerSidebar } from '../components/BuskerSidebar';
import applyStatusSuccessful from '../public/svg/busker-apply-performance-successful-icon.svg'
// import applyStatusCancel from '../public/svg/busker-apply-performance-cancel-icon.svg'
import { setCurrentData } from '../modules/time'
import { postApplyPerformance, deleteBuskerPerformance } from '../modules/busker'
import { ApplyPerformanceType, ResApplyPerformanceType } from '../types/buskerType'
import { ResponseType } from '../types/responseType'
import { GoolgeMap } from "../components/GoogoleMap";
import { BuskerApplyResult } from "../components/BuskerApplyResult";
import { MapMarkDataType, MapCenterType } from "../types/googleMapType";
import '../public/css/buskerApplyPerformancePage.css'
import { debounce } from 'lodash'


const BuskerApplyPerformanceInput = ({ name, inputType, state, setState, errorState }) => {
    return (
        <label htmlFor={name} className='busker-performance-label'>{name}
            <input
                type={inputType}
                name={name}
                id={name}
                placeholder={state}
                value={state}
                onChange={(e) => {
                    const v = e.target.value;
                    setState(v)
                }}
                className='busker-performance-input' />
        </label>
    )
}

const BuskerApplyForm = ({ setSeverErrorState, setUserInputPerformanceData, setResPerformanceData }: { setSeverErrorState: any, setUserInputPerformanceData: any, setResPerformanceData: any }) => {
    const [performanceTypeState, setPerformanceTypeState] = useState<string>('唱歌');
    const [performanceDateState, setPerformanceDateState] = useState<string>();
    const [performanceLocationState, setPerformanceLocationState] = useState<string>('台北');
    const [performanceTimeState, setPerformanceTimeState] = useState<string>('');
    const [performanceDesState, setPerformanceDescState] = useState<string>('Description1');
    const [mapPosLoadedState, setMapPosLoadedState] = useState<boolean>(false)
    const [performancePosState, setPerformancePosState] = useState<MapCenterType>({ lat: 25.0338041, lng: 121.5645561 })
    const [autocompleteResultsState, setAutocompleteResultsState] = useState([])
    const [mapMarkDataState, setMapMarkDataState] = useState<MapMarkDataType[]>(null)
    const performanceLocationRef = useRef(null)
    const onClickSubmit = async () => {
        if (performanceDateState != undefined && mapPosLoadedState) {
            const year: number = Number(performanceDateState.substr(0, 4))
            const month: number = Number(performanceDateState.substr(5, 2))
            const date: number = Number(performanceDateState.substr(8, 2))
            const hour: number = Number(performanceTimeState.substr(0, 2))
            const minute: number = Number(performanceTimeState.substr(3, 2))
            const second: number = 0
            const performanceData: ApplyPerformanceType = {
                title: performanceTypeState, description: performanceDesState
                , time: setCurrentData(year, month, date, hour, minute, second)
                , location: performanceLocationState, longitude: performancePosState.lng, latitude: performancePosState.lat
            }
            console.log('performanceData:', performanceData);

            // const inputPerformanceData: ApplyPerformanceType = { title: performanceItem, description: performanceDescription, time: setCurrentData(year, month, date, hour, minute, second), location: performanceLocation }
            let error = ''
            const result = await postApplyPerformance(performanceData);

            if (result.status == 200) {
                // data = result

            }
            else if (result.status == 400) {
                error = `Error:${result.status}; parameter error`
            }
            else if (result.status == 401) {
                error = `Error:${result.status}; failed to apply、you are not member or busker`
            }
            else if (result.status == 500) {
                error = `Error:${result.status}; server is busying`
            }
            setSeverErrorState(error);
            setResPerformanceData(result);
            setUserInputPerformanceData(performanceData);
        }
        else {
            alert('輸入資料不完整')
        }
    }
    const handleAutocomplete = () => {
        if (window.google) {
            const service = new window.google.maps.places.AutocompleteService()
            const request = {
                input: performanceLocationState // input 為 inputText
            }
            service.getPlacePredictions(request, (results, status) => {
                if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                    setAutocompleteResultsState(results)
                }
            });
        }
    }
    const handleLocation = () => {
        setPerformanceLocationState(performanceLocationRef.current.value)
    }
    const onClickAutocompleteRow = (e) => {
        const description = e.target.getAttribute('data-description')
        performanceLocationRef.current.value = description
        setPerformanceLocationState(description)
        setMapPosLoadedState(false)
        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode({ 'address': performanceLocationState }, (results, status) => {
            if (status == 'OK') {
                const newPosition = {
                    lat: results[0].geometry.location.lat(),
                    lng: results[0].geometry.location.lng()
                }
                setMapPosLoadedState(true)
                setPerformancePosState(newPosition)
                setMapMarkDataState(pre => {
                    const d: MapMarkDataType = {
                        lat: newPosition.lat,
                        lng: newPosition.lng,
                        title: "",
                        text: "",
                    }
                    return [d]
                })
                setAutocompleteResultsState([])
            } else {
                // 若轉換失敗...
                console.log('geocoder error:', results)
            }
        });
    }
    useEffect(() => {
        handleAutocomplete()
    }, [performanceLocationState])
    return (
        <>
            <div className='busker-performance-title'>表演登記</div>
            <div className='busker-performance-form'>
                <div className='busker-performance-description'>
                    <div className='busker-performance-description-title'>表演內容介紹</div>
                    <textarea placeholder='簡短內容簡介' className='busker-performance-description-textarea' onChange={(e) => { const v = e.target.value; setPerformanceDescState(v) }}></textarea>
                </div>
                <div className='busker-performance-data'>
                    <BuskerApplyPerformanceInput name='表演項目' inputType='text' state={performanceTypeState} setState={setPerformanceTypeState} errorState='' />
                    <BuskerApplyPerformanceInput name='表演日期' inputType='date' state={performanceDateState} setState={setPerformanceDateState} errorState='' />
                    <div style={{ position: 'relative' }}>
                        <div >
                            <label htmlFor='表演地點' className='busker-performance-label'>{"表演地點"}
                                <input
                                    type='text'
                                    name="表演地點"
                                    id="表演地點"
                                    placeholder={performanceLocationState}
                                    ref={performanceLocationRef}
                                    onChange={debounce(handleLocation, 500)}
                                    className='busker-performance-input' />
                                {autocompleteResultsState && performanceLocationState && <div className='busker-performance-autocomplete' >
                                    {
                                        autocompleteResultsState.map((item, index) => (
                                            <div data-placeId={item.place_id} data-description={item.description} key={`location${index}`} className='busker-performance-autocomplete-row'
                                                onClick={onClickAutocompleteRow}>
                                                {item.description}
                                            </div>
                                        ))
                                    }
                                </div>}
                            </label>
                        </div>
                    </div >
                    <BuskerApplyPerformanceInput name='表演時間' inputType='time' state={performanceTimeState} setState={setPerformanceTimeState} errorState='' />
                </div>
                <div className='busker-performance-googlemap' >
                    <GoolgeMap markerArr={mapMarkDataState} center={performancePosState} zoom={15} />
                </div>
                <button className='busker-performance-btn-submit' onClick={onClickSubmit}>送出登記</button>
            </div>
        </>
    )
}
// const BuskerApplyItem = ({ title, content }: { title: string, content: string }) => {
//     return (
//         <div className='busker-performance-apply-item'>
//             <div className='busker-performance-apply-item-title'>{title}</div>
//             <div className='busker-performance-apply-item-content'>{content}</div>
//         </div>
//     )
// }
// const BuskerApplyResult = ({ severErrorState, userInputPerformanceData, resPerformanceData }: { severErrorState: any, userInputPerformanceData: any, resPerformanceData: ResponseType }) => {
//     const [applyResultState, setApplyResultState] = useState<ResApplyPerformanceType>({ id: 0, name: '', email: '', location: '', description: '', title: '', time: '', longitude: 0, latitude: 0 })
//     const [mapMarkDataState, setMapMarkDataState] = useState<Array<MapMarkDataType>>(null)
//     const [performancePos, setPerformancePos] = useState<MapCenterType>({ lat: 25.0338041, lng: 121.5645561 })
//     const onClickFinish = () => {
//         window.location.reload();
//     }
//     const onClickDeletePerformance = async () => {
//         const result = await deleteBuskerPerformance(applyResultState.id)
//         result.status == 200 ? alert('刪除成功') : alert('刪除失敗')
//         window.location.reload();
//     }
//     useEffect(() => {
//         const resApplyPerformance = resPerformanceData.data as ResApplyPerformanceType
//         setApplyResultState(resApplyPerformance)
//     }, [])
//     useEffect(() => {
//         setMapMarkDataState([{ lng: applyResultState.longitude, lat: applyResultState.latitude, title: '', text: "" }])
//         setPerformancePos({ lng: applyResultState.longitude, lat: applyResultState.latitude })
//         return () => {

//         }
//     }, [applyResultState])
//     return (
//         <div className='busker-performance-apply'>
//             {resPerformanceData.status != 200 ?
//                 <div className='busker-performance-apply-title' style={{ color: 'black' }}>
//                     {resPerformanceData.status}
//                     {severErrorState}
//                 </div> :
//                 <>
//                     <div className='busker-performance-apply-title' style={{ color: 'var(--orange)' }}>
//                         <img src={applyStatusSuccessful} alt='applyapplyIcon' className='busker-performance-apply-icon' />
//                         已成功登記
//                     </div>
//                     <div className='busker-performance-apply-subtitle'>登記資訊如下：</div>
//                     <div className='busker-performance-apply-form'>
//                         <BuskerApplyItem title='藝人姓名' content={applyResultState.name} />
//                         <BuskerApplyItem title='表演項目' content={applyResultState.title} />
//                         <BuskerApplyItem title='電子信箱' content={applyResultState.email} />
//                         <BuskerApplyItem title='表演時間' content={applyResultState.time} />
//                         <BuskerApplyItem title='表演地點' content={applyResultState.location} />
//                         <BuskerApplyItem title='簡介' content={applyResultState.description} />
//                     </div>
//                     <div className='busker-performance-apply-googlemap'>
//                         <GoolgeMap markerArr={mapMarkDataState} center={performancePos} zoom={15} />
//                     </div>
//                     <div className='busker-performance-apply-btn-group'>
//                         <button className='busker-performance-apply-btn' onClick={onClickDeletePerformance}>取消登記</button>
//                         <button className='busker-performance-apply-btn' onClick={onClickFinish}>完成</button>
//                     </div>
//                 </>
//             }
//         </div>

//     )

// }

export const BuskerApplyPerformancePage = () => {
    const [severErrorState, setSeverErrorState] = useState<string>('');
    const [resPerformanceData, setResPerformanceData] = useState<ResponseType>({ status: 0, data: {} });
    const [userInputPerformanceData, setUserInputPerformanceData] = useState({ title: 'title', description: 'description', time: 'new Date', location: 'location' });
    return (
        <div className='wrap'>
            <div className='busker-performance'>
                <BuskerSidebar />
                <div className='busker-performance-group'>
                    {resPerformanceData.status != 0 && resPerformanceData.status == 200 ? <BuskerApplyResult resPerformanceData={resPerformanceData.data as ResApplyPerformanceType} /> : <BuskerApplyForm setSeverErrorState={setSeverErrorState} setResPerformanceData={setResPerformanceData} setUserInputPerformanceData={setUserInputPerformanceData} />}
                </div>
            </div>
        </div>
    )
}

