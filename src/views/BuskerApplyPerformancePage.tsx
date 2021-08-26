import React, { useState } from 'react';
import { BuskerSidebar } from '../components/BuskerSidebar';
import '../public/css/buskerApplyPerformancePage.css'
import applyStatusSuccessful from '../public/svg/busker-apply-performance-successful-icon.svg'
import applyStatusCancel from '../public/svg/busker-apply-performance-cancel-icon.svg'
import { postApplyPerformance } from '../modules/busker'
import { ApplyPerformanceType } from '../types/buskerType'


const BuskerApplyForm = () => {
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
    const [performanceItem, setPerformanceItem] = useState<string>('');
    const [performanceDate, setPerformanceDate] = useState<string>('');
    const [performanceLocation, setPerformanceLocation] = useState<string>('');
    const [performanceTime, setPerformanceTime] = useState<string>('');
    const [performanceDescription, setPerformanceDescription] = useState<string>('');
    const setCurrentData = (year: number, month: number, date: number, hour: number = 0, minute: number = 0, second: number = 0) => {
        const dateOBJ = new Date();
        dateOBJ.setUTCFullYear(year)
        dateOBJ.setMonth(month - 1)
        dateOBJ.setDate(date)
        dateOBJ.setHours(hour)
        dateOBJ.setMinutes(minute)
        dateOBJ.setSeconds(second)
        return dateOBJ
    }
    const onClickSubmit = async () => {
        // const result: ApplyPerformanceType = { title: performanceItem, description: performanceDescription, time: performanceDate + performanceTime, location: performanceLocation }
        const result: ApplyPerformanceType = { title: performanceItem, description: performanceDescription, time: setCurrentData(2021, 7, 15, 6, 6, 30), location: performanceLocation }
        console.log(result);
        await postApplyPerformance(result)
    }
    // console.log(`BuskerApplyPerformancePage:${performanceItem}${performanceDate}${performanceLocation}${performanceTime}${performanceDescription}`);
    return (
        <>
            <div className='busker-performance-title'>表演登記</div>
            <div className='busker-performance-form'>
                <div className='busker-performance-description'>
                    <div className='busker-performance-description-title'>表演內容介紹</div>
                    <textarea placeholder='簡短內容簡介' className='busker-performance-description-textarea' onChange={(e) => { const v = e.target.value; setPerformanceDescription(v) }}></textarea>
                </div>
                <div className='busker-performance-data'>
                    <BuskerApplyPerformanceInput name='表演項目' inputType='text' state={performanceItem} setState={setPerformanceItem} errorState='' />
                    <BuskerApplyPerformanceInput name='表演日期' inputType='date' state={performanceDate} setState={setPerformanceDate} errorState='' />
                    <BuskerApplyPerformanceInput name='表演地點' inputType='text' state={performanceLocation} setState={setPerformanceLocation} errorState='' />
                    <BuskerApplyPerformanceInput name='表演時間' inputType='time' state={performanceTime} setState={setPerformanceTime} errorState='' />
                </div>
                <div className='busker-performance-googlemap'></div>
                <button className='busker-performance-btn-submit' onClick={onClickSubmit}>送出登記</button>
            </div>
        </>
    )
}

const BuskerApplyResult = ({ }) => {
    // { buskerName, buskerPhone, buskerEmail, performanceItem, performanceDate, performanceTime, performanceLocation, performanceDescription, isCancel }
    const BuskerApplyItem = ({ title, content }) => {
        return (
            <div className='busker-performance-apply-item'>
                <div className='busker-performance-apply-item-title'>{title}</div>
                <div className='busker-performance-apply-item-content'>{content}</div>
            </div>
        )
    }
    return (
        <>
            <div className='busker-performance-apply'>
                <div className='busker-performance-apply-title' style={{ color: 'var(--orange)' }}>
                    <img src={applyStatusSuccessful} alt='applyapplyIcon' className='busker-performance-apply-icon' />
                    已成功登記
                </div>
                <div className='busker-performance-apply-subtitle'>登記資訊如下：</div>
                <div className='busker-performance-apply-form'>
                    <BuskerApplyItem title='藝人姓名' content='謝孟迪' />
                    <BuskerApplyItem title='表演項目' content='扯鈴' />
                    <BuskerApplyItem title='聯絡電話' content='0912-123-456' />
                    <BuskerApplyItem title='表演日期' content='7月29日2021年' />
                    <BuskerApplyItem title='電子信箱' content='account@gmail.com' />
                    <BuskerApplyItem title='表演時間' content='13:30' />
                    <BuskerApplyItem title='表演地點' content='夢想廣場' />
                    <BuskerApplyItem title='簡介' content='有夠扯的扯鈴表演' />
                </div>
                <div className='busker-performance-apply-googlemap'></div>
                <div className='busker-performance-apply-btn-group'>
                    <button className='busker-performance-apply-btn'>取消登記</button>
                    <button className='busker-performance-apply-btn'>再次登記</button>
                </div>
                {/* <button className='busker-performance-apply-btn-cancel'>完成</button>
                已取消的按鈕 */}
            </div>
        </>
    )

}

export const BuskerApplyPerformancePage = () => {

    return (
        <div className='wrap'>
            <div className='busker-performance'>
                <BuskerSidebar />
                <div className='busker-performance-group'>
                    <BuskerApplyForm />
                    {/* <BuskerApplyResult /> */}
                </div>
            </div>
        </div>
    )
}

