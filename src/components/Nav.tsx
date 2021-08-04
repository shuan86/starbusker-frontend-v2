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
                <div className='nav-text nav-right' onClick={() => history.push(path.index)}>首頁</div>
                <div className='nav-text' onClick={() => history.push(path.login)}>登入</div>
                <div className='nav-text'>
                    <button className='nav-btn-enroll' onClick={() => history.push(path.enroll)}>註冊</button>
                </div>


            </div>
        </div>
    )
}