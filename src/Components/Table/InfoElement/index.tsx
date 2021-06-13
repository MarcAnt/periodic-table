import React from 'react'
import { InfoElementStyles } from './styles';

const InfoElement = () => {
    return (
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
    )
}

export default InfoElement;
