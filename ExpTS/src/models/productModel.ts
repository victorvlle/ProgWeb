export interface Product {
    id: number;
    name: string;
    price: number;
}

export const products: Product[] = [
    { id: 1, name: 'Celular Samsung Galaxy S23', price: 3000 },
    { id: 2, name: 'Tablet Samsung Galaxy 3', price: 4000 },
    { id: 3, name: 'Monitor Dell DMD34', price: 2550 },
    { id: 4, name: 'Ar-condicionado Split Samsung Digital Inverter', price: 3000 },
    { id: 5, name: 'Ar-condicionado Split Samsung Digital Convencional', price: 2500 },
    { id: 6, name: 'Ar-condicionado Window Samsung Digital Convencional', price: 2000 },
];
