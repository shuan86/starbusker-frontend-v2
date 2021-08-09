import React from 'react';
import Photo from '../public/img/photo.png'
import Heart from '../public/svg/heart.svg'
import '../public/css/chatroompage.css'
import { ShowListHeader, ShowListMain, ShowListPagination } from '../components/ShowList'
export const ChatroomPage = () => {
    return (
        <div className='wrap'>
            <div className='chatroom'>
                <div className='chatroom-show-list'>
                    <ShowListHeader />
                    <ShowListMain />
                    <ShowListPagination />
                </div>
                <div className='chatroom-content'>
                    <div className='chatroom-content-busker'>
                        <img src={Photo} alt='Photo' className='chatroom-content-busker-photo' />
                        <div className='chatroom-content-busker-data'>
                            <div className='chatroom-content-busker-name'>
                                <span className='chatroom-content-busker-name-account'>謝孟迪</span>
                                <div className='chatroom-content-busker-description'>扯鈴</div>
                                <div className='chatroom-content-busker-likes'>
                                    <img src={Heart} alt='Heart' className='chatroom-content-busker-hearts' />
                                    <span className='chatroom-content-busker-hearts-count'>120</span>
                                </div>
                            </div>
                            <p className='chatroom-content-busker-introduction'>
                                多顆扯鈴同時演出多顆扯鈴同時演出多顆扯鈴同時演出多顆扯鈴同時演出多顆扯鈴同時演出多顆扯鈴同時演出多顆扯鈴同時演出多顆扯鈴同時演出
                            </p>
                        </div>
                    </div>
                    <div className='chatroom-content-visitor'>
                        <div className='chatroom-content-visitor-title'>留言板</div>
                        <div className='chatroom-content-visitor-message'>
                            <div className='chatroom-content-visitor-message-row'>
                                <img src={Photo} alt='Photo' className='chatroom-content-visitor-message-avatar'></img>
                                <div className='chatroom-content-visitor-message-name'>匿名</div>
                                <div className='chatroom-content-visitor-message-main'>演出精彩 !演出精彩 !演出精彩 !演出精彩 !演出精彩 !演出精彩</div>
                            </div>
                        </div>
                        <div className='chatroom-content-visitor-input'>
                            <img src={Photo} alt='Photo' className='chatroom-content-visitor-input-avatar'></img>
                            <input type='text' placeholder='我要留言...' className='chatroom-content-visitor-input-box' />
                            <button className='chatroom-content-visitor-input-btn-submit'>送出</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

