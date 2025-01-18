/* eslint-disable react/prop-types */
import Button from "./Button"
import { motion } from "framer-motion";


function Product({data,mover,count,hover}) {
    return (
        <motion.div 
            whileHover={{backgroundColor: `${hover}`, transition: {duration: 0.7, ease: "easeInOut", delay: 0.1}}}
            className="w-full h-[18rem] py-20 text-white">
            <div onMouseEnter={()=>{mover(count)}} className="max-w-screen-lg mx-auto flex items-center justify-between">
                <h1 className="text-5xl capitalize font-medium">{data.title}</h1>
                <div className="dets w-1/3">
                    <p className="mb-10">{data.description}</p>
                    <div className="flex items-center gap-10">
                        {data.live && <Button />}
                        {data.case && <Button title="Case Study" />}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Product