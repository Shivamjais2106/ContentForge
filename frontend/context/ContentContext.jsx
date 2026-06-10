"use client";
import { createContext, useContext, useReducer } from "react";
import {
  generateContent,
  getHistory,
  toggleFavorite,
  deleteContent,
} from "@/lib/api";

const ContentContext = createContext(null);

const initialState = {
  history: [],
  currentOutput: null,
  loading: false,
  error: null,
  stats: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: action.payload, error: null };

    case "SET_ERROR":
      return { ...state, error: action.payload, loading: false };

    case "SET_OUTPUT":
      return { ...state, currentOutput: action.payload, loading: false };

    case "SET_HISTORY":
      return { ...state, history: action.payload, loading: false };

    case "ADD_TO_HISTORY":
      return { ...state, history: [action.payload, ...state.history] };

    case "TOGGLE_FAVORITE":
      return {
        ...state,
        history: state.history.map((item) =>
          item._id === action.payload
            ? { ...item, isFavorite: !item.isFavorite }
            : item
        ),
      };

    case "DELETE_CONTENT":
      return {
        ...state,
        history: state.history.filter((item) => item._id !== action.payload),
      };

    case "CLEAR_OUTPUT":
      return { ...state, currentOutput: null, error: null };

    default:
      return state;
  }
};

export function ContentProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Content generate karo
  const generate = async (formData) => {
    dispatch({ type: "SET_LOADING", payload: true });
    try {
      const { data } = await generateContent(formData);
      dispatch({ type: "SET_OUTPUT", payload: data.content });
      dispatch({ type: "ADD_TO_HISTORY", payload: data.content });
      return data.content;
    } catch (err) {
      dispatch({
        type: "SET_ERROR",
        payload: err.response?.data?.error || "Generation failed",
      });
    }
  };

  // History fetch karo
  const fetchHistory = async () => {
    dispatch({ type: "SET_LOADING", payload: true });
    try {
      const { data } = await getHistory();
      dispatch({ type: "SET_HISTORY", payload: data.contents });
    } catch (err) {
      dispatch({
        type: "SET_ERROR",
        payload: err.response?.data?.error || "Failed to fetch history",
      });
    }
  };

  // Favorite toggle karo
  const handleToggleFavorite = async (id) => {
    try {
      await toggleFavorite(id);
      dispatch({ type: "TOGGLE_FAVORITE", payload: id });
    } catch (err) {
      console.error("Favorite toggle failed:", err.message);
    }
  };

  // Delete karo
  const handleDelete = async (id) => {
    try {
      await deleteContent(id);
      dispatch({ type: "DELETE_CONTENT", payload: id });
    } catch (err) {
      console.error("Delete failed:", err.message);
    }
  };

  // Output clear karo
  const clearOutput = () => dispatch({ type: "CLEAR_OUTPUT" });

  return (
    <ContentContext.Provider
      value={{
        ...state,
        generate,
        fetchHistory,
        toggleFavorite: handleToggleFavorite,
        deleteContent: handleDelete,
        clearOutput,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
}

export const useContent = () => useContext(ContentContext);