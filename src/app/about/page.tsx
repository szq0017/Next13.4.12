import Link from 'next/link'

const Page = () => {
    return (
        <div className="flex flex-col items-center">
            <Link href="/" className="underline">
                Home
            </Link>
            <h1>About Page</h1>
        </div>
    )
}

export default Page
