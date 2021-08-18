import React, { useEffect } from 'react';
import Heart from '../public/svg/heart.svg'
import Photo from '../public/img/photo.png'
import '../public/css/homePage.css'
import { ShowListHeader, ShowListMain, ShowListPagination } from '../components/ShowList'

export const HomePage = () => {
  return (
    <div className='wrap'>
      <div className='home'>
        <div className='home-map'></div>
        <div className='home-show-list'>
          <ShowListHeader />
          <ShowListMain />
          <ShowListPagination />
        </div>
      </div>
    </div>
  )
}

