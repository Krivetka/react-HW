import React, {useState} from 'react';
import {getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import {useDispatch} from 'react-redux';
import {login} from '../store/authSlice';
import styles from '../styles/login.module.css';
import app from '../firebase-config.ts';
import {useNavigate} from "react-router-dom";

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
            dispatch(login({email: userCredential.user.email || ''}));
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
            dispatch(login({email: result.user.email || ''}));
            setError(null);
            navigate('/');
        } catch {
            setError(defaultErrorMessage);
        }
    };

    return (
        <div className={styles.login}>
            <h3 className={styles.login_tittle}>Log in</h3>
            <form className={styles.login_form} onSubmit={handleEmailLogin}>
                <div className="flex items-center gap-6">
                    <label className={styles.login_label} htmlFor="email">User name</label>
                    <input
                        className={styles.login_input}
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
                <div className="flex items-center gap-6 mt-6">
                    <label className={styles.login_label} htmlFor="password">Password</label>
                    <input
                        className={styles.login_input}
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
                <div className={styles.login_buttonBlock}>
                    <button type="submit" className={`${styles.login_button} ${styles.login_submit}`}>
                        Submit
                    </button>
                    <button type="reset" className={`${styles.login_button} ${styles.login_cansel}`}>
                        Cancel
                    </button>
                </div>
                <button
                    type="button"
                    onClick={handleGoogleLogin}
                    className={styles.login_google}
                >
                    Log in with Google
                </button>
                {error && <p className={styles.login_error}>{error}</p>}
            </form>
        </div>
    );
};

export default LoginPage;
