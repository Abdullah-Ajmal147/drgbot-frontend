import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from "../../Api/context";

const Search = () => {
    const { query, searchPost, clearQuery } = useGlobalContext();
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!query) {
            setError('Please add your query');
            return;
        }
        setError('');
        navigate('/Stories');
        clearQuery(); // Clear the input value after navigating
    };

    if (query === undefined || searchPost === undefined) {
        return <div>Loading...</div>;  // Add some fallback UI or handling
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='d-flex align-items-center m-5'>
                <input
                    type='text'
                    placeholder='Ask Anything Medical'
                    className={`form-control me-3 bg-transparent text-white placeholder-white ${error ? 'border border-danger' : ''}`}
                    value={query}
                    onChange={(e) => searchPost(e.target.value)}
                />
                <button type='submit' className='btn btn-light bg-white/80'>
                    <img src='/Assets/Images/search.png' alt='Search' className='w-6 h-6 md:w-8 md:h-8' />
                </button>
            </div>
            {error && <div className='text-danger mt-2'>{error}</div>}
        </form>
    );
};

export default Search;
