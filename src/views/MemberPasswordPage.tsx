import React, { useState, useEffect } from 'react';
import { MemberSidebar } from '../components/MemberSidebar';
import { BuskerInputTitle, BuskerInputBox, BuskerInputBtn } from '../components/BuskerInput';

export const MemberPasswordPage = () => {
    const [memberPasswordFirst, setMemberPasswordFirst] = useState<string>('')
    const [memberPasswordSecond, setMemberPasswordSecond] = useState<string>('')
    const [memberPasswordErrorState, setMemberPasswordErrorState] = useState<string>('')

    //未完成＊＊＊
    const onClickSubmit = async () => {
        let hasError = true
        let passwordError = ''
        if (memberPasswordFirst !== memberPasswordSecond) {
            passwordError = '請重新確認密碼是否輸入相同'
            hasError = false
        } if (hasError) {
            const data = { password: memberPasswordSecond }
            // result = await putMemberPassword(data)
        }
        setMemberPasswordErrorState(passwordError)
    }
    //未完成＊＊＊
    return (
        <div className='wrap'>
            <div className="member-info">
                <BuskerInputTitle title='個人設定' />
                <div className="member-info-group">
                    <MemberSidebar />
                    <div className="member-info-account">
                        <div className='member-info-account-title'>基本資料</div>
                        <div className="member-info-password-group">
                            <BuskerInputBox name='passowrd' title='新密碼' inputType='password' state={memberPasswordFirst} setState={setMemberPasswordFirst} errorState='' />
                            <BuskerInputBox name='secondPassword' title='再次輸入密碼' inputType='password' state={memberPasswordSecond} setState={setMemberPasswordSecond} errorState={memberPasswordErrorState} />
                            <BuskerInputBtn title='更改密碼' onClick={onClickSubmit} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
