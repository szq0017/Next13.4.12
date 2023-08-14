import UserList from '@/app/users/UserList'

const Page = async () => {
    const response = await fetch('http://localhost:3000/api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: 'John',
            email: 'john@example.com',
        }),
    })

    const data = await response.json()

    console.log('data:', data)

    // await new Promise((resolve) => setTimeout(resolve, 5000))
    // console.log('User:', users)
    // users.map((user) => console.log('User address:', user.address))

    return (
        <div className="m-4">
            <h1 className="text-lg font-bold">ユーザー一覧</h1>
            <UserList />
        </div>
    )
}

export default Page
