// src/api/product.ts
import axios from 'axios';

const API_URL = 'https://safetech-admin-18ab4fbef501.herokuapp.com/api/products';

export const fetchProducts = async () => {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
};
