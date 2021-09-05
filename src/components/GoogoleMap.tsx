import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import MarkerIcon from "../public/svg/map-marker-alt-solid.svg";
import '../public/css/googlemap.css'
import { MapMarkDataType, MapCenterType } from "../types/googleMapType";

export const GoolgeMap = ({ markerArr, center, zoom }: { markerArr: MapMarkDataType[], center: MapCenterType, zoom: number }) => {
    const [curMarkerState, setCurMarkerState] = useState<number>(-1)
    const defaultProps = {
        center: {
            lat: 25.094998132823175,
            lng: 121.52316423760928
        },
        zoom: 11
    };
    const handleApiLoaded = (map, maps) => {
        console.log('載入完成!') // 印出「載入完成」

    };
    const onChildClick = (key, childProps) => {

    }
    const onChildMouseEnter = (key) => {
        setCurMarkerState(key)
    }
    const onChildMouseLeave = (key) => {
        setCurMarkerState(null)
    }

    return (
        <div style={{ height: '100%', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: "AIzaSyDv-qTdhtRt8GnEPSNiGppH308o2oQINbU",
                    language: 'cn',
                    region: 'cn',
                    libraries: ['places']
                }}
                zoom={zoom}
                center={center}
                defaultCenter={center}
                defaultZoom={zoom}
                yesIWantToUseGoogleMapApiInternals
                onChildClick={onChildClick}
                onChildMouseEnter={onChildMouseEnter}
                onChildMouseLeave={onChildMouseLeave}
                onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
            >
                {markerArr.map((data, index) => {
                    return (
                        <Marker
                            key={index}
                            lat={data.lat}
                            lng={data.lng}
                            text={data.text}
                            isHover={curMarkerState == index}
                        />
                    )

                })}
            </GoogleMapReact>
        </div>
    )
}

const Marker = ({ text, lat, lng, isHover }: {
    lat: number
    lng: number
    text: string,
    isHover: boolean
}) => {
    const K_SIZE = 40;

    return (
        <>
            <div style={{
            }} onClick={() => {
                console.log('click');

            }}>
                {
                    isHover &&
                    <div className='google-map-marker-icon-content'>
                        {text}
                    </div>
                }
                < img src={MarkerIcon} alt='Marker' className='google-map-marker-icon' />
            </div>
        </>


    )
};