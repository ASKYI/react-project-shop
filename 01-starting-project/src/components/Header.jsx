import { useContext, useState, useCallback } from 'react';
import { CartContext } from '../store/shopping-cart-context.jsx';

import CartModal from './CartModal.jsx';

export default function Header() {
  const { items } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);

  const cartQuantity = items.length;

  const handleOpenCartClick = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleCloseCart = useCallback(() => {
    setIsOpen(false);
  }, []);

  let modalActions = <button>Close</button>;

  if (cartQuantity > 0) {
    modalActions = (
      <>
        <button>Close</button>
        <button>Checkout</button>
      </>
    );
  }

  return (
    <>
      <CartModal
        title="Your Cart"
        actions={modalActions}
        open={isOpen}
        onClose={handleCloseCart}
      />
      <header id="main-header">
        <div id="main-title">
          <img src="logo.png" alt="Elegant model" />
          <h1>Elegant Context</h1>
        </div>
        <p>
          <button onClick={handleOpenCartClick}>Cart ({cartQuantity})</button>
        </p>
      </header>
    </>
  );
}
