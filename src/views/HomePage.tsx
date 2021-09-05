import React, { useState, useEffect } from 'react';
import Heart from '../public/svg/heart.svg'
import Photo from '../public/img/photo.png'
import '../public/css/homePage.css'
import { ShowList } from '../components/ShowList'
import { GoolgeMap } from "../components/GoogoleMap";
import { MapMarkDataType, MapCenterType } from "../types/googleMapType";
export const HomePage = () => {
  const [mapMarkDataState, setMapMarkDataState] = useState<Array<MapMarkDataType>>([{ lng: 121.52316423760928, lat: 25.094998132823175, text: 'test' }])
  const [performancePos, setPerformancePos] = useState<MapCenterType>({ lat: 25.094998132823175, lng: 121.52316423760928 })

  return (
    <div className='wrap'>
      <div className='home'>
        <div className='home-map'>
          <GoolgeMap markerArr={mapMarkDataState} center={performancePos} zoom={15} />
        </div>
        <div className='home-show-list'>
          <ShowList />
        </div>
      </div>
    </div>
  )
}

