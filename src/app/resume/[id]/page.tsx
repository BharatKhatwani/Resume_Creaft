// pages/resume/[id].tsx
'use client'
import { useParams } from 'next/navigation';
// import ResumeEditor from '@/components/ResumeEditor';

export default function ResumePage() {
  const params = useParams();
  const id = params.id;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Editing Resume Template {id}</h1>
      {/* <ResumeEditor templateId={id} /> */}
    </div>
  );
}
