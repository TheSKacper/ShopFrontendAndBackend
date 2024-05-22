import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className='home'>
      <header className='home-header'>
        <div className='box-header'>
          <h1 className='text-uppercase mb-4'>Witamy na naszej stronie !</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            perspiciatis ad quae. Natus, est ea. Porro tenetur excepturi hic
            dolorum blanditiis optio iure deserunt reiciendis facere! Suscipit
            hic quod in.
          </p>
          <Link to='/shop' className='btn btn-primary mt-3'>
            Sprawdź
          </Link>
        </div>
        <div className='home-shadow'></div>
      </header>
      <section className='mt-5'>
        <h2 className='text-uppercase text-center'>Co u nas znajdziesz ?</h2>
        <div className='row p-5'>
          <div className='col-md-4 col-sm-2 mt-5 home-box'>
            <h3>Chemia</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              perferendis hic. Libero repellat dignissimos, obcaecati,
              cupiditate exercitationem sapiente nulla reprehenderit quasi
              architecto, accusamus qui ad laboriosam veniam odio eligendi quam.
            </p>
          </div>
          <div className='col-md-4 col-sm-2 mt-5 home-box'>
            <h3>Szkoła</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              perferendis hic. Libero repellat dignissimos, obcaecati,
              cupiditate exercitationem sapiente nulla reprehenderit quasi
              architecto, accusamus qui ad laboriosam veniam odio eligendi quam.
            </p>
          </div>
          <div className='col-md-4 col-sm-2 mt-5 home-box'>
            <h3>Ubrania</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              perferendis hic. Libero repellat dignissimos, obcaecati,
              cupiditate exercitationem sapiente nulla reprehenderit quasi
              architecto, accusamus qui ad laboriosam veniam odio eligendi quam.
            </p>
          </div>
          <div className='col-md-4 col-sm-2 mt-5 home-box'>
            <h3>Kuchnia</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              perferendis hic. Libero repellat dignissimos, obcaecati,
              cupiditate exercitationem sapiente nulla reprehenderit quasi
              architecto, accusamus qui ad laboriosam veniam odio eligendi quam.
            </p>
          </div>
          <div className='col-md-4 col-sm-2 mt-5 home-box'>
            <h3>Zabawki</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              perferendis hic. Libero repellat dignissimos, obcaecati,
              cupiditate exercitationem sapiente nulla reprehenderit quasi
              architecto, accusamus qui ad laboriosam veniam odio eligendi quam.
            </p>
          </div>
          <div className='col-md-4 col-sm-2 mt-5 home-box'>
            <h3>Gazety</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              perferendis hic. Libero repellat dignissimos, obcaecati,
              cupiditate exercitationem sapiente nulla reprehenderit quasi
              architecto, accusamus qui ad laboriosam veniam odio eligendi quam.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
