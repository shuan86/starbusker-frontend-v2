import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { login, loginWithLine, loginWithFB, loginWithGoogle, getMemberInfo } from "../modules/member";
import { useQuery } from "../hooks/useQuery";
import { path } from "../modules/routerPath";
import { setMemberAction } from "../reducers/member";
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
    const location = useLocation()
    const query = useQuery();
    useEffect(() => {
        const fetchData = async () => {
            const mode = query.get('loginMode')
            if (mode && mode.length > 0) {
                const result = await getMemberInfo()
                result.status != 200 && alert('login fail')
                if (result.status === 200) {
                    const memberData: MemberType = result.data as MemberType
                    dispatch(setMemberAction(memberData))
                    history.push(path.index)
                }
            }

        }
        fetchData()
    }, [])
    const onClicklogin = async () => {
        const result = await login(accountState, passwordState)
        result.status != 200 && alert('login fail')
        if (result.status === 200) {
            //sucessful login
            const memberData: MemberType = result.data as MemberType
            dispatch(setMemberAction(memberData))
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
    const onClickLineLogin = () => {
        loginWithLine()
    }
    const onClickFacebookLogin = () => {
        loginWithFB()
    }
    const onClickGoogleLogin = () => {
        loginWithGoogle()
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
                        <a href='#' className='login-admin-a' onClick={() => {
                            history.push(path.forgotPassword)
                        }}>忘記密碼</a>
                        {/* <a href='#' className='login-admin-a'>顯示密碼</a> */}
                    </div>
                    <button className='login-btn-send' onClick={() => onClicklogin()} >登入</button>
                    <div className='login-quick-title'>快速登入</div>
                    <div className='login-quick-group'>

                        <div className='login-icon' onClick={onClickLineLogin}><img src={LineLogin} alt='LineLogin' /></div>
                        <div className='login-icon' onClick={onClickGoogleLogin}><img src={GoogleLogin} alt='GoogleLogin' /></div>
                        <div className='login-icon' onClick={onClickFacebookLogin}><img src={FacebookLogin} alt='FacebookLogin' /></div>
                    </div>
                </div>
                <div className='login-create-account'>還沒有帳戶？<a href='#' className='login-create-account-a' onClick={() => {
                            history.push(path.enroll)}}><span className='login-create-account-span'>建立帳戶</span></a></div>
            </div>
        </div>
    )
}

