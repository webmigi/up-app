import axios from 'axios';

const apiClient = axios.create({
  baseURL: `https://arch-admin.archimatika.agency/`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  getHome(id) {
    return apiClient.get(id);
  },
  getPage(id) {
    return apiClient.get(id);
  },
  getPost(type, id) {
    return apiClient.get(`${type}/${id}`);
  },
  getPosts(type) {
    return apiClient.get(type);
  },
};
