import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const apiKey = '6OX62rxX69TozOKFYRjjvKCdjfJRjPYu6H1lBNY1';
    const nasaApiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=50`;

    const response = await fetch(nasaApiUrl);
    if (!response.ok) {
      throw new Error(`Erro na resposta da API da NASA: ${response.statusText}`);
    }

    const data: { title: string; url: string; date: string }[] = await response.json();
    const images = data.map((item) => ({
      title: item.title,
      url: item.url,
      date: item.date,
    }));

    return NextResponse.json(images);
  } catch (error: any) {
    console.error('Erro ao buscar imagens da NASA:', error.message, error.stack);
    return NextResponse.json(
      { error: 'Erro ao buscar imagens da NASA', details: error.message },
      { status: 500 }
    );
  }
}