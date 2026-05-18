export const metadata = {
  title: 'Meshalive',
  description: 'A living network of links.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
