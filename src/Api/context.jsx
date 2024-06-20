import React, { useContext, useReducer } from "react";
import reducer from "./reducer";

const API = "https://admin.brainbulb.ai/v1/auth/api/chat/";
const initialState = {
  isLoading: true,
  query: "",
  hits: [],
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchApiData = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const formData = new FormData();
      formData.append("question", state.query);
      const res = await fetch(url, {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      dispatch({
        type: "GET_STORIES",
        payload: {
          hits: data.choices,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const removePost = (post_ID) => {
    dispatch({ type: "REMOVE_POST", payload: post_ID });
  };

  const searchPost = (searchQuery) => {
    dispatch({
      type: "SEARCH_QUERY",
      payload: searchQuery,
    });
  };

  const clearQuery = () => {
    dispatch({
      type: "SEARCH_QUERY",
      payload: "",
    });
  };

  const onSearchQuery = () => {
    fetchApiData(`${API}`);
  };

  return (
    <AppContext.Provider
      value={{ ...state, removePost, searchPost, clearQuery, onSearchQuery }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
