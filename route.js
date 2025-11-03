//app/api/products/route.js
'use client';
export async function GET() {
    const products = [
        { id: 1, name: 'PS5 Controller', price: 60.00, category: 'Electronics', stock: 30.00 },
        { id: 2, name: 'Iphone 17', price: 800.00, category: 'Electronics', stock: 100.00 },
        { id: 3, name: 'Gaming Monitor', price: 500.00, category: 'Electronics', stock: 40.00 },
        { id: 4, name: 'Mousepad', price: 25.00, category: 'Electronics', stock: 50.00},
        { id: 5, name: 'Bananas', price: 10.00, category: 'Groceries', stock: 1000.00},
        { id: 6, name: 'Tomatoes', price: 14.00, category: 'Groceries', stock: 400.00},
        { id: 7, name: 'Lettuce', price: 12.00, category: 'Groceries', stock: 600.00},
        { id: 8, name: 'Eggs', price: 8.00, category: 'Groceries', stock: 1200.00},
        { id: 9, name: 'Jordan 4s', price: 600.00, category: 'Apparel', stock: 200.00},
        { id: 10, name: 'Bape T-Shirt', price: 300.00, category: 'Apparel', stock: 150.00},
        { id: 11, name: 'Louis Vuitton BackPack', price: 500.00, category: 'Apparel', stock: 75.00},
        { id: 12, name: 'Chrome Heart Glasses', price: 1000.00, category: 'Apparel', stock: 500.00}
    ];
    return Response.json(products);
}

