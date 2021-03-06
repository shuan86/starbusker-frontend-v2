import React, { useEffect, useState, useRef } from 'react';
import { useHistory } from "react-router-dom";
import { path } from "../modules/routerPath";
import { logout, parseAvatarImage } from "../modules/member";
import { useSelector, useDispatch } from "react-redux";
import { storeTypes } from "../store/store";
import { initialMemberAction } from "../reducers/member";
import defaultAvatar from '../public/img/busker-info-default-photo.png'

import '../public/css/nav.css'

import UserCircle from '../public/svg/user-circle.svg'

export const Nav = () => {
    const ref = useRef(null)
    const history = useHistory()
    const dispath = useDispatch()
    const memberData = useSelector((s: storeTypes) => s.memberReducer)

    const [isMenuOpenState, setMenuOpenState] = useState<boolean>(false)
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
        const onClickLogout = async () => {
            console.log('logout');
            await logout()
            dispath(initialMemberAction())
            setMenuOpenState(false)
            history.push(path.login);

        }
        const onClickBusker = () => {
            history.push(path.busker);
            setMenuOpenState(false)
        }
        return (
            <>
                <div className='nav-text'>

                    <img src={parseAvatarImage(memberData.avatar)}
                        alt='Photo' style={{ height: "40px", width: "40px" }} onClick={() => setMenuOpenState(pre => !pre)}
                        className='nav-avatar-image'
                    />

                </div>
                {isMenuOpenState && (
                    <div className="nav-user-btn-list" ref={ref}>
                        <div className="nav-user-name" onClick={() => {
                            setMenuOpenState(false)
                            history.push(path.comments_record)
                        }}>{memberData.account}</div>
                        <div className="nav-user-btn-item" onClick={() => {
                            setMenuOpenState(false)
                            history.push(path.member_info)
                        }}>個人設定</div>
                        <div className="nav-user-btn-item nav-user-btn-item-logout" onClick={onClickLogout}>登出</div>
                        {memberData.isBusker ? <div className="nav-user-btn-item nav-user-btn-item-busker" onClick={onClickBusker}>表演者</div> : null}
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