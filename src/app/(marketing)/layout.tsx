export default function MarketingLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="m-4 font-bold">
            <h1 className="text-2xl">Marketing</h1>
            <div className="mt-4">{children}</div>
        </div>
    )
}
