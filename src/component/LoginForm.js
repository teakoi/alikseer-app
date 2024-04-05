import React, { useState, useEffect } from 'react';
import SignupForm from './SignupForm';


const LoginForm = () =>{

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showSignup, setShowSignup] = useState(false);
    const [message, setMessage] = useState({ type: '', content: '' }); // State to manage the message


    const displayMessage = (type, content) => {
        setMessage({ type, content });
        setTimeout(() => setMessage({ type: '', content: '' }), 50000); // Clear the message after 50 seconds
    };

    const loginUser = () => {
        if (username.trim() === '' || password.trim() === '') {
            displayMessage('error', 'Username and password are required.');
            return;
        }

        // Make API call to fetch user data

        fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to fetch user data from API.');
                    }
                    return response.json();
                })
                .then(users => {
                    const user = users.find(user => user.username === username && user.email === password);

                    if (user) {
                        displayMessage('success', 'Login successful!');
                    } else {
                        displayMessage('error', 'Invalid username or password. Please try again.');
                    }
                })
                .catch(error => {
                    console.error('Error fetching user data:', error);
                    displayMessage('error', 'An error occurred while fetching user data. Please try again later.');
                });
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

            <form className="login-form" onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required placeholder="Enter your username" />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Enter your password" />
                </div>
                <div>
                    <button type="button" className="login-btn" onClick={loginUser}>Login</button>
                </div>
                <div>
                    <button type="button" className= "signup-btn" onClick={switchToSignup}>Switch to Signup</button>
                </div>
            </form>
        </div>

    );
}

export default LoginForm;