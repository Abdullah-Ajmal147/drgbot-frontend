import React from 'react';

const Banner = ({ data, backgroundImage }) => {
    return (
        <div 
            className="relative bg-cover bg-center py-20" 
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className='container mx-5 '>
                <div className='flex flex-col gap-[2rem]'>
                    {data}
                </div>
            </div>
        </div>
    );
};

export default Banner;
