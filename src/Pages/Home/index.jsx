import React from "react";
import Search from "./search.jsx";
import Layout from "../../Components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Banner from "../../Components/Common/Banner";

const Home = () => {
  return (
    <>
    <Layout customContainer={"mx-auto w-[95%]"}>
      <Banner
        backgroundImage={"/Assets/Images/bg.png"}
        customMargin={"sm:mx-5 mx-0"}
        data={
          <>
            <ul className="mt-4">
              <li className="flex font-bold md:text-[2rem]  sm:text-[1.5rem] text-[1.2rem] items-center">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-#FBDB4A mr-4"
                />
                <a
                  // href="/"
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
                  // href="/"
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
                  // href="/"
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
                  // href="/"
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
      <h1 className="sm:text-[60px] text-[25px] text-[#4d4d4d] mx-auto w-[90%] text-center py-10">Advertisment Comming Soon</h1>
    </Layout>
    </>
  );
};

export default Home;
