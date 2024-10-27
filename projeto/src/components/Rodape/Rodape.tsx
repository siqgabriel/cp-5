import React from 'react';
import Link from 'next/link';

export default function Rodape() {
    return (
        <footer className="bg-gradient-to-r from-blue-900 via-purple-900 to-black text-white p-4 relative">
            <div className="absolute inset-0 bg-stars-pattern opacity-20 pointer-events-none"></div>
            <div className="relative">
                <nav>
                    <ul className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4">
                        <li className="hover:text-indigo-300 transition duration-300 ease-in-out transform hover:scale-105">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="hover:text-indigo-300 transition duration-300 ease-in-out transform hover:scale-105">
                            <Link href="/about">About</Link>
                        </li>
                        <li className="hover:text-indigo-300 transition duration-300 ease-in-out transform hover:scale-105">
                            <Link href="/contact">Contact</Link>
                        </li>
                        <li className="hover:text-indigo-300 transition duration-300 ease-in-out transform hover:scale-105">
                            <Link href="https://api.nasa.gov/" target="_blank" rel="noopener noreferrer">NASA API</Link>
                        </li>
                    </ul>
                </nav>
                <p className="text-center mt-4">Criado por: IdeaTec</p>
                <p className="text-center">&copy; Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}