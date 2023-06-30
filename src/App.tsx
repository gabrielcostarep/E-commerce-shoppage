import { createContext, useState } from 'react';

import { Header } from './components/Header';
import { Main } from './components/Main';

type ProductContextType = {
  count: number;
  setCount: (count: number) => void;
};

export const ProductContext = createContext<ProductContextType>(
  {} as ProductContextType
);

export function App() {
  const [count, setCount] = useState(0);

  return (
    <ProductContext.Provider value={{ count, setCount }}>
      <Header />
      <Main />
    </ProductContext.Provider>
  );
}
