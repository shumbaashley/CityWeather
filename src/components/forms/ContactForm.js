import React, {useState} from 'react'
import {sendContactForm} from '../../api'

const ContactForm = () => {

	const [formData, setFormData] = useState({
		name : '',
		email : '',
		company : '',
		subject : '',
		message : ''
	})

	const onChange = (e) => {
		setFormData({...formData, [e.target.name] : e.target.value})
	}

	const onSubmit = (e) => {
		e.preventDefault()
		sendContactForm(formData)
	}

	return (
        <div className="col-md-6 col-md-offset-1">
			<h2 className="section-title">Contact us</h2>
			<p>Please feel free to contact the persons responsible for this website via email by filling out your details on the contact form below. We will get back to you at the earliest convenience.</p>
			<form className="contact-form" onSubmit={e => onSubmit(e)}>
				<div className="row">
					<div className="col-md-6"><input name="name" type="text" placeholder="Your name..." onChange={e => onChange(e)} /></div>
					<div className="col-md-6"><input name="email" type="text" placeholder="Email Addresss..." onChange={e => onChange(e)}/></div>
				</div>
			    <div className="row">
						<div className="col-md-6"><input type="text" name="subject" placeholder="Subject..." onChange={e => onChange(e)}/></div>
					    <div className="col-md-6"><input type="text" name="company" placeholder="Company name..." onChange={e => onChange(e)}/></div>
						</div>
						<textarea name="message" placeholder="Message..." onChange={e => onChange(e)}></textarea>
						<div className="text-right">
							<input type="submit" placeholder="Send message"/>
						</div>
			</form>

		</div>
    )
}

export default ContactForm
