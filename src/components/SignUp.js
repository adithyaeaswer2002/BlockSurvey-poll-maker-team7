import styles from '../styles/components/SignUp.module.css';
import { useSignUpEmailPassword } from '@nhost/react';
import { useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import Input from './Input';
import Spinner from './Spinner';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook
 
  const { signUpEmailPassword , isLoading, isSuccess, needsEmailVerification, isError, error } = useSignUpEmailPassword();

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    signUpEmailPassword(email, password, {
      displayName: `${firstName} ${lastName}`.trim(),
      metadata: {
        firstName,
        lastName
      }
    });
  };

  if (isSuccess) {
    navigate('./dashboard');

  }
   
  const disableForm = isLoading || needsEmailVerification;

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles['logo-wrapper']}>
          <img src={process.env.PUBLIC_URL + 'logo.svg'} alt="logo" />
        </div>

        {needsEmailVerification ? (
          <p className={styles['verification-text']}>
            Please check your mailbox
          </p>
        ) : (
          <form onSubmit={handleOnSubmit} className={styles.form}>
            <div className={styles['input-group']}>
              <Input
                label="First name"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                required
              />
              <Input
                label="Last name"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
                required
              />
            </div>
            <Input
              type="email"
              label="Email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <Input
              type="password"
              label="Create password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />

            <button type="submit" className={styles.button}>
              Create account
            </button>
          </form>
        )}
      </div>

      <p className={styles.text}>
        Already have an account?{' '}
        <Link to="/sign-in" className={styles.link}>
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
