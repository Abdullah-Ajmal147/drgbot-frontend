import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../Api/context";
import useSpeechRecognition from "./useSpeechRecognition";

const Search = ({ customMargin }) => {
  const { query, searchPost, clearQuery, onSearchQuery } = useGlobalContext();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const { transcript, setTranscript, isListening, setIsListening } = useSpeechRecognition();

  useEffect(() => {
    // Update the input value when transcript changes
    if (transcript) {
      searchPost(transcript);
    }
  }, [transcript]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) {
      setError("Please add your query");
      return;
    }
    setError("");
    onSearchQuery();
    navigate("/chat");
    clearQuery(); // Clear the input value after navigating
  };

  const handleVoiceSubmit = () => {
    if (!transcript) {
      setError("Please use the microphone to speak your query");
      return;
    }
    // setError("");
    // searchPost(transcript); // Update query with transcript
    // onSearchQuery();
    // navigate("/chat");
    // clearQuery();
  };

  if (query === undefined || searchPost === undefined) {
    return <div>Loading...</div>; // Add some fallback UI or handling
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={`flex items-center ${customMargin ? customMargin : "m-5"}`}>
        <input
          type="text"
          placeholder="Ask Anything Medical"
          className={`form-control me-3 bg-transparent text-white placeholder-white ${error ? "border border-red-500" : "border border-white"
            } focus:outline-none focus:border-blue-500 p-2 rounded-lg transition-colors duration-300 ease-in-out w-full`}
          value={query}
          onChange={(e) => {
            searchPost(e.target.value)
            setTranscript(e.target.value)
          }}

        />
        <button type="submit" className="btn bg-white/80 hover:bg-white/90 transition-all duration-300 ease-in-out text-gray-700 rounded-lg p-2 ml-3">
          <img
            src="/Assets/Images/search.png"
            alt="Search"
            className="w-6 h-6 md:w-8 md:h-8"
          />
        </button>
        <button
          type="button"
          onClick={() => setIsListening(!isListening)}
          className={`btn transition-all duration-300 ease-in-out text-white rounded-lg px-2.5 xl:py-[12px] lg:py-[11px] md:py-[10px] py-[7px] ml-2 ${isListening ? "bg-red-500 hover:bg-red-600" : "bg-blue-500 hover:bg-blue-600"
            }`}
        >
          {isListening ? "🎙️" : "🎤"}
        </button>
      </div>
      {error && <div className="text-danger mt-2">{error}</div>}
    </form>
  );
};

export default Search;
