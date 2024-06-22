import React from 'react';
import Layout from '../../Components/Layout';

const FAQ = () => {
    return (
        <Layout>
            <div className="p-6 rounded-lg shadow-md w-full sm:w-2/4 mx-auto">
                <h1 className="text-3xl font-bold text-[#FBDB4A] mb-3">What can Dr.G Bot do?</h1>
                <p className="text-white text-lg leading-relaxed mb-6">
                    Dr.G Bot leverages advanced natural language processing to provide general medical information, explain concepts, and summarize research
                    findings. It cannot provide personalized medical advice, diagnose conditions, or recommend treatments.
                </p>

                <h2 className="text-2xl font-semibold text-[#FBDB4A] mb-3">How can users provide feedback or report errors?</h2>
                <p className="text-white text-lg leading-relaxed mb-6">
                    Users can provide feedback through a form on the Dr.G Bot website or by emailing us directly. Future plans include a rating system for
                    responses.
                </p>

                <h2 className="text-2xl font-semibold text-[#FBDB4A] mb-3">Is Dr. G Bot integrated with electronic health records or other medical systems?</h2>
                <p className="text-white text-lg leading-relaxed mb-6">
                    No, Dr.G Bot is a standalone educational resource and does not interact with personal medical records. We keep any personal records of you.
                </p>

                <h2 className="text-2xl font-semibold text-[#FBDB4A] mb-3">Is there a pricing or subscription model?</h2>
                <p className="text-white text-lg leading-relaxed mb-6">
                    No, it is currently offered as a free service.
                </p>

                <h2 className="text-2xl font-semibold text-[#FBDB4A] mb-3">How does Dr.G Bot compare to human medical professionals?</h2>
                <p className="text-white text-lg leading-relaxed mb-6">
                    Dr.G Bot is designed to support, not replace, medical professionals. While it provides quick access to medical information, human medical
                    professionals offer personalized care that AI cannot replicate.
                </p>
                <h2 className="text-2xl font-semibold text-red-600 mb-3">We hope this addresses your key concerns about Dr.G Bot. Please let us know if you have further questions or feedback.</h2>
            </div>
        </Layout>
    );
};

export default FAQ;
