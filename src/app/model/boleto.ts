export class Boleto{
    firstDueDate: string;
    numberOfPayments: string;
    periodicity: string;
    amount: string;
    description: string;
    customer: {
        document: {
            type: string,
            value: string
        };
        name: string
    }
}