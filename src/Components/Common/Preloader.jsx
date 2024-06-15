import React from 'react'

const Preloader = () => {
    return (
       
        <div className='flex items-center justify-center h-screen fixed inset-0 bg-[#221D1A]/90 backdrop-blur-md z-[99999]'>
            <div className='flex items-center'>
                <img className='h-screen object-contain' src={`${process.env.PUBLIC_URL}/Assets/Images/mg.png`} alt='logo'/>
            </div>
        </div>
       
   


    )
}

export default Preloader