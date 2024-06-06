import { useState } from 'react';
import { LoginRequest, LoginResponse } from '../model/login';
import ApiService from '../service/ApiService';
import { useDispatch } from 'react-redux';
import { setLogin } from '../reducer/loginSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
  const [data, setDate] = useState<LoginRequest>({
    username: '',
    password: '',
  });
  const [register, setRegister] = useState<boolean>(false);
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const notify = (message: string) => toast(message);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDate((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const logIn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    ApiService.post<LoginResponse>('/auth/login', data)
      .then((res) => {
        dispatch(
          setLogin({
            id: res.data.id,
            username: res.data.username,
            role: res.data.role,
            success: res.data.success,
          }),
          navigation('/'),
          notify('Witamy na naszej stronie ' + data.username)
        );
      })
      .catch((error: Error) => {
        console.log(error);
      });
  };

  const handleRegisterSubmit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    ApiService.post('/auth/register', data)
      .then((res) => {
        setRegister((prevRegister) => !prevRegister);
        setDate({ username: '', password: '' });
        notify('Rejestracja pomyślnie, witamy na pokładzie ' + data.username);
      })
      .catch((error: Error) => {
        console.log(error);
      });
  };

  const handleRegister = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (register) {
      setRegister(false);
    } else {
      setRegister(true);
    }
  };

  return (
    <div className='login'>
      <form className='login-form'>
        {register ? (
          <h1 className='m-3'>Rejestracja</h1>
        ) : (
          <h1 className='m-3'>Logowanie</h1>
        )}
        <h3 className='text-center mb-4'>
          <i className='bi bi-shop'></i>
        </h3>
        <label>Nazwa użytkownika</label>
        <input
          className='mb-3 form-control'
          type='text'
          name='username'
          onChange={handleChange}
          value={data.username}
        />
        <label>Hasło</label>
        <input
          className='mb-5 form-control'
          type='password'
          name='password'
          onChange={handleChange}
          value={data.password}
        />
        {register ? (
          <button
            onClick={(e) => handleRegisterSubmit(e)}
            className='login-btn mb-3'
          >
            Zarejestruj
          </button>
        ) : (
          <button
            onClick={(e) => logIn(e)}
            className='login-btn mb-3 login-btn'
          >
            Zaloguj
          </button>
        )}
        {register ? (
          <button onClick={(e) => handleRegister(e)} className='login-register'>
            Zaloguj się
          </button>
        ) : (
          <button onClick={(e) => handleRegister(e)} className='login-register'>
            Zarejestruj się
          </button>
        )}
      </form>
    </div>
  );
};

export default Login;
