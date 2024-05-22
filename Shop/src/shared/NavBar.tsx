import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setLogin } from '../reducer/loginSlice';
import { RootState } from '../store/store';
const NavBar = () => {
  const [active, setActive] = useState('');
  const loginReducer = useSelector((state: RootState) => state.login);
  const shopReducer = useSelector((state: RootState) => state.shop);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(setLogin({ username: '', role: '', success: false }));
  };

  return (
    <nav className='navbar navbar-expand-lg bg-black sticky-top'>
      <div className='container'>
        <Link className='navbar-brand text-white' to='/'>
          ShopTJ
        </Link>
        <button
          className='navbar-toggler bg-white'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <Link
                onClick={() => setActive('shop')}
                className={active === 'shop' ? 'nav-link active' : 'nav-link'}
                to='/shop'
              >
                Shop
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                onClick={() => setActive('contact')}
                className={
                  active === 'contact' ? 'nav-link active' : 'nav-link'
                }
                to='/contact'
              >
                Contact
              </Link>
            </li>
            {shopReducer.shopping.length > 0 ? (
              <li className='nav-item'>
                <Link
                  to='/shopping'
                  className={
                    active === 'shopping' ? 'nav-link active' : 'nav-link'
                  }
                  onClick={() => setActive('shopping')}
                >
                  Shopping
                </Link>
              </li>
            ) : null}

            {loginReducer.role === 'admin' ? (
              <li className='nav-item'>
                <Link
                  to='/crud'
                  onClick={() => setActive('crud')}
                  className={active === 'crud' ? 'nav-link active' : 'nav-link'}
                >
                  Crud
                </Link>
              </li>
            ) : null}

            {loginReducer.success === true ? (
              <li className='nav-item'>
                <Link to='/' onClick={handleLogOut} className='nav-link'>
                  LogOut
                </Link>
              </li>
            ) : (
              <li className='nav-item'>
                <Link
                  onClick={() => setActive('login')}
                  className={
                    active === 'login' ? 'nav-link active' : 'nav-link'
                  }
                  to='/login'
                >
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
