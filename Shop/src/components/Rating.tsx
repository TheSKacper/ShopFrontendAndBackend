import { useEffect, useState } from 'react';
import { Ratings, RequestRating } from '../model/ratings';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import ApiService from '../service/ApiService';
import { useRatings } from '../hooks/useRatings';
import { toast } from 'react-toastify';

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

  const { fetchRatings } = useRatings();
  const notify = (message: string) => toast(message);

  const loginRedux = useSelector((state: RootState) => state.login);

  useEffect(() => {
    setData({ ...data, userId: loginRedux.id, productId: product.idProduct });
  }, []);

  const handleRating = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCreateRating = () => {
    const jsonData: Ratings = data;
    try {
      ApiService.post('/rating', jsonData).then(() => {
        fetchRatings();
      });
    } catch (error) {
      notify('Something bad' + error);
    }
  };

  return (
    <div className=''>
      <div className='mb-3 mt-4 w-100 text-white'>
        <label className='form-label'>Ocena 1-5</label>
        <input
          type='number'
          name='rating'
          value={data.rating}
          onChange={handleRating}
          className='form-control'
        />
      </div>
      <div className='w-100 text-white'>
        <label className='form-label'>Opinia</label>
        <textarea
          name='comment'
          value={data.comment}
          onChange={handleRating}
          className='form-control'
        ></textarea>
      </div>
      <button
        className='btn btn-success mb-4 mt-3'
        onClick={handleCreateRating}
      >
        Create
      </button>
    </div>
  );
};

export default Rating;
