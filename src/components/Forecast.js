import React from 'react'
import umbrellaIcon from '../images/icon-umberella.png'
import windIcon from '../images/icon-wind.png'
// import data from '../data/weatherdata'

const Forecast = ({date, weather}) => {
		const data = weather
         return data ? <p>Loading</p> : ( 
          <div className="forecast-table">
				<div className="container">
					<div className="forecast-container">
						<div className="today forecast">
							<div className="forecast-header">
								<div className="day">{date.toDateString()}</div>
		 			<div className="date">{date.getUTCDate()} {date.getUTCMonth()}</div>
							</div> 
							<div className="forecast-content">
								<div className="location">{data.name && data.name}</div>
								<div className="degree">
									<div className="num">{data.main.temp && (((data.main.temp - 32)*5)/9)}<sup>o</sup>C</div>
									<div className="forecast-icon">
										<img src={data.weather[0].cod && data.weather[0].cod} alt="" width="90"/>
									</div>	
								</div>
								<span><img src={umbrellaIcon} alt=""/>{data.main.humidity && data.main.humidity}%</span>
								<span><img src={windIcon} alt=""/>{data.wind.speed && data.wind.speed}km/h</span>
								<span><img src="images/icon-compass.png" alt=""/>{data.weather[0].description && data.weather[0].description}</span>
							</div>
						</div>
                    </div>
                </div>
            </div> )
           
}

export default Forecast
