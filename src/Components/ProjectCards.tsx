

interface CardProps {
    name: string
    description: string
}

export function ProjectCards ({name, description}:CardProps):JSX.Element    {
    return (
        <div className="flex flex-col p-5 w-[336px] h-[386px] bg-neutral-100  rounded-3xl">
            <div className="flex gap-4 h-12">
                <div className="bg-stone-950 w-[40px] h-[40px] rounded-xl"></div>
                <div>
                    <h1 className="font-medium"> {name} </h1>
                    <h1 className="text-sm"> {description} </h1>
                </div>
            </div>

            <button className="w-10 h-10 bg-neutral-200 rounded-full relative top-[16.5em] left-[16em] flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 25 25" fill="#343C54" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
            <path d="M18.9203 6.0505C18.7834 5.86991 18.5665 5.75324 18.3223 5.75315L9.32695 5.75C8.91265 5.74985 8.57667 6.08545 8.57653 6.49958C8.57638 6.9137 8.91212 7.24954 9.32643 7.24968L16.5172 7.2522L5.79779 17.9716C5.5049 18.2645 5.5049 18.7394 5.79779 19.0323C6.09069 19.3252 6.56556 19.3252 6.85845 19.0323L17.5725 8.31828L17.5748 15.4945C17.5749 15.9086 17.9109 16.2442 18.3252 16.2441C18.7395 16.244 19.0752 15.9081 19.0751 15.494L19.0722 6.56074C19.0853 6.38214 19.0346 6.19976 18.9203 6.0505Z" fill="#343C54"/>
            </svg>

            </button>
        </div>
    )
}