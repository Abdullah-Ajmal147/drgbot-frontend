import React from 'react';
import Layout from '../../Components/Layout';

const EssentialPoints = () => {
    return (
        <Layout>
            <div className="p-6 rounded-lg shadow-md max-w-lg mx-auto">
                <ul className="list-disc list-inside space-y-4">
                    <li className="text-white text-lg">Ask Anything Medical</li>
                    <li className="text-white text-lg">Our Bot is currently in training</li>
                    <li className="text-white text-lg">Information from reputable sources</li>
                    <li className="text-white text-lg">For medical professionals</li>
                    <li className="text-white text-lg">Please verify information independently</li>
                    <li className="text-white text-lg">Not a personalized medical advice</li>
                    <li className="text-white text-lg">Supplemental learning</li>
                    <li className="text-white text-lg">Promotes learning & growth</li>
                    <li className="text-white text-lg">Your feedback is valued</li>
                    <li className="text-white text-lg">For educational purposes only</li>
                </ul>
            </div>
        </Layout>
    );
};

export default EssentialPoints;
