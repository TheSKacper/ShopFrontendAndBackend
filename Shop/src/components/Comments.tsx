import { useRatings } from '../hooks/useRatings';

interface Props {
  idProduct: string;
}

const Comments = ({ idProduct }: Props) => {
  const { ratings } = useRatings();

  const foundComments = ratings?.filter((item) => item.productId === idProduct);

  return (
    <div className='coments-container'>
      <ul className='list-group'>
        {foundComments?.map((item) => (
          <li key={item.id} className='list-group-item'>
            {item.comment} || {item.rating}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
