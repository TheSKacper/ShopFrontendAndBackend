const Contact = () => {

  return (
    <div className='contact'>
    
      <div className='contact-right'>
        <h2 className='mb-4 '>Informacje</h2>
        <p className='mb-4 '>
          <span>Adress: </span>
          Plebiscytowa 61, 44-266 Świerklany
        </p>
        <p className='mb-4 '>
          <span>Telefon: </span>
          32 430 46 77
        </p>
        <p className='mb-4 '>
          <span>Godziny: </span> Pn-Pt 7:30 - 17:00
        </p>
        <p className='mb-4 '>
          <span>Weekendy: </span> Sobota 7:30 - 13:00
        </p>
        <a
          className='btn btn-primary'
          href='https://www.google.com/maps/place//data=!4m2!3m1!1s0x47114dc10c461715:0xcfa1ea2239dcb3e6?sa=X&ved=1t:8290&ictx=111'
        >
          Google map
        </a>
      </div>
    </div>
  );
};

export default Contact;
