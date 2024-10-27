"use client"
import { useState, useEffect } from "react";
import { TipoConteudo } from "@/types";
import { TipoNasa } from "@/types";
import Link from "next/link";

export default function PlanetaryDisasters() {
  const [catastrophes, setCatastrophes] = useState<TipoNasa[]>([]);
  const [contents, setContents] = useState<TipoConteudo[]>([]);

  useEffect(() => {
    async function fetchCatastrophes() {
      try {
        const response = await fetch('/api/base-nasa');
        const data = await response.json();
        setCatastrophes(data);
      } catch (error) {
        console.error('Erro ao buscar catástrofes:', error);
      }
    }

    async function fetchContents() {
      try {
        const response = await fetch('/api/base-conteudo');
        const data = await response.json();
        setContents(data.slice(0, 4));
      } catch (error) {
        console.error('Erro ao buscar conteúdos:', error);
      }
    }

    fetchCatastrophes();
    fetchContents();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-row justify-around rounded-3xl shadow-md shadow-purple-900 p-10">
        <div className="w-50 text-left">
          <h1 className="text-3xl font-bold mb-4">Catastrofismo Planetário</h1>
          <p className="mr-10 text-xl">
            Velikovsky propõe que catástrofes naturais na Terra foram causadas por interações planetárias, como passagens próximas de planetas (Vênus e Marte) pela órbita terrestre. Essas interações, segundo ele, causaram eventos como terremotos, tsunamis e mudanças climáticas globais.
          </p>
        </div>
        <div className="w-30">
          {catastrophes.length > 0 && (
            <img src={catastrophes[28].url} alt={catastrophes[28].title} className="w-30 h-30 mb-4" />
          )}
        </div>
      </div>

      <h3 className="text-2xl font-bold py-20">Conheça os principais tópicos:</h3>

      <ul className="flex flex-col items-start">
      {contents.map((content, index) => (
        <li key={content.id} className="flex flex-col items-start space-y-2 py-6">
          <h3 className="text-xl font-semibold">{content.titulo}</h3>
          <div className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors duration-300">
            <Link href={`/planetas/planeta/${content.id}`}>Saiba mais</Link>
          </div>
        </li>
      ))}
    </ul>
    </div>
  );
}