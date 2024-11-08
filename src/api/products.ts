// src/api/products.ts
import axios from 'axios';

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/products`;

export const fetchProducts = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};
