import React from "react";
import { createPortal } from "react-dom";
import { ModalWrapper } from "./styles";
const modalRoot = document.querySelector("#modal-root") as HTMLElement;

interface Props {
  children:
    | React.ReactNode
    | React.ReactNode[]
    | React.ReactElement
    | JSX.Element
    | JSX.Element[];
}

const Modal = ({ children }: Props) => {
  return createPortal(<ModalWrapper>{children}</ModalWrapper>, modalRoot);
};
export default Modal;
