import React from "react";
import Search from "./search.jsx";
import Layout from "../../Components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Banner from "../../Components/Common/Banner";

const Home = () => {
  return (
    <Layout>
      <Banner
        backgroundImage={"/Assets/Images/bg.png"}
        data={
          <>
            <ul className="mt-4">
              <li className="flex font-bold md:text-[2rem]  sm:text-[1.5rem] text-[1.2rem] items-center">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-#FBDB4A mr-4"
                />
                <a
                  href="/"
                  className="no-underline hover:underline text-current"
                >
                  Ask Anything Medical
                </a>
              </li>
              <li className="flex font-semibold md:text-[2rem] sm:text-[1.5rem] text-[1.2rem] items-center">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-#FBDB4A mr-4"
                />
                <a
                  href="/"
                  className="no-underline hover:underline text-current"
                >
                  Educational
                </a>
              </li>
              <li className="flex font-semibold md:text-[2rem] sm:text-[1.5rem] text-[1.2rem] items-center">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-#FBDB4A mr-4"
                />
                <a
                  href="/"
                  className="no-underline hover:underline text-current"
                >
                  Verify Info
                </a>
              </li>
              <li className="flex font-semibold md:text-[2rem] sm:text-[1.5rem] text-[1.2rem] items-center">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-#FBDB4A mr-4"
                />
                <a
                  href="/"
                  className="no-underline hover:underline text-current"
                >
                  Not a Med Advice
                </a>
              </li>
            </ul>
          </>
        }
      />
      <Search></Search>
    </Layout>
  );
};

export default Home;
