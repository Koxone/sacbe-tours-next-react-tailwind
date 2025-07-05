import './globals.css';
import I18nProvider from '@/components/providers/I18nProvider';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import { ContextProvider } from '@/context/ProjectContext';

export const metadata = {
  title: 'Sacbe Tours',
  description: 'Developed by Koxland Inc.',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ContextProvider>
          <I18nProvider>
            <div className="grid min-h-screen grid-rows-[auto_1fr_auto]">
              <Header />
              <main>{children}</main>
              <Footer />
            </div>
          </I18nProvider>
        </ContextProvider>
      </body>
    </html>
  );
}
