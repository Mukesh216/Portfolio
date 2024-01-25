'use client'

import { useState } from 'react';
import { RxCross1 } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";

export default function SideNavbar() {

    const [isHovered, setIsHovered] = useState(false);

    const [rotation, setRotation] = useState(0);

    const handleMouseMove = (event) => {
        const button = event.currentTarget;
        const rect = button.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        const angle = Math.atan2(y, x) * (180 / Math.PI);
        setRotation(angle);
    };

    const handleMouseLeave = () => {
        setRotation(0);
    };

    return (

        <div className="relative w-full h-full">

            <button
                className="text-white text-2xl w-24 h-24 z-30 absolute left-4 top-4 rounded-full bg-blue-500"
                onClick={() => setIsHovered(!isHovered)}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >

                <span
                    className='w-full h-full flex justify-center items-center transition-opacity duration-300'
                    style={{ transform: `rotate(${rotation}deg)` }}
                    >
                    {isHovered ?
                        <RxCross1 className={isHovered ? 'opacity-1 ' : 'opacity-0'} /> :
                        <RxHamburgerMenu className={isHovered ? 'opacity-0' : 'opacity-1'} />
                    }
                </span>
            </button>



            {(
                isHovered ? (
                    <div className="absolute w-[100vw] transition-opacity ease-in-out duration-300 bg-transparent backdrop-blur-sm  h-full"></div>

                ) : null
            )}
            <div
                className={`absolute flex flex-col items-center justify-center bg-gray-900 h-full ${isHovered ? 'aside-container group w-[30vw]' : ''}`}
            >

                <div className="flex justify-center h-full  w-full items-center relative cursor-pointer">

                    <div className=" w-full py-16 ">
                        <div className="overflow-hidden w-full ">

                            <div className="w-full">
                                <div className="flex items-center justify-center group-[]:translate-x-96  transition-all ease-in-out delay-75 duration-300   ">
                                    <span className="w-full hidden group-[]:block -translate-x-80 links-nav text-[3.6rem] text-white tracking-tight font-semibold mt-1">
                                        Home
                                    </span>

                                </div>
                            </div>

                            <div className="w-full">
                                <div className="  flex items-center justify-center group-[]:translate-x-96   transition-all ease-in-out delay-100 duration-500">
                                    <span className=" w-full hidden group-[]:block -translate-x-80 links-nav text-[3.6rem] text-white tracking-tight font-semibold mt-1">
                                        Work
                                    </span>
                                </div>

                            </div>

                            <div className="w-full">
                                <div className="  flex items-center justify-center group-[]:translate-x-96  transition-all ease-in-out delay-150 duration-500">
                                    <span className=" w-full hidden group-[]:block -translate-x-80 links-nav text-[3.6rem] text-white tracking-tight font-semibold mt-1">
                                        Skills
                                    </span>
                                </div>

                            </div>

                            <div className="w-full">
                                <div className="  flex items-center justify-center group-[]:translate-x-96  transition-all ease-in-out delay-200 duration-700">

                                    <span className=" w-full hidden group-[]:block  -translate-x-80 links-nav text-[3.6rem] text-white tracking-tight font-semibold mt-1">
                                        About
                                    </span>
                                </div>
                            </div>

                            <div className="w-full">
                                <div className="  flex items-center justify-center group-[]:translate-x-96  transition-all ease-in-out delay-300 duration-700 ">
                                    <span className=" w-full hidden group-[]:block -translate-x-80 links-nav text-[3.6rem] text-white tracking-tight font-semibold mt-1">
                                        Contact
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </div>

        </div>


    )
}

