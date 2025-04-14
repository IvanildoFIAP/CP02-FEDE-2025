"use client"

//Imports necessários
import axios from "axios"
import { useEffect, useState } from "react"
import Link from "next/link"

//Definindo a interface dos dados do produto
interface Produto {
    id: number    // identificador único
    title: string // Título
    price: number // Preço
    thumbnail: string // Imagem
}

// Estrutura dos cards
export default function CardProduto() {
    const [produtos, setProdutos] = useState<Produto[]>([])

    useEffect(() => {
        axios.get("https://dummyjson.com/products")
            .then(res => {
                const todos: Produto[] = res.data.products.map((p: any) => ({
                    id: p.id,
                    title: p.title,
                    price: p.price,
                    thumbnail: p.thumbnail
                }))
                setProdutos(todos)
            })
            .catch(() => console.error("Erro ao carregar produtos"))
    }, [])

    return (
        <div className="grid-cards">
            {produtos.map(prod => (
                <div key={prod.id} className="card">
                    <Link href={`/Produtos/${prod.id}`} className="card-title">
                        <img src={prod.thumbnail} alt={prod.title} className="card-img" />
                    </Link>
                    <div className="card-content">
                        <Link href={`/Produtos/${prod.id}`} className="card-title">
                            {prod.title}
                        </Link>
                        <span className="card-price">R$ {prod.price}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}