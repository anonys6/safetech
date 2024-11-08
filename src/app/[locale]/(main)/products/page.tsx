// src/app/[locale]/(main)/products/page.tsx
import { fetchProducts } from '@/api/products';
import { Product, ProductDescription, ProductDescriptionChild, ProductsResponse } from '@/types/product';

const ProductsPage = async () => {
    const products: ProductsResponse = await fetchProducts();

    return (
        <div>
            <h1>Products</h1>
            {products.data.map((product: Product) => (
                <div key={product.id}>
                    <h2>{product.name}</h2>
                    <div>
                        {/* Render description with safe rendering */}
                        {product.description?.map((desc: ProductDescription, index: number) => (
                            <p key={index}>
                                {desc.children.map((child: ProductDescriptionChild) => child.text).join(' ')}
                            </p>
                        ))}
                    </div>
                    {/* Add other product details here */}
                </div>
            ))}
        </div>
    );
};

export default ProductsPage;