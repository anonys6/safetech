// src/types/product.ts
export type ProductDescriptionChild = {
    text: string;
    bold?: boolean;
    code?: boolean;
};

export type ProductDescription = {
    type: string;
    children: ProductDescriptionChild[];
};

export type Product = {
    id: number;
    documentId: string;
    name: string;
    description: ProductDescription[] | null;
    title: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
};

export type ProductsResponse = {
    data: Product[];
    meta: {
        pagination: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        };
    };
};