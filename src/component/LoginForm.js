import React, { useState, useEffect } from 'react';
import SignupForm from './SignupForm';
import { useNavigate } from 'react-router-dom';


const LoginForm = () =>{

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showSignup, setShowSignup] = useState(false);
    const [message, setMessage] = useState({ type: '', content: '' }); // State to manage the message
    const navigate = useNavigate();

    const handleSubmit = async (e)=>{
        e.preventDefault()

        if (username.trim() === '' || password.trim() === '') {
            displayMessage('error', 'Username and password are required.');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/api/Login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                setMessage({ type: 'success', content: 'Authentication successful' });
                console.log('success')
                navigate('/Productpage'); // Redirect to Productpage after successful authentication
                console.log('navigated')
            } else {
                setMessage({ type: 'error', content: 'Authentication failed. Incorrect username or password.' });
            }
        } catch (error) {
            console.error('Error occurred during authentication:', error);
            setMessage({ type: 'error', content: 'Authentication failed. Please try again.' });
        }
    };
    
    const displayMessage = (type, content) => {
        setMessage({ type, content });
        setTimeout(() => setMessage({ type: '', content: '' }), 50000); // Clear the message after 50 seconds
    };




    const switchToSignup = () => {
        setShowSignup(true); // Show SignupForm component
    };

    if (showSignup) {
        return <SignupForm />;
    }

    return(
        <div>
            <h2>Login</h2>
            {/* Display message if it exists */}
            {message.content && (
                <div className={`message-box ${message.type}`}>
                    <p>{message.content}</p>
                </div>
            )}

            <form className="login-form" onSubmit={handleSubmit} noValidate>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required placeholder="Enter your username" />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Enter your password" />
                </div>
                <div>
                    <button type="submit" className="login-btn">Login</button>
                </div>
                <div>
                    <button type="button" className= "signup-btn" onClick={switchToSignup}>Switch to Signup</button>
                </div>
            </form>
        </div>

    );
}

export default LoginForm;