import { IElements } from "Interfaces/IElements";

interface ISingleElement {
    name: string;
    symbol: string;
    atomicNumber: number;
    group: string;
    bgColor: string;
}

export function filterByElements( {data, numbers}: {data: IElements[] | null; numbers: number[]} ) {
    const element: ISingleElement[] = [];

    numbers.forEach(number => {
        data?.filter(el => {
            if(el.atomicNumber === number) element.push({
                name: el.name,
                symbol: el.symbol, 
                atomicNumber: el.atomicNumber,
                group: el.groupBlock,
                bgColor: el.cpkHexColor
            })
            return element;
        })
    })

    return element;
}

// export function filterByGroup( {data, numbers}: {data: IElements[] | null; numbers: number[]} ):string[] {
//     const group: string[] = [];

//     numbers.forEach(number => {
//         data?.filter(el => {
//             if(el.atomicNumber === number) group.push(el.groupBlock)
//             return group;
//         })
//     })

//     return group;

// }

// export function filterBySymbol( {data, numbers}: {data: IElements[] | null; numbers: number[]} ):string[] {
//     const symbol: string[] = [];

//     numbers.forEach(number => {
//         data?.filter(el => {
//             if(el.atomicNumber === number) symbol.push(el.symbol)
//             return symbol;
//         })
//     })

//     return symbol;

// }

// export function filterByAtomicNumber( {data, numbers}: {data: IElements[] | null; numbers: number[]} ):number[] {
//     const atomicNumber: number[] = [];

//     numbers.forEach(number => {
//         data?.filter(el => {
//             if(el.atomicNumber === number) atomicNumber.push(el.atomicNumber)
//             return atomicNumber;
//         })
//     })

//     return atomicNumber;

// }

