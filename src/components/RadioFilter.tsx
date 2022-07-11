import { Aside, FilterContainer, Label } from '../styles/components/radiofilter';
import React, { useState, useContext } from 'react';
import Context from '../context/Context';
import IProducts from '../interfaces/IProducts';

const RadioFilter = () => {
  const { setProducts, productsApi, setInfoPage  } = useContext(Context);
  const [selectedRadionBtn, setSelectedRadionBtn] = useState('');


  const isRadioSelected = (value: string): boolean => selectedRadionBtn === value;

  const filter = (valueOne: number, valueTwo: number): IProducts[] => {
    return productsApi.filter((product: IProducts) => product.priceNonMember >= valueOne && product.priceNonMember <= valueTwo);
  }  

  const setStatesFiltered = ( filter: IProducts[] ) => {
    setInfoPage((prevState) => ({ ...prevState, totalItems: filter.length }));
    setProducts(filter);    
  }
  
  const handleRadioClick = (e: React.ChangeEvent<HTMLInputElement>): void =>{
    const target = e.currentTarget.value 
    setSelectedRadionBtn(target); 

    switch (target) {
    case 'radio0':
      return setStatesFiltered(productsApi);

    case 'radio1':
      return setStatesFiltered(filter(0, 40))

    case 'radio2':
      return setStatesFiltered(filter(40, 60)) 

    case 'radio3':
      return setStatesFiltered(filter(100, 200))

    case 'radio 4':
      return setStatesFiltered(filter(200, 500))
    
    case 'radio5':
      return setStatesFiltered(filter(500, 500))

    default:
      return setStatesFiltered(productsApi);
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