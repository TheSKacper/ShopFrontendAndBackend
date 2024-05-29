import { useParams } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../reducer/shoppingSlice';
import Rating from './Rating';
import Comments from './Comments';
import { RootState } from '../store/store';
import { useRatings } from '../hooks/useRatings';

const ShopDetail = () => {
  const { products } = useProducts();
  const { ratings } = useRatings();
  const loginReducer = useSelector((state: RootState) => state.login);
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();

  console.log(id)

  const productFound = products?.find((item) => item.id === id);
  const ratingFound = ratings?.filter((item) => item.productId === id);

  console.log(ratingFound)

  return (
    <div className='shopDetail container-fluid bg-black'>
      <div className='shopDetail-box d-flex flex-column justify-content-center align-items-center '>
        <h1 className='text-white mb-4 mt-4'>{productFound?.title}</h1>
        <img
          className='w-50'
          src={productFound?.image}
          alt={productFound?.title}
        />
        <p className='shopDetail-p mt-4'>
          <span className='shopDetail-item'>Price: </span>
          {productFound?.price}$
        </p>
        <p className='shopDetail-p mt-4'>
          <span className='shopDetail-item'>Description: </span>
          {productFound?.description}
        </p>
        <p className='shopDetail-p mt-4'>
          <span className='shopDetail-item'>Category: </span>
          {productFound?.category}
        </p>
        <button
          className='btn btn-primary mt-4'
          onClick={() => dispatch(addProduct(productFound))}
        >
          Buy
        </button>
      </div>
      <div className='shopDetail-comments'>
        {loginReducer.success === true ? (
          <div className='leftShopDetail'>
            <h3 className='mt-4 text-white'>Add comment</h3>
            {id && <Rating idProduct={id} />}
          </div>
        ) : null}
        {ratingFound?.length === 0 ? (
          <h3 className='mt-5 text-white'>No Comments </h3>
        ) : (
          <div className='rightShopDetail'>
            {id && <Comments idProduct={id} />}
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopDetail;
