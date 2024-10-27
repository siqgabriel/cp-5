"use client"
import { useState, useEffect } from "react";
import { TipoConteudo } from "@/types";

interface Params {
  id: string;
}

export default function PlanetaryDisasters({ params }: { params: Params }) {
  const [conteudo, setConteudo] = useState<TipoConteudo | null>(null);
  const [catastrophes, setCatastrophes] = useState<{ url: string; title: string }[]>([]);

  useEffect(() => {
    async function fetchConteudo() {
      try {
        const response = await fetch(`/api/base-conteudo/${params.id}`);
        const data = await response.json();
        setConteudo(data);
      } catch (error) {
        console.error('Erro ao buscar conteúdo:', error);
      }
    }

    async function fetchCatastrophes() {
      try {
        const response = await fetch('/api/base-nasa');
        const data = await response.json();
        setCatastrophes(data);
      } catch (error) {
        console.error('Erro ao buscar catástrofes:', error);
      }
    }

    fetchConteudo();
    fetchCatastrophes();
  }, [params.id]);

  if (!conteudo) {
    return <div className="h-screen flex items-center justify-center">Carregando...</div>;
  }

  return (
    <div className="h-screen p-8">
      <h1 className="text-3xl font-bold mb-4">{conteudo.titulo}</h1>
      <p className="text-lg mb-6">{conteudo.texto}</p>
      <div className="w-30">
        {catastrophes.length > 0 && (
          <img src={catastrophes[25].url} alt={catastrophes[25].title} className="w-30 h-30 mb-4 rounded shadow-lg" />
        )}
      </div>
    </div>
  );
}