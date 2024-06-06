const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact-title p-5'>
        <h5 className='text-center '>Teresa pod lasem</h5>
        <h1 className='contact-h1 text-center text-uppercase'>
          Skontaktuj sie z nami
        </h1>
      </div>
      <div className='contact-box'>
        <div className='contact-left'>
          <h2 className='text-center mb-3 text-uppercase'>Kontakt online</h2>
          <div className='mb-3'>
            <label className='form-label'>Tytuł</label>
            <input
              type='text'
              className='form-control'
              placeholder='Twój tytuł'
            />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Email</label>
            <input
              type='text'
              className='form-control'
              placeholder='Twój email'
            />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Telefon</label>
            <input
              type='number'
              className='form-control'
              placeholder='Twój telefon'
            />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Twoja wiadomość</label>
            <textarea
              className='form-control'
              placeholder='Twója wiadomość'
            ></textarea>
          </div>
          <button className='btn btn-primary contact-btn' type='submit'>
            Wyślij
          </button>
        </div>

        <div className='contact-right'>
          <p className='mb-4'>
            <span className='contact-span'><i className="bi bi-geo-alt-fill"></i> Adress </span> <br />
            Plebiscytowa 61, <br /> 44-266 Świerklany
          </p>
          <p className='mb-4'>
            <span className='contact-span'> <i className="bi bi-telephone-fill"></i> Telefon </span> <br />
            32 430 46 77
          </p>
          <p className='mb-4'>
            <span className='contact-span'><i className="bi bi-clock-fill"></i> Godziny: </span> <br /> Pn-Pt 7:30 - 17:00 <br /> Sobota 7:30 - 13:00
          </p>
          <a
            className='btn btn-primary'
            target='_blank'
            href='https://www.google.com//maps/place//data=!4m2!3m1!1s0x47114dc10c461715:0xcfa1ea2239dcb3e6?sa=X&ved=1t:8290&ictx=111'
          >
            Google map
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
