import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { CityProvider } from "@/contexts/CityContext";

export const metadata: Metadata = {
  title: "Via Italia — Помощь иммигрантам",
  description: "Помощь иммигрантам из СНГ по всей Италии — документы, учреждения, советы",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          <CityProvider>{children}</CityProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
