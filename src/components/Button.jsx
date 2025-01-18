/* eslint-disable react/prop-types */
import { IoIosReturnRight } from "react-icons/io";

function Button({title = 'Get Started'}) {
    return (
        <div className="min-w-32 px-4 py-[0.4rem] bg-zinc-100 text-black rounded-full flex items-center justify-between">
            <span className="text-xs font-medium">{title}</span>
            <IoIosReturnRight />
        </div>
    )
}

export default Button