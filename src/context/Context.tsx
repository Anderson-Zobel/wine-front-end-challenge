import { createContext } from 'react';

interface IContext{
  products: {}
}

const Context = createContext({} as IContext);

export default Context;
