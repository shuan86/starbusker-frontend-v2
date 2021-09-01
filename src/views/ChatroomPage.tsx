import React, { useEffect, useState, useRef } from 'react';
import Photo from '../public/img/photo.png'
import Heart from '../public/svg/heart.svg'
import '../public/css/chatroomPage.css'
import { ShowList } from '../components/ShowList'
import { socket } from "../modules/socket";
import { getBuskerInfo } from "../modules/busker";
import { GetBuskerInfoType, BuskerTypeEnum } from "../types/buskerType";
import { storeTypes } from "../store/store";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import defaultAvatar from '../public/img/busker-info-default-photo.png'

export const ChatroomPage = () => {
    const memberData = useSelector((s: storeTypes) => s.memberReducer)
    const [nameState, setNameState] = useState<string>('')
    const [buskerTypeState, setBuskerTypeState] = useState<string>('')
    const [descriptionState, setDescriptionState] = useState<string>('')
    const [likeAmountState, setLikeAmountState] = useState<number>(0)
    const [avatarPreviewState, setAvatarPreviewState] = useState(null)
    const [buskerAvatarPreviewState, setBuskerAvatarPreviewState] = useState(null)
    const [sendDataState, setSendDataState] = useState<string>('')
    const [msgArrState, setMsgArrState] = useState<Array<SendMsgType>>([{ account: '', data: '' }])
    const [avatarsMapState, setAvatarsMapState] = useState<Map<string, any>>(new Map())
    const { id } = useParams<{ id?: string }>();//bukser id
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
        id: number
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
        const initBuskerInfo = async () => {
            const result = await getBuskerInfo(Number(id))
            if (result.status == 200) {
                const data: GetBuskerInfoType = result.data as GetBuskerInfoType
                setNameState(data.name)
                setDescriptionState(data.description)
                setLikeAmountState(data.likeAmount)
                setNameState(data.name)
                setBuskerAvatarPreviewState(data.avatar == '' || data.avatar == undefined ? defaultAvatar : `data:image/png;base64,${data.avatar}`);
                setBuskerTypeState(BuskerTypeEnum[data.type])
            }
            else if (result.status == 401) {
                console.error('parameter error');
            }
        }
        initWebSocket()
        initBuskerInfo()
        return () => {
            allClientsAvatar.clear()
            for (const [key, value] of Object.entries(socketEvent)) {
                console.log(`${key}: ${value}`);
                socket.off(value)
            }
            socket.disconnect()
        }
    }, [])
    useEffect(() => {
        chatroomRef.current.scrollTop = chatroomRef.current.scrollHeight;
    }, [msgArrState])
    const initWebSocket = () => {
        socket.connect()
        const joinMsg: JoinMsgFromClientType = {
            account: memberData.account,
            id: Number(id)
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
                    <ShowList />
                </div>
                <div className='chatroom-content'>
                    <div className='chatroom-content-busker'>
                        <img src={buskerAvatarPreviewState} alt='Photo' className='chatroom-content-busker-photo' />
                        <div className='chatroom-content-busker-data'>
                            <div className='chatroom-content-busker-name'>
                                <span className='chatroom-content-busker-name-account'>{nameState}</span>
                                <div className='chatroom-content-busker-description'>{buskerTypeState}</div>
                                <div className='chatroom-content-busker-likes'>
                                    <img src={Heart} alt='Heart' className='chatroom-content-busker-hearts' />
                                    <span className='chatroom-content-busker-hearts-count'>{likeAmountState}</span>
                                </div>
                            </div>
                            <p className='chatroom-content-busker-introduction'>
                                {descriptionState}
                            </p>
                        </div>
                    </div>
                    <div className='chatroom-content-visitor'>
                        <div className='chatroom-content-visitor-title'>留言板</div>
                        <div className='chatroom-content-visitor-message' ref={chatroomRef}>
                            {
                                msgArrState.map((val, index) => {
                                    return (<Msg account={val.account} msg={val.data} avatar={avatarsMapState.get(val.account)} />)
                                })
                            }
                        </div>
                        <div className='chatroom-content-visitor-input'>
                            <img src={avatarPreviewState} alt='Photo' className='chatroom-content-visitor-input-avatar'></img>
                            <input type='text' placeholder='我要留言...' className='chatroom-content-visitor-input-box' value={sendDataState} onChange={(e) => {
                                const val = e.target.value
                                setSendDataState(val)
                            }} />
                            <button className='chatroom-content-visitor-input-btn-submit' onClick={() => onClickMsg()}>送出</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

