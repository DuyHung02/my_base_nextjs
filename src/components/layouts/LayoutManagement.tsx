'use client';

import React, { useEffect } from 'react';
import { Role } from '@/types/auth';
import NoneLayout from '@/components/layouts/NoneLayout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function LayoutManagement({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const dataLocal = localStorage.getItem('auth');
  const [layout, setLayout] = React.useState<React.ReactNode>(children);

  // useEffect(() => {
    // let authRole;
    // if (dataLocal) {
    //   const roleData = JSON.parse(dataLocal)
    //   if (roleData) {
    //     authRole = JSON.parse(roleData.role);
    //   }
    // }
    // let layoutTemp = <NoneLayout>{children}</NoneLayout>;
    // switch (authRole) {
    //   case Role.GUEST:
    //     layoutTemp = <NoneLayout>{children}</NoneLayout>;
    //     break;
    //   default:
    //     break;
    // }
  //   setLayout(layoutTemp);
  // }, [dataLocal, children]);

  return (
    <QueryClientProvider client={queryClient}>{layout}</QueryClientProvider>
  );
}

export default LayoutManagement;
