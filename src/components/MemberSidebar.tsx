import React from 'react'
import { path } from '../modules/routerPath';
import { useHistory, useLocation } from 'react-router-dom';

export const MemberSidebar = () => {
    let history = useHistory();
    let location = useLocation();
    const onClickMemberInfo = () => {
        history.push(path.member_info)
    }
    const onClickApplyBusker = () => {
        history.push(path.busker_apply)
    }
    return (
        <div className='busker-info-list'>
            <button className={`busker-info-list-item ${location.pathname === path.member_info ? 'busker-info-list-active' : ''}`} onClick={onClickMemberInfo}>基本資料</button>
            <button className={`busker-info-list-item ${location.pathname === path.busker_apply ? 'busker-info-list-active' : ''}`} onClick={onClickApplyBusker}>申請成為表演者</button>
        </div>
    )
}

