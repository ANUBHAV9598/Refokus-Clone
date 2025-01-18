/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

function Marquee({ imagesurls, direction }) {
    return (
        <div className="flex w-full overflow-hidden">
            <motion.div
                initial={{ x: direction === "left" ? "-100%" : "0" }}
                animate={{ x: direction === "left" ? "0" : "-100%" }}
                transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
                className="flex flex-shrink-0 gap-10 py-10 pr-10"
            >
                {imagesurls.map((url, index) => (
                    <img key={index} src={url} className="" />
                ))}
            </motion.div>
            <motion.div
                initial={{ x: direction === "left" ? "-100%" : "0" }}
                animate={{ x: direction === "left" ? "0" : "-100%" }}
                transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
                className="flex flex-shrink-0 gap-10 py-10 pr-10"
            >
                {imagesurls.map((url, index) => (
                    <img key={index} src={url} className="" />
                ))}
            </motion.div>
        </div>
    );
}

export default Marquee;