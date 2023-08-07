type Params = {
    id: string[]
}

const Page: React.FC<{ params: Params }> = ({ params }) => {
    console.log(
        'params: ',
        params,
        ', params.id: ',
        params.id,
        ', typeof params: ',
        typeof params,
    )
    return (
        <div className="m-4 font-bold">
            {params.id.map((id) => (
                <div key={id}>Blog ID: {id}</div>
            ))}
        </div>
    )
}

export default Page
