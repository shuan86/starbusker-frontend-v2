import React, { useState, useEffect } from 'react';
import Heart from '../public/svg/heart.svg'
import Photo from '../public/img/photo.png'
import '../public/css/homePage.css'
import { ShowList } from '../components/ShowList'
import { GoolgeMap } from "../components/GoogoleMap";
import { MapMarkDataType, MapCenterType } from "../types/googleMapType";
import { ResPerformancesDataType } from '../types/responseType'

export const HomePage = () => {
  const [mapMarkDataState, setMapMarkDataState] = useState<MapMarkDataType[]>(null)
  const [performancePos, setPerformancePos] = useState<MapCenterType>({ lat: 25.094998132823175, lng: 121.52316423760928 })
  const [performanceData, setPerformanceData] = useState<ResPerformancesDataType>({ dataArr: [], dataAmount: 0 });

  useEffect(() => {
    const mapMarkDataArr: MapMarkDataType[] = []
    for (const data of performanceData.dataArr) {
      mapMarkDataArr.push({ lng: data.longitude, lat: data.latitude, title: data.name + " " + data.time, text: data.location })
    }
    setMapMarkDataState(mapMarkDataArr)
    return () => {
    }
  }, [performanceData])

  return (
    <div className='wrap'>
      <div className='home'>
        <div className='home-map'>
          <GoolgeMap markerArr={mapMarkDataState} center={performancePos} zoom={10} />
        </div>
        <div className='home-show-list'>
          <ShowList performanceData={performanceData} setPerformanceData={setPerformanceData} />
        </div>
      </div>
    </div>
  )
}

