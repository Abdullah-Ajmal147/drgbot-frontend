import React from 'react';
import Layout from '../../Components/Layout';

const About = () => {
    return (
        <Layout>
            <div className="p-6 rounded-lg shadow-md w-full sm:w-2/4 mx-auto">
                <h1 className="text-3xl font-bold text-[#FBDB4A] mb-4">Dr. G Bot: Empowering Medical Professionals with AI-Driven Knowledge</h1>
                <p className="text-white text-lg leading-relaxed mb-6">
                    Dr. G Bot is an AI-powered platform revolutionizing how medical professionals access and utilize knowledge. Through its intuitive
                    natural language interface, Dr. G Bot connects healthcare providers with relevant medical literature and clinical guidelines in
                    bite-size knowledge nuggets.
                </p>

                <h2 className="text-2xl font-semibold text-[#FBDB4A] mb-3">Leveraging Cutting-Edge AI Technology</h2>
                <p className="text-white text-lg leading-relaxed mb-6">
                    Dr. G Bot's advanced AI technology ensures rapid access to accurate, up-to-date information, supporting critical decision-making
                    processes. Continuous learning and adaptation of our bot keep users informed about the latest medical research, advancements,
                    and best practices on demand.
                </p>

                <h2 className="text-2xl font-semibold text-[#FBDB4A] mb-3">User-Friendly Interface, Enhancing Your Medical Knowledge</h2>
                <p className="text-white text-lg leading-relaxed mb-6">
                    With its user-friendly interface, Dr. G Bot streamlines access to medical information, fostering informed decisions and
                    innovation in healthcare delivery.
                </p>

                <h2 className="text-2xl font-semibold text-[#FBDB4A] mb-3">Learn Medicine in Quick Bite-Size Chunks</h2>
                <p className="text-white text-lg leading-relaxed">
                    Dr. G Bot presents information in bite-size chunks, allowing medical professionals to learn and reinforce their knowledge
                    efficiently.
                </p>
            </div>
        </Layout>
    );
};

export default About;
