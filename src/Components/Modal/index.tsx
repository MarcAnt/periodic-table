import React from "react";
import { createPortal } from "react-dom";
import { ModalWrapper } from "./styles";

const modalRoot = document.querySelector("#modal-root") as HTMLElement;

const Modal: React.FC = ({ children }) => {
  return createPortal(<ModalWrapper>{children}</ModalWrapper>, modalRoot);
};
export default Modal;
