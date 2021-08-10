import React, { useEffect, useState } from 'react';
import '../public/css/enrollpage.css'
import { enroll } from '../modules/member'
import { EnrollMemberType } from '../types/memberType';
import { path } from '../modules/routerPath';
import { useHistory } from "react-router-dom";

const EnrollInputItem = ({ name, inputType, state, setState, errorState }) => {

  return (
    <div className="enroll-item">
      <div>
        <label htmlFor={name} className='enroll-label'>{name}</label>
      </div>
      <input
        type={inputType}
        name={name}
        id={name}
        className='enroll-input'
        placeholder={name}
        value={state}
        onChange={(e) => {
          const v = e.target.value
          setState(v)
        }}
      />
      <div className="enroll-error-msg">
        <p>{errorState}</p>
      </div>
    </div>
  )
}
const EnrollRadioItem = ({ name, state, setState, errorState }) => {
  return (
    <div className="enroll-item">
      <div>
        <label htmlFor={name}>{name}</label>
      </div>
      <div className='enroll-input-radio'>
        <label htmlFor="gender1" className='enroll-input-radio-gender'><input type="radio" name="gender" value="1" id="gender1" onChange={(e) => {
          const v = e.target.value
          setState(v == '1' ? true : false)
        }} /> 男</label>

        <label htmlFor="gender0" className='enroll-input-radio-gender'><input type="radio" name="gender" value="0" id="gender0" onChange={(e) => {
          const v = e.target.value
          setState(v == '1' ? true : false)
        }} />女</label>

      </div>
      <div className="enroll-error-msg">
        <p>{errorState}</p>
      </div>
    </div>
  )
}

export const EnrollPage = () => {
  const [nameState, setNameState] = useState<string>('busker')
  const [nameErrorState, setNameErrorState] = useState<string>('')
  const [accountState, setAccountState] = useState<string>('t0')
  const [accountErrorState, setAccountErrorState] = useState<string>('')
  const [passwordState, setPasswordState] = useState<string>('123')
  const [passwordErrorState, setPasswordErrorState] = useState<string>('')
  const [repeatPasswordState, setRepeatPasswordState] = useState<string>('123')
  const [repeatPasswordErrorState, setRepeatPasswordErrorState] = useState<string>('')
  const [emailState, setEmailState] = useState<string>('account01@email.com')
  const [emailErrorState, setEmailErrorState] = useState<string>('')
  const [genderState, setGenderState] = useState<boolean>(true)
  const [genderErrorState, setGenderErrorState] = useState<string>('')
  const history = useHistory()
  const onClickEnroll = async () => {
    const memberData: EnrollMemberType = {
      account: accountState,
      password: passwordState,
      email: emailState,
      male: genderState,
      name: nameState
    }
    const result = await enroll(memberData)
    if (result.status == 200) {
      //enroll sucessful
      history.push(path.login)
    }
    else if (result.status == 400) {
      //enroll parameter error
    }
    else if (result.status == 401) {
      //enroll fail:membe is exist
    }
    else if (result.status == 500) {
      //server is busying
    }
    // console.log('enroll:', result);

  }

  return (
    <div className="wrap" data-testid="newsPage">

      <div className="enroll">
        <h1 className="enroll-header">註冊</h1>
        <EnrollInputItem name='姓名' inputType='text' state={nameState} setState={setNameState} errorState={nameErrorState} />
        <EnrollRadioItem name='性別' state={genderState} setState={setGenderState} errorState={genderErrorState} />
        <EnrollInputItem name='電子信箱' inputType='text' state={emailState} setState={setEmailState} errorState={emailErrorState} />
        <EnrollInputItem name='帳號' inputType='text' state={accountState} setState={setAccountState} errorState={accountErrorState} />
        <EnrollInputItem name='密碼' inputType='password' state={passwordState} setState={setPasswordState} errorState={passwordErrorState} />
        <EnrollInputItem name='再輸入一次密碼' inputType='password' state={repeatPasswordState} setState={setRepeatPasswordState} errorState={repeatPasswordErrorState} />


        <button className='enroll-btn-send' onClick={onClickEnroll} data-testid='enroll-btn-send'>註冊</button>
      </div>

    </div>
  )
}
