type User = {
    id: string
    name: string
    email: string
    phone: string
    website: string
    address: Address
}

type Address = {
    street: string
    suite: string
    city: string
    zipcode: string
}

const getUsers = async (): Promise<User[]> => {
    // const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const response = await fetch('http://localhost:3000/api')
    // const response = await fetch('http://localhost:3000/api?name=John', {
    //     cache: 'no-store',
    // })
    if (!response.ok) {
        throw new Error(response.statusText)
    }
    return response.json()
}

const UserList = async () => {
    // await new Promise((resolve) => setTimeout(resolve, 5000))
    const users = await getUsers()

    // console.log('User:', users)
    // users.map((user) => console.log('User address:', user.address))

    return (
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    {user.name} / Address(city): {user.address.city}
                </li>
            ))}
        </ul>
    )
}

export default UserList
