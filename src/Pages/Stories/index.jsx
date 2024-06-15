import React from "react";
import { useGlobalContext } from "../../Api/context";
import Search from '../Home/search';

const Stories = () => {
    const { hits, isLoading, removePost } = useGlobalContext();

    if (isLoading) {
        return (
            <>
                <h1 className='text-center font-semibold md:text-2xl sm:text-xl text-lg'>Loading.....</h1>
            </>
        );
    }

    return (
        <>
            <div className="d-flex justify-content-center my-4">
                <div className="w-100" style={{ maxWidth: '600px' }}>
                    <Search />
                </div>
            </div>
            <div className="stories-div">
                {hits.map((curPost) => {
                    const { title, author, objectID, url, num_comments } = curPost;
                    return (
                        <div className="card my-3" key={objectID}>
                            <h3 className='font-semibold md:text-2xl sm:text-xl text-lg'>{title}</h3>
                            <p>
                                By <span> {author}</span> | <span> {num_comments} </span> comments
                            </p>
                            <div className="card-button">
                                <a href={url} target="_blank" rel="noopener noreferrer">Read More</a>
                                <a href="/" onClick={() => removePost(objectID)}>Back To Site</a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Stories;
