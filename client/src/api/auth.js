import axios from './axios.js';

export const registerRequest = newUser => axios.post(`/register`, newUser);
export const loginRequest = (user) => axios.post(`/login`, user);
export const verifyTokenRequest = () => axios.get(`/verify-token`);