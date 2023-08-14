'use client'
import { useCounter } from '@/app/context/ContentProvider'

const Counter = ({ children }: { children: React.ReactNode }) => {
    const [count, setCount] = useCounter()
    const increment = () => {
        setCount((prev) => prev + 1)
    }

    return (
        <>
            <div>Count: {count}</div>
            <button
                className="px-2 py-1 rounded-lg bg-blue-600 text-white"
                onClick={increment}
            >
                Increment
            </button>
            {children}
        </>
    )
}

export default Counter
