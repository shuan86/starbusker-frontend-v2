import React, { useEffect, useState } from 'react';
import '../public/css/enroll.css'
import { enroll } from '../modules/member'
import { EnrollMemberType } from '../type/Member';
import { path } from '../modules/routerPath';
import { useHistory } from "react-router-dom";

const EnrollInputItem = ({ name, inputType, state, setState, errorState }) => {

  return (
    <div className="enroll-item">
      <div>
        <label htmlFor={name}>{name}</label>
      </div>
      <input
        type={inputType}
        name={name}
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
      <div >
        <input type="radio" name="gender" value="1" onChange={(e) => {
          const v = e.target.value
          setState(v == '1' ? true : false)
        }} /> male

        <input type="radio" name="gender" value="0" onChange={(e) => {
          const v = e.target.value
          setState(v == '1' ? true : false)
        }} /> female
      </div>
      <div className="enroll-error-msg">
        <p>{errorState}</p>
      </div>
    </div>
  )
}

export const EnrollPage = () => {
  const [nameState, setNameState] = useState<string>('ss')
  const [nameErrorState, setNameErrorState] = useState<string>('')
  const [accountState, setAccountState] = useState<string>('aaaaa')
  const [accountErrorState, setAccountErrorState] = useState<string>('')
  const [passwordState, setPasswordState] = useState<string>('aaaaa')
  const [passwordErrorState, setPasswordErrorState] = useState<string>('')
  const [repeatPasswordState, setRepeatPasswordState] = useState<string>('aaaaa')
  const [repeatPasswordErrorState, setRepeatPasswordErrorState] = useState<string>('')
  const [emailState, setEmailState] = useState<string>('aaaaa')
  const [emailErrorState, setEmailErrorState] = useState<string>('')
  const [genderState, setGenderState] = useState<boolean>(true)
  const [genderErrorState, setGenderErrorState] = useState<string>('')
  const history = useHistory()
  const handleSend = async () => {
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
    console.log('enroll:', result);

  }

  return (
    <div className="wrap" data-testid="newsPage">

      <div className="enroll" >
        <h1 className="enroll-header">註冊</h1>
        <EnrollInputItem name='name' inputType='text' state={nameState} setState={setNameState} errorState={nameErrorState} />
        <EnrollInputItem name='account' inputType='text' state={accountState} setState={setAccountState} errorState={accountErrorState} />
        <EnrollInputItem name='password' inputType='password' state={passwordState} setState={setPasswordState} errorState={passwordErrorState} />
        <EnrollInputItem name='repeat-password' inputType='password' state={repeatPasswordState} setState={setRepeatPasswordState} errorState={repeatPasswordErrorState} />
        <EnrollInputItem name='email' inputType='text' state={emailState} setState={setEmailState} errorState={emailErrorState} />
        <EnrollRadioItem name='gender' state={genderState} setState={setGenderState} errorState={genderErrorState} />


        <button className='enroll-btn-send' onClick={handleSend}><p>Send</p></button>
      </div>

    </div>
  )
}

