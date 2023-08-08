import Link from 'next/link'

export default function Page() {
    return (
        <div className="m-4">
            <h1 className="text-2xl">Blog Posts</h1>
            <ul>
                <li>
                    <Link href="/blog/first-post" className="underline">
                        First Post
                    </Link>
                </li>
                <li>
                    <Link href="/blog/second-post" className="underline">
                        Second Post
                    </Link>
                </li>
                <li>
                    <Link href="/blog/tech/first-post" className="underline">
                        Tech First Post
                    </Link>
                </li>
            </ul>
        </div>
    )
}
