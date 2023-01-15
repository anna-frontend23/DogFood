import { useEffect, useState } from "react"


export const useDebounce = (value, ms) => {
    const [debounceValue, setDebounceValue] = useState(value)

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceValue(value)
        }, ms)

        return () => {
            clearTimeout(handler)
        }
    }, [value]);

return debounceValue;

}