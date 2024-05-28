import { useState } from 'react';
import { useProducts } from '../hooks/useProducts';
import FilterByName from './FilterByName';
import ShopCard from './ShopCard';
import FilterByCategory from './FilterByCategory';

const Shop = () => {
  const {products} = useProducts();
  const [searchName, setSearchName] = useState('');
  const [searchCategory, setSearchCategory] = useState('');

  const searchedProducts = products?.filter((item) => {
    const foundCategory = searchCategory
      ? item.category.toLowerCase() === searchCategory.toLowerCase()
      : products;
    const foundName = item.title
      .toLowerCase()
      .includes(searchName.toLowerCase());

    return foundCategory && foundName;
  });

  return (
    <div className='shop container'>
      <FilterByName searchName={(name: string) => setSearchName(name)} />
      <FilterByCategory
        searchCategory={(category: string) => setSearchCategory(category)}
      />
      <div className='row gap-3 mt-5 d-flex justify-content-center align-items-center'>
        {searchedProducts?.map((item) => (
          <ShopCard key={item.id} products={item} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
