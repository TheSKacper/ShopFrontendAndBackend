import { useEffect, useState } from 'react';
import { Ratings, RequestRating } from '../model/ratings';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import ApiService from '../service/ApiService';

interface Props {
  idProduct: string;
}

const Rating = (product: Props) => {
  const [data, setData] = useState<RequestRating>({
    userId: '',
    productId: '',
    rating: 0,
    comment: '',
  });

  const loginRedux = useSelector((state: RootState) => state.login);

  console.log(product.idProduct);

  useEffect(() => {
    setData({ ...data, userId: loginRedux.id, productId: product.idProduct });
  }, []);

  const handleRating = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(data);
  };

  const handleCreateRating = () => {
    const jsonData: Ratings = data;
    try {
      ApiService.post('/rating', jsonData).then((res) => {
        console.log(res.data);
        console.log('created');
      });
    } catch (error) {
      console.log(error);
    }
    console.log(data);
  };

  return (
    <div className='container'>
      <div className='mb-3 w-25 text-white'>
        <label className='form-label'>Email address</label>
        <input
          type='number'
          name='rating'
          value={data.rating}
          onChange={handleRating}
          className='form-control'
        />
      </div>
      <div className='w-25 text-white'>
        <label className='form-label'>Example textarea</label>
        <textarea
          name='comment'
          value={data.comment}
          onChange={handleRating}
          className='form-control'
        ></textarea>
      </div>
      <button className='btn btn-primary' onClick={handleCreateRating}>
        Create
      </button>
    </div>
  );
};

export default Rating;
