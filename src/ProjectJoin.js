import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ProjectJoin.css'; // Import the CSS file for styling
import { Container } from 'react-bootstrap';

function ProjectJoin() {
  const navigate = useNavigate();

  // State variables to store login ID, password, and error message
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a request to your backend to authenticate the user
      const response = await axios.post("http://localhost:8000/api/auth", {
        idforlogin: loginId, // Update field name to match MongoDB
        passwordforlogin: password 
      });

      // Assuming the backend responds with the project name if credentials are correct
      const projectName = response.data.projectName;

      // Redirect to the HomePage with the project name as a parameter
      navigate(`/HomePage?projectName=${projectName}`);
      
      // Reset form fields and error state after successful submission
      setLoginId('');
      setPassword('');
      setError('');
    } catch (error) {
      // Handle authentication error
      setError('Invalid login credentials');
    }
  };

  return (
    <div className="project-join-page">
      <div className="project-join-content">
        <h2 className="project-join-title">Join Existing Project</h2>
        <form className="project-join-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="loginId">Login ID:</label>
            <input
              type="text"
              className="form-control"
              id="loginId"
              name="loginId"
              value={loginId}
              onChange={(e) => setLoginId(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <div className="alert alert-danger">{error}</div>}
          <button type="submit" className="btn btn-primary btn-block">Join Project</button>
        </form>
      </div>
      <footer className="footer">
        <Container>
          <p className="text-center">&copy; 2024 Your Company</p>
        </Container>
      </footer>
    </div>
  );
}

export default ProjectJoin;
