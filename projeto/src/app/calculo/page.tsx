"use client"
import { useState, useEffect } from "react";

export default function Calculo() {
  const [massa1, setMassa1] = useState('');
  const [massa2, setMassa2] = useState('');
  const [distancia, setDistancia] = useState('');
  const [forca, setForca] = useState<number | null>(null);
  const [imagem, setImagem] = useState<string | null>(null);

  useEffect(() => {
    async function fetchImagem() {
      try {
        const response = await fetch('/api/base-nasa');
        const data = await response.json();
        setImagem(data[0].url); 
      } catch (error) {
        console.error('Erro ao buscar imagem:', error);
      }
    }

    fetchImagem();
  }, []);

  const calcularForca = () => {
    const G = 6.67430e-11;
    const m1 = parseFloat(massa1);
    const m2 = parseFloat(massa2);
    const d = parseFloat(distancia);

    if (isNaN(m1) || isNaN(m2) || isNaN(d) || d === 0) {
      alert('Por favor, insira valores válidos.');
      return;
    }

    const f = (G * m1 * m2) / (d * d);
    setForca(f);
  };

  return (
    <div className="min-h-screen p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Cálculo da Lei da Gravitação Universal de Newton</h1>
      <div className="w-full max-w-md bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700">Massa do corpo 1 (kg):</label>
          <input
            type="number"
            value={massa1}
            onChange={(e) => setMassa1(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Massa do corpo 2 (kg):</label>
          <input
            type="number"
            value={massa2}
            onChange={(e) => setMassa2(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Distância entre os corpos (m):</label>
          <input
            type="number"
            value={distancia}
            onChange={(e) => setDistancia(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <button
          onClick={calcularForca}
          className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors duration-300"
        >
          Calcular Força
        </button>
        {forca !== null && (
          <div className="mt-4 p-4 bg-green-100 text-green-800 rounded">
            <p>Força Gravitacional: {forca.toExponential(2)} N</p>
          </div>
        )}
      </div>
      {imagem && (
        <div className="mt-8">
          <img src={imagem} alt="Imagem da NASA" className="w-full max-w-md rounded shadow-md" />
        </div>
      )}
    </div>
  );
}