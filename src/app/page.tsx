import Link from 'next/link'

export default function Home() {
    return (
        <div className="m-4">
            <h1 className="text-2xl">Home</h1>
            <nav>
                <ul>
                    <li>
                        <Link href="/about" className="underline">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog" className="underline">
                            Blog
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
