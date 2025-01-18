
function Footer() {
    return (
        <div className="w-full">
            <div className="max-w-screen-xl mx-auto py-10 flex gap-32">
                <div className="basis-1/2 flex flex-col gap-14">
                    <h1 className="text-[11.5rem] leading-none font-semibold tracking-tight">refokus.</h1>
                    <div className="flex ml-3 gap-10">
                        {["Privacy Policy","Cookie Policy", "Impressum", "Terms"].map((item , index) => (
                            <a className="text-xs text-zinc-500 hover:text-zinc-100" href="#" key={index}>{item}</a>
                        ))}
                    </div>
                </div>
                <div className="basis-1/2 flex gap-4">
                    <div className="basis-1/3">
                        <h4 className="text-xs mb-5 text-zinc-500">Socials</h4>
                        {["Instagram", "Twitter (X?)", "LinkedIn"].map((item , index) => (
                            <a className="block mt-3 text-xs text-zinc-500 hover:text-zinc-100" href="#" key={index}>{item}</a>
                        ))}
                    </div>
                    <div className="basis-1/3">
                        <h4 className="text-xs mb-5 text-zinc-500">Sitemap</h4>
                        {["Home", "Work", "Careers", "Contact"].map((item , index) => (
                            <a className="block mt-3 text-xs text-zinc-300 hover:text-zinc-100" href="#" key={index}>{item}</a>
                        ))}
                    </div>
                    <div className="basis-1/2 flex flex-col gap-3 items-end">
                        <p className="w-[80%] font-semibold mt-8 text-right text-xs">Refokus is a pioneering digital agency driven by design and empowered by technology.</p>
                        <img className="mt-5 w-32 object-cover" src="https://assets-global.website-files.com/5df3de8e749203dc3167a479/65369e818884afbae46a35fc_Webflow-badge.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer