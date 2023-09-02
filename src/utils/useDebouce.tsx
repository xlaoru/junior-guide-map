import { useState, useEffect } from "react";

export default function useDebounce<T>(value: T, delay: number = 500): [T, boolean] {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);
    const [spinner, setSpinner] = useState(false)

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
            setSpinner(true)
        }, delay);
        return () => {
            clearTimeout(handler);
            setSpinner(false)
        };
    }, [value, delay]);

    return [debouncedValue, spinner];
}
