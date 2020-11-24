import React, {useState} from 'react'
import axios from 'axios'
import Image from '../../images/banner.png'
import Forecast from '../Forecast'

const HomePage = () => {

    const [city, setCity] = useState('')
    const [weather, setWeather] = useState({})
    const date = new Date()
    const onChange = e => {
        setCity(e.target.value)
        console.log(city)
    }

    const onSubmit = async (e) => {
      e.preventDefault()
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=1c170ed572096092d301640dcdf63c3f`) 
        setWeather({"data" : res.data})
      
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
          <Forecast date={date} />
        </>
    )
}

export default HomePage
