import React, { useState } from 'react'
import Alert from './Alert';
import './App.css';
const ContactForm = (props) => {

   
    const [alert, setAlert] = useState(null);
    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null);
        }, 1500)
    }
    const [user, setUser] = useState({
        Fname: "",
        Lname: "",
        email: "",
        message: "",
    });

    let name, value;
    const getUserData = (event) => {
        name = event.target.name;
        value = event.target.value;
        setUser({ ...user, [name]: value })
    };

    const postData = async (e) => {
        e.preventDefault();
        const {
            Fname,
            Lname,
            email,
            message,
        } = user;
        if (Fname && Lname && email && message) {
            const res = await fetch(`${props.url}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    Fname,
                    Lname,
                    email,
                    message,
                }),
            });
            if (res) {
                setUser({
                    Fname: "",
                    Lname: "",
                    email: "",
                    message: "",
                });
                showAlert("Thanks", "success");
            }
        } else {
            showAlert("Please Fill the form", "danger");
        }
    };

    return (
        <>
            <Alert alert={alert} />
            <form className="f" method="POST">
                <div className="form-row m-3">
                    <div className="col">
                        <h1 className='text-center'>React Contact Form</h1>
                    </div>

                </div>
                <div className="form-row m-4">
                    <div className="col">
                        <input type="text" className="form-control py-3" name="Fname" placeholder="First name" value={user.Fname} onChange={getUserData} autoComplete="off" required />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control py-3" name="Lname" placeholder="Last name" value={user.Lname} onChange={getUserData} autoComplete="off" required />
                    </div>
                </div>
                <div className="form-row m-4">
                    <div className="col">
                        <input type="email" className="form-control py-3" name="email" placeholder="Enter your email" value={user.email} onChange={getUserData} autoComplete="off" required />
                    </div>

                </div>
                <div className="form-row m-4">
                    <div className="col">
                        <textarea className="form-control py-3" rows="5" id="comment" name="message" placeholder="Enter your message" value={user.message} onChange={getUserData} autoComplete="off" required></textarea>
                    </div>
                </div>
                <div className="form-row m-4">
                    <div className="col">
                        <button type="submit" className="btn btn-dark py-2  px-5" onClick={postData}>Submit</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default ContactForm
