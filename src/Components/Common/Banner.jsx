import React from 'react';



const Banner = ({ data, img }) => {
   

    return (
        <div className='grid lg:grid-cols-2 gap-[2rem] pt-20'>
            <div className={'flex flex-col gap-[2rem]  '} >
                {data}
               
            </div>
            <div className='flex  item-center text-center justify-center' >
           
                {img && <img src={`${process.env.PUBLIC_URL}${img}`} alt='img' className="object-contain  md:h-[25rem] h-[10rem] ml-20" />}
            </div>
        </div>
    );
};

export default Banner;
