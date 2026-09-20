// const localApiUrl = "http://localhost:5000/api";

// export const baseUrl =
//   import.meta.env.VITE_API_URL || localApiUrl;

// console.log("Final baseUrl:", baseUrl);




import axios from "axios";

const localApiUrl = "http://localhost:5000/api";

export const baseUrl =
  import.meta.env.VITE_API_URL || localApiUrl;

// Attach JWT automatically to every Axios request
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers = config.headers || {};

      config.headers.Authorization = token.startsWith("Bearer ")
        ? token
        : `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

console.log("Final API baseUrl:", baseUrl);
