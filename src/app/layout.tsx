import { Inter } from 'next/font/google';
import './globals.css';
// START fix error: Styles not applied in first loading correctly
// import '@/app/xxx/layout.module.css';
// import '@/components/xxx/xxx.module.css';
// END fix error: Styles not applied in first loading correctly
import { AntdRegistry } from '@ant-design/nextjs-registry';
import React from 'react';
import { Toaster } from 'react-hot-toast';
import LayoutManagement from '@/components/layouts/LayoutManagement';
import { Viewport } from 'next';
import { headers } from 'next/headers';
import { LocaleProvider } from '@/contexts/LocaleContext';
import ReduxProvider from '@/redux/redux-provider';

const PATH_MAXIMUM_SCALE_1_1 = ['/'];

const inter = Inter({ subsets: ['latin'] });

export const viewport = async (): Promise<Viewport> => {
  const headerList = await headers();
  const pathname = headerList.get('x-current-path');
  return {
    width: 'device-width',
    initialScale: 1,
    maximumScale: PATH_MAXIMUM_SCALE_1_1.includes(pathname || '') ? 1.1 : 1,
  };
};

function RootLayout({
                      children,
                    }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <title>Base NextJs</title>
      <meta name="description" content="Base Next" />
    </head>
    <body className={inter.className} suppressHydrationWarning>
    <Toaster />
    <AntdRegistry>
      <LocaleProvider>
        <ReduxProvider>
          <LayoutManagement>{children}</LayoutManagement>
        </ReduxProvider>
      </LocaleProvider>
    </AntdRegistry>
    </body>
    </html>
  );
}

export default RootLayout;
