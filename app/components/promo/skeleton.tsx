export default function PromoSkeleton() {
    return (
        <div className="h-80 w-72 border rounded-md flex flex-col items-center my-2 py-2 gap-2 shadow-md shadow-slate-200">
            <div className="ml-4 h-4 w-32 bg-slate-100 rounded self-start" />
            <div className="bg-slate-100 h-48 w-64 mb-2 drop-shadow-none" />
            {Array(3).fill(1).map((a, b) => <div key={a + b} className="h-2 w-56 bg-slate-100 rounded drop-shadow-none" />)}
        </div>
    )
}