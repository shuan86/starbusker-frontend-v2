import React, { useState, useEffect } from 'react';
import Photo from '../public/img/busker-info-photo.png'
import '../public/css/buskerInfoPage.css'
import { getMemberInfo, putMemberInfo } from "../modules/member";
import { MemberType } from "../types/memberType";
import { BuskerInputTitle, BuskerInputBox, BuskerInputLogin, BuskerInputBtn } from '../components/BuskerInput';
import { MemberSidebar } from '../components/MemberSidebar'


export const MemberInfoPage = () => {
    const [memberName, setMemberName] = useState<string>('謝孟迪');
    const [memberAccount, setMemberAccount] = useState<string>('account');
    const [memberEmail, setMemberEmail] = useState<string>('account@gmail.com');
    const [memberPasswordFirst, setMemberPasswordFirst] = useState<string>('123456');
    const [memberPasswordSecond, setMemberPasswordSecond] = useState<string>('123456');
    const [memberExp, setMemberExp] = useState<number>(0);
    const [memberAvatar, setMemberAvatar] = useState<string>('');
    const [memberMale, setMemberMale] = useState<boolean>(true);
    useEffect(() => {
        const fetchData = async () => {
            const result = await getMemberInfo();
            result.data = JSON.stringify(result.data);
            const memberData: MemberType = JSON.parse(result.data);
            setMemberName(memberData.name);
            setMemberAccount(memberData.account);
            setMemberEmail(memberData.email);
            setMemberMale(memberData.male);
            setMemberAvatar(memberData.avatar);
            setMemberExp(memberData.exp)
            return memberData
        }
        fetchData();
    }, [])

    const onClickSubmit = () => {

    }

    return (
        <div className='wrap'>
            <div className='busker-info'>
                <BuskerInputTitle title='個人設定' />
                <div className='busker-info-group'>
                    <MemberSidebar />
                    <div className='busker-info-account'>
                        <div className='busker-info-account-title'>基本資料</div>
                        <div className='busker-info-account-group'>
                            <div className='busker-info-account-photo'>
                                <img src={Photo} alt='Photo' className='busker-info-account-photo-photo' />
                                <button className='busker-info-account-photo-btn'>更改頭像</button>
                            </div>
                            <div className='busker-info-account-data'>
                                {/* {name, inputType, state, setState, errorState} */}
                                <BuskerInputBox name='姓名' inputType='text' state={memberName} setState={setMemberName} errorState='' />
                                <BuskerInputBox name='帳號' inputType='text' state={memberAccount} setState={setMemberAccount} errorState='' />
                                <BuskerInputBox name='電子信箱' inputType='email' state={memberEmail} setState={setMemberEmail} errorState='' />
                                <BuskerInputBox name='密碼' inputType='password' state={memberPasswordFirst} setState={setMemberPasswordFirst} errorState='' />
                                <BuskerInputBox name='再次輸入密碼' inputType='password' state={memberPasswordSecond} setState={setMemberPasswordSecond} errorState='' />

                                <BuskerInputLogin />
                                <BuskerInputBtn title='確認修改' onClick={onClickSubmit} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

