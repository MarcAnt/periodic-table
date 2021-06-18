import React from "react";
import  { createPortal } from "react-dom";
import { modalWrapper } from "./styles";

const modalRoot = document.querySelector("#modal-root") as HTMLElement;

const Modal: React.FC = ({children}) => {

    return createPortal(
        <div style={modalWrapper}>{children}</div>
        , modalRoot
    )
}
export default Modal;
