import React, { useState } from 'react';
import {
    getAuth,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
} from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { login } from '../store/authSlice';
import app from '../firebase-config.ts';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
    const auth = getAuth(app);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);

    const defaultErrorMessage = 'Invalid email or password';

    const handleEmailLogin = async (event: React.FormEvent): Promise<void> => {
        event.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            dispatch(login({ email: userCredential.user.email || '' }));
            setError(null);
            navigate('/');
        } catch {
            setError(defaultErrorMessage);
        }
    };

    const handleGoogleLogin = async (): Promise<void> => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            dispatch(login({ email: result.user.email || '' }));
            setError(null);
            navigate('/');
        } catch {
            setError(defaultErrorMessage);
        }
    };

    const reset = () =>{
        setEmail('')
        setPassword('')
    }

    return (
        <div className="flex flex-col items-center justify-center w-full min-h-[64vh] bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <h3 className="text-teal-500 dark:text-teal-400 text-5xl font-normal tracking-wide mb-6">
                Log in
            </h3>
            <form
                className="flex flex-col items-center justify-center gap-6 p-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-md"
                onSubmit={handleEmailLogin}
            >
                <div className="flex items-center gap-6">
                    <label
                        htmlFor="email"
                        className="w-24 text-gray-700 dark:text-gray-300 text-base font-medium"
                    >
                        User name
                    </label>
                    <input
                        className="w-96 h-12 px-4 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none"
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            setError(null);
                        }}
                    />
                </div>
                <div className="flex items-center gap-6 mt-4">
                    <label
                        htmlFor="password"
                        className="w-24 text-gray-700 dark:text-gray-300 text-base font-medium"
                    >
                        Password
                    </label>
                    <input
                        className="w-96 h-12 px-4 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none"
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            setError(null);
                        }}
                    />
                </div>
                <div className="flex gap-8 mt-6">
                    <button
                        type="submit"
                        className="w-36 h-12 bg-teal-500 dark:bg-teal-400 text-white dark:text-gray-900 rounded-md shadow-md hover:bg-teal-600 dark:hover:bg-teal-500 transition-colors duration-300"
                    >
                        Submit
                    </button>
                    <button
                        type="reset"
                        onClick={reset}
                        className="w-36 h-12 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md shadow-md border border-gray-300 dark:border-gray-600 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
                    >
                        Cancel
                    </button>
                </div>
                <button
                    type="button"
                    onClick={handleGoogleLogin}
                    className="flex items-center justify-center gap-4 w-80 h-12 bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md shadow-md border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-300"
                >
                    <img
                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4="
                        alt="Google"
                        className="w-6 h-6"
                    />
                    Log in with Google
                </button>
                {error && (
                    <p className="text-red-500 dark:text-red-400 text-sm font-medium mt-4">
                        {error}
                    </p>
                )}
            </form>
        </div>
    );
};

export default LoginPage;
