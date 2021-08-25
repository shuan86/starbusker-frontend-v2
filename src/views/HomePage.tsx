import React, { useState, useEffect } from 'react';
import Heart from '../public/svg/heart.svg'
import Photo from '../public/img/photo.png'
import '../public/css/homePage.css'
import { ShowList } from '../components/ShowList'

export const HomePage = () => {
  return (
    <div className='wrap'>
      <div className='home'>
        <div className='home-map'></div>
        <div className='home-show-list'>
          <ShowList />
        </div>
      </div>
    </div>
  )
}

