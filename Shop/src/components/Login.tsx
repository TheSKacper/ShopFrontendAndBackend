import { useState } from 'react';
import { LoginRequest, LoginResponse } from '../model/login';
import ApiService from '../service/ApiService';
import { useDispatch} from 'react-redux';
import { setLogin } from '../reducer/loginSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [data, setDate] = useState<LoginRequest>({
    username: '',
    password: '',
  });
  const [register, setRegister] = useState<boolean>(false);
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDate((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const logIn = (e) => {
    e.preventDefault();
    ApiService.post<LoginResponse>('/auth/login', data)
      .then((res) => {
        dispatch(
          setLogin({
            id:res.data.id ,
            username: res.data.username,
            role: res.data.role,
            success: res.data.success,
          }),
          navigation('/')
        );
      })
      .catch((error: Error) => {
        console.log(error);
      });
  };

  const handleRegister = () => {
    if (register) {
      setRegister(false);
    } else {
      setRegister(true);
    }
  };

  return (
    <div className='login'>
      <div className='login-left'>
        {!register ? <h1>Login Side</h1> : <h1>Register side</h1>}
        {!register ? (
          <p>You do not have an account ? </p>
        ) : (
          <p>You have an account ? </p>
        )}
        <button onClick={handleRegister} className='btn btn-info'>
          {!register ? 'Register' : 'Login'}
        </button>
      </div>
      <div className='login-right'>
        {!register ? (
          <h2 className='mb-5'>Login</h2>
        ) : (
          <h2 className='mb-5'>Register</h2>
        )}
        <form className='login-form' onSubmit={logIn}>
          <div className='mb-3'>
            <label className='form-label'>User Name</label>
            <input
              type='text'
              onChange={handleChange}
              className='form-control'
              name='username'
              value={data.username}
            />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Password</label>
            <input
              type='password'
              className='form-control'
              name='password'
              value={data.password}
              onChange={handleChange}
            />
          </div>
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
