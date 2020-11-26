import React, {useEffect, useState} from 'react'
import Image from '../../images/banner.png'
import Forecast from '../Forecast'
// import data from '../../data/ipdata'
import  {getLocationFromIP, getCityWeatherData} from '../../api'

const HomePage = () => {

    const [city, setCity] = useState('')
    const [weather, setWeather] = useState({})

    const date = new Date()
    

    useEffect(() => {
      const {region_name} =  getLocationFromIP()
      console.log(region_name)
      setWeather(getCityWeatherData(region_name))
    }, [])

    const onChange = e => {
        setCity(e.target.value)
        console.log(city)
    }

    const onSubmit = async (e) => {
      e.preventDefault()
        setWeather(getCityWeatherData(city))
        console.log(weather) 

    }
    return (
        <>
          <div className="hero" data-bg-image="images/banner.png" style={{backgroundImage: `url(${Image})`}}>
            <div className="container">
              <form className="find-location" onSubmit={e => onSubmit(e)}>
                <input onChange={e => onChange(e)} type="text" placeholder="Find your location..."/>
                <input type="submit" value="Find"/>
              </form >

            </div>
          </div> 
          <Forecast date={date} weather={weather} />
        </>
    )
}

export default HomePage
