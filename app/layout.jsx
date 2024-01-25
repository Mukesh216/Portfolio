
import { Inter } from "next/font/google";
import "./globals.css";
import Hambur from "./components/Hambur";

import { ImHome } from "react-icons/im";
import { BsInfoCircleFill } from "react-icons/bs";
import { GiProgression } from "react-icons/gi";
import { PiFolderOpenFill } from "react-icons/pi";
import { IoMdContact } from "react-icons/io";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import SideNavbar from "./components/SideNavbar";

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
          <div className="h-screen w-full  md:flex overflow-hidden relative">

            {/* hamburger below md screen */}
            <div className="md:hidden flex items-center w-full">

              <Hambur />

            </div>

            {/* side navbar above md screen  */}

            <div className="w-28 h-full hidden md:flex absolute left-0 top-0">



              {/* <aside className="h-full w-20 group aside-container hover:backdrop-filter transition-all ease-in-out  duration-500 hidden md:flex flex-col space-y-10 items-center justify-center bg-gray-900 ">

                <div className="flex justify-center h-full  w-full items-center relative cursor-pointer">

                  <div className=" w-full py-16 ">



                    <div className="overflow-hidden w-full ">

                      <div className="w-full">
                        <div className="flex items-center justify-center group-hover:translate-x-96  transition-all ease-in-out delay-75 duration-300   ">
                          <span className="w-full hidden group-hover:block -translate-x-80 links-nav text-[3.6rem] text-white tracking-wide ">
                            HOME
                          </span>

                        </div>
                      </div>

                      <div className="w-full">
                        <div className="  flex items-center justify-center group-hover:translate-x-96   transition-all ease-in-out delay-100 duration-500">
                          <span className=" w-full hidden group-hover:block -translate-x-80 links-nav text-[3.6rem] text-white tracking-wide ">
                            WORK
                          </span>
                        </div>

                      </div>

                      <div className="w-full">
                        <div className="  flex items-center justify-center group-hover:translate-x-96  transition-all ease-in-out delay-150 duration-500">
                          <span className=" w-full hidden group-hover:block -translate-x-80 links-nav text-[3.6rem] text-white tracking-wide ">
                            SKILLS
                          </span>
                        </div>

                      </div>

                      <div className="w-full">
                        <div className="  flex items-center justify-center group-hover:translate-x-96  transition-all ease-in-out delay-200 duration-700">

                          <span className=" w-full hidden group-hover:block  -translate-x-80 links-nav text-[3.6rem] text-white tracking-wide ">
                            ABOUT
                          </span>
                        </div>
                      </div>

                      <div className="w-full">
                        <div className="  flex items-center justify-center group-hover:translate-x-96  transition-all ease-in-out delay-300 duration-700 ">
                          <span className=" w-full hidden group-hover:block -translate-x-80 links-nav text-[3.6rem] text-white tracking-wide ">
                            CONTACT
                          </span>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

              </aside> */}

             <SideNavbar />

            </div>



            <main className=" w-full h-full overflow-x-hidden overflow-y-scroll ">
              {children}
            </main>

          </div>
        </section>


      </body>
    </html>
  );
}
