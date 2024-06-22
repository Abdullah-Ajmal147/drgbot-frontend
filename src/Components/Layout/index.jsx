import React, { useState } from 'react'
import Sidebar from './Sidebar'
import { useNavigate } from 'react-router-dom';

const Layout = ({ children, customContainer }) => {
    const navigate = useNavigate()
    const [menuToggle, setMenuToggle] = useState(false);
    return (
        <>
            <div className='overflow-hidden bg-black'>
                <div className='flex my-3 sm:pr-4 px-4 xs:justify-center'>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className='h-24 w-24 mt-10 cursor-pointer' onClick={() => { setMenuToggle(!menuToggle) }}>
                        <path d="M7.5 9.5H24.5M7.5 21.5H24.5M7.5 15.5H24.5" stroke="white" stroke-linecap="round" />
                    </svg>
                    <div className='cursor-pointer' onClick={() => { navigate("/"); setMenuToggle(false) }}>
                        <img
                            src='/Assets/Images/logo.png'
                            alt='Description'
                            className='sm:w-auto w-40 h-40 bg-cover md:block hidden'
                        />
                        <img
                            src='/Assets/Images/logo.png'
                            alt='Description'
                            className='sm:w-auto w-full h-40 bg-cover flex-1 md:hidden block'
                        />
                    </div>
                </div>
                <div className={`${customContainer ? customContainer : "container"}`} onClick={() => { setMenuToggle(false) }}>
                    {children}
                </div>
            </div>
            <Sidebar toggle={menuToggle} setToggle={setMenuToggle} />
        </>
    )
}

Layout.defaultProps = {
    auth: false
}

export default Layout