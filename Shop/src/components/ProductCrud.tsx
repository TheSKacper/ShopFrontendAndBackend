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
          setEditMode(false); // Reset the edit mode
          setCurrentId(''); // Clear the current ID
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
        Add product
      </button>

      <table className='table table-striped mt-4'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Title</th>
            <th scope='col'>Category</th>
            <th scope='col'>Description</th>
            <th scope='col'>Price</th>
            <th scope='col'>Image</th>
            <th scope='col'>Update</th>
            <th scope='col'>Delete</th>
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
                  Update
                </button>
              </td>
              <td>
                <button
                  className='btn btn-danger'
                  onClick={() => handleDeleteProduct(item.id)}
                >
                  Delete
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
                {editMode ? 'Update Product' : 'Add Product'}
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
                <label className='form-label'>Title</label>
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
                <label className='form-label'>Category</label>
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
                <label className='form-label'>Description</label>
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
                <label className='form-label'>Price</label>
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
                <label className='form-label'>Image</label>
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
                Close
              </button>
              <button
                type='button'
                data-bs-dismiss='modal'
                onClick={handleSaveProduct}
                className='btn btn-primary'
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCrud;
