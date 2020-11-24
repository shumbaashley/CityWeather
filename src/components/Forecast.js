import React from 'react'
import umbrellaIcon from '../images/icon-umberella.png'
import windIcon from '../images/icon-wind.png'
import data from '../data'

const Forecast = () => {
    console.log(data)
         return ( 
          <div className="forecast-table">
				<div className="container">
					<div className="forecast-container">
						<div className="today forecast">
							<div className="forecast-header">
								<div className="day">Monday</div>
								<div className="date">6 Oct</div>
							</div> 
							<div className="forecast-content">
								<div className="location">{data.name}</div>
								<div className="degree">
									<div className="num">{data.main.temp}<sup>o</sup>C</div>
									<div className="forecast-icon">
										<img src={data.weather[0].cod} alt="" width="90"/>
									</div>	
								</div>
								<span><img src={umbrellaIcon} alt=""/>{}%</span>
								<span><img src={windIcon} alt=""/>{data.wind.speed}km/h</span>
								<span><img src="images/icon-compass.png" alt=""/>{data.weather[0].description}</span>
							</div>
						</div>
                    </div>
                </div>
            </div> )
           
}

export default Forecast
