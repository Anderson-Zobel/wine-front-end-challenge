import { Aside, FilterContainer, Label } from '../styles/components/radiofilter';
import React, { useState, useContext } from 'react';
import Context from '../context/Context';
import IProducts from '../interfaces/IProducts';

const RadioFilter = () => {
  const { setProducts, productsApi, setInfoPage  } = useContext(Context);
  const [selectedRadionBtn, setSelectedRadionBtn] = useState('');


  const isRadioSelected = (value: string): boolean => selectedRadionBtn === value;
  
  const handleRadioClick = (e: React.ChangeEvent<HTMLInputElement>): void =>{
    setSelectedRadionBtn(e.currentTarget.value);  
    if (e.target.value === 'radio0') {
      setInfoPage((prevState) => ({ ...prevState, totalItems: productsApi.length }));
      setProducts(productsApi);
    }
    if (e.target.value === 'radio1') {
      const filtered = productsApi.filter((product: IProducts) => product.priceNonMember >= 0 && product.priceNonMember <= 40);
      setInfoPage((prevState) => ({ ...prevState, totalItems: filtered.length }));
      setProducts(filtered);
    }    
    if (e.target.value === 'radio2') {
      const filtered = productsApi.filter((product: IProducts) => product.priceNonMember >= 40 && product.priceNonMember <= 60);  
      setInfoPage((prevState) => ({ ...prevState, totalItems: filtered.length }));
      setProducts(filtered);     
    }
    if (e.target.value === 'radio3') {
      const filtered = productsApi.filter((product: IProducts) => product.priceNonMember >= 100 && product.priceNonMember <= 200);
      setInfoPage((prevState) => ({ ...prevState, totalItems: filtered.length })); 
      setProducts(filtered);
    }
    if (e.target.value === 'radio4') {
      const filtered = productsApi.filter((product: IProducts) => product.priceNonMember >= 200 && product.priceNonMember <= 500); 
      setInfoPage((prevState) => ({ ...prevState, totalItems: filtered.length }));
      setProducts(filtered);
    }
    if (e.target.value === 'radio5' ) {
      const filtered = productsApi.filter((product: IProducts) => product.priceNonMember >= 500); 
      setInfoPage((prevState) => ({ ...prevState, totalItems: filtered.length }));
      setProducts(filtered);
    }    
  };

  return (
    <Aside>
      <FilterContainer>
        <p>Refine sua busca</p>
        <Label>
          <input 
            type={'radio'} 
            name='react-radio-btn'
            value="radio0" 
            checked={isRadioSelected('radio0')}
            onChange={handleRadioClick}
          /> 
            Todos os preços
        </Label>
        <Label>
          <input 
            type={'radio'} 
            name='react-radio-btn'
            value="radio1" 
            checked={isRadioSelected('radio1')}
            onChange={handleRadioClick}
          /> 
            Até R$40
        </Label>
        <Label>
          <input 
            type={'radio'} 
            name='react-radio-btn'
            value="radio2" 
            checked={isRadioSelected('radio2')}
            onChange={handleRadioClick}
          /> 
          
          R$40 A R$60
        </Label>
        <Label>
          <input 
            type={'radio'} 
            name='react-radio-btn'
            value="radio3" 
            checked={isRadioSelected('radio3')}
            onChange={handleRadioClick}
          /> 
          R$100 A R$200
        </Label>
        <Label>
          <input 
            type={'radio'} 
            name='react-radio-btn'
            value="radio4" 
            checked={isRadioSelected('radio4')}
            onChange={handleRadioClick}
          /> 
        R$200 A R$500
        </Label>
        <Label>
          <input 
            type={'radio'} 
            name='react-radio-btn'
            value="radio5" 
            checked={isRadioSelected('radio5')}
            onChange={handleRadioClick}
          /> Acima de R$500
        </Label>
      </FilterContainer>
    </Aside>
  );
};

export default RadioFilter;