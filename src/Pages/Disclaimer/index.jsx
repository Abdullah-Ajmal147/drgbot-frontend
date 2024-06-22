import React from 'react';
import Layout from '../../Components/Layout';

const Disclaimer = () => {
    return (
        <Layout>
            <div className="p-6 rounded-lg shadow-md w-full sm:w-2/4 mx-auto">
                <p className="text-white text-lg leading-relaxed mb-6">
                    For Educational Purposes Only, No Legal Value at all. The
                    information provided by Dr.G Bot is for educational purposes
                    and should not be considered medical advice. Consult qualified medical professionals for health-related concerns. Dr. G Bot is
                    continuously learning, and feedback is encouraged to improve accuracy. Our bot is still under training and it could make
                    mistakes let us know so we can improve and correct and make it better. Further reading and confirming isrequired.
                </p>
            </div>
        </Layout>
    );
};

export default Disclaimer;
