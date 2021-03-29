import React, { useState, useEffect } from 'react';
import {fetchProducts, productSchema, postProduct} from './mock';
import ProductList from './components/productList';
import ProductForm from './components/productForm.js';


function App({productList = [], editableProduct = null}) {
  const [state, setState] = useState({
    productList, editableProduct
  });

  useEffect(() => {
    if(!state.productList.length) {
      fetchProducts().then(res => {
        setState({
          ...state,
          productList: res
        });
      })
    }
  });

  const editProduct = product => {
    setState({
      ...state,
      editableProduct: product
    });
  };

  const createProduct = () => {
    setState({
      ...state,
      editableProduct: {
        ...productSchema,
        id: Math.floor(Math.random() * 100000)
      }
    });
  };

  const saveProduct = product => {
    let productList = [];
    const isNewProduct = !state.productList.find(_product => _product.id === product.id);

    if(isNewProduct) {
      productList = [ ...state.productList, product ];
    } else {
      productList = state.productList.map(_product => {
        if(_product.id === product.id) {
          return product;
        }
        return _product;
      });
    }

    postProduct(product).then(() => setState({
      ...state,
      productList,
      editableProduct: null,
    }));
  };

  return (
    <div className="container-fluid">
      {
        (state.editableProduct !== null) ?
          <ProductForm
            editableProduct={state.editableProduct}
            saveProduct={saveProduct}
          /> :
          <React.Fragment>
            <a className="btn btn-link" onClick={createProduct}>
              Create Product
            </a>
            <ProductList
              productList={state.productList}
              editProduct={editProduct}
            />
          </React.Fragment>
      }
    </div>
  );
}

export default App;
