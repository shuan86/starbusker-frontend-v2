import React from 'react';
import { BuskerSidebar } from "../components/BuskerSidebar";
import '../public/css/buskerPage.css'
const BuskerPageItem = ({ title, content }) => {
    return (
        <div className="busker-page-item">
            <div className="busker-page-item-title">{title}</div>
            <div className="busker-page-item-content">{content}</div>
        </div>
    )
}
export const BuskerPage = () => {
    const viewCountContent = () => {
        return (
            <div>viewCountContent</div>
        )
    }
    const commentCountContent = () => {
        return (
            <div>commentCountContent</div>
        )
    }
    const calendarContent = () => {
        return (
            <div>calendarContent</div>
        )
    }
    const newestCommentContent = () => {
        return (
            <div>newestCommentContent</div>
        )
    }
    return (
        <div className='wrap'>
            <div className="busker-page">
                <BuskerSidebar />
                <div className="busker-page-group">
                    <BuskerPageItem title='觀看人數' content={viewCountContent()} />
                    <BuskerPageItem title='留言人數' content={commentCountContent()} />
                    <BuskerPageItem title='行事曆' content={calendarContent()} />
                    <BuskerPageItem title='最新留言' content={newestCommentContent()} />
                </div>
            </div>
        </div>
    )
}

