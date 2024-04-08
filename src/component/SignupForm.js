import React, { useState } from 'react';
import LoginForm from './LoginForm';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [showLogin, setShowLogin] = useState(false); // State to control the display of the LoginForm
    const [message, setMessage] = useState({ type: '', content: '' }); // State to manage the message
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (username.trim() === '' || password.trim() === '' || confirmPassword.trim() === '' || email.trim() === '') {
            displayMessage('error', 'All fields are required.');
            return;
        }

        if (password !== confirmPassword) {
            displayMessage('error', 'Password and Confirm Password do not match.');
            return;
        }
        if (email && email.trim() !== '' && !isValidEmail(email)) {
            displayMessage('error', 'Invalid email format');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/api/SignupForm', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password, email })
            });
    
            if (!response.ok) {
                const data = await response.json();
                displayMessage('error', data.error || 'Signup failed.');
                return;
            }
    
            displayMessage('success', 'Signup successful!');
            console.log('success')
            //navigate('/Productpage'); // commented out bc gif doesnt have the redirect after signup
            //console.log('navigated') 
        } catch (error) {
            displayMessage('error', 'Something went wrong. Please try again later.');
        }
    };

    const displayMessage = (type, content) => {
        setMessage({ type, content });
        setTimeout(() => setMessage({ type: '', content: '' }), 50000); // Clear the message after 50 seconds
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const switchToLogin = () => {
        setShowLogin(true); // Show LoginForm component
    };

    if (showLogin) {
        return <LoginForm />;
    }

    return (
        <div>
            <h2>Signup</h2>
            {/* Display message if it exists */}
            {message.content && (
                <div className={`message-box ${message.type}`}>
                    <p>{message.content}</p>
                </div>
            )}
            <form className="signup-form" onSubmit={handleSubmit} noValidate>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter your username" />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm your password" />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />

                </div>
                <div>
                    <button type="submit" className="submit-btn">Submit</button>
                </div>
                <div>
                    <button type="button" onClick={switchToLogin}>Switch to Login</button>
                </div>
            </form>
        </div>
    );
};

export default SignupForm