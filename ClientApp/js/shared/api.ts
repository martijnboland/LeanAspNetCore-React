import axios, { AxiosResponse, AxiosError } from 'axios';
import { FORM_ERROR } from 'final-form';

import { getToken } from './auth';

// Add authorization token to requests.
axios.interceptors.request.use(config => {
  if (config.url.indexOf('auth') > -1) {
    return Promise.resolve(config);
  }
  return getToken()
    .then(token => {
      config.headers.Authorization = `Bearer ${token}`;
      return Promise.resolve(config);
    })
}, err => {
  return Promise.reject(err);
});

export interface IApiResult {
  ok: boolean,
  message?: string,
  errors?: any,
  data?: any
}

export const handleApiSuccess = (response: AxiosResponse): IApiResult => {
  return {
    ok: true,
    data: response.data
  }
}

export const handleApiError = (err: AxiosError): IApiResult => {
  // when error code is 400 and response body contains properties, return object with errors, else log and rethrow
  if (err.response && err.response.status === 400 && err.response.data) {
    console.log('API returned 400 error with data, returning data for error display');
    const data = err.response.data;
    const result: IApiResult = {
      ok: false,
      errors: {}
    };
    // Convert errors array to string for the result
    if (typeof data != 'string') {
      for (let prop in data) {
        if (data.hasOwnProperty(prop)) {
          if (prop === '') {
            result.errors[FORM_ERROR] = data[prop].toString();
          } else {
            result.errors[prop] = data[prop].toString();
          }
        }
      }
    } else {
      result.message = String(data);
    }
    return result;
  } else {
    console.log(err);
    throw err;
  }
};
