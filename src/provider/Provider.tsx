import React, { useState, useEffect, FC, ReactNode} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Context from '../context/Context';


interface Props{
  children?: ReactNode  
}

interface IProducts {
  avaliations: number,
  classification: string,
  country: string,
  discount: number,
  flag: string,
  id: number,
  image: string,
  name: string,
  price: number,
  priceMember: number,
  priceNonMember: number,
  rating: number
  region: string,
  size: string,
  sommelierComment: string,
  type: string,
}

 const Provider = ({ children }: Props) => {
  const [products, setProducts] = useState<IProducts[]>([]);
  

  const getData = () => {
    axios.get('https://wine-back-test.herokuapp.com/products?page=1&limit=10')
      .then((response) => {
        const result = response.data.items;
        setProducts(result);
      });
  };

  useEffect(() => getData(), []);

  console.log(products);
  
  
  const myProvider = {
    products,
  }

  return <Context.Provider value={ myProvider }>{children}</Context.Provider>;
}
 

export default Provider;
