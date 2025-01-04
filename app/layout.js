
import "./globals.css";
import { Inter } from 'next/font/google'; 
import {ClerkProvider} from "@clerk/nextjs";
import Header from "@/components/Header";
import { Toaster } from "sonner";


const inter = Inter ({ subsets: ["latin"] });

export const metadata = {
  title: "Task Tracker",
  description: "Task Management WebApp",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${inter.className} dotted-background`}
      >
        <Header />
       
       <main className="min-h-screen">
       
         {children}

       </main>

       <Toaster richColors/>

       <footer className="bg-gray-900 py-4">
        <div className="container mx-auto p-4 text-center text-gray-50">
        <p className="font-semibold text-sm">Made With ❤️ by IMAMUL TANVIR</p>
        </div>
       </footer>

       


      </body>
    </html>
    </ClerkProvider>
  );
}
