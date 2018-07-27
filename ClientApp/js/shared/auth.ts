import axios from 'axios';
import { AuthResult } from '../react-notes/models';

export function getToken(): Promise<string> {
  let token = sessionStorage.getItem('TOKEN');
  if (token) {
    return Promise.resolve(token);
  }
  return axios.get<AuthResult>('/api/auth/randomtoken')
    .then(response => {
      const token = response.data.token;
      sessionStorage.setItem('TOKEN', token);
      return response.data.token;
    });
}