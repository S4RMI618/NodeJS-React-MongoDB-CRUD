import axios from 'axios';

const API = "http://localhost:4000/api"

export const registerRequest = newUser => axios.post(`${API}/register`, newUser);