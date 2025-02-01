import axios from "axios";

const API_URL = "http://localhost:5000/api/faqs";

export const fetchFAQs = async (lang = "en") => {
  const response = await axios.get(`${API_URL}?lang=${lang}`);
  return response.data;
};

export const addFAQ = async (question, answer) => {
  const response = await axios.post(API_URL, { question, answer });
  return response.data;
};
