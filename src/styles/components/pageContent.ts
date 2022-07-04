import styled from 'styled-components';

export const PageContent = styled.section`
  padding: 100px 0;
  width: 90%;
  display: flex;
  justify-content: center;
`

export const Back = styled.a`
text-decoration: none;
color: #111111;
cursor: pointer;
display: flex;
align-items: center;
font-weight: 300;
& > img {
  margin-right: 15%;
}
`

export const Article= styled.article`
& {
  width: 80%;
}

& > div {
  padding: 2% 0;
}

& > div {
  display: flex;
  gap: 15%;
}

& h1 {
  font-weight: 700;
  font-size: 30px;
  color: #111111;
  margin: 0;
}
`;

export const ProducContainer = styled.div`
& > div:nth-child(4) {
  font-size: 24px;

  & > h2 {
    color: #c81a78;
    margin-bottom: 0;

    & span {
      font-size: 46px;
    }
  }
  & > h3 {
    margin: 0;
    font-size: 16px;
    color: #888;
  }
}
& > div:nth-child(5) {
}
`;

export const TextProducts = styled.p`
& > em {
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: #c81a78;
}
& > em:nth-child(3) {
  color: #888888;
}
`

export const ProductList = styled.ul`
& {
  list-style-type: none;
  display: flex;
  padding: 0;
  align-items: center;
}

& li {
  margin-right: 10px;
  font-size: 15px;
  font-weight: 400;
  color: #555555;
  display: flex;
}

& li > img {
  width: 16px;
  height: 16px;
}
`;

export const AddButton = styled.div`
background: #7ebc43;
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.35);
border-radius: 4px;
width: 60%;
align-items: center;
height: 56px;

& {
  display: flex;
  justify-content: space-evenly;

  & > span {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 30%;

    & > em {
      font-style: normal;
      font-weight: 400;
      font-family: 'Lato';

      color: white;
    }
  }

  & > hr {
    border: 1px solid white;
    height: 33px;
    opacity: 0.1;
    margin: 0;
  }

  & > button {
    border: none;
    font-weight: 700;
    font-size: 16px;
    color: white;
    background-color: transparent;
  }
}
`;

export const DecrementButton = styled.div`
background-image: url('/remove.svg');
background-size: cover;
background-repeat: no-repeat;
color: white;
cursor: pointer;
font-size: 20px;
font-weight: 600;
padding: 4px 12px;
`;

export const IncrementButton = styled.div`
background-image: url('/add.svg');
background-size: cover;
background-repeat: no-repeat;
color: white;
cursor: pointer;
font-weight: 600;
font-size: 20px;
padding: 4px 10px;
`;

export const AddStorage = styled.button`
cursor: pointer;
&:hover {
  color: #D14B8F;
}
&:active {
  transform: scale(0.95);
}

`
export const PageButton = styled.button`
box-sizing: border-box;

left: 0%;
right: 85.5%;
top: 0%;
bottom: 0%;
margin-right: 10px;
width: 50px;
height: 50px;
radius: 3px;

background: #B6116E;
border: 1px solid #B6116E;
border-radius: 3px;

font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;

color: #FFFFFF;

&:hover {
  color: #D14B8F;
}
&:active {
  transform: scale(0.95);
}

&:focus {background-coloer:red}



`

export default PageContent;