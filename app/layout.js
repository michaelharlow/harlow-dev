import Header from '@components/Header';
import '@styles/globals.css';
import { Inter, Signika } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const signika = Signika({ weight: '400', variable: '--font-signika', subsets: ['latin'] });

export const metadata = {
  title: 'Michael Harlow',
  description: 'Welcome to my website!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`h-[100vh] w-full ${inter.className} ${signika.className}`}>
        <Header />
        <div>{children}</div>
      </body>
    </html>
  );
}
