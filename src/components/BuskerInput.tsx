import React from 'react';
import FacebookLogin from '../public/svg/facebook-login.svg'
import GoogleLogin from '../public/svg/google-login.svg'
import LineLogin from '../public/svg/line-login.svg'
import { loginWithLine, loginWithFB, loginWithGoogle } from "../modules/member";

import '../public/css/buskerInput.css'


export const BuskerInputTitle = ({ title }) => {
    return (
        <div className='busker-input-title'>{title}</div>
    )
}

export const BuskerInputBox = ({ name, needDisabled, title, inputType, state, setState, errorState }) => {
    return (
        <div className='busker-input-box'>
            <label className='busker-input-label' htmlFor={name}>{title}
                <input
                    type={inputType}
                    id={name}
                    value={state}
                    placeholder={state}
                    disabled={needDisabled ? true : false}
                    onChange={(e) => {
                        const v = e.target.value
                        setState(v)
                    }}
                    className='busker-input-input' />
            </label>
            <div className="busker-input-error">{errorState}</div>
        </div>
    )
}

export const BuskerInputLogin = () => {
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
        <div className='busker-input-item-login'>
            {/* <div className="busker-input-item-login-title">帳號綁定</div>
            <div className="busker-input-item-login-group">
                <div onClick={onClickFacebookLogin}> <img className='busker-input-item-login-icon' src={FacebookLogin} alt='FacebookLogin' /></div>
                <div onClick={onClickGoogleLogin}><img className='busker-input-item-login-icon' src={GoogleLogin} alt='GoogleLogin' /></div>
                <div onClick={onClickLineLogin}>  <img className='busker-input-item-login-icon' src={LineLogin} alt='LineLogin' /></div>
            </div> */}
        </div>
    )
}

export const BuskerInputBtn = ({ title, onClick }) => {
    return (
        <button disabled={false} className="busker-input-btn" onClick={onClick}>{title}</button>
    )
}