import axios from "axios";

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000",
});

// Har request mein token automatically attach karo
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response error handle karo
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  },
);

// ─── Auth APIs ───────────────────────────────────────
export const signup = (data) => API.post("/auth/signup", data);
export const login = (data) => API.post("/auth/login", data);

// ─── User APIs ───────────────────────────────────────
export const getProfile = () => API.get("/user/profile");
export const updateProfile = (data) => API.put("/user/profile", data);
export const getStats = () => API.get("/user/stats");

// ─── Content APIs ────────────────────────────────────
// ✅ JSON headers add karo
export const generateContent = (data) =>
  API.post("/api/content/generate", data, {
    headers: { "Content-Type": "application/json" },
  });
export const getHistory = () => API.get("/api/content/history");
export const toggleFavorite = (id) => API.patch(`/api/content/${id}/favorite`);
export const deleteContent = (id) => API.delete(`/api/content/${id}`);
// ─── Chat API ─────────────────────────────────────────
export const sendMessage = (data) =>
  API.post("/api/chat", data, {
    headers: { "Content-Type": "application/json" },
  });

// ─── Payment APIs ─────────────────────────────────────
export const createOrder = (plan) => API.post("/api/create-order", { plan });

export default API;
