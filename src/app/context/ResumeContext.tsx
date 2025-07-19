'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define types for form sections
interface PersonalInfo {
  name: string;
  email: string;
  phone?: string; // Optional
}

interface Education {
  institution: string;
  degree: string;
  year: string;
}

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

interface Project {
  title: string;
  description: string;
}

interface Achievement {
  title: string;
  date: string;
}

interface FormData {
  personalInfo: PersonalInfo;
  education: Education[];
  experience: Experience[];
  projects: Project[];
  skills: string[];
  achievment: Achievement[]; // Structured achievement data
}

// Define the context type
interface ResumeContextType {
  template: number | null; // Allow null for no preselection
  setTemplate: (id: number | null) => void;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

// Create the context with default value as undefined
const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

// Provider Props
interface ResumeProviderProps {
  children: ReactNode;
}

export function ResumeProvider({ children }: ResumeProviderProps) {
  const [template, setTemplate] = useState<number | null>(null); // No default template
  const [formData, setFormData] = useState<FormData>({
    personalInfo: { name: '', email: '', phone: '' },
    education: [{ institution: '', degree: '', year: '' }],
    experience: [{ title: '', company: '', period: '', description: '' }],
    projects: [{ title: '', description: '' }],
    skills: [''],
    achievment: [{ title: '', date: '' }], // Structured initial value
  });

  return (
    <ResumeContext.Provider value={{ template, setTemplate, formData, setFormData }}>
      {children}
    </ResumeContext.Provider>
  );
}

// Custom hook
export const useResume = (): ResumeContextType => {
  const context = useContext(ResumeContext);
  if (!context) {
    throw new Error('useResume must be used within a ResumeProvider');
  }
  return context;
};