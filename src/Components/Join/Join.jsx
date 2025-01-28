import React, { useState } from 'react';
import './Join.css';
import inside from '../../img/pg/inside.png';

export const Join = () => {
    const [phone, setPhone] = useState('+');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handlePhoneChange = (e) => {
        let value = e.target.value;
        value = value.replace(/[^+\d]/g, '');
        if (value[0] !== '+') {
            value = '+' + value.replace(/\+/g, '');
        }
        if (value.length > 16) {
            value = value.slice(0, 16);
        }
        setPhone(value);
    };

    const handleNameChange = (setter) => (e) => {
        let value = e.target.value;
        value = value.replace(/[^a-zA-Z]/g, '');
        if (value.length > 12) {
            value = value.slice(0, 12);
        }
        setter(value);
    };

    return (
        <section className="join-page">
            <div className="container">
                <div className="join-section">
                    <div className="contact-right">
                        <img src={inside} alt="inside" className="img" />
                    </div>
                    <div className="contact-left">
                        <h2 className="contact-heading">Join Coffeshop</h2>
                        <p className="contact-desc">If you want to join Coffeshop family, don’t hesitate to fill out the form with your personal details and experience!
                            We will contact you for further information when we are hiring.
                        </p>
                        <form className="join-form">
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={firstName}
                                    onChange={handleNameChange(setFirstName)}
                                    required
                                    minLength={2}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={lastName}
                                    onChange={handleNameChange(setLastName)}
                                    required
                                    minLength={2}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={phone}
                                    onChange={handlePhoneChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>CV</label>
                                <input type="file" id='cv' name="cv" required accept=".pdf,.docx" />
                            </div>
                            <button type="submit" className="submit-button">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}