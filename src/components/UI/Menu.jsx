import React, { useState } from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Menu(props) {

    return (
        <>

            <div className={`fixed inset-0 py-8 bg-white min-h-screen w-full transform ${props.isOpen ? 'translate-x-0' : '-translate-x-full'
                } transition-transform duration-300 ease-in-out`}>
                <header className="mb-8">
                    <h1 className="text-4xl font-bold">Divesh</h1>
                </header>

                <nav className="mb-8">
                    <ul className="flex space-x-4">
                        <li><a href="#" className="text-gray-600 hover:text-gray-800">Home</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-gray-800">Work</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-gray-800">Contact</a></li>
                    </ul>
                </nav>

                <main>
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">Home</h2>
                        <p>Welcome to my portfolio website.</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">Work</h2>
                        <p>Check out some of my recent projects.</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">Contact</h2>
                        <p>Get in touch with me:</p>
                        <div className="flex space-x-4 mt-4">
                            <a href="tel:+86 13305969555" className="text-gray-600 hover:text-gray-800">+86 13305969555</a>
                            <a href="mailto:hello@lewiszhang.dev" className="text-gray-600 hover:text-gray-800">hello@lewiszhang.dev</a>
                            <a href="https://twitter.com" className="text-gray-600 hover:text-gray-800"><FaTwitter /></a>
                            <a href="https://linkedin.com" className="text-gray-600 hover:text-gray-800"><FaLinkedin /></a>
                            <a href="https://github.com" className="text-gray-600 hover:text-gray-800"><FaGithub /></a>
                        </div>
                    </section>
                </main>

                <footer className="mt-8 text-sm text-gray-500">
                    <p>Remote from Amoy, China - 1:01 AM UTC+8 - Available</p>
                </footer>
            </div>
        </>
    );
};