import React, { useState } from 'react';
import authService from '../services/authService';
import User from '../types/User';

interface LoginProps {
  onLogin: (user: User) => void;
}

const LoginObject: React.FC<LoginProps> = ({ onLogin }) => {
  const [user, setUser] = useState({username: '', email:'', password: ''});

  const handleLogin = async () => {
    onLogin(user);
    console.log(user);
    const response = await authService.loginWithObject(user);
    console.log(response);
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>
          Username:
          <input type="text" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} />
        </label>
        <br />
        <label>
          Email:
          <input type="text" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginObject;