import './globals.scss';
import { Providers } from './providers';

export const metadata = {
  title: 'DB2Hub',
  description: 'IBM DB2 Hub Information Portal',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
