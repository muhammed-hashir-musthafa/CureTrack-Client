

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
          id="portalRoot"
      >
        {children}
      </body>
    </html>
  );
}
