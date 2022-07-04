import React, { useContext, useState } from 'react';
import Card from './card';
import IProducts from '../interfaces/IProducts';
import Context from '../context/Context';
import { CardContainer , Article } from '../styles/components/card';
import { PageContent, PageButton } from '../styles/components/pageContent';
import RadioFilter from './RadioFilter';


const Content = () => {
  const { products, infoPage } = useContext(Context);
  const [currentPage, setCurrentPage] = useState(0);

  const itensPerPage = 10

  const pages = Math.ceil(products.length / itensPerPage)
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentProducts = products.slice(startIndex, endIndex)

  return(
    <PageContent>
      <RadioFilter />
      <Article>
        { infoPage ? (
          <p>
            <strong>{ infoPage.totalItems }</strong> produtos encontrados
          </p>
        ): null }
        <CardContainer>
          {currentProducts.map((product: IProducts) => (
            <Card key={product.id} product={product}/>
          ))}
        </CardContainer>
        <div>
          {Array.from(Array(pages), (_item, index ) => {
            return <PageButton value={index} key={index} onClick={(e) => setCurrentPage(Number((e.target as HTMLInputElement).value))}>{index + 1}</PageButton>
          })}
        </div>
      </Article>
    </PageContent> 
  );
};

export default Content;