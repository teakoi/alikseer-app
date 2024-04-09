import React from 'react';
import Footer from './Footer';
import Header from './Header';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const LoginPage = () =>{

    return(
        <div>
            <Header />
            <LoginForm/>
            <Footer />
        </div>
    );
}

export default LoginPage;
