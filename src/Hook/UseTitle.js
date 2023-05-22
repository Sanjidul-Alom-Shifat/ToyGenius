import { useEffect } from "react"

const UseTitle = (title) => {
    useEffect(() => { 
        document.title = `ToyGenius | ${title}`;
    }, [title]);
}

export default UseTitle;