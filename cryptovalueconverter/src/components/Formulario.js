import React, {useState} from 'react';
import styled from '@emotion/styled';
import useCurrency from '../hooks/useCurrency';
import useCryptocurrency from '../hooks/useCryptocurrency';
import Error from './Error';

const StyledButton = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #fff;
    transition: background-color: .3s ease;

    &:hover {
        background-color: #326ac0;
        cursor: pointer;
    }
`;

const Formulario = ({setChoosenFiat, setChoosenCrypto}) => {

    const CURRENCIES = [
        { code: 'ARS', name: 'Argentine Peso' },
        { code: 'USD', name: 'United States Dolar' },
        { code: 'CAD', name: 'Canada Dolar' },
        { code: 'MXN', name: 'Mexican Peso' },
        { code: 'EUR', name: 'Euro' },
        { code: 'GBP', name: 'British Pound' }
    ];

    const [fiatCurrency, CurrencySelector] = useCurrency('Choose a currency', '', CURRENCIES);

    const [cryptoCurrency, CryptocurrencySelector] = useCryptocurrency('Choose a crypto', '');

    const [error, setError] = useState(false);

    const handleSubmit = ev => {
        ev.preventDefault();

        if(fiatCurrency === '' || cryptoCurrency === '') {
            setError(true);
            return;
        }

        setError(false);

        setChoosenFiat(fiatCurrency);
        setChoosenCrypto(cryptoCurrency);

    }

    return ( 
        <form
            onSubmit={handleSubmit}
        >

            {error ? <Error message="Please, choose both currencies first" /> : null}

            <CurrencySelector />

            <CryptocurrencySelector />

            <StyledButton 
                type="submit"
                value="Calculate value"
            />

            
        </form>

     );
}
 
export default Formulario;