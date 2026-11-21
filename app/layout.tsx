import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const display = Playfair_Display({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-playfair", display: "swap" });
const body = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", display: "swap" });

export const metadata: Metadata = {
  title: "Siya Kolisi: da fome em Zwide ao topo do mundo",
  description: "Exposição digital sobre a vida, a liderança e o percurso espiritual de Siya Kolisi. Curadoria de João Vasconcelos da Costa, N.º 7, 9.º C.",
  authors: [{ name: "João Vasconcelos da Costa" }],
  openGraph: { title: "Siya Kolisi: da fome em Zwide ao topo do mundo", description: "Uma exposição sobre liderança, fé e serviço.", type: "website", locale: "pt_PT" },
};
export const viewport: Viewport = { themeColor: "#071A12" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-PT" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
