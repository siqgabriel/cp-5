import React from 'react';
import Link from 'next/link';

export default function Menu() {
    return (
        <ul className="flex justify-center space-x-8 -mt-2">
            <li className="hover:text-indigo-300 transition duration-300 ease-in-out transform hover:scale-105">
                <Link href="/">Home</Link>
            </li>
            <li className="hover:text-indigo-300 transition duration-300 ease-in-out transform hover:scale-105">
                <Link href="/planetas">Catastrofismo Planetário</Link>
            </li>
            <li className="hover:text-indigo-300 transition duration-300 ease-in-out transform hover:scale-105">
                <Link href="/mitologias">Mitologia Astronômica</Link>
            </li>
            <li className="hover:text-indigo-300 transition duration-300 ease-in-out transform hover:scale-105">
                <Link href="/astros">Reinterpretação da Astronomia</Link>
            </li>
            <li className="hover:text-indigo-300 transition duration-300 ease-in-out transform hover:scale-105">
                <Link href="/calculo">Cálculo</Link>
            </li>
        </ul>
    );
}