
function DateCard({date}) {
    return (

        <div className="bg-zinc-100 max-w-md w-full p-10 rounded-md ">
            <p className="text-slate-400">{date.description}</p>
            <h1 className="text-1xl text-slate-600">{date.service}</h1>
            <h1 className="text-1xl text-slate-600">{date.date}</h1>
            <h1 className="text-1xl text-slate-600">{date.hour}</h1>
        </div>
    )
}
export default DateCard;