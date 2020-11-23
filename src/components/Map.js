import React from 'react'
import {Link} from 'react-router-dom'

const Map = () => {
    return (
        <div className="col-md-5">
			<div className="contact-details">
				<div className="map" data-latitude="-6.897789" data-longitude="107.621735"></div>
					<div className="contact-info">
					<address>
						<img src="images/icon-marker.png" alt=""/>
							<p>Company Name INC. <br/>
							2803 Avenue Street, Los Angeles</p>
						</address>
									
						<Link to="#"><img src="images/icon-phone.png" alt=""/>+1 800 314 235</Link>
						<Link to="#"><img src="images/icon-envelope.png" alt=""/>contact@companyname.com</Link>
				</div>
			</div>
		</div>
    )
}

export default Map
