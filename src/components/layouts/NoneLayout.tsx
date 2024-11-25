'use client';

import '@/styles/layout.css';
import React from 'react';

export default function NoneLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="min-height-layout display-flex-column">{children}</div>
    </>
  );
}
