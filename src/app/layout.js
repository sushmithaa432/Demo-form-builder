import React from 'react';
import Navbar from './components/navbar/navbar';

export const metadata = {
  title: 'Form Builder',
  description: 'A modern form-building application',
};

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className="bg-gray-100">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default Layout;