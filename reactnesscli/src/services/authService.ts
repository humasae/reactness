// src/services/authService.ts
import api from './api';
import User from '../types/User';
import UserResponse from '../types/UserResponse';

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
      let response = await api.post('/login', { username, email, password });
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
    const newUser: UserResponse = {
      id: 1,
      username: user.username,
      email: user.email,
    };

    console.log(newUser);

  }
};

export default authService;
