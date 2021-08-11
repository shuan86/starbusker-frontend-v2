import React, { useEffect, useState, useRef } from 'react';
import { useHistory } from "react-router-dom";
import { path } from "../modules/routerPath";
import { useDispatch, useSelector } from "react-redux";
import { storeTypes } from "../store/store";
import { clearMemberReducer } from "../reducers/member";
import { logout } from "../modules/member";

import '../public/css/nav.css'

import UserCircle from '../public/svg/user-circle.svg'

export const Nav = () => {
    const ref = useRef(null)
    const history = useHistory()
    const dispatch = useDispatch()
    const memberData = useSelector((s: storeTypes) => s.memberReducer)
    const [isMenuOpenState, setMenuOpenState] = useState<boolean>(false)
    const onClickLogout = async () => {
        const result = await logout()
        if (result.status === 200) {
            history.push(path.login)
        }
        else if (result.status === 401) {
            //login fail
            alert('login fail')
        }
        dispatch(clearMemberReducer())
        setMenuOpenState(result.status === 200 ? false : true)
    }
    const NotLogin = () => {
        return (
            <>
                <div className='nav-text' onClick={() => history.push(path.login)}>登入</div>
                <div className='nav-text' onClick={() => history.push(path.enroll)}>
                    <button className='nav-btn-enroll' >註冊</button>
                </div>
            </>
        )
    }
    const Login = () => {

        return (
            <>
                <div className='nav-text' onClick={() => history.push(path.chatroom)}>留言</div>
                <div className='nav-text '><img className=' nav-user-icon' src={UserCircle} alt='user' onClick={() => setMenuOpenState(pre => !pre)} /></div>
                {isMenuOpenState && (
                    <div className="nav-user-btn-list" ref={ref}>
                        <div className="nav-user-photo"></div>
                        <div className="nav-user-name" onClick={() => history.push(path.comments_record)}>{memberData.account}</div>
                        <div className="nav-user-btn-item" onClick={() => history.push(path.comments_record)}>留言紀錄</div>
                        <div className="nav-user-btn-item" onClick={() => history.push(path.member_info)}>個人設定</div>
                        <div className="nav-user-btn-item nav-user-btn-item-logout" onClick={() => onClickLogout()}>登出</div>
                        <div className="nav-user-btn-item nav-user-btn-item-busker" onClick={() => history.push(path.busker)}>表演者</div>
                    </div>)}

            </>
        )
    }
    useEffect(() => {
        const checkIfClickedOutside = e => {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if (isMenuOpenState && ref.current && !ref.current.contains(e.target)) {
                setMenuOpenState(false)
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [isMenuOpenState])
    return (
        <div className='nav-wrap'>
            <div className='nav'>
                <div className='nav-logo' onClick={() => history.push(path.index)}>StarBusker</div>
                <div className='nav-button'>
                    <div className='nav-text nav-right' onClick={() => history.push(path.index)}>首頁</div>
                    {memberData.account == '' ? <NotLogin /> : <Login />}
                </div>
            </div>
        </div>
    )
}