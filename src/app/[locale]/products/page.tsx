"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useTranslations, useLocale } from 'next-intl';

interface Product {
    _id: string;
    title: {
        en: string;
        ar: string;
    };
    slug: {
        en: string;
        ar: string;
    };
    availableQuantity: number;
    description: {
        en: string;
        ar: string;
    };
    dimension?: string;
    productPhotos: string[];
    mainPhoto: string;
    productVideo?: string;
    keywords: {
        en: string[];
        ar: string[];
    };
    metaTitle?: {
        en: string;
        ar: string;
    };
    metaDescription?: {
        en: string;
        ar: string;
    };
    metaKeywords?: {
        en: string[];
        ar: string[];
    };
    faq?: {
        question: {
            en: string;
            ar: string;
        };
        answer: {
            en: string;
            ar: string;
        };
    }[];
    url?: string;
    createdAt: Date;
    updatedAt: Date;
}

export default function ProductList() {
    const [products, setProducts] = useState<Product[]>([]);
    const t = useTranslations('Product'); // Using translation function
    const locale = useLocale() as 'en' | 'ar'; // Get the current locale

    useEffect(() => {
        axios.get('http://localhost:4000/api/products')
            .then((res) => {
                setProducts(res.data);
                console.log(res.data);
                console.log("fetched successfully");
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    }, []);

    return (
        <div>
            <h1>{t('product_list')}</h1> {/* Using translation for title */}
            {products.length === 0 ? (
                <p>{t('no_products')}</p>
            ) : (
                <ul>
                    {products.map((product) => (
                        <li key={product._id}>
                            <h2>{t('title')}: {product.title[locale]}</h2>
                            <p>{t('description')}: {product.description[locale]}</p>
                            <p>{t('quantity')}: {product.availableQuantity}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}