import React from 'react';
import { BuskerSidebar } from '../components/BuskerSidebar';
import '../public/css/buskerDataPage.css'

export const BuskerDataPage = () => {
    return (
        <div className='wrap'>
            <div className='busker-data'>
                <BuskerSidebar />
                <div className='busker-data-group'>
                    <div className='busker-data-item'>
                        <div className='busker-data-item-title'>最新表演留言人次</div>
                        <div className='busker-data-item-content'></div>
                    </div>
                    <div className='busker-data-item'>
                        <div className='busker-data-item-title'>本週留言人數</div>
                        <div className='busker-data-item-content'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

