import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="h-screen w-screen">
      <head>
        <title>It's Me. Portfolio.</title>
      </head>

      <body className="text-2xl bg-slate-500">
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
