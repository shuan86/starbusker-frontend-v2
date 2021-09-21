import React, { useState, useEffect, useRef } from 'react';
import { postApplyPerformance, deleteBuskerPerformance } from '../modules/busker'
import { MapMarkDataType, MapCenterType } from "../types/googleMapType";
import { ApplyPerformanceType, ResApplyPerformanceType, ResFuturePerformanceDataType } from '../types/buskerType'
import { GoolgeMap } from "../components/GoogoleMap";
import applyStatusSuccessful from '../public/svg/busker-apply-performance-successful-icon.svg'
import { ResponseType } from '../types/responseType'

export const BuskerApplyItem = ({ title, content }: { title: string, content: string }) => {
    return (
        <div className='busker-performance-apply-item'>
            <div className='busker-performance-apply-item-title'>{title}</div>
            <div className='busker-performance-apply-item-content'>{content}</div>
        </div>
    )
}
export const BuskerApplyResult = ({ resPerformanceData }: { resPerformanceData: ResApplyPerformanceType | ResFuturePerformanceDataType }) => {
    const [applyResultState, setApplyResultState] = useState<ResApplyPerformanceType>({ performanceId: 0, name: '', email: '', location: '', description: '', title: '', time: '', longitude: 0, latitude: 0 })
    const [mapMarkDataState, setMapMarkDataState] = useState<Array<MapMarkDataType>>(null)
    const [performancePos, setPerformancePos] = useState<MapCenterType>({ lat: 25.0338041, lng: 121.5645561 })
    const onClickFinish = () => {
        window.location.reload();
    }
    const onClickDeletePerformance = async () => {
        const result = await deleteBuskerPerformance(applyResultState.performanceId)
        result.status == 200 ? alert('刪除成功') : alert('刪除失敗')
        window.location.reload();
    }
    useEffect(() => {

        const resApplyPerformance = resPerformanceData as ResApplyPerformanceType
        setApplyResultState(resApplyPerformance)
    }, [])
    useEffect(() => {
        setMapMarkDataState([{ lng: applyResultState.longitude, lat: applyResultState.latitude, title: '', text: "" }])
        setPerformancePos({ lng: applyResultState.longitude, lat: applyResultState.latitude })
        return () => {

        }
    }, [applyResultState])
    return (
        <div className='busker-performance-apply'>
            {
                <>
                    <div className='busker-performance-apply-title' style={{ color: 'var(--orange)' }}>
                        <img src={applyStatusSuccessful} alt='applyapplyIcon' className='busker-performance-apply-icon' />
                        已成功登記
                    </div>
                    <div className='busker-performance-apply-subtitle'>登記資訊如下：</div>
                    <div className='busker-performance-apply-form'>
                        <BuskerApplyItem title='藝人姓名' content={applyResultState.name} />
                        <BuskerApplyItem title='表演項目' content={applyResultState.title} />
                        <BuskerApplyItem title='電子信箱' content={applyResultState.email} />
                        <BuskerApplyItem title='表演時間' content={applyResultState.time} />
                        <BuskerApplyItem title='表演地點' content={applyResultState.location} />
                        <BuskerApplyItem title='簡介' content={applyResultState.description} />
                    </div>
                    <div className='busker-performance-apply-googlemap'>
                        <GoolgeMap markerArr={mapMarkDataState} center={performancePos} zoom={15} />
                    </div>
                    <div className='busker-performance-apply-btn-group'>
                        <button className='busker-performance-apply-btn' onClick={onClickDeletePerformance}>取消登記</button>
                        <button className='busker-performance-apply-btn' onClick={onClickFinish}>完成</button>
                    </div>
                </>
            }
        </div>

    )

}