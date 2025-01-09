import React from 'react'
import { fetchSingleProduct } from '@/api/products';

const ProductPage = async ({ params }: { params: { id: string } }) => {
    const product = await fetchSingleProduct(params.id);
    if (!product) {
        return <div>Product not found</div>
    }

    return (
        <div>{product.data.title}</div>
    )
}

export default ProductPage