import Link from "next/link"

// Interface atualizada - removemos thumbnail e adicionamos images
interface Produto {
    id: number  // Identificador único
    title: string   // Nome
    description: string // Descrição detalhada
    price: number   // Preço
    category: string    // Categoria
    images: string[]    // Array onde estão as imagens
    rating: number   // Avaliação do produto
}

interface Props {
    produto: Produto
}

export default function DetalheProduto({ produto }: Props) {
    // Variável para pegar a primeira imagem do array de imagens
    const imagemPrincipal = produto.images.length > 0
        ? produto.images[0]
        : '/caminho/para/imagem-padrao.jpg';

    return (
        <>
            <div className="detalhe-produto-container">
                <div className="coluna-imagem">
                    <img
                        src={imagemPrincipal}
                        alt={produto.title}
                        className="detalhe-img"
                    />
                </div>

                <div className="coluna-info">
                    <h1>{produto.title}</h1>
                    <p>{produto.description}</p>
                    <p><strong>Preço:</strong> R$ {produto.price}</p>
                    <p><strong>Categoria:</strong> {produto.category}</p>
                    <p><strong>Avaliação:</strong> ⭐ {produto.rating}</p>
                </div>
            </div>

            <div className='btn'>
                <Link href={`/`}>
                    Voltar para o catálogo
                </Link>
            </div>
        </>
    )
}