import Image from 'next/image';
import React from 'react';
import CartButton from './navbar-dependencies/CartButton';
import ProfileButton from './navbar-dependencies/ProfileButton';
import SearchButton from './navbar-dependencies/SearchButton';
import { Header, A, ButtonGroup, Nav } from '../styles/components/navbar';

const NavbarStructure = () => {
  return(
    <Header>
      <Nav>
        <Image 
          alt='logo' 
          src='/logo.svg' 
          width={100} 
          height={26.75} 
        />
        <A as='a' href='/clube'>
          Clube
        </A>
        <A
          style={{ color: '#D14B8F', borderBottom: '3px solid #D14B8F' }}
          as='a'
          href='/loja'  
        >
          Loja
        </A>
        <A as='a' href='/produtores'>
          Produtores
        </A>
        <A as='a' href='/eventos'>
          Eventos
        </A>        
      </Nav>
      <ButtonGroup>
        <SearchButton />
        <ProfileButton />
        <CartButton />
      </ButtonGroup>
    </Header>
  );
};



export default NavbarStructure;