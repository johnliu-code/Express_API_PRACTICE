

import axios from 'axios'

const API_URL = 'http://localhost:5000/api/stories/'

// Create new story
const createStory = async (storyData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, storyData, config)

  return response.data
}

// Get user stories
const getStories = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

// Delete user story
const deleteStory = async (storyId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + storyId, config)

  return response.data
}

// Update user story
const updateStory = async (storyId, storyData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.put(API_URL + storyId, storyData, config)

  return response.data
}

const StoryService = {
  createStory,
  getStories,
  deleteStory,
  updateStory
}

export default StoryService


// import http from "../http-common";

// class StoryDataService {
//   getStories() {
//     return http.get("/stories");
//   }

//   getStoryById(id) {
//     return http.get(`/stories/${id}`);
//   }

//   create(data) {
//     return http.post("/stories", data);
//   }

//   update(id, data) {
//     return http.put(`/stories/${id}`, data);
//   }

//   delete(id) {
//     return http.delete(`/stories/${id}`);
//   }
// }

// export default new StoryDataService();