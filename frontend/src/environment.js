const localApiUrl = "http://localhost:5000/api";

export const baseUrl =
  import.meta.env.VITE_API_URL || localApiUrl;

console.log("Final baseUrl:", baseUrl);
