import React, { useEffect } from 'react';
import '../public/css/nav.css'
import { useHistory } from "react-router-dom";
import { path } from "../modules/routerPath";
export const Nav = () => {
    const history = useHistory()
    return (
        <div className='nav-wrap'>
            <div className='nav'>
                <div className='nav-logo' onClick={() => history.push(path.index)}>StarBusker</div>
                <div className='nav-button'>
                    <div className='nav-text nav-right' onClick={() => history.push(path.index)}>首頁</div>
                    <div className='nav-text' onClick={() => history.push(path.login)}>登入</div>
                    <div className='nav-text' data-testid="nav-enroll" onClick={() => history.push(path.enroll)}>
                        <button className='nav-btn-enroll' >註冊</button>
                    </div>
                </div>
                {/* 觀賞者_頭像按鈕選單 */}
                {/* <div className="nav-user-btn-list">
                    <div className="nav-user-photo"></div>
                    <div className="nav-user-name">匿名</div>
                    <div className="nav-user-btn-item">留言紀錄</div>
                    <div className="nav-user-btn-item">個人設定</div>
                    <div className="nav-user-btn-item nav-user-btn-item-logout">登出</div>
                    <div className="nav-user-btn-item nav-user-btn-item-busker">表演者</div>
                </div> */}
            </div>
        </div>
    )
}