// src/app/[locale]/(main)/products/page.tsx
import { fetchProducts } from '@/api/products';
import ProductCard from '@/components/layout/ProductCard';
// import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Product, ProductDescription, ProductDescriptionChild, ProductsResponse } from '@/types/product';
import Link from 'next/link';

const ProductsPage = async () => {
    const products: ProductsResponse = await fetchProducts();

    return (
        <div className='px-8 w-full py-16'>
            <div className='flex flex-col'>
                {/* <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink>
                                <Link href="/">Home</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink>
                                <Link href="/components">Products</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb> */}

                {/* <h1>Products</h1> */}
                <div className='grid grid-cols-12 gap-4'>
                    <div className='col-span-2'>Filter</div>
                    <div className='grid grid-cols-3 gap-4 col-span-10'>
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
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