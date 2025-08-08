// src/app/layout.tsx
import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Overwatch',
  description: 'A platform that sees far, anticipates and responds.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <header className="header bg-gray-100 shadow-sm">
          <div className="container mx-auto flex justify-between items-center py-4 px-6">
            <h1 className="text-2xl font-bold">Overwatch</h1>
            <nav className="space-x-6 text-lg font-medium">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <Link href="/about" className="hover:text-blue-600">About</Link>
              <Link href="/get-involved" className="hover:text-blue-600">Get Involved</Link>
              <Link href="/posts" className="hover:text-blue-600">Posts</Link>
            </nav>
          </div>
        </header>

        <main className="container mx-auto py-8 px-6 min-h-[70vh]">
          {children}
        </main>

        <footer className="bg-gray-100 py-6 mt-12 shadow-inner">
          <div className="container mx-auto flex justify-between items-center px-6">
            <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} Overwatch. All rights reserved.</p>
            <nav className="space-x-4 text-sm">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <Link href="/about" className="hover:text-blue-600">About</Link>
              <Link href="/get-involved" className="hover:text-blue-600">Get Involved</Link>
              <Link href="/posts" className="hover:text-blue-600">Posts</Link>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
