import React, { useState, useEffect } from 'react';
import '../public/css/donateResultPage.css'
import { useQuery } from "../hooks/useQuery";
import pinkyPromise from '../public/svg/pinky-promise.svg'

export const DonateResultPage = () => {
  const query = useQuery();
  const [donateResultState, setDonateResultState] = useState<boolean>(false)
  const [donateAmountState, setDonateAmountState] = useState<number>(0)
  const [buskerNameState, setBuskerNameState] = useState<string>('')

  useEffect(() => {
    const donateResult = Boolean(query.get('donateResult'))
    const donateAmount = Number(query.get('donateAmount'))
    const buskerName = query.get('name')
    setDonateResultState(donateResult)
    setDonateAmountState(pre => donateResult && donateResult == true ? donateAmount : pre)
    setBuskerNameState(pre => donateResult && donateResult == true ? buskerName : pre)

    window.close()
  }, [query])

  return (
    <div className='wrap'>
      <div className="donate-result-page" >
        {

          donateResultState ?
            <>
              <div className="donate-result-page-sucessful-donate">
                <img src={pinkyPromise} alt="" />
                <p>已打賞成功:{donateAmountState}元</p>
              </div>
              <div className="donate-result-page-sucessful-donate-msg">
                <p> 感謝您對{buskerNameState}的表演支持</p>
              </div>
            </>
            :
            <>
              <div>
                <h1>打賞失敗</h1>
              </div>

            </>

        }
      </div>
    </div >
  )
}

