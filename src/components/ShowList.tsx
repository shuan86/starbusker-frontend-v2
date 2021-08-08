import React, { useEffect } from 'react';
import Heart from '../public/svg/heart.svg'
import Photo from '../public/img/photo.png'
import NextPage from '../public/svg/next-page.svg'
import '../public/css/showlist.css'
const ShowListMember = () => {
    return (
        <div className='show-list-member'>
            {/* member-active 觸發的樣式*/}
            <img src={Photo} alt="Photo" className='show-list-member-photo' />
            <div className='show-list-member-data'>
                <div className='show-list-member-name'>
                    <span className='show-list-member-name-account'>謝孟迪</span>
                    <div className='show-list-member-likes'>
                        <img src={Heart} alt='Heart' className='show-list-member-hearts' />
                        <span className='show-list-member-likes-count'>120</span>
                    </div>
                </div>
                <div className='show-list-member-description'>扯鈴</div>
            </div>
        </div>
    )
}

const ShowListTimeline = () => {
    return (
        <div className='show-list-timeline'>
            <div className='show-list--timeline-title'>13:30</div>
            <div className='show-list-member-group'>
                <ShowListMember />
                <ShowListMember />
                <ShowListMember />
            </div>
        </div>
    )
}

export const ShowListHeader = () => {
    return (
        <div className='show-list-header'>
            <h3>表演資訊列表</h3>
            <select name="" id="">
                <option value="">現在</option>
                <option value="">過去</option>
                <option value="">未來</option>
            </select>
        </div>
    )
}

export const ShowListMain = () => {
    return (
        <div className='show-list-main'>
            <ShowListTimeline />
            <ShowListTimeline />
            <ShowListTimeline />
            <ShowListTimeline />
        </div>
    )
}

export const ShowListPagination = () => {
    return (
        <div className='show-list-pagination'>
            <ul>
                <li className='pagination-active'><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">...</a></li>
                <li><a href="#"><img src={NextPage} alt='NextPage' /></a></li>
            </ul>
        </div>
    )
}