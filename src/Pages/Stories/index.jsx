import React from "react";
import { useGlobalContext } from "../../Api/context";
import Search from "../Home/search";
import parse from "html-react-parser";

const Stories = () => {
  const { hits, isLoading, removePost } = useGlobalContext();

  if (isLoading) {
    return (
      <>
        <h1 className="text-center font-semibold md:text-2xl sm:text-xl text-lg">
          Loading.....
        </h1>
      </>
    );
  }

  function convertTextToHtml(text) {
    // Convert newlines to <br>
    let html = text.replace(/\n/g, '<br>');
  
    // Replace * and + for lists with <ul> and <li> tags
    html = html.replace(/\n\* (.*?)(?=\n|$)/g, '<ul><li>$1</li></ul>');
    html = html.replace(/\n\t\+ (.*?)(?=\n|$)/g, '<li>$1</li>');
  
    // Remove extra </ul> tags and fix nested lists
    html = html.replace(/<\/ul><ul>/g, '');
    html = html.replace(/<\/li>\n<li>/g, '</li><li>');
  
    return html;
  }

  return (
    <>
      <div className="d-flex justify-content-center my-4">
        <div className="w-100" style={{ maxWidth: "600px" }}>
          <Search />
        </div>
      </div>
      <div className="stories-div">
        {hits.hits.map((curPost) => {
          const {
            message: { content },
            index,
          } = curPost;

          console.log("Content:", content); // Debugging: Check the content being rendered

          return (
            <div className="card my-3" key={index}>
              <div className="font-semibold md:text-2xl sm:text-xl text-lg">
                {parse(convertTextToHtml(`${content}`))}
              </div>
              <div className="card-button">
                <a href="/" onClick={() => removePost(index)}>
                  Back To Site
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Stories;
