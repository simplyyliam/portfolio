
import { Link } from "./link"


interface NavProps {
    onlink: (linkID: string) => void
}

export function Nav ({onlink}: NavProps):JSX.Element {
    return (
        <div className="top-7 flex justify-between w-full px-10 fixed z-10">
            <Link name="Home" onclick={() => onlink('Home')}/>
            <Link name="Projects" onclick={() => onlink('Projects')}/>
            <Link name="About" onclick={() => onlink('About')}/>
        </div>
    )
}   