import React from 'react';
import FacebookLogin from '../public/svg/facebook-login.svg'
import GoogleLogin from '../public/svg/google-login.svg'
import LineLogin from '../public/svg/line-login.svg'
import '../public/css/buskerInput.css'


export const BuskerInputTitle = ({ title }) => {
    return (
        <div className='busker-input-title'>{title}</div>
    )
}

export const BuskerInputBox = ({ name, inputType, state, setState, errorState }) => {
    return (
        <div className='busker-input-box'>
            <label className='busker-input-label' htmlFor={name}>{name}
                <input
                    type={inputType}
                    id={name}
                    value={state}
                    placeholder={state}
                    onChange={(e) => {
                        const v = e.target.value
                        setState(v)
                    }}
                    className='busker-input-input' />
            </label>
            <div className="busker-input-error-msg">{errorState}</div>
        </div>
    )
}

export const BuskerInputLogin = () => {
    return (
        <div className='busker-input-item-login'>
            <div className="busker-input-item-login-title">帳號綁定</div>
            <div className="busker-input-item-login-group">
                <img className='busker-input-item-login-icon' src={FacebookLogin} alt='FacebookLogin' />
                <img className='busker-input-item-login-icon' src={GoogleLogin} alt='GoogleLogin' />
                <img className='busker-input-item-login-icon' src={LineLogin} alt='LineLogin' />
            </div>
        </div>
    )
}

export const BuskerInputBtn = ({ title, onClick }) => {
    return (
        <div className="busker-input-btn" onClick={onClick}>{title}</div>
    )
}