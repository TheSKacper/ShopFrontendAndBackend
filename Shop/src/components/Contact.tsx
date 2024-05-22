import { RootState } from '@reduxjs/toolkit/query';
import { useSelector } from 'react-redux';

const Contact = () => {
  const loginReducer = useSelector((state: RootState) => state.login);
  console.log(loginReducer);
  return (
    <div className='contact d-flex'>
      <div className='contact-left'>
        <div className='d-flex flex-column'>
          <div className='contact-item'>
            <div className='contact-image mb-4 first'></div>
            <h2 className='mb-3'>Teresa - CEO</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Provident libero culpa sequi ea! Dicta facere praesentium
              repudiandae dignissimos provident! Excepturi eum, in dolor minus
              quidem laboriosam consectetur sit nemo quisquam.
            </p>
          </div>
          <div className='contact-item'>
            <div className='contact-image mb-4 second'></div>
            <h2 className='mb-3'>Jacek - CEO</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Provident libero culpa sequi ea! Dicta facere praesentium
              repudiandae dignissimos provident! Excepturi eum, in dolor minus
              quidem laboriosam consectetur sit nemo quisquam.
            </p>
          </div>
        </div>
      </div>
      <div className='contact-right'>
        <h2 className='mb-4 text-white'>Informacje</h2>
        <p className='mb-4 text-white'>
          <span>Adress: </span>
          Plebiscytowa 61, 44-266 Świerklany
        </p>
        <p className='mb-4 text-white'>
          <span>Telefon: </span>
          32 430 46 77
        </p>
        <p className='mb-4 text-white'>
          <span>Godziny: </span> Pn-Pt 7:30 - 17:00
        </p>
        <p className='mb-4 text-white'>
          <span>Weekendy: </span> Sobota 7:30 - 13:00
        </p>
        <a className='btn btn-primary' href='https://www.google.com/maps/place//data=!4m2!3m1!1s0x47114dc10c461715:0xcfa1ea2239dcb3e6?sa=X&ved=1t:8290&ictx=111'>
          Google map
        </a>
      </div>
    </div>
  );
};

export default Contact;
