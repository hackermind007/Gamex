import React, { useState } from 'react';
import { TextField, Button, Container, Paper } from '@mui/material';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  let history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = existingUsers.some(user => user.username === username || user.email === email);

    if (userExists) {
      alert("Username or email already exists!");
      return;
    }

    existingUsers.push({ username, email, password });
    localStorage.setItem('users', JSON.stringify(existingUsers));
    alert("Sign-up successful!");

    // Reset form
    setFormData({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = existingUsers.find(user => user.email === email && user.password === password);

    if (user) {
      history.push('./');
      alert("Sign-in successful!");
    } else {
      alert("Invalid email or password! Please sign up first.");
    }
  };

  return (
    <div className="w-100 d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
      <Container component={Paper} maxWidth="sm" style={{ padding: '20px', marginTop: '50px', backgroundColor: '#573b8a' }}>
        <h1 className='text-center text-white fw-bold'>{isSignUp ? 'Register' : 'Sign In'}</h1>
        <form onSubmit={isSignUp ? handleSignUp : handleSignIn}>
          {isSignUp && (
            <>
              <TextField
                label="Username"
                name="username"
                variant="filled"
                fullWidth
                margin="normal"
                value={formData.username}
                onChange={handleChange}
                required
                sx={{ backgroundColor: 'white' }}
              />
            </>
          )}
          <TextField
            label="Email"
            name="email"
            variant="filled"
            fullWidth
            margin="normal"
            value={formData.email}
            onChange={handleChange}
            required
            sx={{ backgroundColor: 'white' }}
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            variant="filled"
            fullWidth
            margin="normal"
            value={formData.password}
            onChange={handleChange}
            required
            sx={{ backgroundColor: 'white' }}
          />
          {isSignUp && (
            <TextField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              variant="filled"
              fullWidth
              margin="normal"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              sx={{ backgroundColor: 'white' }}
            />
          )}
          <Button type="submit" variant="contained" fullWidth sx={{ backgroundColor: '#ff8605', color: 'black', marginTop: '20px' }}>
            {isSignUp ? 'Register' : 'Sign In'}
          </Button>
        </form>
        <p className='text-center text-white mt-4' style={{ cursor: 'pointer' }} onClick={() => setIsSignUp(!isSignUp)}>
          {isSignUp ? 'Already have an account? Sign In' : 'Don\'t have an account? Register'}
        </p>
      </Container>
    </div>
  );
};

export default Login
