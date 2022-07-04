import React from 'react';
import ICard from '../interfaces/ICard'
import Link from 'next/link';
import { 
  Container, 
  ImgContainer, 
  CardTitle, 
  DetailsText,
  FlagContainer,
  Button,
  Price,
} from '../styles/components/card';



const Card = ({ product }: ICard ) => {
  return(
    <div>
      <Container>
        <span>
          <ImgContainer src={product.image} alt={product.name}/>
        </span>
        <FlagContainer src={product.flag} alt={product.flag}/>
        <CardTitle>{product.name}</CardTitle>
        <DetailsText>
          <Price>R$ {product.price}</Price>
          <em>{product.discount}% OFF</em>
        </DetailsText>
        <DetailsText>
          Sócio Wine{' '}
          <strong>
            R$ <span>{product.priceMember}</span>
          </strong>
        </DetailsText >
        <DetailsText>Não sócio R$ {product.priceNonMember}</DetailsText>
      </Container>
      <Link href={`/products/${product.id}`}>
        <Button>adicionar</Button>
      </Link>
    </div>
  );
};

export default Card;