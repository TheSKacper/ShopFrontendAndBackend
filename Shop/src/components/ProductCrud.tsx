import { useState } from 'react';
import { useProducts } from '../hooks/useProducts';
import { Product, RequestProduct } from '../model/product';
import ApiService from '../service/ApiService';

const ProductCrud = () => {
  const { products, fetchProducts } = useProducts();
  const [data, setData] = useState<RequestProduct>({
    title: '',
    category: '',
    description: '',
    price: 0,
    image: '',
  });
  const [editMode, setEditMode] = useState<boolean>(false);
  const [currentId, setCurrentId] = useState<string>('');

  const handleData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSaveProduct = () => {
    if (editMode) {
      ApiService.put(`/product/${currentId}`, data)
        .then((res) => {
          console.log(res.data);
          fetchProducts();
          setEditMode(false);
          setCurrentId('');
          setData({
            title: '',
            category: '',
            description: '',
            price: 0,
            image: '',
          });
        })
        .catch((error: Error) => {
          console.log(error);
        });
    } else {
      ApiService.post('/product', data)
        .then((res) => {
          console.log(res.data);
          fetchProducts();
          setData({
            title: '',
            category: '',
            description: '',
            price: 0,
            image: '',
          }); // Clear the form data
        })
        .catch((error: Error) => {
          console.log(error);
        });
    }
  };

  const updateProduct = (id: string, product: Product) => {
    setData(product);
    setCurrentId(id);
    setEditMode(true);
  };

  const handleDeleteProduct = (id: string) => {
    ApiService.delete(`/product/${id}`)
      .then((res) => {
        console.log(res.data);
        fetchProducts();
      })
      .catch((error: Error) => {
        console.log(error);
      });
  };

  return (
    <div className='productCrud container'>
      <button
        type='button'
        className='btn btn-primary m-5 float-end'
        data-bs-toggle='modal'
        data-bs-target='#exampleModal'
        onClick={() => {
          setEditMode(false);
          setData({
            title: '',
            category: '',
            description: '',
            price: 0,
            image: '',
          });
        }}
      >
        Dodaj produkt
      </button>

      <table className='table table-striped mt-4'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Tytuł</th>
            <th scope='col'>Kategoria</th>
            <th scope='col'>Opis</th>
            <th scope='col'>Cena</th>
            <th scope='col'>Zdjęcie</th>
            <th scope='col'>Zmień</th>
            <th scope='col'>Usuń</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>{item.category}</td>
              <td>{item.description}</td>
              <td>
                <img className='crudImg' src={item.image} alt={item.title} />
              </td>
              <td>
                <button
                  data-bs-toggle='modal'
                  data-bs-target='#exampleModal'
                  onClick={() => updateProduct(item.id, item)}
                  className='btn btn-info'
                >
                  Zmień
                </button>
              </td>
              <td>
                <button
                  className='btn btn-danger'
                  onClick={() => handleDeleteProduct(item.id)}
                >
                  Usuń
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div
        className='modal fade'
        id='exampleModal'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h1 className='modal-title fs-5' id='exampleModalLabel'>
                {editMode ? 'Zmień produkt' : 'Dodaj produkt'}
              </h1>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
              <div className='mb-3'>
                <label className='form-label'>Tytuł</label>
                <input
                  type='text'
                  name='title'
                  value={data.title}
                  onChange={handleData}
                  className='form-control'
                  id='exampleFormControlInput1'
                />
              </div>
              <div className='mb-3'>
                <label className='form-label'>Kategoria</label>
                <input
                  type='text'
                  name='category'
                  value={data.category}
                  onChange={handleData}
                  className='form-control'
                  id='exampleFormControlInput1'
                />
              </div>
              <div className='mb-3'>
                <label className='form-label'>Opis</label>
                <input
                  type='text'
                  name='description'
                  value={data.description}
                  onChange={handleData}
                  className='form-control'
                  id='exampleFormControlInput1'
                />
              </div>
              <div className='mb-3'>
                <label className='form-label'>Cena</label>
                <input
                  type='number'
                  name='price'
                  value={data.price}
                  onChange={handleData}
                  className='form-control'
                  id='exampleFormControlInput1'
                />
              </div>
              <div className='mb-3'>
                <label className='form-label'>Zdjęcie</label>
                <input
                  type='text'
                  name='image'
                  value={data.image}
                  onChange={handleData}
                  className='form-control'
                  id='exampleFormControlInput1'
                />
              </div>
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-secondary'
                data-bs-dismiss='modal'
              >
                Zamknij
              </button>
              <button
                type='button'
                data-bs-dismiss='modal'
                onClick={handleSaveProduct}
                className='btn btn-primary'
              >
                Zapisz
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCrud;
