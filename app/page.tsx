'use client';

import { MagnifyingGlassIcon, MicrophoneIcon } from '@heroicons/react/24/outline';
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
          <MagnifyingGlassIcon className="h-5 text-gray-500 mr-3" />
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow focus:outline-none"
          />
          <MicrophoneIcon className="h-5 text-gray-500" />
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