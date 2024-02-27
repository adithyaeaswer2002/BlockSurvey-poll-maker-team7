// SignIn.js
import styles from '../styles/components/SignIn.module.css';
import { useSignInEmailPassword } from '@nhost/react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import Input from './Input';
import Spinner from './Spinner';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook

  const { signInEmailPassword, isLoading, isSuccess, isError } = useSignInEmailPassword();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInEmailPassword(email, password);
    } catch (error) {
      // Handle sign-in errors here
      console.error(error);
    }
  };

  if (isSuccess) {
    navigate('/dashboard'); // Redirect to the dashboard after successful sign-in
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles['logo-wrapper']}>
          <img src={process.env.PUBLIC_URL + 'logo.svg'} alt="logo" />
        </div>

        <form onSubmit={handleOnSubmit} className={styles.form}>
          <Input
            type="email"
            label="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className={styles.button}>
            {isLoading ? <Spinner /> : 'Sign in'}
          </button>
        </form>
      </div>

      <p className={styles.text}>
        No account yet?{' '}
        <Link to="/sign-up" className={styles.link}>
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
