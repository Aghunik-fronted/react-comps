import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from "../mock/products"
 
function ProductDetail() {
    // 1. Меняем на id, так как в App.jsx написано path='/products/:id'
    const { id } = useParams() 
    
    // 2. Используем id для поиска
    const product = products.find((item) => item.id === Number(id))

    if (!product) {
        return (
            <div className="p-10 text-red-500">
                Do not find (Проверьте ID: {id})
            </div>
        )
    }

    return (
        <div className="p-10">
            <h1 className="text-2xl font-bold">{product.title}</h1>
            <h2 className="text-xl">{product.price} $</h2>
            <div className="mt-4">{product.desc}</div>
        </div>
    );
}
export default ProductDetail;