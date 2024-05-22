import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import {
  addQuantity,
  deleteProduct,
  deleteQuantity,
} from '../reducer/shoppingSlice';

const Shopping = () => {
  const shopReducer = useSelector((state: RootState) => state.shop);
  const dispatch = useDispatch();

  return (
    <div className='shopping container'>
      <table className='table mt-5'>
        <thead className='text-center'>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Title</th>
            <th scope='col'>Price</th>
            <th scope='col'>Quality</th>
            <th scope='col'>Delete</th>
          </tr>
        </thead>
        <tbody className='text-center'>
          {shopReducer.shopping.map((item, index) => (
            <tr key={index}>
              <td>{index++}</td>
              <td>{item.title}</td>
              <td>{item.price}$</td>
              <td className='d-flex justify-content-between'>
                <button className='btn btn-danger' onClick={() => dispatch(deleteQuantity(item))}>
                  -
                </button>
                <p className='m-2'>{shopReducer.quantity[item.id]}</p>
                <button className='btn btn-success' onClick={() => dispatch(addQuantity(item))}>+</button>
              </td>
              <td>
                <button
                  onClick={() => dispatch(deleteProduct(item))}
                  className='btn btn-danger'
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h1 className='float-end mt-3'>{shopReducer.totalPrice.toFixed(2)}$</h1>
    </div>
  );
};

export default Shopping;
