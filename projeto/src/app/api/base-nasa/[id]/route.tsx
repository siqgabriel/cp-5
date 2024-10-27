import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'ID não fornecido' }, { status: 400 });
    }

    const apiKey = '6OX62rxX69TozOKFYRjjvKCdjfJRjPYu6H1lBNY1';
    const nasaApiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${id}`;

    const response = await fetch(nasaApiUrl);
    if (!response.ok) {
      throw new Error(`Erro na resposta da API da NASA: ${response.statusText}`);
    }

    const data: { title: string; url: string; date: string } = await response.json();

    const image = {
      title: data.title,
      url: data.url,
      date: data.date,
    };

    return NextResponse.json(image);
  } catch (error: any) {
    console.error('Erro ao buscar imagem da NASA:', error.message, error.stack);
    return NextResponse.json(
      { error: 'Erro ao buscar imagem da NASA', details: error.message },
      { status: 500 }
    );
  }
}