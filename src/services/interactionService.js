import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api'; // Match backend port

const getToken = () => localStorage.getItem('userToken');

export const likePost = async (postId) => {
    const token = getToken();
    if (!token) {
      console.error('No user token found. User needs to login.');
      return;
    }
  
    try {
      const response = await axios.post(`${API_URL}/likes/like/${postId}`, {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data; // Return like response data
    } catch (error) {
      console.error('Error liking post:', error);
      throw error;
    }
  };
  
  export const unlikePost = async (postId) => {
    const token = getToken();
    if (!token) {
      console.error('No user token found. User needs to login.');
      return;
    }
  
    try {
      const response = await axios.delete(`${API_URL}/likes/unlike/${postId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data; // Return unlike response data
    } catch (error) {
      console.error('Error unliking post:', error);
      throw error;
    }
  };

  export const commentOnPost = async (postId, content) => {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('User not authenticated');
    }
  
    const response = await axios.post(`${API_URL}/posts/${postId}/comments`, { content }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data; // Ensure this returns the newly created comment
  };

export const getComments = async (postId) => {
  try {
    const response = await axios.get(`${API_URL}/posts/${postId}/comments`);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error('Error fetching comments:', error.response.data);
    } else if (error.request) {
      console.error('Error fetching comments: No response received', error.request);
    } else {
      console.error('Error fetching comments:', error.message);
    }
    console.error('Detailed error:', error);
    throw error;
  }
};

// getCurrent user
export const getCurrentUser = async () => {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('User not authenticated');
    }

    const response = await axios.get(`${API_URL}/auth/me`, {
      headers: { 
        Authorization: `Bearer ${token}`
      }
    });
    return response.data.user;
  } catch (error) {
    if (error.response) {
      console.error('Error fetching current user:', error.response.data);
    } else if (error.request) { 
      console.error('Error fetching current user: No response received', error.request);
    } else {
      console.error('Error fetching current user:', error.message);
    }
    console.error('Detailed error:', error);
    throw error;
  }
};
