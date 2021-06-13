import { IElements } from "Interfaces/IElements";

interface ISingleElement {
    name: string;
    symbol: string;
    atomicNumber: number;
    group: string;
    bgColor: string;
    content?: string;
}

// interface IFundamentalElements {
//     name: string;
//     symbol: string;
//     atomicNumber: number;
//     group: string;
//     bgColor: string;
//     content: string;
// }

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

export function filterByFundamentalAndDiffuse( {data, numbers}: {data: IElements[] | null; numbers: (number|string)[]} ) {

    const element: ISingleElement[] = [];

    numbers.forEach(number => {
        
        if(number === '*') {
            
            element.push({
                name: '*',
                symbol: '*', 
                atomicNumber: 0,
                group: '',
                bgColor: '0c1222'
            })
    
       }else if(number === '**') {
            
            element.push({
                name: '**',
                symbol: '**', 
                atomicNumber: 0,
                group: '',
                bgColor: '0c1222'
            })
    
       }else {

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

       }

    })
    
    return element;

   
}


