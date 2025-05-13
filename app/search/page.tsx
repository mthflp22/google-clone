'use client';

import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { FormEvent, useRef } from 'react';

export default function SearchPage() {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('term');

  const search = (e: FormEvent) => {
    e.preventDefault();
    const term = searchInputRef.current?.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          <Image
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            alt="Google Logo"
            width={92}
            height={30}
            className="cursor-pointer"
            onClick={() => router.push('/')}
          />
          <form className="flex items-center w-[600px] px-5 py-3 border border-gray-200 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow">
            <svg className="h-5 w-5 text-gray-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              ref={searchInputRef}
              type="text"
              defaultValue={searchTerm || ''}
              className="flex-grow focus:outline-none"
            />
            <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
          </form>
        </div>
        <div className="flex items-center space-x-4">
          <button className="btn">Gmail</button>
          <button className="btn">Imagens</button>
        </div>
      </header>

      {/* Search Results */}
      <div className="max-w-3xl mx-auto px-4 py-6">
        <p className="text-sm text-gray-600 mb-4">
          Aproximadamente 0 resultados (0.39 segundos)
        </p>

        <div className="space-y-8">
          {/* Aqui você pode adicionar os resultados da pesquisa */}
          <div className="group">
            <a href="#" className="text-sm text-gray-600 group-hover:underline">
              www.exemplo.com
            </a>
            <h2 className="text-xl text-blue-800 group-hover:underline cursor-pointer">
              Título do Resultado
            </h2>
            <p className="text-sm text-gray-600">
              Descrição do resultado da pesquisa...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 