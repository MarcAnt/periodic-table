import {useState, useEffect} from 'react'

type ReturnTypes = {
    color: string;
    setColor: React.Dispatch<React.SetStateAction<string>>;
}

const useChangeColors = ():ReturnTypes => {
 
    const [color, setColor] = useState<string>('Chemical Group Block')

    useEffect(() => {
        setColor(color => color); 
    }, [setColor, color])

    return {color, setColor};
}

export default useChangeColors;
