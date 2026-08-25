import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [itens, setItens] = useState([]);

  function adicionar(filme) {
    setItens((atual) => {
      const jaExiste = atual.some((item) => item.id === filme.id);
      if (jaExiste) return atual;
      return [...atual, filme];
    });
  }

  function remover(id) {
    setItens((atual) => atual.filter((item) => item.id !== id));
  }

  return (
    <CartContext.Provider value={{ itens, adicionar, remover }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
