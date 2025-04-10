import '../globals.css';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Типография',
  description: 'Современные полиграфические услуги: визитки, буклеты, каталоги и многое другое.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}