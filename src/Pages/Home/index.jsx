import React from 'react';
import Layout from '../../Components/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Banner from '../../Components/Common/Banner';

const Home = () => {
    return (
        <Layout>
            <Banner
                backgroundImage={'/Assets/Images/bg1.png'}
                data={
                    <>
                       
                        <ul className='mt-4'>
                            <li className='flex font-bold md:text-[2rem] sm:text-[1.5rem] text-[1.2rem] items-center'>
                                <FontAwesomeIcon icon={faArrowRight} className='text-#FBDB4A mr-4' />
                                <a href='/' className='no-underline hover:underline text-current'>
                                Ask Anything Medical
                                </a>
                            </li>
                            <li className='flex font-semibold md:text-[2rem] sm:text-[1.5rem] text-[1.2rem] items-center'>
                                <FontAwesomeIcon icon={faArrowRight} className='text-#FBDB4A mr-4' />
                                <a href='/' className='no-underline hover:underline text-current'>
                                    Educational
                                </a>
                            </li>
                            <li className='flex font-semibold md:text-[2rem] sm:text-[1.5rem] text-[1.2rem] items-center'>
                                <FontAwesomeIcon icon={faArrowRight} className='text-#FBDB4A mr-4' />
                                <a href='/' className='no-underline hover:underline text-current'>
                                    Verify Info
                                </a>
                            </li>
                            <li className='flex font-semibold md:text-[2rem] sm:text-[1.5rem] text-[1.2rem] items-center'>
                                <FontAwesomeIcon icon={faArrowRight} className='text-#FBDB4A mr-4' />
                                <a href='/' className='no-underline hover:underline text-current'>
                                    Not a Med Advice
                                </a>
                            </li>
                        </ul>
                        </>
                }
                       
                 
            />
             <div className='flex items-center  m-4 '>
                            <input
                                type='text'
                                placeholder='Ask Anything Medical'
                                className='w-full max-w-md p-2 border rounded-lg border-white bg-transparent text-white placeholder-white'
                            />
                            <button className='p-2 bg-white ml-3 rounded-sm'>
                                <img src='/Assets/Images/search.png' alt='Search' className='w-6 h-6 md:w-8 md:h-8' />
                            </button>
                        </div>
                        <div className='container'>
                           
                        </div>
        </Layout>
        
    );
};

export default Home;
