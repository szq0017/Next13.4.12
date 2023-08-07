const Page = ({
    params,
}: {
    params: { id: string; userId: string; categoryId: string }
}) => {
    console.log(params)
    return (
        <div className="m-4 font-bold">
            News ID: {params.id}/{params.userId}/{params.categoryId}
        </div>
    )
}

export default Page
