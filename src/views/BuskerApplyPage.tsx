import React, { useState } from 'react';
import { BuskerInputTitle, BuskerInputBox, BuskerInputLogin, BuskerInputBtn } from '../components/BuskerInput';
import { MemberSidebar } from '../components/MemberSidebar'
import '../public/css/buskerApply.css'
import { postApplyBusker } from '../modules/member'
import { BuskerTypeEnum } from "../types/buskerType";

export const BuskerApplyPage = () => {
    type EnumType = { [s: number]: string };
    const [performanceTypeState, setPerformanceTypeState] = useState<number>(0);
    const [performanceDescriptionState, setPerformanceDescriptionState] = useState<string>('');
    const [performanceDescriptionErrorState, setPerformanceDescriptionErrorState] = useState<string>('');
    const onClickSubmit = async () => {
        let errorDescription = ''
        if (performanceDescriptionState.length > 200 || performanceDescriptionState.length < 1) {
            console.log('error');
            errorDescription = '輸入內容請小於200個字，大於1個字'
        } else {
            const applyData = { description: performanceDescriptionState, type: performanceTypeState }
            const result = await postApplyBusker(applyData)
            console.log('apply busker:', result);

        }
        setPerformanceDescriptionErrorState(errorDescription);
    }

    const mapEnum = (enumerable: EnumType, fn: Function): any[] => {
        // get all the members of the enum
        let enumMembers: any[] = Object.keys(enumerable).map(key => enumerable[key]);

        // we are only interested in the numeric identifiers as these represent the values
        let enumValues: number[] = enumMembers.filter(v => typeof v === "number");

        // now map through the enum values
        return enumValues.map(m => fn(m));
    }

    return (
        <div className='wrap'>
            <div className="busker-apply">
                <BuskerInputTitle title='表演者申請' />
                <div className="busker-apply-group">
                    <MemberSidebar />
                    <div className="busker-apply-content">
                        <div className="busker-apply-item">
                            <label htmlFor="perfomanceType" className='busker-input-label'>
                                表演類型

                                <select name="perfomanceType" id="perfomanceType" className='busker-apply-select'
                                    onChange={(e) => {
                                        const performanceType = Number(e.target.value);
                                        console.log(performanceType);

                                        setPerformanceTypeState(performanceType);
                                    }}>
                                    {mapEnum(BuskerTypeEnum, (v) => {
                                        return (<option key={v} value={v}>{BuskerTypeEnum[v]}</option>)
                                    })}
                                </select>
                            </label>
                            <BuskerInputLogin />
                            <label htmlFor="description" className='busker-input-label'>
                                簡介
                                <textarea name="description" id="description" cols={1} rows={10} className='busker-apply-textarea' onChange={(e) => { const performanceDescription = e.target.value; setPerformanceDescriptionState(performanceDescription); }}></textarea>
                            </label>
                            <div className="busker-input-error">{performanceDescriptionErrorState}</div>
                            <div className="busker-apply-btn">
                                <BuskerInputBtn title='確認送出' onClick={onClickSubmit} disalbed={false} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

