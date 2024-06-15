import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

const API = "https://hn.algolia.com/api/v1/search";
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
            const res = await fetch(url);
            const data = await res.json();
            dispatch({
                type: "GET_STORIES",
                payload: {
                    hits: data.hits,
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

    useEffect(() => {
        fetchApiData(`${API}?query=${state.query}`);
    }, [state.query]);

    return (
        <AppContext.Provider value={{ ...state, removePost, searchPost, clearQuery }}>
            {children}
        </AppContext.Provider>
    );
};

const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
