import axios from 'axios';

const createUser = async (name, email) => {
  try {
    const response = await axios.post('https://reqres.in/api/users', {
      name: name,
      email: email,
      job: 'Frontend Developer'
    });
    return response.data;
  } catch (error) {
    console.error('API Hatası:', error.response?.data || error.message);
    return null;
  }
};

const getUsers = async () => {
  try {
    const response = await axios.get('https://reqres.in/api/users?page=1');
    return response.data;
  } catch (error) {
    console.error('API Hatası:', error.response?.data || error.message);
    return null;
  }
};

export { createUser, getUsers };
