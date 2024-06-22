import React from "react";
import { useGlobalContext } from "../../Api/context";
import Search from "../Home/search";
import parse from "html-react-parser";
import { useNavigate } from "react-router-dom";
import Layout from "../../Components/Layout";

const Stories = () => {
  const navigate = useNavigate()
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
    html = html.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');

    return html;
  }

  return (
    <>
      <Layout>
        <div className="d-flex justify-content-center my-4">
          <div className="w-full sm:w-2/4">
            <Search customMargin={"my-5"} />
          </div>
        </div>
        <div className="w-full sm:w-2/4 mx-auto p-4 border border-[#D9D9D9] bg-[#212121] rounded-md">
          {hits.hits.map((curPost) => {
            const {
              message: { content },
              index,
            } = curPost;
            return (
              <div className="my-3" key={index}>
                <div dangerouslySetInnerHTML={{ __html: convertTextToHtml(content) }} className="font-semibold md:text-2xl sm:text-xl text-lg text-white"></div>
                {/* <div className="font-semibold md:text-2xl sm:text-xl text-lg">
                {parse(convertTextToHtml(`${content}`))}
              </div> */}
                <div className="card-button">
                  <a onClick={() => {
                    navigate("/")
                    removePost(index)
                  }}>
                    Back To Site
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </Layout>
    </>
  );
};

export default Stories;
