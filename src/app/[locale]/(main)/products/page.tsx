// src/app/[locale]/(main)/products/page.tsx
import { fetchProducts } from '@/api/products';
import ProductCard from '@/components/layout/ProductCard';
// import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Product, ProductDescription, ProductDescriptionChild, ProductsResponse } from '@/types/product';
import Link from 'next/link';

const ProductsPage = async () => {
    const products: ProductsResponse = await fetchProducts();

    return (
        <>
            <div
                className='grid grid-cols-12 gap-4'
            >
                {
                    products.data.map((product, i) => (
                        <Link
                            href={`/en/products/${product.documentId}`}
                            key={i}
                            className='p-4 border border-gray-200 rounded-md'
                        >
                            <h1>{product.id}</h1>
                            <h2>{product.title}</h2>
                        </Link>
                    ))
                }
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