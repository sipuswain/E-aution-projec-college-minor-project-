const API_BASE_URL = "http://localhost:5000/api";

export const testApi = async () => {
  const response = await fetch(`${API_BASE_URL}/test`);

  if (!response.ok) {
    throw new Error("API request failed");
  }

  return response.json();
};
