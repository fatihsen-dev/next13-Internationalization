import "@/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
   title: "Create Next App",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang="en">
         <body className={inter.className}>
            <main className="flex-1">{children}</main>
         </body>
      </html>
   );
}
