'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import photo1 from '../../public/photo1.png';

const resumeTemplates = [
  {
    id: 1,
    name: 'RenderCV Resume',
    description: 'A CV/resume theme of RenderCV.',
    image: photo1,
  },
  {
    id: 2,
    name: 'Deedy Resume',
    description: 'Professional Resume for Engineering Students.',
    image: photo1,
  },
  {
    id: 3,
    name: 'MTeck Resume',
    description: 'A LaTeX resume template for software engineers.',
    image: photo1,
  },
];

export default function Home() {
  const router = useRouter();
  const [loadingId, setLoadingId] = useState<number | null>(null);

  const handleClick = (id: number) => {
    setLoadingId(id); // set loading state for this card
    setTimeout(() => {
      router.push(`/resume/${id}`);
    }, 1200); // simulate delay / fetch time
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-center text-4xl sm:text-5xl font-bold mb-12 text-zinc-800 dark:text-white">
        Choose a Resume Template
      </h1>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {resumeTemplates.map((template) => (
          <div
            key={template.id}
            onClick={() => !loadingId && handleClick(template.id)}
            className={`cursor-pointer group bg-white dark:bg-zinc-900 rounded-2xl shadow-md hover:shadow-xl transition p-4 border dark:border-zinc-700 relative ${
              loadingId && loadingId !== template.id ? 'opacity-50 pointer-events-none' : ''
            }`}
          >
            {/* Loading Overlay */}
            {loadingId === template.id && (
              <div className="absolute inset-0 bg-white/80 dark:bg-zinc-900/80 flex items-center justify-center rounded-2xl z-10">
                <div className="w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
              </div>
            )}

            <div className="relative w-full h-96 rounded-lg overflow-hidden bg-zinc-200 dark:bg-zinc-800">
              <Image
                src={template.image}
                alt={template.name}
                fill
                className="object-contain transition group-hover:scale-105 duration-300"
              />
            </div>

            <div className="mt-4 text-center">
              <h2 className="text-lg font-semibold text-zinc-800 dark:text-white">
                {template.name}
              </h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                {template.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
