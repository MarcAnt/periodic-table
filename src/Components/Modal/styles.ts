import styled from "styled-components";
import { selectedStateBgColor } from "../../Components/Element/styles";

interface IBgColor {
  standardState: string; //solid, gas, liquid
  color: string; //standard-state || normal group
  atomicNumber: number;
  groupBlock: string; //metalloid, noble gas
}

export const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;

  .modalContent {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: whitesmoke;
    position: fixed;
    border-radius: 10px;
    padding: 1.25rem;
    width: 50%;

    @media (max-width: 1024px) {
      width: 90%;
    }
    @media (max-width: 550px) {
      flex-direction: column;
    }
  }

  .modalOverlay {
    background-color: black;
    opacity: 0.6;
    width: 100vw;
    height: 100vh;
    position: fixed;
  }

  .buttonClose {
    color: black;
    font-size: 1.5rem;
    position: absolute;
    right: 1rem;
    top: 1rem;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;

export const SingleElementModal = styled.div<IBgColor>`
  flex: 50%;
  font-family: "Inconsolata", sans-serif;
  color: ${(props) => (props.atomicNumber !== 0 ? "black" : "whitesmoke")};
  border-radius: 10px;
  border: none;
  width: 50%;
  height: 80%;
  background-color: ${(props) =>
    selectedStateBgColor(
      props.standardState,
      props.color,
      props.atomicNumber,
      props.groupBlock
    )};
  text-align: center;
  padding: 1rem;
  box-shadow: ${(props) =>
    props.atomicNumber !== 0 ? "1px 2px 5px lightgrey" : ""};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  p {
    font-size: 2.5rem;
    padding: 1rem;
  }

  h1 {
    font-size: 4.5rem;
    padding: 1rem;
  }
  small {
    font-size: 1rem;
    padding: 0.5rem;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`;
export const InfoSingleElementModal = styled.div`
  flex: 50%;
  text-align: center;
  /* padding: 1rem; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  p {
    font-size: 2rem;
    padding: 1rem;
  }

  h1 {
    font-size: 4rem;
    padding: 1rem;
  }
  small {
    font-size: 1rem;
    padding: 0.75rem;
  }
`;
