import Link from 'next/link'

const Page = () => {
    return (
        <div className="m-4">
            <h1 className="text-2xl">Team Page</h1>
            <div className="flex">
                <Link href="/" className="underline">
                    Home
                </Link>
                <Link href="/aboutUs" className="underline">
                    About Us
                </Link>
            </div>
        </div>
    )
}

export default Page
