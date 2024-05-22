import { useParams } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts';
import { useDispatch } from 'react-redux';
import { addProduct } from '../reducer/shoppingSlice';

const ShopDetail = () => {
  const products = useProducts();
  const { id } = useParams();
  const dispatch = useDispatch();

  const itemFound = products?.find((item) => item.id === id);

  return (
    <div className='shopDetail container-fluid bg-black'>
      <div className='shopDetail-box d-flex flex-column justify-content-center align-items-center '>
        <h1 className='text-white mb-4 mt-4'>{itemFound?.title}</h1>
        <img className='w-50' src={itemFound?.image} alt={itemFound?.title} />
        <p className='shopDetail-p mt-4'><span className='shopDetail-item'>Price: </span>{itemFound?.price}$</p>
        <p className='shopDetail-p mt-4'><span className='shopDetail-item'>Description: </span>{itemFound?.description}</p>
        <p className='shopDetail-p mt-4'><span className='shopDetail-item'>Category: </span>{itemFound?.category}</p>
        <button
          className='btn btn-primary mt-4'
          onClick={() => dispatch(addProduct(itemFound))}
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default ShopDetail;
