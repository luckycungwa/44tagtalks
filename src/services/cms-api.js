// This file is used to fetch data from the API
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api'; // Match backend port


export const fetchPosts = async () => {
  const response = await axios.get(`${API_URL}/api/posts`); 
  return response.data.docs;  //docs array of post
};

// a bit troublesome function to fetch post by id
export const fetchPostById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/api/posts/${id}`); // Ensure the correct endpoint
    if (!response.ok) {
      throw new Error(`Error fetching post: ${response.statusText}`);
    }
    return await response.json(); // Correctly parse the JSON response
  } catch (error) {
    console.error('Error fetching post by ID:', error);
    throw error; // Rethrow for handling in the component
  }
};

export const fetchPostBySlug = async (slug) => {
  try {
    const response = await fetch(`${API_URL}/api/posts?slug=${slug}`);
    if (!response.ok) {
      throw new Error(`Error fetching post: ${response.statusText}`);
    }
    const data = await response.json();
    return data.docs[0]; // Assuming the API returns an array with the post object as the first element
  } catch (error) {
    console.error('Error fetching post by slug:', error);
    throw error;
  }
};

export const getCategories = async () => {
  try {
    const response = await axios.get(`${API_URL}/categories`);
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

export const searchPosts = async (query) => {
  try {
    const response = await axios.get(`${API_URL}/posts`, {
      params: { search: query }
    });
    return response.data;
  } catch (error) {
    console.error('Error searching posts:', error);
    throw error;
  }
};



export const getComments = async (postId) => {
  try {
    const response = await axios.get(`${API_URL}/api/posts/${postId}/comments`); // Ensure the correct endpoint
    return response.data; // Ensure this returns the array of comments
  } catch (error) {
    console.error('Error fetching comments:', error);
    throw error; // Rethrow for handling in the component
  }
};

export const likePost = async (postId) => {
  try {
    const response = await axios.post(`${API_URL}/posts/${postId}/like`);
    return response.data; // Adjust based on your API structure
  } catch (error) {
    console.error('Error liking post:', error);
    throw error;
  }
};