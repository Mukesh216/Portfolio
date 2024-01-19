
import { Inter } from "next/font/google";
import "./globals.css";
import Hambur from "./Hambur";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mukesh Portfolio",
  description: "Designed and Developed by Mukesh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <section className="w-full h-screen">
            <div className="h-screen w-full bg-white md:flex overflow-hidden">
             
              <div className="md:hidden flex items-center w-full">
               
                <Hambur />
              
              </div>

              
              <aside className="h-full w-20 hidden md:flex flex-col space-y-10 items-center justify-center relative bg-gray-800 text-white">
                ASIDE
              </aside>


             
              <main className="bg-sky-400 w-full h-full overflow-x-hidden overflow-y-scroll ">
                {children}
              </main>
              </div>
        </section>


      </body>
    </html>
  );
}
