import Link from 'next/link'

export default function Page() {
    return (
        <div>
            <Link href="/" className="underline">
                Home
            </Link>
            <br />
            <Link href="/about" className="underline">
                back to about
            </Link>
            <h1>Info Page</h1>
        </div>
    )
}
