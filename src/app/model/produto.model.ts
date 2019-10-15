export interface Produto{
    id: number;
    name: string;
    descricao: string;
    quantidade: number;
    preco: number;
    desconto: boolean;
}

export interface ResponseProdutos{
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: Produto[];
}