import React from 'react'

const ContactForm = () => {
    return (
        <div className="col-md-6 col-md-offset-1">
			<h2 className="section-title">Contact us</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consectetur inventore ducimus, facilis, numquam id soluta omnis eius recusandae nesciunt vero repellat harum cum. Nisi facilis odit hic, ipsum sed!</p>
			<form className="contact-form">
				<div className="row">
					<div className="col-md-6"><input type="text" placeholder="Your name..."/></div>
					<div className="col-md-6"><input type="text" placeholder="Email Addresss..."/></div>
				</div>
			    <div className="row">
				    <div className="col-md-6"><input type="text" placeholder="Company name..."/></div>
						<div className="col-md-6"><input type="text" placeholder="Website..."/></div>
						</div>
						<textarea name="" placeholder="Message..."></textarea>
						<div className="text-right">
							<input type="submit" placeholder="Send message"/>
						</div>
			</form>

		</div>
    )
}

export default ContactForm
