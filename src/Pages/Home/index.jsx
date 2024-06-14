import React from 'react';
import Layout from '../../Components/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faSearch } from '@fortawesome/free-solid-svg-icons';
import Banner from '../../Components/Common/Banner';


const Home = () => {
    return (
        <Layout>
            <Banner
                img={'/Assets/Images/m.png'}
                data={
                    <>
                        <h2 className='font-extrabold md:text-[3rem] text-[2.2rem] leading-[1.2]'>
                        Ask Anything
                        </h2>
                        
                        <ul className='mt-4 item-center text-center justify-center '>
                            <li className='flex font-Semibold md:text-[2rem] text-[2.2rem]   items-center'>
                                <FontAwesomeIcon icon={faArrowRight} className='text-#FBDB4A mr-4 ' />
                                Medical
                            </li>
                            <li className='flex font-Semibold md:text-[2rem] text-[2.2rem]  items-center'>
                                <FontAwesomeIcon icon={faArrowRight} className='text-#FBDB4A mr-4' />
                                Educational
                            </li>
                            <li className='flex font-Semibold md:text-[2rem] text-[2.2rem]  items-center'>
                                <FontAwesomeIcon icon={faArrowRight} className='text-#FBDB4A mr-4' />
                                Verify Info
                            </li>
                            <li className='flex font-Semibold md:text-[2rem] text-[2.2rem]  items-center'>
                                <FontAwesomeIcon icon={faArrowRight} className='text-#FBDB4A mr-4' />
                                Not a Men Advice
                            </li>
                            
                        </ul>
                        
                         <div className='flex items-center'>
                            <input
                                type='text'
                                placeholder='Ask Anything Medical'
                                className='w-100 p-2  border rounded-lg border-white bg-transparent text-white placeholder-white '
                                
                            />
                            <button className='p-2 bg-white ml-3 rounded-sm'>
    <img src='/Assets/Images/search.png' alt='Search' className='w-4 h-4 md:w-6 md:h-6' />
</button>

                        </div>
                       
                    </>
                }
            />
            
           
        </Layout>
    );
}

export default Home;