import React from 'react'

const Layout = ({ children }) => {
    return (
        <div className='overflow-hidden bg-black'>
         
        <img
          src='/Assets/Images/logo.png'
          alt='Description'
          className='mx-auto  my-5 w-auto h-40 '
        />
            <div className='container'>
        
                {children}
            </div>
            
        </div>
    )
}

Layout.defaultProps = {
    auth: false
}

export default Layout