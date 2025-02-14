import React, { useContext } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext); // Fixed typo

    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        console.log('Email:', email, 'Password:', password);

        signIn(email, password)
            .then((result) => {
                console.log('User logged in:', result.user);
            })
            .catch((error) => {
                console.error('Login error:', error);
            });
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <Navbar />
            <div className="flex flex-grow items-center justify-center">
                <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
                    <h2 className="text-3xl font-semibold text-center text-gray-700">Login</h2>
                    <form className="space-y-4" onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label text-gray-600 font-medium">Email</label>
                            <input 
                                type="email" 
                                name="email"
                                placeholder="Enter your email" 
                                className="input input-bordered w-full" 
                                required 
                            />
                        </div>
                        <div className="form-control">
                            <label className="label text-gray-600 font-medium">Password</label>
                            <input 
                                type="password" 
                                name="password"
                                placeholder="Enter your password" 
                                className="input input-bordered w-full" 
                                required 
                            />
                            <div className="text-right mt-2">
                                <a href="#" className="text-sm text-blue-500 hover:underline">Forgot password?</a>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary w-full">Login</button>
                    </form>
                    <p className="text-sm text-center text-gray-600">
                        Don't have an account? <Link to="/register" className="text-blue-500 hover:underline">Register</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
