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
    <div className="form-control bg-base-100 bg-secondary/50 p-3">
      <h2>Login</h2>
      <form>

        <label className="input input-bordered flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
          <input type="text" className="grow" placeholder="Email" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })}/>
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
          <input type="text" className="grow" placeholder="Username" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })}/>
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
          <input type="password" className="grow" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })}/>
        </label>
        <button className="btn btn-primary w-64 rounded-box mt-2" type="button" onClick={handleLogin}>
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