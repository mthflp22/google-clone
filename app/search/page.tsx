'use client';

import { MagnifyingGlassIcon, MicrophoneIcon } from '@heroicons/react/24/outline';
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
            <MagnifyingGlassIcon className="h-5 text-gray-500 mr-3" />
            <input
              ref={searchInputRef}
              type="text"
              defaultValue={searchTerm || ''}
              className="flex-grow focus:outline-none"
            />
            <MicrophoneIcon className="h-5 text-gray-500" />
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