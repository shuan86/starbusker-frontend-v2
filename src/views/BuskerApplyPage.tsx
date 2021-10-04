import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";

import { useHistory } from 'react-router';
import { useSelector } from "react-redux";
import { storeTypes } from "../store/store";
import { BuskerInputTitle, BuskerInputBox, BuskerInputLogin, BuskerInputBtn } from '../components/BuskerInput';
import { MemberSidebar } from '../components/MemberSidebar'
import '../public/css/buskerApply.css'
import { postApplyBusker } from '../modules/member'
import { BuskerTypeEnum } from "../types/buskerType";
import { path } from '../modules/routerPath'
import { ResponseType } from '../types/responseType'
import { MemberType } from "../types/memberType";
import { setMemberAction } from "../reducers/member";


const ApplyForm = ({ setPerformanceTypeState, setPerformanceDescriptionState, performanceDescriptionState, performanceTypeState, setIsApplyState }) => {
    type EnumType = { [s: number]: string };
    const [submitResultError, setSubmitResultError] = useState<string>('');
    const [performanceDescriptionErrorState, setPerformanceDescriptionErrorState] = useState<string>('');
    const dispatch = useDispatch()
    const onClickSubmit = async () => {
        let errorDescription: string = ''
        let result: ResponseType
        let resultError: string = ''
        let isApply = false
        if (performanceDescriptionState.length < 200 || performanceDescriptionState.length > 1) {
            const applyData = { description: performanceDescriptionState, type: performanceTypeState }
            result = await postApplyBusker(applyData)
        } else {
            errorDescription = '輸入內容請小於200個字，大於1個字'
        }
        if (result.status == 200) {
            resultError = ''
            const memberData: MemberType = result.data as MemberType
            dispatch(setMemberAction(memberData))
            isApply = true
        } else if (result.status == 400) {
            resultError = `parameter error`
        } else if (result.status == 401) {
            resultError = `failed to apply、you aren't member`
        } else if (result.status == 500) {
            resultError = `server is busying`
        }
        setIsApplyState(isApply)
        setSubmitResultError(resultError)
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
    return (<>
        <div className="busker-apply-item">
            <label className='busker-input-label' style={{ color: 'red' }}>{submitResultError}</label>
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
                <textarea name="description" id="description" cols={1} rows={10} placeholder="簡短自我簡介" className='busker-apply-textarea' onChange={(e) => { const performanceDescription = e.target.value; setPerformanceDescriptionState(performanceDescription); }}></textarea>
            </label>
            <div className="busker-input-error">{performanceDescriptionErrorState}</div>
            <div className="busker-apply-btn">
                <BuskerInputBtn title='確認送出' onClick={onClickSubmit} />
            </div>
        </div>
    </>)
}

const ApplyResult = () => {
    const history = useHistory()
    const onClickSubmit = () => {
        history.push(path.busker)
    }
    return (
        <div className='busker-apply-result'>
            <div className='busker-apply-result-title'>成功申請成為表演者</div>
            <BuskerInputBtn title='前往表演者設定' onClick={onClickSubmit} />
        </div>
    )
}

export const BuskerApplyPage = () => {
    const [performanceTypeState, setPerformanceTypeState] = useState<number>(0);
    const [performanceDescriptionState, setPerformanceDescriptionState] = useState<string>('');
    const [isApply, setIsApplyState] = useState<boolean>(false);
    const memberData = useSelector((s: storeTypes) => s.memberReducer);
    console.log(memberData);
    const isBusker = memberData.isBusker
    useEffect(() => {
        const isBusker = memberData.isBusker
        setIsApplyState(isBusker);
    }, [])

    return (
        <div className='wrap'>
            <div className="busker-apply">
                <BuskerInputTitle title='表演者申請' />
                <div className="busker-apply-group">
                    <MemberSidebar />
                    <div className="busker-apply-content">
                        {isApply ? <ApplyResult /> :
                            <ApplyForm
                                setPerformanceTypeState={setPerformanceTypeState}
                                setPerformanceDescriptionState={setPerformanceDescriptionState}
                                performanceDescriptionState={performanceDescriptionState}
                                performanceTypeState={performanceTypeState}
                                setIsApplyState={setIsApplyState}
                            />}
                    </div>
                </div>
            </div>
        </div>
    )
}

