import {useState, useEffect, useContext}  from 'react';
import { InfoElementStyles, InfoWrapper, SelectBox } from './styles';
import Select from 'react-select'
import { AppCtx } from 'helpers/selectedOpsContext';


const options = [
    { value: 'group-block', label: 'Chemical Grop Block' },
    { value: 'standard-state', label: 'Standar State' }
]


const InfoElement = () => {
    
    const [state, setState] = useState<string>('')
    const {setCurrentState} = useContext(AppCtx);

    const handleChange = (e: any):void => {
        setState(e.value)
    }
    
    useEffect(() => {

        setCurrentState(state)
        console.log(state);
        
    }, [state, setCurrentState])

    return (
        <InfoWrapper >
            
            <InfoElementStyles>
                <div className="info-element">
                    <p>1</p>
                    <h1>H</h1>
                    <p>Hydrogen</p>
                    <small>Nonmetal</small>
                </div>
                <div className="info-card">
                    <p>Atomic Number</p>
                    <h1>Symbol</h1>
                    <p>Name</p>
                    <small>Chemical Group Block </small>
                </div>
            </InfoElementStyles>

            <SelectBox>
                <Select onChange={handleChange} options={options}  />
            </SelectBox>
        
        </InfoWrapper>
    )
}

export default InfoElement;
