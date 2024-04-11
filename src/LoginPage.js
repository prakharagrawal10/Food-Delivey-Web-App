import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Add your login/signup logic here
        console.log('Email:', email);
        console.log('Password:', password);
    };

    const toggleLoginSignup = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="login-page">
            <h1 className="login-heading">{isLogin ? 'Login' : 'Sign Up'}</h1>
            <form className="login-form" onSubmit={handleFormSubmit}>
                <input
                    className="login-form-input"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                />
                <input
                    className="login-form-input"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                />
                <button className="login-form-button" type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
            </form>
            <p className="error-message" onClick={toggleLoginSignup}>
                {isLogin ? 'Don\'t have an account? Sign up' : 'Already have an account? Login'}
            </p>
        </div>
    );
};

export default LoginPage;
