import apiService from "../api/apiService";

// Add new resume
export const addResumeApi = async (data) => {
  return await apiService("POST", "/allResumes", data);
};

// Get resume object with id
export const getResumeApi = async (id) => {
  return await apiService("GET", `/allResumes/${id}`, {});
};

// Add download details
export const addDownloadHistoryApi = async (data) => {
  return await apiService("POST", "/downloads", data);
};

// Update resume
export const updateResumeApi = async (id, data) => {
  return await apiService("PUT", `/allResumes/${id}`, data);
};

// Get all download history
export const getAllHistoryApi = async () => {
  return await apiService("GET", "/downloads", {});
};
