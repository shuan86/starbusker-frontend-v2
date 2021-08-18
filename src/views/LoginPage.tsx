import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../modules/member";
import { path } from "../modules/routerPath";
import { setMemberReducer } from "../reducers/member";
import { MemberType } from "../types/memberType";
import GoogleLogin from '../public/svg/google-login.svg'
import FacebookLogin from '../public/svg/facebook-login.svg'
import LineLogin from '../public/svg/line-login.svg'
import '../public/css/loginPage.css'

export const LoginPage = () => {
    const [accountState, setAccountState] = useState<string>('t0')
    const [passwordState, setPasswordState] = useState<string>('123')
    const history = useHistory()
    const dispatch = useDispatch()
    const onClicklogin = async () => {
        const result = await login(accountState, passwordState)
        if (result.status === 200) {
            //sucessful login
            console.log(result.data);
            result.data = JSON.stringify(result.data);
            const memberData: MemberType = JSON.parse(result.data)
            dispatch(setMemberReducer(memberData))
            history.push(path.index)
        }
        else if (result.status === 400) {
            //login parameter error
        }
        else if (result.status === 401) {
            //login fail:membe is exist
        }
        else if (result.status === 500) {
            //server is busying
        }
    }

    return (
        <div className='wrap'>
            <div className='login'>
                <div className='login-form'>
                    <div className='login-form-title'>登入</div>
                    <label htmlFor='login-account' className='login-label'>帳號<input type='text' id='login-account'
                        placeholder='account' className='login-input' value={accountState} onChange={(e) => {
                            const value = e.target.value
                            setAccountState(value)
                        }} /></label>
                    <label htmlFor='login-password' className='login-label'>密碼<input type='password' id='login-password'
                        placeholder='password' className='login-input' value={passwordState} onChange={(e) => {
                            const value = e.target.value
                            setPasswordState(value)
                        }} /></label>
                    <div className='login-admin'>
                        <a href='#' className='login-admin-a'>忘記密碼</a>
                        <a href='#' className='login-admin-a'>顯示密碼</a>
                    </div>
                    <button className='login-btn-send' onClick={() => onClicklogin()} >登入</button>
                    <div className='login-quick-title'>快速登入</div>
                    <div className='login-quick-group'>
                        <div ><img src={GoogleLogin} alt='GoogleLogin' /></div>
                        <div ><img src={FacebookLogin} alt='FacebookLogin' /></div>
                        <div><img src={LineLogin} alt='LineLogin' /></div>
                    </div>
                </div>
                <div className='login-create-account'><a href='#' className='login-create-account-a'>還沒有帳戶？<span className='login-create-account-span'>建立帳戶</span></a></div>
            </div>
        </div>
    )
}

