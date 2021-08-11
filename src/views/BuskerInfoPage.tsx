import React from 'react';
import Photo from '../public/img/busker-info-photo.png'
import FacebookLogin from '../public/svg/facebook-login.svg'
import GoogleLogin from '../public/svg/google-login.svg'
import LineLogin from '../public/svg/line-login.svg'
import '../public/css/buskerinfopage.css'
import { BuskerInputTitle, BuskerInputBox, BuskerInputLogin, BuskerInputBtn } from '../components/BuskerInput';

export const BuskerInfoPage = () => {
    return (
        <div className='wrap'>
            <div className='busker-info'>
                <BuskerInputTitle title='個人設定' />
                <div className='busker-info-group'>
                    <div className='busker-info-list'>
                        <button className='busker-info-list-item busker-info-list-active'>基本資料</button>
                        <button className='busker-info-list-item'>申請成為表演者</button>
                    </div>
                    <div className='busker-info-account'>
                        <div className='busker-info-account-title'>基本資料</div>
                        <div className='busker-info-account-group'>
                            <div className='busker-info-account-photo'>
                                <img src={Photo} alt='Photo' className='busker-info-account-photo-photo' />
                                <button className='busker-info-account-photo-btn'>更改頭像</button>
                            </div>
                            <div className='busker-info-account-data'>
                                <BuskerInputBox />
                                <BuskerInputBox />
                                <BuskerInputBox />
                                <BuskerInputBox />
                                <BuskerInputBox />
                                <BuskerInputLogin />
                                <BuskerInputBtn title='確認修改' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

