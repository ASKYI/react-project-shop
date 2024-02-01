import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Cart from './Cart';

const CartModal = function Modal(
  { title, actions, open, onClose }
) {
  const dialog = useRef();

  useEffect(() => {
    open ? dialog.current.showModal() : dialog.current.close();
  }, [open]);

  return createPortal(
    <dialog id="modal" ref={dialog} onClose={onClose}>
      <h2>{title}</h2>
      <Cart />
      <form method="dialog" id="modal-actions">
        {actions}
      </form>
    </dialog>,
    document.getElementById('modal')
  );
};

export default CartModal;
