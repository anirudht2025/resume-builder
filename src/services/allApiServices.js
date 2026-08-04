import apiService from "../api/apiService";

export const addResumeApi = async (data) => {
  return await apiService("POST", "/allResumes", data);
};
