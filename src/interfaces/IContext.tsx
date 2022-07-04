import React, { SetStateAction } from 'react';
import IProducts from './IProducts';
import IInfoPage from './IInfoPage';

export default interface IContext{
  productsApi: IProducts[],
  setProductsApi: React.Dispatch<SetStateAction<IProducts[]>>,
  products: IProducts[],
  setProducts: React.Dispatch<SetStateAction<IProducts[]>>,
  infoPage: IInfoPage,
  setInfoPage: React.Dispatch<SetStateAction<IInfoPage>> 
}