// src/app/[locale]/(main)/products/page.tsx
import { fetchProducts } from '@/api/products';
import ProductCard from '@/components/layout/ProductCard';
import { Product, ProductDescription, ProductDescriptionChild, ProductsResponse } from '@/types/product';

const ProductsPage = async () => {
    const products: ProductsResponse = await fetchProducts();

    return (
        <div className='flex justify-center py-16'>
            <div className='w-[1200px] flex flex-col'>

                <h1>Products</h1>
                <div className='grid grid-cols-3 gap-4'>

                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;

{/* <h1>Products</h1> */ }
// {products.data.map((product: Product) => (
// <div key={product.id}>
// <h2>{product.name}</h2>
// <div>
// {/* Render description with safe rendering */}
// {product.description?.map((desc: ProductDescription, index: number) => (
// <p key={index}>
// {desc.children.map((child: ProductDescriptionChild) => child.text).join(' ')}
// </p>
// ))}
// </div>
// {/* Add other product details here */}
// </div>
// ))}