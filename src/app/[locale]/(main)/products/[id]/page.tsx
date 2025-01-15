import React from 'react'
import { fetchSingleProduct } from '@/api/products';
import BreadcrumbNav from '@/components/layout/BreadcrumbNav';

const ProductPage = async ({ params }: { params: { id: string } }) => {
    const product = await fetchSingleProduct(params.id);
    if (!product) {
        return <div>Product not found</div>
    }

    return (
        <div>
            <BreadcrumbNav />
            {product.data.title}
        </div>
    )
}

export default ProductPage