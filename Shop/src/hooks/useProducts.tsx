import { useEffect, useState } from 'react';
import { Product } from '../model/product';
import ApiService from '../service/ApiService';

export const useProducts = () => {
  const [products, setProduct] = useState<Product[] | null>(null);

  const fetchProducts = async () => {
    try {
      const res = await ApiService.get<Product[]>('/product');
      setProduct(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, fetchProducts };
};
