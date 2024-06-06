import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home'>
      <header className='home-header'>
        <div className='box-header'>
          <h1 className='text-uppercase mb-4'>Witamy na naszej stronie !</h1>
          <p>
            Witamy w naszym sklepie "Teresa pod lasem"! Oferujemy szeroki wybór
            produktów dla całej rodziny w sercu malowniczej wsi. Zapraszamy na
            udane zakupy!
          </p>
          <Link to='/shop' className='btn btn-primary mt-3'>
            Sprawdź
          </Link>
        </div>
        <div className='home-shadow'></div>
      </header>
    </div>
  );
};

export default Home;
