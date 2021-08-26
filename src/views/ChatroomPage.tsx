import React, { useEffect,useState } from 'react';
import Photo from '../public/img/photo.png'
import Heart from '../public/svg/heart.svg'
import '../public/css/chatroomPage.css'
import { ShowList } from '../components/ShowList'
import {  socket} from "../modules/socket";
import {  getMemberInfo} from "../modules/member";
import { storeTypes } from "../store/store";

import { useSelector } from "react-redux";

export const ChatroomPage = () => {
    const memberData = useSelector((s: storeTypes) => s.memberReducer)

    const [sendDataState, setSendDataState] = useState<string>('')
    const [msgArrState, setMsgArrState] = useState<Array<SendMsgType>>([{account:'',data:''}])
    type SendMsgType={
      account:string
      data:string
    }
    const onClickMsg = () => {
        const sendMsg:SendMsgType={
            account:memberData.account,
            data:sendDataState
        }
         socket.emit('sendMsg',JSON.stringify(sendMsg))
         setMsgArrState((val)=>{
            return [...val,sendMsg]
          })
         console.log('socket ');
    }
    useEffect(() => {
        initWebSocket()
        return () => {
            socket.disconnect()
        }
    }, [])
    const initWebSocket = () => {
        socket.connect()
        socket.on('allMsg', (msg:string) => {
            const receiveMsg:SendMsgType=JSON.parse(msg)
            setMsgArrState((val)=>{
              return [...val,receiveMsg]
            })
            console.log('receive:',msg)
        })
    }
    const Msg = ({account,msg}:{account:string,msg:string}) => {
        return (
            account.length>0? (<div className='chatroom-content-visitor-message-row'>
                <img src={Photo} alt='Photo' className='chatroom-content-visitor-message-avatar'></img>
                <div className='chatroom-content-visitor-message-name'>{account}</div>
                <div className='chatroom-content-visitor-message-main'>{msg}</div>
            </div>):null
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
                        <img src={Photo} alt='Photo' className='chatroom-content-busker-photo' />
                        <div className='chatroom-content-busker-data'>
                            <div className='chatroom-content-busker-name'>
                                <span className='chatroom-content-busker-name-account'>謝孟迪</span>
                                <div className='chatroom-content-busker-description'>扯鈴</div>
                                <div className='chatroom-content-busker-likes'>
                                    <img src={Heart} alt='Heart' className='chatroom-content-busker-hearts' />
                                    <span className='chatroom-content-busker-hearts-count'>120</span>
                                </div>
                            </div>
                            <p className='chatroom-content-busker-introduction'>
                                多顆扯鈴同時演出多顆扯鈴同時演出多顆扯鈴同時演出多顆扯鈴同時演出多顆扯鈴同時演出多顆扯鈴同時演出多顆扯鈴同時演出多顆扯鈴同時演出
                            </p>
                        </div>
                    </div>
                    <div className='chatroom-content-visitor'>
                        <div className='chatroom-content-visitor-title'>留言板</div>
                        <div className='chatroom-content-visitor-message'>
                            {
                                msgArrState.map((val,index)=>{
                                   
                                   return( <Msg account={val.account} msg={val.data}/>)
                                })
                            }
                           
                        </div>
                        <div className='chatroom-content-visitor-input'>
                            <img src={Photo} alt='Photo' className='chatroom-content-visitor-input-avatar'></img>
                            <input type='text' placeholder='我要留言...' className='chatroom-content-visitor-input-box' value={sendDataState} onChange={(e)=>{
                                const val=e.target.value
                                setSendDataState(val)
                            }}/>
                            <button className='chatroom-content-visitor-input-btn-submit' onClick={()=>onClickMsg()}>送出</button>
                            {/* <button className='chatroom-content-visitor-input-btn-submit' onClick={()=>onClickMemberInfo()}>getMember</button> */}

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

