import { Inter } from 'next/font/google';
import '../styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

function MyApp({ Component, pageProps }) {
  return (
    <div className={inter.variable}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp
