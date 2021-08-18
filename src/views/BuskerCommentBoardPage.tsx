import React from 'react';
import { BuskerSidebar } from '../components/BuskerSidebar';
import Avatar from '../public/img/photo.png';
import Good from '../public/svg/comment-good.svg';
import '../public/css/BuskerCommentBoardPage.css'
const BuskerCommentBoardItem = ({ name }) => {
    return (
        <div className='busker-commentboard-item'>{name}</div>
    )
}
const BuskerCommentBoardContentRow = ({ avatar, name, text }) => {
    return (
        <div className='busker-commentboard-content-row'>
            <img src={avatar} className='busker-commentboard-content-avatar'></img>
            <div className='busker-commentboard-content-name'>{name}</div>
            <div className='busker-commentboard-content-text'>{text}</div>
            <img src={Good} className='busker-commentboard-content-good'></img>
        </div>
    )
}
export const BuskerCommentBoardPage = () => {
    return (
        <div className='wrap'>
            <div className='busker-commentboard'>
                <BuskerSidebar />
                <div className='busker-commentboard-group'>
                    <div className='busker-commentboard-list'>
                        <BuskerCommentBoardItem name='0705留言板' />
                    </div>
                    <div className='busker-commentboard-content'>
                        <div className='busker-commentboard-content-title'>0705留言板</div>
                        <div className='busker-commentboard-content-group'>
                            <BuskerCommentBoardContentRow avatar={Avatar} name='暱名' text='精彩演出！精彩演出！精彩演出！精彩演出！精彩演出！精彩演' />
                            <BuskerCommentBoardContentRow avatar={Avatar} name='暱名' text='精彩演出！精彩演出！精彩演出！精彩演出！精彩演出！精彩演' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

