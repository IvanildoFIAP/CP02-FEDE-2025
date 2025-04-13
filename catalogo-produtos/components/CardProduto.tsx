"use client"
import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"

interface Produto {
    id: number
    title: string
    price: number
    thumbnail: string
}

export default function CardProduto() {
    const [produtos, setProdutos] = useState<Produto[]>([])

    useEffect(() => {
        axios.get("https://dummyjson.com/products")
            .then(res => {
                const todos: Produto[] = res.data.products.flatMap((cart: any) =>
                    cart.products.map((p: any) => ({
                        id: p.id,
                        title: p.title,
                        price: p.price,
                        thumbnail: p.thumbnail
                    }))
                )
                setProdutos(todos)
            })

            .catch(() => console.error("Erro ao carregar produtos"))
    }, [])

    return (
        <ul>
            {produtos.map(prod => (
                <li key={prod.id} style={{ margin: "8px 0" }}>
                    <Link href={'/produtos/${prod.id}'} style={{ color: "blue", textDecoration: "underline" }}>
                        {prod.title}
                    </Link>
                    {prod.price}
                </li>
            ))}
        </ul>
    )
}