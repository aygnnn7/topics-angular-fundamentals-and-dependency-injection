export class ProductService{
    getProducts(): Product[]{
        return [
            {name : "Keyboard", quantity: 10},
            {name : "Mouse", quantity: 15},
            {name : "Videocard", quantity: 25},
        ]
    }
}

export class Product{
    name:string;
    quantity:number;
}