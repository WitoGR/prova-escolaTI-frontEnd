export class Receita {
    id!: number;
    nome!: string;
    tempoPreparo!: number;
    custoAproximado!: number;
    ingredientes: Array<string> = [];
}
