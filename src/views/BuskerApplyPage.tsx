import React from 'react';
import { BuskerInputTitle, BuskerInputBox, BuskerInputLogin, BuskerInputBtn } from '../components/BuskerInput';
import '../public/css/buskerApply.css'

export const BuskerApplyPage = () => {
    return (
        <div className='wrap'>
            <div className="busker-apply">
                <BuskerInputTitle title='表演者申請' />
                <div className="busker-apply-group">
                    <div className="busker-apply-item">
                        <BuskerInputBox />
                        <BuskerInputBox />
                        <BuskerInputBox />
                        <BuskerInputBox />
                    </div>
                    <div className="busker-apply-item">
                        <BuskerInputBox />
                        <label htmlFor="" className='busker-input-label'>
                            表演縣市
                            <select name="" id="" className='busker-apply-select'>
                                <option value="">台北市</option>
                            </select>
                        </label>
                        <BuskerInputLogin />
                        <label htmlFor="" className='busker-input-label'>
                            簡介
                            <textarea name="" id="" cols={30} rows={10} className='busker-apply-textarea'></textarea>
                        </label>
                        <div className="busker-apply-btn">
                            <BuskerInputBtn title='確認送出' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

