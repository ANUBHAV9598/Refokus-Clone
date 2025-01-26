import Product from "./Product";
import { useState } from "react";
import { motion } from "framer-motion";

function Products() {
    let products = [
        {
            title: "arqitel",
            description:
                "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
            live: true,
            case: false,
        },
        {
            title: "TTR",
            description:
                "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
            live: true,
            case: false,
        },
        {
            title: "YIR 2022",
            description:
                "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
            live: true,
            case: false,
        },
        {
            title: "Yahoo!",
            description:
                "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
            live: true,
            case: true,
        },
        {
            title: "Rainfall",
            description:
                "We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.",
            live: true,
            case: true,
        },
    ];

    let hover = [
        "#060165",
        "#2e2274",
        "#9156ea",
        "#362b41",
        "#130b1d",
    ]

    const [pos, setPos] = useState(0);
    const mover = (val) => {
        setPos(val * 18);
    };

    return (
        <div className="mt-32 relative">
            {products.map((item, index) => (
                <Product key={index} data={item} mover={mover} count={index} hover={hover[index]} />
            ))}
            <div className="w-full h-full absolute top-0 pointer-events-none">
                <motion.div
                    initial={{ y: pos, x: "-50%" }}
                    animate={{ y: pos + `rem` }}
                    transition={{ease: [0.76, 0, 0.24, 1] , duration: .6 }}
                    className="window absolute left-[45%] w-[25rem] h-[18rem] overflow-hidden rounded-xl"
                >
                    <motion.div animate={{ y: -pos + `rem` }} transition={{ease: [0.76, 0, 0.24, 1] , duration: .5 }} className="w-full h-full">
                        <video autoPlay loop muted src="../assets/videos/arqitel.mp4"></video>
                    </motion.div>
                    <motion.div animate={{ y: -pos + `rem` }} transition={{ease: [0.76, 0, 0.24, 1] , duration: .5 }} className="w-full h-full">
                        <video autoPlay loop muted src="./assets/videos/ttr.mp4"></video>
                    </motion.div>
                    <motion.div animate={{ y: -pos + `rem` }} transition={{ease: [0.76, 0, 0.24, 1] , duration: .5 }} className="w-full h-full">
                        <video autoPlay loop muted src="./assets/videos/yir.mp4"></video>
                    </motion.div>
                    <motion.div animate={{ y: -pos + `rem` }} transition={{ease: [0.76, 0, 0.24, 1] , duration: .5 }} className="w-full h-full">
                        <video autoPlay loop muted src="./assets/videos/yahoo.mp4"></video>
                    </motion.div>
                    <motion.div animate={{ y: -pos + `rem` }} transition={{ease: [0.76, 0, 0.24, 1] , duration: .5 }} className="w-full h-full">
                        <video autoPlay loop muted src="./assets/videos/rainfall.mp4"></video>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}

export default Products;
