import Link from 'next/link'

const Page = () => {
    return (
        <div className="m-4">
            <h1 className="text-2xl">Analytics Page</h1>
            <div className="flex">
                <Link href="/users" className="underline">
                    Users
                </Link>
            </div>
        </div>
    )
}

export default Page
