import { Product } from '../model/product';
import { Link } from 'react-router-dom';

interface Props {
  products: Product;
}

const ShopCard = ({ products }: Props) => {
  return (
    <Link to={`/shop/${products.id}`} className='card col-6'>
      <img src={products.image} className='card-img-top' alt={products.title} />
      <div className='card-body'>
        <h5 className='card-title'>{products.title}</h5>
        <p className='card-text'>{products.category}</p>
        <p className='card-text'>${products.price}</p>
        
      </div>
    </Link>
  );
};

export default ShopCard;
