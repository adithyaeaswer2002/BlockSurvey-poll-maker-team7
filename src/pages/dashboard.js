import { useState } from 'react';
import styles from '../styles/pages/Dashboard.module.css';
import { useOutletContext } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Dashboard = () => {
  const { user } = useOutletContext(); // Make sure useOutletContext is correctly configured
  const [pollCreated, setPollCreated] = useState(false); // State to track whether a poll is created

  // Function to handle the click event of the button
  const handleCreatePoll = () => {
    // Your logic to create a new poll goes here
    // For now, let's just update the state to simulate creating a new poll
    setPollCreated(true);
  };

  return (
    <div className="dashboard">
      <Helmet>
        <title>Dashboard - Nhost</title>
      </Helmet>
      <div className="message">
        <p>Your dashboard is currently {pollCreated ? 'populated with a new poll.' : 'empty.'}</p>
        {/* Render the button conditionally based on whether a poll is created */}
        {!pollCreated && <button onClick={handleCreatePoll}>+ Create New Poll</button>}
      </div>
    </div>
  );
};

export default Dashboard;
