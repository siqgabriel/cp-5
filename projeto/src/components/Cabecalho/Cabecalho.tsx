import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Menu from '../Menu/Menu';

export default function Cabecalho() {
    return (
        <header className="bg-gradient-to-r from-blue-900 via-purple-900 to-black text-white p-4 relative">
            <div className="absolute inset-0 bg-stars-pattern opacity-20 pointer-events-none"></div>
            <div className="relative flex flex-col md:flex-row items-center md:items-start">
                <Image
                    src="/path/to/your/group-image.jpg"
                    alt="Imagem do Grupo"
                    width={150}
                    height={150}
                    className="rounded-full"
                />
                <div className="mt-4 md:mt-0 md:ml-4 text-center md:text-left">
                    <h1 className="text-2xl font-bold text-indigo-300">Integração com a API da NASA</h1>
                    <p className="text-sm text-indigo-200">Explore o universo com dados das APIs da NASA</p>
                </div>
            </div>
            <nav className="mt-4">
                <ul className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-4">
                    <Menu />
                </ul>
            </nav>
        </header>
    );
}