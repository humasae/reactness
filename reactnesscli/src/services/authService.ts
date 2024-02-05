// src/services/authService.ts
import api from './api';
import User from '../types/User';

interface LoginResponse {
  // Define la estructura de la respuesta del servidor después de la autenticación
  // Puedes ajustar esto según la estructura real de tu API
  token: string;
  user: {
    id: string;
    username: string;
    token: string;
    // Otras propiedades del usuario
  };
}

const authService = {
  async login(username: string, email: string, password: string): Promise<LoginResponse> {
    try {
      const response = await api.post('/login', { username, email, password });
      console.log("hoooola authService");
      console.log(response);
      

      return response.data;
    } catch (error) {
      throw error;
    }
  },
  async loginWithObject(user: User) {
    console.log('esto es login with user');
    console.log(user)

    const username = user.username;
    const email = user.email;
    const password = user.password;

    try {
      const response = await api.post('/login', {username, email, password });
      console.log("hoooola authService");
      console.log(response);
      return response.data;
    } catch (error) {
      return error;
    }

    

  },
  async getHelloFromApi(token: string) {
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    try{
      console.log('lanzamos el get hello hellouuuuu');
      const response = await api.get(
        '/hello',
        config
      )
      console.log(response);
      return response.data;

    } catch(error) {
      return error;
    }
  },
  async getHelloWithInternalCredentials() {
    // const config = {
    //   headers: { Authorization: `Bearer ${token}` }
    // };
    try{
      console.log('lanzamos el get hello hellouuuuu');
      const response = await api.get(
        '/hello'
      )
      console.log(response);
      return response.data;

    } catch(error) {
      return error;
    }
  }
};

export default authService;
