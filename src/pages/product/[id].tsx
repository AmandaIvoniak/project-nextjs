import { useRouter } from "next/router"

export default function Products() {
    const { query } = useRouter();
    return <h1>Products{JSON.stringify(query)}</h1>
}