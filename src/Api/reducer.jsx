const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_STORIES":
      return {
        ...state,
        isLoading: false,
        hits: action.payload,
      };
    case "REMOVE_POST":
      console.log(state, action?.payload, "state")
      return {
        ...state,
        hits: state?.hits?.hits?.filter(
          (curElem) => curElem?.index !== action?.payload
        ),
      };
    case "SEARCH_QUERY":
      return {
        ...state,
        query: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
