import photoOne from '../assets/Zrzut ekranu 2024-06-6 o 19.17.06.png';
import photoTwo from '../assets/Zrzut ekranu 2024-06-6 o 19.17.26.png';
import photoThree from '../assets/mentor-2494673_1280.jpg';
const About = () => {
  return (
    <div className='about '>
      <div className='about-box'>
        <div className='about-left mt-5'>
          <h1 className='mb-3'>O nas</h1>
          <p>
            Jesteśmy sklepem, który zrodził się z pasji do natury i fascynacji
            tajemnicami świata. Nasza historia sięga daleko, gdy odkryliśmy
            magiczną siłę natury i postanowiliśmy podzielić się nią ze światem.
            Nasze produkty są nie tylko wyborem, ale też wiarą w harmonię z
            naturą. Zapraszamy do naszego skromnego sklepu, gdzie każdy znajdzie
            coś dla siebie i odkryje magię "Pod Słonecznymi Promieniami"
          </p>
        </div>
        <img className='about-image' src={photoOne} alt='' />
      </div>
      <div className='about-box second'>
        <img className='about-image' src={photoTwo} alt='' />
        <div className='about-left mt-5'>
          <h1 className='mb-3'>Co oferujemy</h1>
          <p>
            "W 'Pod Słonecznymi Promieniami' oferujemy różnorodność produktów,
            odzwierciedlającą naszą miłość do natury i troskę o dobrostan
            klientów. Nasze produkty są starannie wyselekcjonowane z
            najlepszych, naturalnych źródeł. Oferujemy kwiaty, zioła, magiczne
            mikstury i akcesoria, które pomagają w pielęgnacji roślin i
            tworzeniu przytulnego zakątka w domu. Zapraszamy do odkrywania
            naszej pełnej oferty i doświadczania magii natury na każdym kroku!"
          </p>
        </div>
      </div>
      <div className='about-box'>
        <div className='about-left mt-5'>
          <h1 className='mb-3'>Nasza historia</h1>
          <p>
            Jesteśmy skromnym sklepikiem, który powstał z pasji do natury i
            tajemniczych zakątków. Nasza historia sięga daleko wstecz, gdy
            Elżbieta odkryła tajemniczą jaskinię pełną magicznych nasion roślin.
            Od tamtej chwili "Pod Słonecznymi Promieniami" stał się miejscem,
            gdzie magia splata się z codziennością, a produkty na naszych
            półkach opowiadają historie dawnych czasów. Nasze kwiaty, zioła i
            magiczne mikstury nie tylko leczą ciała, ale także karmią dusze.
            Zapraszamy do naszego skromnego zakątka, aby razem cieszyć się magią
            "Pod Słonecznymi Promieniami"
          </p>
        </div>
        <img className='about-image' src={photoThree} alt='' />
      </div>
    </div>
  );
};

export default About;
