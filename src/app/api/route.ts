import { NextResponse } from 'next/server'
import { headers, cookies } from 'next/headers'

export async function GET() {
    const headerList = headers()
    const cookieStore = cookies()

    // console.log('Header List: ', headerList)
    // console.log('Cookie Store: ', cookieStore)

    // const { searchParams } = new URL(request.url)
    // const name = searchParams.get('name')
    // console.log('User Name: ', name)
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    return NextResponse.json(data)
}

export async function POST(request: Request) {
    const res = await request.json()
    return NextResponse.json({ res })
}
