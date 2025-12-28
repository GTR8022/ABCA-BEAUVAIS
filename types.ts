import React from 'react';

export interface ServiceItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}