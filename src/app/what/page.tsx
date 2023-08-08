import Link from 'next/link'

export default function Page() {
    return (
        <div className="flex flex-col items-center">
            <h1>What Page</h1>
            <Link href="/" className="underline">
                Home
            </Link>
            <Link href="/what/info" className="underline">
                Info
            </Link>
        </div>
    )
}
