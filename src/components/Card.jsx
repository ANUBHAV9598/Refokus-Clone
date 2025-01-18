/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { IoIosArrowRoundForward } from "react-icons/io";

function Card({width,start,para,hov="false",head1,head2,head3,head4}) {
    return (
        <motion.div 
            whileHover={{backgroundColor: hov==="true" ? "#7443ff" : "#404149", padding: "25px"}}
            className={`${width} bg-zinc-800 p-5 rounded-xl min-h-[25rem] flex flex-col justify-between`}>
            <div className="w-full">
                <div className="w-full flex items-center justify-between">
                    {
                        <>
                            {
                                head2 &&
                                (
                                    <h3 className="text-xs text-zinc-200">Up Next: Culture</h3>
                                )
                            }

                            {
                                head4 &&
                                (
                                    <h3 className="text-xs text-zinc-200">Get In Touch</h3>
                                )
                            }
                        </>
                    }
                    <IoIosArrowRoundForward className="text-2xl" />
                </div>
                {
                    <>
                        {
                            head1 && 
                            (
                                <h1 className="text-3xl mt-5">Who we are</h1>
                            )
                        }
                        
                        {
                            head3 && 
                            (
                                <h1 className="w-[35%] text-3xl mt-5">Let&apos;s get to it, together.</h1>
                            )
                        }
                    </>
                }
            </div>  
            <div className="down w-full">
                {
                    start && (
                        <>
                            <h1 className="text-[5vw] font-semibold leading-none tracking-tight">Start a Project</h1>
                            <button className="rounded-full text-xs mt-3 py-2 px-5 border-[1px] border-zinc-50">Contact us</button>
                        </>
                    )
                }

                {
                    para && (
                        <p className="text-sm text-zinc-500 font-medium">Explore what drives our team.</p>
                    )
                }
            </div>
        </motion.div>
    )
}

export default Card