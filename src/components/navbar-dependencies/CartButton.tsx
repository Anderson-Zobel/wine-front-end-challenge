import React, { useEffect, useState } from 'react';
import { CartBtn, CartImg } from '../../styles/components/navbar'
import IProducts from '../../interfaces/IProducts';

const CartButton = () => {
  const [cart, setCart] = useState<ICart>(); 

  interface ICart extends IProducts {
    count: number    
  }
  
  useEffect(() => {
    const item = localStorage.getItem('carrinho');
    if(item !== null){
      setCart(JSON.parse(item));
    }
  }, [])

  
  return (
    <CartBtn>
      <CartImg src='/cart.svg' alt='cart button' />
      {cart?.count}
    </CartBtn>
  );
}

export default CartButton;