import React from 'react'
import ContactForm from '../forms/ContactForm'
import Map from '../Map'
import {Link} from 'react-router-dom'


const ContactPage = () => {
    return (
        <div>
            <main className="main-content">
				<div className="container">
					<div className="breadcrumb">
						<Link to="/">Home</Link>
						<span>Contact</span>
					</div>
				</div>

				<div className="fullwidth-block">
					<div className="container">
                        <Map/>
						<ContactForm/>
					</div>
				</div>
				
			</main>
        </div>
    )
}

export default ContactPage
