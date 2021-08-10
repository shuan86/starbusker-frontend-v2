import React from 'react';
import '../public/css/loginpage.css'
import GoogleLogin from '../public/svg/google-login.svg'
import FacebookLogin from '../public/svg/facebook-login.svg'
import LineLogin from '../public/svg/line-login.svg'
export const LoginPage = () => {
    return (
        <div className='wrap'>
            <div className='login'>
                <div className='login-form'>
                    <div className='login-form-title'>登入</div>
                    <label htmlFor='login-account' className='login-label'>帳號<input type='text' id='login-account' placeholder='account' className='login-input' /></label>
                    <label htmlFor='login-password' className='login-label'>密碼<input type='password' id='login-password' placeholder='password' className='login-input' /></label>
                    <div className='login-admin'>
                        <a href='#' className='login-admin-a'>忘記密碼</a>
                        <a href='#' className='login-admin-a'>顯示密碼</a>
                    </div>
                    <button className='login-btn-send'>登入</button>
                    <div className='login-quick-title'>快速登入</div>
                    <div className='login-quick-group'>
                        <div className='login-quick-icon'><img src={GoogleLogin} alt='GoogleLogin' /></div>
                        <div className='login-quick-icon'><img src={FacebookLogin} alt='FacebookLogin' /></div>
                        <div className='login-quick-icon'><img src={LineLogin} alt='LineLogin' /></div>
                    </div>
                </div>
                <div className='login-create-account'><a href='#' className='login-create-account-a'>還沒有帳戶？<span className='login-create-account-span'>建立帳戶</span></a></div>
            </div>
        </div>
    )
}

