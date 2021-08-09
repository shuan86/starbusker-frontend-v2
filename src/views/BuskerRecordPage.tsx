import React from 'react';
import Photo from '../public/img/photo.png'
import '../public/css/buskerrecordpage.css'

const BuskerRecordChatroomRow = () => {
    return (
        <div className='busker-record-item-chatroom-message-row'>
            <img src={Photo} alt='Photo' className='busker-record-item-chatroom-message-avatar'></img>
            <div className='busker-record-item-chatroom-message-name'>匿名</div>
            <div className='busker-record-item-chatroom-message-main'>演出精彩 !演出精彩 !演出精彩 !演出精彩 !演出精彩 !演出精彩演出精彩 !演出精彩 !演出精彩 !演出精彩 !演出精彩 !演出精彩演出精彩 </div>
            <div className='busker-record-item-chatroom-message-time'>14:30pm</div>
        </div>
    )
}

const BuskerRecordItem = () => {
    let x = 0
    let t1 = []
    while (x < 15) {
        t1.push(<BuskerRecordChatroomRow />)
        x++
    }
    return (
        <div className='busker-record-item'>
            <div className='busker-record-item-title'>
                <h3 className='busker-record-item-title-data'>留言板</h3>
                <span className='busker-record-item-title-data'>表演者：謝孟迪</span>
                <span className='busker-record-item-title-data'>表演時間-0527</span>
            </div>
            <div className='busker-record-item-chatroom'>
                {t1}
            </div>
        </div>
    )
}

const BuskerRecordListItem = () => {
    return (
        <div className='busker-record-list-title'>
            <span className='busker-record-list-title-data'>表演者：謝孟迪</span>
            <span className='busker-record-list-title-data'>表演時間-0527</span>
        </div>
    )
}

const BuskerRecordList = () => {
    let x = 0
    let t1 = []
    while (x < 15) {
        t1.push(<BuskerRecordListItem />)
        x++
    }

    return (
        <div className='busker-record-list'>
            {t1}
        </div>
    )
}

export const BuskerRecordPage = () => {
    return (
        <div className='wrap'>
            <div className='busker-record'>
                <div className='busker-record-title'>留言紀錄</div>
                <div className='busker-record-group'>
                    <BuskerRecordList />
                    <BuskerRecordItem />
                </div>
            </div>
        </div>
    )
}

