import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const Portal = ({ children }) => {
  const modalRoot = document.getElementById("portal");
  const el = document.createElement("div");

  useEffect(() => {
    modalRoot.appendChild(el)
  });

  useEffect(() => {
    return () => modalRoot.removeChild(el)
  });

  return createPortal(children, el);
}

export default Portal;
