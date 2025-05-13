'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FormEvent, useRef } from 'react';

export default function Home() {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const search = (e: FormEvent) => {
    e.preventDefault();
    const term = searchInputRef.current?.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Image
        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        alt="Google Logo"
        width={272}
        height={92}
        className="mb-8"
      />

      <form className="flex flex-col items-center w-full max-w-xl px-4">
        <div className="flex items-center w-full max-w-2xl px-5 py-3 border border-gray-200 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow">
          <svg className="h-5 w-5 text-gray-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow focus:outline-none"
          />
          <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
          </svg>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <button
            onClick={search}
            className="btn"
          >
            Pesquisa Google
          </button>
          <button
            onClick={() => alert("Funcionalidade em desenvolvimento")}
            className="btn"
          >
            Estou com sorte
          </button>
        </div>
      </form>
    </div>
  );
} 