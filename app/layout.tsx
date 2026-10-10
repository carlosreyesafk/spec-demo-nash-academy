export const metadata = {
  title: 'Nash Academy | Academia de maquillaje profesional',
  description: 'Nash Academy: academia de maquillaje profesional con sedes en Santo Domingo, Santiago y Higüey, y su propia línea Nash MakeUp. Inscríbete por WhatsApp',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
