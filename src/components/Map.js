import React from 'react'
import {Link} from 'react-router-dom'
import markerImage from "../images/icon-marker.png"
import phoneImage from "../images/icon-phone.png"
import emailImage from "../images/icon-envelope.png"

const Map = () => {
    return (
        <div className="col-md-5">
			<div className="contact-details">
				<div className="map" data-latitude="-18.912220" data-longitude="29.851489"></div>
					<div className="contact-info">
					<address>
						<img src={markerImage} alt=""/>
							<p>City Weather Pvt Ltd <br/>
							2952/13 Mbizo Kwekwe</p>
						</address>
						<Link to="#"><img src={phoneImage} alt=""/>+263 787 382 522</Link>
						<Link to="#"><img src={emailImage} alt=""/>ashleytshumba@gmail.com</Link>
				</div>
			</div>
		</div>
    )
}

export default Map
