import React from 'react'
import { path } from '../modules/routerPath';
import { useSelector } from 'react-redux';
import { storeTypes } from "../store/store";
import { useHistory, useLocation } from 'react-router-dom';

export const MemberSidebar = () => {
    let history = useHistory();
    let location = useLocation();
    const memberData = useSelector((s: storeTypes) => s.memberReducer);

    const onClickMemberInfo = () => {
        history.push(path.member_info)
    }
    const onClickApplyBusker = () => {
        history.push(path.busker_apply)
    }
    const onClickMemberPassword = () => {
        history.push(path.member_password)
    }
    return (
        <div className='member-info-list'>
            <button className={`member-info-list-item ${location.pathname === path.member_info ? 'member-info-list-active' : ''}`} onClick={onClickMemberInfo}>基本資料</button>
            {memberData.isBusker ? null : <button className={`member-info-list-item ${location.pathname === path.busker_apply ? 'member-info-list-active' : ''}`} onClick={onClickApplyBusker}>申請成為表演者</button>}
            <button className={`member-info-list-item ${location.pathname === path.member_password ? 'member-info-list-active' : ''}`} onClick={onClickMemberPassword}>密碼設定</button>

        </div>
    )
}

