export interface Produto{
    id: number;
    temperatura: number;
    cor: string;
    teorAlcolico: number;
    harmonizacao: string;
    idCervejaria: number;
    categoria: string;
    produto: {
        id: number;
        nome: string;
        valor: number;
        qtdDisponivel: number;
        descricao: string;
    }
}