// src/app/[locale]/(main)/products/page.tsx
import { fetchProducts } from '@/api/products';
import BreadcrumbNav from '@/components/layout/BreadcrumbNav';
import { ProductsResponse } from '@/types/product';
import Link from 'next/link';

const ProductsPage = async () => {
    const products: ProductsResponse = await fetchProducts();

    return (
        <>
            <BreadcrumbNav />

            <div
                className='grid grid-cols-5 gap-4 px-4 py-20'
            >
                <div className='col-span-1'>
                    <h1>Filter</h1>
                </div>

                <div className='col-span-4 grid grid-cols-4 gap-3'>
                    {
                        products.data.map((product, i) => (
                            <Link
                                href={`/en/products/${product.documentId}`}
                                key={i}
                                className='p-4 border border-border border-gray-200 rounded-md'
                            >
                                <h1>{product.id}</h1>
                                <h2>{product.title}</h2>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </>
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