import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';
import User from '../types/User';

interface LoginProps {
  onLogin: (user: User) => void;
}

const LoginObject: React.FC<LoginProps> = ({ onLogin }) => {
  const [user, setUser] = useState({username: '', email:'', password: ''});
  const navigate = useNavigate();

  const handleLogin = async () => {
    onLogin(user);
    console.log(user);
    const response = await authService.loginWithObject(user);
    console.log(response);
    console.log(response.token);

    if(response.token != null) {
      const hello = await authService.getHelloFromApi(response.token);
      console.log(hello);
      console.log(user);
      navigate('/home', { state: { user: user } });
    } else {
      navigate('/home', { state: { user: null } });
    }

    
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
      {/* {isAuthenticated ? (
         <Navigate replace to="/home" />
       ) : null} */}
    </div>
  );
};

export default LoginObject;