import React, {Fragment, useState, useEffect} from 'react';
import styled from '@emotion/styled';
import Axios from 'axios';


const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`;

const Select = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
`;

const useCryptocurrency = (label, initialState) => {

    const [state, setState] = useState(initialState);
    
    const [cryptoList, setCryptoList] = useState([]);

    useEffect(() => {
        const apiCall = async () =>  {
            
            let api_url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
    
            const result = await Axios.get(api_url);
    
            // console.log(result.data.Data);
    
            setCryptoList(result.data.Data);
    
        }
    
        apiCall();
       
    }, []);

    const CryptocurrencySelector = () => ( 
        <Fragment>
            <Label>{label}</Label>
            <Select
                onChange={ e  => setState(e.target.value) }
                value={state}
            >
                <option value="">-- Choose a crypto --</option>
                {cryptoList.map( option => (
                    <option key={option.CoinInfo.Id} value={option.CoinInfo.Name}>{option.CoinInfo.FullName}</option>
                ))}      
            </Select>
        </Fragment>
    )

    return [state, CryptocurrencySelector];
}

export default useCryptocurrency;