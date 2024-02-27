// Dashboard.js

import styles from '../styles/pages/Dashboard.module.css';
import { useOutletContext } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Dashboard = () => {
  const { user } = useOutletContext(); // Make sure useOutletContext is correctly configured

  return (
    <>
      <Helmet>
        <title>Dashboard - Nhost</title>
      </Helmet>

      <div>
        <h2 className={styles.title}>Dashboard</h2>

        {user ? ( // Check if user object exists before accessing its properties
          <p className={styles['welcome-text']}>
            Welcome, {user?.metadata?.firstName || 'stranger'}{' '}
            <span role="img" alt="hello">
              👋
            </span>
          </p>
        ) : (
          <p className={styles['welcome-text']}>
            Loading user data...
          </p>
        )}

        <p className={styles['info-text']}>
          Edit the <code>src/pages/Dashboard.js</code> file to populate this
          page.
        </p>
      </div>
    </>
  );
};

export default Dashboard;
