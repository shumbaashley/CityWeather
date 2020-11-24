import React from 'react'
import {Link} from 'react-router-dom'
const Footer = () => {
    return (
        <footer className="site-footer">
				<div className="container">
					<div className="row">
						<div className="col-md-8">
							
						</div>
						<div className="col-md-3 col-md-offset-1">
							<div className="social-links">
								<Link to="https://facebook.com/ashleyt.shumba"><i className="fa fa-facebook"></i></Link>
								<Link to="https://twitter.com/shumba_ashley"><i className="fa fa-twitter"></i></Link>
								<Link to="https://instagram.com/shumbaashley"><i className="fa fa-instagram"></i></Link>
								<Link to="https://github.com/shumbaashley/cityweather"><i className="fa fa-github"></i></Link>
							</div>
						</div>
					</div>

					<p className="colophon">Copyright &copy; City Weather. All rights reserved</p>
				</div>
			</footer> 
    )
}

export default Footer
