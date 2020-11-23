import React from 'react'

const Hero = () => {
    return (
        <div className="hero" data-bg-image="images/banner.png" style={{"background-image": "url(images/banner.png)"}}>
				<div className="container">
					<form className="find-location">
						<input type="text" placeholder="Find your location..."/>
						<input type="submit" value="Find"/>
					</form>

				</div>
			</div>
    )
}

export default Hero
