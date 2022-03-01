import axios from 'axios'
 
const URL = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(URL);

export const createPosts = (newPosts) =>axios.post(URL,newPosts); 

export const updatePosts = (id,updatedPost) =>axios.patch(`${URL}/${id}`,updatedPost)