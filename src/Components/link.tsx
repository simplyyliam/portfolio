

interface LinkProps {
    name: string
    onclick: () => void
}

export function Link ({onclick, name}:LinkProps): JSX.Element {
    return (
        <button onClick={onclick}> {name} </button>
    )
}