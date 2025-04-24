import React, { useState } from 'react';
import {
    validateEmail,
    validatePhone,
    validateFileExtension,
} from '../utils/validUtils';
import './Join.css';
import inside from '../../img/pg/inside.png';

export const Join = () => {
    const [phone, setPhone] = useState('+');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const handlePhoneChange = (e) => {
        let value = e.target.value;
        value = value.replace(/[^+\d]/g, '');
        if (value[0] !== '+') {
            value = '+' + value.replace(/\+/g, '');
        }
        if (value.length > 13) {
            value = value.slice(0, 13);
        }
        setPhone(value);
        setErrors((prev) => ({ ...prev, phone: !validatePhone(value) }));
    };

    const handleNameChange = (setter, field) => (e) => {
        let value = e.target.value;
        value = value.replace(/[^a-zA-Z]/g, '');
        if (value.length > 32) {
            value = value.slice(0, 32);
        }
        setter(value);
        setErrors((prev) => ({ ...prev, [field]: value.length < 2 }));
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        setErrors((prev) => ({ ...prev, email: !validateEmail(value) }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const fileInput = document.getElementById('cv');
        const file = fileInput.files[0];
        const allowedExtensions = ['pdf', 'docx'];

        const newErrors = {
            firstName: firstName.length < 2,
            lastName: lastName.length < 2,
            email: !validateEmail(email),
            phone: !validatePhone(phone),
            cv: !validateFileExtension(file, allowedExtensions),
        };
        setErrors(newErrors);

        if (Object.values(newErrors).some((error) => error)) {
            return;
        }

        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('+');
        fileInput.value = '';
        setSuccessMessage('Submitted!');

        setTimeout(() => {
            setSuccessMessage('');
        }, 7000);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const allowedExtensions = ['pdf', 'docx'];

        setErrors((prev) => ({
            ...prev,
            cv: !validateFileExtension(file, allowedExtensions),
        }));
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
                        <p className="contact-desc">
                            If you want to join Coffeshop family, don’t hesitate to fill out the form with your personal details and experience!
                            We will contact you for further information when we are hiring.
                        </p>
                        <form className="join-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={firstName}
                                    onChange={handleNameChange(setFirstName, 'firstName')}
                                    minLength={2}
                                    style={{
                                        borderColor: errors.firstName ? 'red' : '',
                                    }}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={lastName}
                                    onChange={handleNameChange(setLastName, 'lastName')}
                                    minLength={2}
                                    style={{
                                        borderColor: errors.lastName ? 'red' : '',
                                    }}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    style={{
                                        borderColor: errors.email ? 'red' : '',
                                    }}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={phone}
                                    onChange={handlePhoneChange}
                                    minLength={11}
                                    style={{
                                        borderColor: errors.phone ? 'red' : '',
                                    }}
                                />
                            </div>
                            <div className="form-group">
                                <label>CV</label>
                                <div className='file-group'>
                                    <input
                                        type="file"
                                        id="cv"
                                        name="cv"
                                        accept=".pdf,.docx"
                                        required
                                        onChange={handleFileChange}
                                        style={{
                                            borderColor: errors.cv ? 'red' : '',
                                        }}
                                    />
                                    {errors.cv && (
                                        <p className="error-message" style={{ color: 'red', margin: '0' }}>
                                            Only PDF or DOCX.
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div className='submit-group'>
                                <button type="submit" className="submit-button">Submit</button>
                                {successMessage && (
                                    <p className="success-message" style={{ color: 'green', marginTop: '10px' }}>
                                        {successMessage}
                                    </p>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};