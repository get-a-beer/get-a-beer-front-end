export interface Produto{
    id: number;
    name: string;
    descricao: string;
    quantidade: number;
    preco: number;
    cervejaria: number;
}

export interface ResponseProdutos{
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: Produto[];
}

export interface RequestCreateProduto{
    name: string;
    descricao: string;
    quantidade: number;
    preco: number;
    cervejaria: number;
}

export interface ResponseCreateProduto{
    id: number;
    name: string;
    descricao: string;
    quantidade: number;
    preco: number;
    cervejaria: number;
}