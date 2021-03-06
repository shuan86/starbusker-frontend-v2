import React, { useEffect, useState, useRef } from 'react';
import Heart from '../public/svg/heart.svg'
import Donate from '../public/svg/donate-solid.svg'
import { useHistory } from "react-router";

import '../public/css/chatroomPage.css'
import { ShowList } from '../components/ShowList'
import { socket } from "../modules/socket";
import { getPerformanceInfo, postConfirmLinePayDonateOrder } from "../modules/busker";
import { BuskerTypeEnum, ResPerformanceInfoType } from "../types/buskerType";
import { storeTypes } from "../store/store";
import { useSelector } from "react-redux";
import defaultAvatar from '../public/img/busker-info-default-photo.png'
import { ResPerformancesDataType } from '../types/responseType';
import { useQuery } from "../hooks/useQuery";
import { useLocation } from 'react-router-dom'

export const ChatroomPage = () => {
    const [performanceData, setPerformanceData] = useState<ResPerformancesDataType>({ dataArr: [], dataAmount: 0 });
    const memberData = useSelector((s: storeTypes) => s.memberReducer)
    const [nameState, setNameState] = useState<string>('')
    const [buskerTypeState, setBuskerTypeState] = useState<string>('')
    const [descriptionState, setDescriptionState] = useState<string>('')
    const [likeAmountState, setLikeAmountState] = useState<number>(0)
    const [avatarPreviewState, setAvatarPreviewState] = useState(null)
    const [linePayOrderUrlState, setlinePayOrderUrl] = useState<string>(null)
    const [buskerAvatarPreviewState, setBuskerAvatarPreviewState] = useState(null)
    const [sendDataState, setSendDataState] = useState<string>('')
    const [msgArrState, setMsgArrState] = useState<SendMsgType[]>([{ account: '', data: '' }])
    const [avatarsMapState, setAvatarsMapState] = useState<Map<string, any>>(new Map())
    const [performanceIdState, setPerformanceIdState] = useState<number>()
    const query = useQuery();
    const chatroomRef = useRef<HTMLDivElement>()
    const allClientsAvatar = new Map()
    const socketEvent = {
        sendMsgFromClient: 'sendMsgFromClient',
        sendMsgFromServer: 'sendMsgFromServer',
        joinMsg: 'joinMsg',
        disconnect: 'disconnect',
        getAllClientsAvatar: 'getAllClientsAvatar',
        getNewClientAvatar: 'getNewClientAvatar',
    }
    type SendMsgType = {
        account: string
        data: string
    }
    type SendMsgFromServerType = {
        account: string
        data: string
    }
    type JoinMsgFromServerType = {
        account: string
        data: string
        avatar: string
    }
    type JoinMsgFromClientType = {
        account: string
        performanceId: number
    }
    type GetMemberAvatarType = {
        account: string
        avatar: string
    }
    const onClickMsg = () => {
        const sendMsg: SendMsgType = {
            account: memberData.account,
            data: sendDataState
        }
        socket.emit(socketEvent.sendMsgFromClient, JSON.stringify(sendMsg))
        setSendDataState('')
    }
    useEffect(() => {
        const performanceId = query.get('performanceId')
        setPerformanceIdState(Number(performanceId))
    }, [query])

    useEffect(() => {
        setMsgArrState([])
        const initBuskerInfo = async () => {
            const result = await getPerformanceInfo(performanceIdState)
            const data: ResPerformanceInfoType = result.data as ResPerformanceInfoType
            setNameState(result.status == 200 && data.name)
            setDescriptionState(result.status == 200 && data.description)
            setLikeAmountState(result.status == 200 && data.likeAmount)
            setNameState(result.status == 200 && data.name)
            setBuskerAvatarPreviewState(result.status == 200 && (data.avatar == '' || data.avatar == undefined ? defaultAvatar : `data:image/png;base64,${data.avatar}`));
            setBuskerTypeState(result.status == 200 && BuskerTypeEnum[data.type])
            setlinePayOrderUrl(result.status == 200 && data.linePayOrderUrl)

            if (result.status == 401) {
                console.error('parameter error');
            }
        }
        initWebSocket()
        initBuskerInfo()

        return () => {
            allClientsAvatar.clear()
            for (const [key, value] of Object.entries(socketEvent)) {
                socket.off(value)
            }
            socket.disconnect()
        }
    }, [performanceIdState])


    useEffect(() => {
        chatroomRef.current.scrollTop = chatroomRef.current.scrollHeight;
    }, [msgArrState])
    const initWebSocket = () => {
        socket.connect()

        const joinMsg: JoinMsgFromClientType = {
            account: memberData.account,
            performanceId: performanceIdState
        }
        socket.emit(socketEvent.joinMsg, JSON.stringify(joinMsg))
        socket.on(socketEvent.sendMsgFromServer, (msg: string) => {
            const receiveMsg: SendMsgFromServerType = JSON.parse(msg)
            setMsgArrState((pre) => {
                return [...pre, receiveMsg]
            })
        })
        socket.on(socketEvent.joinMsg, (msg: string) => {
            const data: JoinMsgFromServerType = JSON.parse(msg)
            // setAvatarsMapState(avatarsMapState.set(data.account, data.avatar))
            setAvatarsMapState(avatarsMapState.set(data.account, data.avatar == '' || data.avatar == undefined ? defaultAvatar : `data:image/png;base64,${data.avatar}`))
            setMsgArrState((pre) => {
                return [...pre, { account: data.account, data: data.data }]
            })
        })
        socket.on(socketEvent.getAllClientsAvatar, (msg: string) => {
            const dataArr: GetMemberAvatarType[] = JSON.parse(msg)
            for (const data of dataArr) {
                setAvatarsMapState(avatarsMapState.set(data.account, data.avatar == '' || data.avatar == undefined ? defaultAvatar : `data:image/png;base64,${data.avatar}`))
            }
            const memberAvatarData = avatarsMapState.get(memberData.account)
            setAvatarPreviewState(memberAvatarData == '' || memberAvatarData == undefined ? defaultAvatar : `${memberAvatarData} `)
        })
    }
    const Msg = ({ account, msg, avatar }: { account: string, msg: string, avatar: any }) => {
        return (
            account.length > 0 ? (<div className='chatroom-content-visitor-message-row'>
                <img src={avatar} alt='Photo' className='chatroom-content-visitor-message-avatar'></img>

                <div className='chatroom-content-visitor-message-name'>{account}</div>
                <div className='chatroom-content-visitor-message-main'>{msg}</div>
            </div>) : null
        )
    }
    return (
        <div className='wrap'>
            <div className='chatroom'>
                <div className='chatroom-show-list'>
                    <ShowList performanceData={performanceData} setPerformanceData={setPerformanceData} />
                </div>
                <div className='chatroom-content'>
                    <div className='chatroom-content-busker'>
                        <img src={buskerAvatarPreviewState} alt='Photo' className='chatroom-content-busker-photo' />
                        <div className='chatroom-content-busker-data'>
                            <div className='chatroom-content-busker-name'>
                                <span className='chatroom-content-busker-name-account'>{nameState}</span>
                                <span className='chatroom-content-busker-description'>{buskerTypeState}</span>
                                <div className='chatroom-content-busker-likes'>
                                    <img src={Heart} alt='Heart' className='chatroom-content-busker-hearts' />
                                    <span className='chatroom-content-busker-hearts-count'>{likeAmountState}</span>
                                </div>
                            </div>
                            <p className='chatroom-content-busker-introduction'>
                                {descriptionState}
                            </p>

                        </div>
                        {linePayOrderUrlState && <div className='chatroom-content-busker-donate' >
                            <a href={linePayOrderUrlState} target='_blank'>
                                <img src={Donate} alt="" />
                            </a>
                            <div>????????????</div>
                        </div>}

                    </div>
                    <div className='chatroom-content-visitor'>
                        <div className='chatroom-content-visitor-title'>?????????</div>
                        <div className='chatroom-content-visitor-message' ref={chatroomRef}>
                            {
                                msgArrState.map((val, index) => {
                                    return (<Msg account={val.account} msg={val.data} avatar={avatarsMapState.get(val.account)} />)
                                })
                            }
                        </div>
                        <div className='chatroom-content-visitor-input'>
                            <img src={avatarPreviewState} alt='Photo' className='chatroom-content-visitor-input-avatar'></img>
                            <input type='text' placeholder='????????????...' className='chatroom-content-visitor-input-box' value={sendDataState} onChange={(e) => {
                                const val = e.target.value
                                setSendDataState(val)
                            }} />
                            <button className='chatroom-content-visitor-input-btn-submit' onClick={() => onClickMsg()}>??????</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

