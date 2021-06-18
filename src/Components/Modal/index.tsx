import React from "react";
import  { createPortal } from "react-dom";
import { modalStyles } from "./styles";

const modalRoot = document.querySelector("#modal-root") as HTMLElement;

const Modal: React.FC = ({children}) => {

    return createPortal(
        <div style={modalStyles}>{children}</div>
        , modalRoot
    )
}
export default Modal;
