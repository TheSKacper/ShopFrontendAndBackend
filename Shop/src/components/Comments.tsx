import { useRatings } from '../hooks/useRatings';

interface Props {
  idProduct: string;
}

const Comments = ({ idProduct }: Props) => {
  const { ratings } = useRatings();

  const renderStars = (rating:number) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<i key={i} className='bi bi-star-fill'></i>);
    }
    return stars;
  };

  const foundComments = ratings?.filter((item) => item.productId === idProduct);

  return (
    <div className='coments-container'>
      <ul className='list-group'>
        {foundComments?.map((item) => (
          <li key={item.id} className='list-group-item'>
            {renderStars(item.rating)} <br /> {item.comment} <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
