/* eslint-disable react/prop-types */
function Stripe({data}) {
    return (
        <div className="w-[16.66%] px-6 py-5 border-t-[1.2px] border-b-[1.2px] border-r-[1.2px] border-zinc-600 flex items-center justify-between">
            <img src={data.url} alt="logo" />
            <span className="font-semibold">{data.number}</span>
        </div>
    )
}

export default Stripe