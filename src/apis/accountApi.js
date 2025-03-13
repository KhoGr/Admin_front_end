/* eslint-disable prettier/prettier */
// src/services/accountApi.js
import axiosClient from './axiosClient';

const URL = '/account';

const accountApi = {
  postRegisterAccount: (email, name, password) => {
    return axiosClient.post(`${URL}/register`, { email, name, password });
  },

  postLogin: (email, password) => {
    return axiosClient.post(`${URL}/login`, { email, password });
  },

  postLogout: () => {
    return axiosClient.post(`${URL}/logout`);
  },

  postResetPasswordRequest: (email) => {
    return axiosClient.post(`${URL}/reset-password-request`, { email });
  },

  postResetPassword: (email, password, verifyCode) => {
    return axiosClient.post(`${URL}/reset-password`, { email, password, verifyCode });
  },

  putUpdatePassword: (oldPassword, newPassword) => {
    return axiosClient.put(`${URL}/update-password`, { oldPassword, newPassword });
  },

  putUpdateAvt: (avtSrc = '') => {
    return axiosClient.put(`${URL}/update-avt`, { avtSrc });
  },

  putUpdateProfile: (name = '', username = '') => {
    return axiosClient.put(`${URL}/update-profile`, { name, username });
  },

  getUserProfile: () => {
    return axiosClient.get(`${URL}/profile`);
  },

  verifyAccount: (token) => {
    return axiosClient.get(`${URL}/verify-account`, { params: { token } });
  },

  googleLoginStart: () => {
    return axiosClient.get(`${URL}/auth/google`);
  },

  googleLoginCallback: () => {
    return axiosClient.get(`${URL}/auth/google/callback`);
  },
};

export default accountApi;
