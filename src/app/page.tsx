import Link from 'next/link'
import Counter from '@/app/Counter'
import UserList from '@/app/users/UserList'

export default function Home() {
    return (
        <div className="m-4">
            <h1 className="text-2xl">Home</h1>
            <nav>
                <ul>
                    <li>
                        <Link href="/aboutUs" className="underline">
                            aboutUs
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog" className="underline">
                            Blog
                        </Link>
                    </li>
                </ul>
            </nav>
            <Counter>
                <h2 className="font-bold text-lg mt-4">ユーザ一覧</h2>
                <UserList />
            </Counter>
        </div>
    )
}
