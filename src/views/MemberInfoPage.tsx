import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from "react-redux";
import { storeTypes } from "../store/store";
import { path } from '../modules/routerPath'
import defaultAvatar from '../public/img/busker-info-default-photo.png'
import { getMemberInfo, putMemberInfo, parseAvatarImage } from "../modules/member";
import { MemberType, UpdateMemberInfoType } from "../types/memberType";
import { ResponseType } from "../types/responseType";
import { BuskerInputTitle, BuskerInputBox, BuskerInputLogin, BuskerInputBtn } from '../components/BuskerInput';
import { MemberSidebar } from '../components/MemberSidebar'
import '../public/css/memberInfoPage.css'
import { setMemberAction } from "../reducers/member";
import { LoginModeEnum } from "../types/memberType";


export const MemberInfoPage = () => {
    const [fechDataErrorState, setFechDataErrorState] = useState<string>('');
    const [submitResultErrorState, setSubmitResultErrorState] = useState<string>('');
    const [memberName, setMemberName] = useState<string>('謝孟迪');
    const [memberNameErrorState, setMemberNameErrorState] = useState<string>('');
    const [memberAccount, setMemberAccount] = useState<string>('account');
    const [memberEmail, setMemberEmail] = useState<string>('account@gmail.com');
    const [memberEmailErrorState, setMemberEmailErrorState] = useState<string>('');
    const [memberExp, setMemberExp] = useState<number>(0);
    const [memberMale, setMemberMale] = useState<boolean>(true);
    const [avatarState, setAvatarState] = useState<File>(null)
    const [avatarPreviewState, setAvatarPreviewState] = useState(null)
    const [avatarErrorState, setAvatarErrorState] = useState<string>('')
    const history = useHistory()
    const memberData = useSelector((s: storeTypes) => s.memberReducer);

    const dispatch = useDispatch()
    const fetchData = async () => {
        const result: ResponseType = await getMemberInfo();
        console.log(result.status);
        result.data = JSON.stringify(result.data);
        let memberData: MemberType
        let error = ''
        if (result.status == 200) {
            memberData = JSON.parse(result.data);
        } else if (result.status == 400 || result.status == 401) {
            history.push(path.login)
            error = `Error:${result.status} failed to get member info、you aren't member `;
            return
        } else if (result.status == 501) {
            history.push(path.login)
            error = `Error:${result.status} failed to get member info、you aren't member `;
            return
        } else {
            error = `unknown error`;
        }
        setFechDataErrorState(error);
        setMemberName(memberData.name);
        setMemberAccount(memberData.account);
        setMemberEmail(memberData.email);
        setMemberMale(memberData.male);
        setAvatarPreviewState(parseAvatarImage(memberData.avatar));
        setMemberExp(memberData.exp)
        return memberData
    }
    useEffect(() => {
        fetchData()
    }, [])

    const onClickSubmit = async () => {
        let regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        let nameError = ''
        let emailError = ''
        let passwordError = ''
        let submitResultError
        let result
        if (memberName.length > 20 || memberName.length < 3) {
            nameError = '輸入內容需長度需大於2個字，小於20個字'
        }
        else if (!regex.test(memberEmail)) {
            emailError = '請輸入正確的email格式'
        }
        else {
            if (memberData.loginMode == LoginModeEnum.local)
                result = await putMemberInfo({ name: memberName, email: memberEmail, avatar: avatarState })

        }
        result.status == 200 ? alert('update sucessful') : alert('update fail')

        if (result.status == 200) {
            const memberData: MemberType = result.data as MemberType
            dispatch(setMemberAction(memberData))
            submitResultError = ''
        } else if (result.status == 400 || result.status == 401) {
            submitResultError = `Error:${result.status} failed to get member info、you aren't member `;
            return
        } else if (result.status == 500) {
            submitResultError = `Error:${result.status} server is busying `;
            return
        } else {
            submitResultError = `unknown error`;
        }
        setSubmitResultErrorState(submitResultError);
        setMemberNameErrorState(nameError);
        setMemberEmailErrorState(emailError);

    }
    const onClickUpdateImage = (e: React.FormEvent<HTMLInputElement>) => {
        const reader = new FileReader()
        reader.readAsDataURL(e.currentTarget.files[0])
        reader.onload = () => {
            if (reader.readyState == 2) {
                setAvatarPreviewState(reader.result)
            }
        }
        setAvatarState(e.currentTarget.files[0])

    }
    return (
        <div className='wrap'>
            <div className='member-info'>
                <BuskerInputTitle title='個人設定' />
                <div className='member-info-group'>
                    <MemberSidebar />
                    <div className='member-info-account'>
                        <div className='member-info-account-title'>基本資料</div>
                        <div className='member-info-account-group'>
                            <div className='member-info-account-photo'>
                                <div>
                                    <img src={avatarPreviewState}
                                        alt='Photo' style={{ height: "60px", width: "60px" }}
                                        className='member-info-account-photo-photo'
                                    />

                                    {/* <img src={avatarPreviewState == '' || null ? defaultAvatar : avatarPreviewState} alt='Photo' className='member-info-account-photo-photo' /> */}
                                </div>
                                <div >
                                    {memberData.loginMode == LoginModeEnum.local && <label className="member-info-account-photo-btn" htmlFor="avatar">
                                        更改頭像
                                    </label>}
                                </div>
                                {memberData.loginMode == LoginModeEnum.local && <input type="file" accept="image/*" name="image-upload" id="avatar" onChange={onClickUpdateImage} className='member-info-avatar' />}
                            </div>
                            <div className='member-info-account-data'>
                                {/* {name, inputType, state, setState, errorState} */}
                                <BuskerInputBox name='name' title='姓名' inputType='text' needDisabled={memberData.loginMode != LoginModeEnum.local} state={memberName} setState={setMemberName} errorState={memberNameErrorState} />
                                <BuskerInputBox name='account' title='帳號' inputType='text' needDisabled={memberData.loginMode != LoginModeEnum.local} state={memberAccount} setState={setMemberAccount} errorState='' />
                                <BuskerInputBox name='email' title='電子信箱' inputType='email' needDisabled={memberData.loginMode != LoginModeEnum.local} state={memberEmail} setState={setMemberEmail} errorState={memberEmailErrorState} />
                                <BuskerInputLogin />
                                {memberData.loginMode == LoginModeEnum.local && <BuskerInputBtn title='確認修改' onClick={onClickSubmit} />}
                                <div>{submitResultErrorState}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

