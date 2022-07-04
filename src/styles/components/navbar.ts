import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  width: 100%;
  background: #fff;
  box-shadow: 0px 2px 4px 0px rgb(0 0 0 / 10%);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  z-index: 100;
`

export const A = styled.a`
  font-size: 18px;
  gap: 24px;
  color: #555555;
  padding: 30px 0;
  border-bottom: 3px solid #fff;
  text-decoration: none;


  &:hover {
      color: #D14B8F;
      border-bottom: 3px solid #D14B8F;
  }
`

export const CartBtn = styled.button`
  width: 56px;
  height: 57px;
  border: none;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items:center;
  cursor: pointer;
`

export const CartImg = styled.img`
  width: 50px;
  height: 50px;
  border: none;
`

export const SearchBtn = styled.button`
  width: 70px;
  height: 60px;
  border: none;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items:center;
  cursor: pointer;
`
export const SearchImg = styled.img`
  width: 30px;
  height: 31px;
  border: none;
`
export const ProfileBtn = styled.button`
  width: 56px;
  height: 57px;
  border: none;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: self-end;
  color: #555555;
  cursor: pointer;
`

export const ProfileImg = styled.img`
  width: 42px;
  height: 48px;
  border: none;
  position: relative;
  bottom: -2px;
`
export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap 10px;
`

export const Nav = styled.nav`
  padding-right: 30px;
  display: flex;
  gap: 7%;
  width: 70%;
`


