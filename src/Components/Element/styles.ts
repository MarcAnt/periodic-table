import styled from "styled-components";

type IBgColor = {
  color: string;
  standardState: string; //solid, gas, liquid
  atomicNumber: number;
  groupBlock: string; //metalloid, noble gas
};

const colorState: any = {
  gas: "#BFFFFF",
  solid: "#F1F1F2",
  liquid: "#FFBFBF",
};

//Only for * and **
const noColor = {
  color: "transparent",
};

const colorBlock: any = {
  nonmetal: "#FFFFC7",
  "alkali metal": "#FFC2C2",
  "alkaline earth metal": "#D3D3FF",
  "transition metal": "#B8DBFF",
  metal: "#B9FFB9",
  metalloid: "#E0EEBA", //post-transition metal
  "noble gas": "#FFE2B7",
  halogen: "#FFFFB8",
  lanthanoid: "#ACFFFF",
  actinoid: "#C0FFEA",
};

//Also used in the modal component to control the color of the element

export const selectedStateBgColor = (
  standardState: string,
  selectedState: string,
  atomicNumber: number,
  groupBlock: string
) => {
  //Only for * and **
  if (atomicNumber === 0) return noColor.color;

  if (selectedState === "" || selectedState === "group-block") {
    if (groupBlock === "post-transition metal") return colorBlock["metal"];
    return colorBlock[groupBlock];
  } else {
    if (atomicNumber >= 100 && atomicNumber <= 117) return colorState.solid;
    if (atomicNumber === 118) return colorState.gas;
    return colorState[standardState];
  }
};

export const SingleElement = styled.button<IBgColor>`
  font-family: "Inconsolata", sans-serif;
  color: ${(props) => (props.atomicNumber !== 0 ? "black" : "whitesmoke")};
  border-radius: 10px;
  border: none;
  width: 75px;
  cursor: ${(props) => (props.atomicNumber > 0 ? "pointer" : "default")};
  background-color: ${(props) =>
    selectedStateBgColor(
      props.standardState,
      props.color,
      props.atomicNumber,
      props.groupBlock
    )};
  text-align: center;
  padding: 0.15rem 0;
  transition: opacity 0.3s ease-in-out;
  box-shadow: ${(props) => (props.atomicNumber > 0 ? "1px 2px 5px black" : "")};

  p {
    font-size: 0.8rem;
  }

  h1 {
    font-size: 1.5rem;
  }
  small {
    font-size: 0.43rem;
  }

  :hover {
    opacity: 0.7;
  }

  @media screen and (max-width: 1220px) {
    width: 100%;
    border-radius: 5px;
    p {
      font-size: 0.5rem;
    }

    h1 {
      font-size: 1rem;
    }
    small {
      display: none;
      /* font-size: .20rem; */
    }
  }
`;
