import '../styles/globals.css';
import { ToastProvider } from '@/components/ui/toast';

export const metadata = { title: 'Meshalive', description: 'A living network of links.' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
