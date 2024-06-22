import React from 'react';

const Banner = ({ data, backgroundImage, customMargin }) => {
    return (
        <>
            <div
                className="relative bg-cover bg-center py-20 flex items-center justify-center"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}
            >
                <div className={`container ${customMargin ? customMargin : "mx-5"}`}>
                    <div className='flex flex-col gap-[2rem] items-center justify-center'>
                        {data}
                    </div>
                </div>
            </div>

        </>
    );
};

export default Banner;
