import Link from 'next/link'

export default function Page() {
    return (
        <div>
            <Link href="/" className="underline">
                Home
            </Link>
            <br />
            <Link href="/what" className="underline">
                back to What
            </Link>
            <h1>Info Page</h1>
        </div>
    )
}
