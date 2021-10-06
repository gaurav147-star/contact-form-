import React from 'react'
import './App.css';
const ContactForm = () => {
    return (
        <div>
            <form className="f">
                <div className="form-row m-4">
                    <div className="col">
                        <h1 className='text-center'>React Contact Form</h1>
                    </div>

                </div>
                <div className="form-row m-4">
                    <div className="col">
                        <input type="text" className="form-control py-3" placeholder="First name" required/>
                    </div>
                    <div className="col">
                        <input type="text" className="form-control py-3" placeholder="Last name" required/>
                    </div>
                </div>
                <div className="form-row m-4">
                    <div className="col">
                        <input type="email" className="form-control py-3" placeholder="Enter your email" required/>
                    </div>

                </div>
                <div className="form-row m-4">
                    <div className="col">
                        <textarea className="form-control py-3" rows="5" id="comment" placeholder="Enter your message" required></textarea>
                    </div>
                </div>
                <div className="form-row m-4">
                    <div className="col">
                        <button type="button" className="btn btn-dark py-2  px-5">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ContactForm
