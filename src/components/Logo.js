export default function Logo({ logos }) {
    return (
        <div className="flex flex-wrap gap-y-3">
            {logos.map(({ names, img }) => (
                <div className="group flex flex-col items-center w-[4rem]">
                    <img className="h-[2.5rem] w-[2.5rem] rounded-[10%] transition delay-350 hover:scale-110" src={img} alt={names} />
                    <span className="invisible pt-2 text-gray-400 text-xs transition delay-350 group-hover:visible">{names}</span>
                </div>
            ))}
        </div>
    );
}