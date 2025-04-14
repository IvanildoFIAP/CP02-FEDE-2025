//Fazendo os imports necessários
import axios from "axios";
import DetalheProduto from "@/components/DetalheProduto";

//Definindo a interface dos dados do produto
interface Produto {
    id: number; // Identificador único
    title: string;  // Título
    description: string; // Descrição
    price: number;  // Preço
    category: string;   // Categoria
    images: string[];  // Imagem
    rating: number; // Avaliação do produto
}

//Estrutura da página
export default async function ProdutoPage({ params }: { params: { id: string } }) {

    //No "try" ele vai tentar executar as linhas abaixo
    try {
        const idBuscado = Number(params.id);
        const res = await axios.get(`https://dummyjson.com/products/${idBuscado}`);
        const produto: Produto = res.data;
        return <DetalheProduto produto={produto} />;

    //No "catch" ele vai retornar erro caso as linhas acima não possam ser executadas
    } catch (error) {
        return <p>Produto não encontrado</p>;
    }
}