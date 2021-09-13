import React, { useState, useEffect } from 'react';
import { MemberSidebar } from '../components/MemberSidebar';
import { BuskerInputTitle, BuskerInputBox, BuskerInputBtn } from '../components/BuskerInput';
import { putMemberPassword } from "../modules/member";
export const MemberPasswordPage = () => {
    const [memberOldPasswordState, setMemberOldPasswordState] = useState<string>('')
    const [memberNewPasswordState, setMemberNewPasswordState] = useState<string>('')
    const [memberNewPasswordSecondState, setMemberNewPasswordSecondState] = useState<string>('')
    const [memberPasswordErrorState, setMemberPasswordErrorState] = useState<string>('')

    const onClickSubmit = async () => {
        let passwordError = ''
        if (memberNewPasswordState !== memberNewPasswordSecondState) {
            passwordError = '請重新確認密碼是否輸入相同'
        }
        else if (memberNewPasswordState.length < 3) {
            passwordError = '密碼太短'
        }
        else if (memberNewPasswordState.length > 20) {
            passwordError = '密碼太長'
        }
        else {
            const result = await putMemberPassword({ oldPassword: memberOldPasswordState, newPassword: memberNewPasswordState })
            result.status == 200 ? alert('update sucessful') : alert('update fail')
        }
        setMemberPasswordErrorState(pre => passwordError.length > 0 ? passwordError : pre)
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
                            <BuskerInputBox name='passowrd' title='原密碼' inputType='password' state={memberOldPasswordState} setState={setMemberOldPasswordState} errorState='' />
                            <BuskerInputBox name='passowrd' title='新密碼' inputType='password' state={memberNewPasswordState} setState={setMemberNewPasswordState} errorState='' />
                            <BuskerInputBox name='secondPassword' title='再次輸入密碼' inputType='password' state={memberNewPasswordSecondState} setState={setMemberNewPasswordSecondState} errorState={memberPasswordErrorState} />
                            <BuskerInputBtn title='更改密碼' onClick={onClickSubmit} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
