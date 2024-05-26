import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container, Navbar, Nav, Button, Card, Row, Col } from 'react-bootstrap'; // Import Bootstrap components
import { FaUser, FaTasks, FaFileAlt, FaUsers, FaComments, FaClipboardList, FaSignOutAlt } from 'react-icons/fa'; // Importing icons
import './HomePage.css';

function HomePage() {
  const location = useLocation();
  const projectName = new URLSearchParams(location.search).get('projectName');
  
  // Sample project data
  const projectData = {
    overview: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec mauris quis enim fermentum vestibulum. 
    Proin at nisi vel libero rhoncus aliquam nec eu ipsum. Donec aliquet tincidunt mauris quis vestibulum. `,
    features: [
      {
        title: 'Task Management',
        description: 'Manage tasks, assign them to team members, and track progress.'
      },
      {
        title: 'Document Sharing',
        description: 'Share documents securely within the project team.'
      },
      {
        title: 'User Management',
        description: 'Manage project users and their roles.'
      },
      {
        title: 'Discussion Forum',
        description: 'Collaborate with team members through a dedicated discussion forum.'
      }
    ],
    benefits: [
      'Increased productivity through streamlined task management.',
      'Improved collaboration with centralized document sharing.',
      'Efficient user management for better project organization.',
      'Enhanced communication and idea exchange with the discussion forum.'
    ],
    testimonials: [
      {
        name: 'John Doe',
        role: 'Project Manager',
        comment: 'This project management tool has greatly improved our team\'s productivity and collaboration. Highly recommended!'
      },
      {
        name: 'Jane Smith',
        role: 'Software Developer',
        comment: 'As a developer, I find the task management features of this tool extremely helpful. It keeps us organized and on track.'
      }
    ],
    goals: [
      'Streamline project management processes.',
      'Enhance team collaboration and communication.',
      'Improve productivity and efficiency in task execution.',
      'Ensure transparency and accountability within the project team.'
    ],
    milestones: [
      'Launch initial version of the project management tool.',
      'Onboard first set of project teams and gather feedback.',
      'Implement additional features based on user feedback.',
      'Scale the tool to accommodate larger project teams and more complex projects.'
    ],
    contactInfo: {
      email: 'contact@example.com',
      phone: '+1 (123) 456-7890',
      address: '123 Main Street, City, Country'
    }
  };

  const handleLogout = () => {
    window.location.href = '/LandingPage'; // Redirect to the landing page
  };

  return (
    <div className="home-page">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Project: {projectName}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to={`/HomePage?projectName=${projectName}`} className="nav-link"><FaUser /> Home</Link>
              <Link to={`/Dashboard?projectName=${projectName}`} className="nav-link"><FaClipboardList /> Meet</Link>
              <Link to={`/Tasks?projectName=${projectName}`} className="nav-link"><FaTasks /> Tasks</Link>
              <Link to={`/Documents?projectName=${projectName}`} className="nav-link"><FaFileAlt /> Documents</Link>
              <Link to={`/Users?projectName=${projectName}`} className="nav-link"><FaUsers /> Users</Link>
              <Link to={`/Discussion?projectName=${projectName}`} className="nav-link"><FaComments /> Discussion</Link>
              <Link to={`/Agile?projectName=${projectName}`} className="nav-link"><FaClipboardList /> Agile</Link>
            </Nav>
            <Button variant="outline-light" onClick={handleLogout}><FaSignOutAlt /> Logout</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <h2 className="mb-4">Project Overview</h2>
        <p>{projectData.overview}</p>

        <h2 className="mb-4">Key Features</h2>
        <Row>
          {projectData.features.map((feature, index) => (
            <Col key={index} md={6} lg={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{feature.title}</Card.Title>
                  <Card.Text>{feature.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <h2 className="mb-4">Benefits</h2>
        <ul>
          {projectData.benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>

        <h2 className="mb-4">Testimonials</h2>
        <Row>
          {projectData.testimonials.map((testimonial, index) => (
            <Col key={index} md={6} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Text>{testimonial.comment}</Card.Text>
                  <Card.Subtitle className="mb-2 text-muted">{testimonial.name}</Card.Subtitle>
                  <Card.Text>{testimonial.role}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <h2 className="mb-4">Project Goals</h2>
        <ul>
          {projectData.goals.map((goal, index) => (
            <li key={index}>{goal}</li>
          ))}
        </ul>

        <h2 className="mb-4">Upcoming Milestones</h2>
        <ol>
          {projectData.milestones.map((milestone, index) => (
            <li key={index}>{milestone}</li>
          ))}
        </ol>

        <h2 className="mb-4">Contact Information</h2>
        <p>Email: {projectData.contactInfo.email}</p>
        <p>Phone: {projectData.contactInfo.phone}</p>
        <p>Address: {projectData.contactInfo.address}</p>
      </Container>

      <footer className="footer mt-auto py-3 bg-dark text-white">
        <Container>
          <p className="text-center mb-0">&copy; 2024 Project Management Tool</p>
        </Container>
      </footer>
    </div>
  );
}

export default HomePage;
