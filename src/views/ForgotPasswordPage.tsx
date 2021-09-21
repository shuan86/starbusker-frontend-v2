import React, { useState, useEffect } from 'react';
import '../public/css/forgotPasswordPage.css'
import { useQuery } from "../hooks/useQuery";
import { path } from "../modules/routerPath";
import { useHistory } from "react-router-dom";
import { forgotPassword } from "../modules/member";
import { Dialog } from "../components/Dialog";
export const ForgotPasswordPage = () => {
  const query = useQuery();
  const history = useHistory()
  const [emailState, setEmailState] = useState<string>('')
  const [dialogSucessfulState, setDialogSucessfulState] = useState<boolean>(false)
  const [dialogFailState, setDialogFailState] = useState<boolean>(false)

  const onClickSend = async () => {
    const result = await forgotPassword(emailState)
    setDialogSucessfulState(pre => result.status == 200 ? true : false)
    setDialogFailState(pre => result.status != 200 ? true : false)
  }

  return (
    <div className='wrap'>

      <div className="forgot-password-page" >
        <Dialog isOpen={dialogSucessfulState} setIsOpen={setDialogSucessfulState}>
          <div className='forgot-password-dialog'>
            <h1>忘記密碼</h1>
            <p>系統已成功發送重設密碼郵件至信箱</p>
            <div className='forgot-password-dialog-close' onClick={() => setDialogSucessfulState(false)}>
              關閉
            </div>
          </div>
        </Dialog>
        <Dialog isOpen={dialogFailState} setIsOpen={setDialogFailState}>
          <div className='forgot-password-dialog'>
            <h1>忘記密碼</h1>
            <p>信箱不存在!!</p>
            <div className='forgot-password-dialog-close' onClick={() => setDialogFailState(false)}>
              關閉
            </div>
          </div>
        </Dialog>

        <div className='forgot-password-form'>
          <h1>忘記密碼</h1>
          <div>
            <p>請輸入註冊時的電子信箱，系統將寄送重新修改密碼的郵件。</p>
          </div>
          <div>
            <label htmlFor='forgot-password-email'>電子信箱</label>
          </div>
          <input id='forgot-password-email' type='text'
            placeholder='your email' className='forgot-password-form-input' value={emailState} onChange={(e) => {
              setEmailState(e.target.value)
            }} />
          <button className='forgot-password-form-btn' onClick={onClickSend} >確認</button>
          <div className='forgot-password-form-bottom'>
            <div onClick={() => {
              history.push(path.login)
            }}>
              回到登入
            </div>
            <div onClick={() => {
              history.push(path.enroll)
            }}>
              建立帳戶
            </div>
          </div>


        </div>


      </div>
    </div >
  )
}

