import './globals.css';

export const metadata = {
  title: 'Google Clone',
  description: 'Clone profissional da página de pesquisa do Google',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
