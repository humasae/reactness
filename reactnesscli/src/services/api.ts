// src/services/api.ts
import axios, { AxiosInstance } from 'axios';

const baseURL = 'http://localhost:8081/api/'; // Reemplaza con la URL de tu API

const api: AxiosInstance = axios.create({
  baseURL,
  // Puedes agregar aquí cualquier configuración adicional de Axios según tus necesidades
});

export default api;