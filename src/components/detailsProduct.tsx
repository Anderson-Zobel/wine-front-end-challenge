import React, { useContext, useState } from 'react';
import IProducts from '../interfaces/IProducts';
import Context from '../context/Context';
import { PageContent, Back, Article, ProducContainer, TextProducts, ProductList, AddButton, DecrementButton, IncrementButton, AddStorage } from '../styles/components/pageContent';
import { Aside } from '../styles/components/radiofilter';
import RatingC from '../components/rating'

interface IId {
  id: string
}



const DetailsProduct = ({ id }: IId) => {
  const { productsApi } = useContext(Context);
  const [count, setCount] = useState(1);

  
  const [product] = productsApi.filter((product: IProducts) => product.id === Number(id));

  const handleClick = () => {
    localStorage.setItem('carrinho', JSON.stringify({...product, count}));    
  }

  function incrementCount() {
    setCount(count + 1);
  }

  function decrementCount() {
    setCount(count - 1);
    if (count <= 0) {
      setCount(0);
    }
  }

  return (
    <PageContent>
      <Aside>
        <Back href='/'>
          <img src='/back.svg' alt='voltar página' />
          Voltar
        </Back>
      </Aside>
      <Article>
        <div>
          <div>
            <img src={product.image} alt='vinho' />
          </div>        
          <ProducContainer>
            <TextProducts>
              <em>Vinhos</em> &gt; <em> {product.country} </em> &gt; <em> {product.region} </em>
            </TextProducts>
            <h1>{product.name}</h1>
            <ProductList>
              <li>
                <img
                  src={product.flag}
                />
              </li>
              <li>{product.country}</li>
              <li>{product.type}</li>
              <li>{product.classification}</li>
              <li>{product.size}</li>
              <li>
                <RatingC rating={product.rating}/>          
              </li>
              <span>({product.avaliations})</span>         
            </ProductList>
            <div>
              <h2>
                R$<span>{product.priceMember}</span>
              </h2>
              <h3>NÃO SÓCIO R$ {product.priceNonMember}</h3>
            </div>
            <div>
              <h3>Comentário do Sommelier</h3>
              <p>{product.sommelierComment}</p>
            </div>
            <AddButton>
              <span>
                <DecrementButton
                  onClick={decrementCount}
                >
                  -
                </DecrementButton>
                <span>{count}</span>          
                <IncrementButton
                  onClick={incrementCount}
                >
                  +
                </IncrementButton>
              </span>
              <hr />
              <AddStorage
                onClick={handleClick}
              >
                Adicionar
              </AddStorage>
            </AddButton>
          </ProducContainer>
        </div>
      </Article>
    </PageContent>
    
  );
}

export default DetailsProduct;