'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import photo1 from '../../public/photo1.png';
import renderCV from '../../public/renderCV.png'
import resume2 from '../../public/resume2.png'
import resume3 from '../../public/resume3.png'

const resumeTemplates = [
  {
    id: 1,
    name: 'RenderCV Resume',
    description: 'A CV/resume theme of RenderCV.',
    image: renderCV,
  },
  {
    id: 2,
    name: 'Deedy Resume',
    description: 'Professional Resume for Engineering Students.',
    image: resume2,
  },
  {
    id: 3,
    name: 'MTeck Resume',
    description: 'A LaTeX resume template for software engineers.',
    image: resume3,
  },
];

export default function Home() {
  const router = useRouter();
  const [loadingId, setLoadingId] = useState<number | null>(null);

  const handleClick = (id: number) => {
    setLoadingId(id); // set loading state for this card
    setTimeout(() => {
      router.push(`/resume/${id}`);
    }, 800); // simulate delay / fetch time
  };

 return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-center text-4xl sm:text-5xl font-bold mb-12 text-zinc-800 dark:text-white">
        Choose a Resume Template
      </h1>

      <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {resumeTemplates.map((template) => (
          <div
            key={template.id}
            onClick={() => !loadingId && handleClick(template.id)}
            className={`cursor-pointer group bg-white dark:bg-zinc-900 rounded-2xl shadow-md hover:shadow-xl hover:border-blue-500 transition-all p-4 border dark:border-zinc-700 relative ${
              loadingId && loadingId !== template.id ? 'opacity-50 pointer-events-none' : ''
            }`}
            aria-label={`Select ${template.name} template`}
          >
            {/* Loading Overlay */}
            {loadingId === template.id && (
              <div className="absolute inset-0 bg-white/80 dark:bg-zinc-900/80 flex items-center justify-center rounded-2xl z-10">
                <div
                  className="w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
                  aria-label="Loading template"
                />
              </div>
            )}

            <div className="relative w-full h-96 rounded-lg overflow-hidden bg-zinc-200 dark:bg-zinc-800">
              <Image
                src={template.image}
                alt={template.name}
                fill
                className="object-contain transition-transform group-hover:scale-105 duration-300"
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