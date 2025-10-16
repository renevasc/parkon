import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastProvider } from "@/components/ToastContainer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ParkOn - Sistema de Apoio à Decisão",
  description: "Sistema de apoio à decisão de elegibilidade para neurocirurgia funcional em pacientes com Parkinson",
  keywords: "Parkinson, neurocirurgia, DBS, elegibilidade, saúde",
  authors: [{ name: "Ambulatório de Transtornos do Movimento HU-UFS" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <ToastProvider>
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}
