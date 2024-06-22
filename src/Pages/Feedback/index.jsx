import React from 'react';
import Layout from '../../Components/Layout';

const Feedback = () => {
    return (
        <Layout>
            <div className="p-6 rounded-lg shadow-md w-full sm:w-2/4 mx-auto">
                <h1 className="text-3xl font-bold text-[#FBDB4A] mb-3">Data Collection </h1>
                <p className="text-white text-lg leading-relaxed mb-6">
                    Dr.G Bot does not collect or store personal health information. User interactions are anonymized.
                </p>

                <h2 className="text-2xl font-semibold text-[#FBDB4A] mb-3">Security Measures</h2>
                <p className="text-white text-lg leading-relaxed mb-6">
                    We prioritize user privacy with regular security audits and updates.
                </p>

                <h2 className="text-2xl font-semibold text-[#FBDB4A] mb-3">Use of Information</h2>
                <p className="text-white text-lg leading-relaxed mb-6">
                    Any collected information is solely used to improve Dr.G Bot’s functionality only used when you respond to something. We do not share or sell user data.
                </p>

                <h2 className="text-2xl font-semibold text-[#FBDB4A] mb-3">Compliance</h2>
                <p className="text-white text-lg leading-relaxed mb-6">
                    Dr.G Bot complies with data protection laws, including GDPR, HIPAA, and COPPA.
                </p>

                <h2 className="text-2xl font-semibold text-[#FBDB4A] mb-3">User Consent</h2>
                <p className="text-white text-lg leading-relaxed mb-6">
                    By using Dr. G Bot and providing feedback, users consent to the collection of non-personal data for
                    improvement purposes.
                </p>
            </div>
        </Layout>
    );
};

export default Feedback;
