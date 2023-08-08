import Link from 'next/link'

export default function Page() {
    return (
        <div>
            <Link href="/" className="underline">
                Home
            </Link>
            <br />
            <Link href="/aboutUs" className="underline">
                back to aboutUs
            </Link>
            <h1>Info Page</h1>
        </div>
    )
}
