'use client'


import { useState } from "react"
import ThemeMode from "./ThemeMode"


const Hambur = () => {

    const [open, setOpen] = useState(false)

    return (
        <section className="h-auto w-full fixed top-0 bg-red-100">

            <header className="md:hidden flex items-center h-16 w-full  ">

                <div className="w-full h-full flex items-center ">

                    <div className="">
                        <div>PORTFOLIO</div>
                    </div>

                    <div className="fixed right-24 w-12 h-6">
                        <ThemeMode />
                    </div>


                    <div className="fixed right-6 w-12 h-10 ">
                        <button
                            className="rounded-md border-2  border-black w-full h-full flex justify-center items-center"
                            onClick={
                                () => { setOpen(!open) }
                            }
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
                        </button>
                    </div>

                </div>
            </header>

            <div className={`h-screen w-full  opacity-70 ${open ? 'block' : 'hidden'}`}>
                <div className="w-full bg-black  h-full relative">
                    <ul className="space-y-24 w-full text-center pb-12 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        
                        <li className="border w-full p-3 py-6 border-l-0 border-r-0">HOME</li>
                        
                        <li>ABOUT</li>
                        
                        <li>SKILLS</li>
                        
                        <li>PROJECTS</li>
                        
                        <li>CONTACT</li>
                    </ul>
                </div>
            </div>


        </section>
    )
}

export default Hambur