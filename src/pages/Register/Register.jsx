
import { useContext } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name,photo,email,password);

        const formDataObject = Object.fromEntries(form.entries());
        console.log(formDataObject);


        // create user
        createUser(email,password)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.error(error)
        })
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <Navbar />
            <div className="flex flex-grow items-center justify-center">
                <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
                    <h2 className="text-3xl font-semibold text-center text-gray-700">Register</h2>
                    <form className="space-y-4" onSubmit={handleRegister}>
                        <div className="form-control">
                            <label className="label text-gray-600 font-medium">Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label text-gray-600 font-medium">Photo URL</label>
                            <input
                                type="text"
                                name="photoUrl"
                                placeholder="Enter your photo URL"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
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
                        </div>
                        <button className="btn btn-primary w-full">Register</button>
                    </form>
                    <p className="text-sm text-center text-gray-600">
                        Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
