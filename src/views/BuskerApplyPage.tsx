import React, { useState } from 'react';
import { BuskerInputTitle, BuskerInputBox, BuskerInputLogin, BuskerInputBtn } from '../components/BuskerInput';
import { MemberSidebar } from '../components/MemberSidebar'
import '../public/css/buskerApply.css'
import { postApplyBusker } from '../modules/member'

export const BuskerApplyPage = () => {

    const [performanceTypeState, setPerformanceTypeState] = useState<number>(0);
    const [performanceDescriptionState, setPerformanceDescriptionState] = useState<string>('');

    const onClickSubmit = async () => {
        const applyData = { description: performanceDescriptionState, type: performanceTypeState }
        await postApplyBusker(applyData)
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

                                <select name="perfomanceType" id="perfomanceType" className='busker-apply-select' onChange={(e) => { const performanceType = Number(e.target.value); setPerformanceTypeState(performanceType); }}>
                                    {/* 做列舉 */}
                                    <option value={1}>歌手</option>
                                    <option value="2">畫家</option>
                                    <option value="3">鼓手</option>
                                    <option value="0">其他</option>
                                </select>
                            </label>
                            <BuskerInputLogin />
                            <label htmlFor="description" className='busker-input-label'>
                                簡介
                                <textarea name="description" id="description" cols={1} rows={10} className='busker-apply-textarea' onChange={(e) => { const performanceDescription = e.target.value; setPerformanceDescriptionState(performanceDescription); }}></textarea>
                            </label>
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

