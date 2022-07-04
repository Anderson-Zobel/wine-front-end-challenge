import React, { useContext, useState } from 'react';
import Context from '../../context/Context';
import { SearchBtn, SearchImg } from '../../styles/components/navbar';
import IProducts from '../../interfaces/IProducts';

export default function SearchButton() {
  const { productsApi, setProducts } = useContext(Context);
  const [disabled, setDisabled] = useState(true)
  const [searchInput, setSearchInput] = useState('');

  interface ITarget {
    target: {value: string};
  }

  const handleChange = ({ target: { value } }: ITarget) => {
    setSearchInput(value.toLowerCase());
    search();
  }  

  const search = () => {
    const searchFilter = productsApi.filter((product: IProducts) => product.name.toLowerCase().includes(searchInput));
    setProducts(searchFilter)
  }

  return (
    <>
      <SearchBtn onClick={() => setDisabled(!disabled)}>
        <SearchImg src='/search.svg' alt='search button' />
      </SearchBtn>
      {!disabled ? (
        <input value={searchInput} onChange={handleChange}/>
      ): null}
    </>
  );
}
