
interface Promo {
    id: string
    name: string
    image: string
}


export default function PromoItem({ id, name, image }: Promo) {
    return (
        <div className="h-80 w-72 border rounded-md flex flex-col items-center my-2 py-2 gap-2 shadow-sm shadow-slate-300">
            <h3 className="ml-4 h-4 w-32 bg-slate-100 rounded self-start" >name</h3>
            <div className="bg-slate-100 h-48 w-64 mb-2" />
            {Array(3).fill(1).map((a, b) => <div key={a + b} className="h-2 w-56 bg-slate-100 rounded" />)}
        </div>
    )
}