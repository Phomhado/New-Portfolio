import './globals.css';
import Header from './components/Header';

export const metadata = {
  title: 'My Portfolio',
  description: 'Portfolio built with Next.js, TypeScript, and TailwindCSS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <Header />
        {children}
      </body>
    </html>
  );
}
