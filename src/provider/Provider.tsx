import React, { useState, useEffect, ReactNode} from 'react';
import axios from 'axios';
import Context from '../context/Context';
import IProducts from '../interfaces/IProducts';
import IInfoPage from '../interfaces/IInfoPage';

interface Props{
  children?: ReactNode  
}

const Provider = ({ children }: Props) => {
  const [productsApi, setProductsApi] = useState<IProducts[]>([]);
  const [products, setProducts] = useState(productsApi);
  const [infoPage, setInfoPage] = useState<IInfoPage>({ itemsPerPage: 0, page: 0, totalItems: 0, totalPages: 0});


  useEffect(() => {
    axios.get('https://wine-back-test.herokuapp.com/products?page=1&limit=60')
      .then((response) => {    
        const { data } = response;
        const { items, ...infoPage } = data; 
        setProductsApi(items);
        const { itemsPerPage, page, totalPages } = infoPage;
        setInfoPage({ itemsPerPage, page, totalPages, totalItems: 60 });        
      });
  }, []);

  useEffect(() => {
    setProducts(productsApi); 
  }, [productsApi]);
  
  const myProvider = {
    productsApi,
    setProductsApi,
    products,
    setProducts,
    setInfoPage,
    infoPage,

  };

  return <Context.Provider value={ myProvider }>{children}</Context.Provider>;
};
 

export default Provider;
