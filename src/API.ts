const API_URL: string = "https://neelpatel05.pythonanywhere.com";
// const API_URL: string = "ptapi.json";

export type Elements = [
  {
    atomicMass: string;
    atomicNumber: number;
    atomicRadius: number;
    boilingPoint: number;
    bondingType: string;
    cpkHexColor: string;
    density: number;
    electronAffinity: number;
    electronegativity: number;
    electronicConfiguration: string;
    groupBlock: string;
    ionRadius: string;
    ionizationEnergy: number;
    meltingPoint: number;
    name: string;
    oxidationStates: string;
    standardState: string;
    symbol: string;
    vanDelWaalsRadius: number;
    yearDiscovered: number;
  }
];

const fetchingData = {
  fetchElement: async (): Promise<Elements> => {
    const elements = await (await fetch(API_URL)).json();
    return elements;
  },
};

export default fetchingData;
