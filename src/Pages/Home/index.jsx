// import React, { useEffect, useState } from "react";
// import Search from "./search.jsx";
// import Layout from "../../Components/Layout";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// import Banner from "../../Components/Common/Banner";

// const Home = () => {
//   const [hitCount, setHitCount] = useState(0);

//   useEffect(() => {
//     fetch("https://admin.brainbulb.ai/v1/auth/api/count/")
//       .then(response => response.json())
//       .then(data => setHitCount(data.hit_count))
//       .catch(error => console.error('Error fetching hit count:', error));
//   }, []);

//   return (
//     <>
//       <Layout customContainer={"mx-auto w-[95%]"}>
//         <Banner
//           backgroundImage={"/Assets/Images/bg.png"}
//           customMargin={"flex items-center justify-start md:pl-48 xs:pl-24 pl-4"}
//           data={
//             <>
//               <ul className="mt-4">
//                 <li className="flex font-bold md:text-[2rem] sm:text-[1.5rem] text-[1.2rem] items-center">
//                   <FontAwesomeIcon
//                     icon={faArrowRight}
//                     className="text-#FBDB4A mr-4"
//                   />
//                   <a
//                     // href="/"
//                     className="no-underline hover:underline text-current"
//                   >
//                     Ask Anything Medical
//                   </a>
//                 </li>
//                 <li className="flex font-semibold md:text-[2rem] sm:text-[1.5rem] text-[1.2rem] items-center">
//                   <FontAwesomeIcon
//                     icon={faArrowRight}
//                     className="text-#FBDB4A mr-4"
//                   />
//                   <a
//                     // href="/"
//                     className="no-underline hover:underline text-current"
//                   >
//                     Educational
//                   </a>
//                 </li>
//                 <li className="flex font-semibold md:text-[2rem] sm:text-[1.5rem] text-[1.2rem] items-center">
//                   <FontAwesomeIcon
//                     icon={faArrowRight}
//                     className="text-#FBDB4A mr-4"
//                   />
//                   <a
//                     // href="/"
//                     className="no-underline hover:underline text-current"
//                   >
//                     Verify Info
//                   </a>
//                 </li>
//                 <li className="flex font-semibold md:text-[2rem] sm:text-[1.5rem] text-[1.2rem] items-center">
//                   <FontAwesomeIcon
//                     icon={faArrowRight}
//                     className="text-#FBDB4A mr-4"
//                   />
//                   <a
//                     // href="/"
//                     className="no-underline hover:underline text-current"
//                   >
//                     Not a Med Advice
//                   </a>
//                 </li>
//               </ul>
//             </>
//           }
//         />
//         <div className="flex justify-center items-center mt-4">
//           <li className="flex font-semibold md:text-[2rem] sm:text-[1.5rem] text-[1.2rem] items-center text-white">
//             Asking Counter : {hitCount}
//           </li>
//         </div>
//         <Search />
//       </Layout>
//     </>
//   );
// };

// export default Home;

import React, { useEffect, useState } from "react";
import Search from "./search.jsx";
import Layout from "../../Components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Banner from "../../Components/Common/Banner";
import CountUp from 'react-countup';

const Home = () => {
  const [hitCount, setHitCount] = useState(0);

  useEffect(() => {
    const fetchHitCount = () => {
      fetch("https://admin.brainbulb.ai/v1/auth/api/count/")
        .then(response => response.json())
        .then(data => setHitCount(data.hit_count))
        .catch(error => console.error('Error fetching hit count:', error));
    };

    fetchHitCount();
    const intervalId = setInterval(fetchHitCount, 60000); // Update every 60 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Layout customContainer={"mx-auto w-[95%]"}>
        <Banner
          backgroundImage={"/Assets/Images/bg.png"}
          customMargin={"flex items-center justify-start md:pl-48 xs:pl-24 pl-4"}
          data={
            <>
              <ul className="mt-4">
                <li className="flex font-bold md:text-[2rem] sm:text-[1.5rem] text-[1.2rem] items-center">
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
        <div className="flex justify-center items-center mt-4">
          <div className="text-white font-bold text-4xl md:text-6xl">
            <CountUp end={hitCount} duration={3} separator="," />
          </div>
        </div>
        <Search />
      </Layout>
    </>
  );
};

export default Home;
