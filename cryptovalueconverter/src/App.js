import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import image from './cryptomonedas.png';
import Formulario from './components/Formulario';
import Axios from 'axios';
import ConvertionResult from './components/ConvertionResult';
import Spinner from './components/Spinner/Spinner';

const Wrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Image = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`;

function App() {

  const [choosenFiat, setChoosenFiat] = useState('');
  const [choosenCrypto, setChoosenCrypto] = useState('');
  const [convertionResult, setConvertionResult] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect( () => {

    const convert_api_call = async () => {
      if(choosenFiat === '') return;
    
      const api_url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${choosenCrypto}&tsyms=${choosenFiat}`;

      let result = await Axios.get(api_url); 

      setIsLoading(true);

      setTimeout( () => {
        setIsLoading(false);
        setConvertionResult(result.data.DISPLAY[choosenCrypto][choosenFiat]);
      }, 3000)
    }
    

    convert_api_call();

    
  }, [choosenFiat, choosenCrypto]);

  return (
    <Wrapper>
      <div>
        <Image 
          src={image}
          alt="Crypto currency logos"
        />
      </div>
      <div>
        <Heading>
          Fiat to Crypto currency converter
        </Heading>

        <Formulario
          setChoosenFiat={setChoosenFiat}
          setChoosenCrypto={setChoosenCrypto}
        />

        {isLoading ? <Spinner /> : <ConvertionResult result={convertionResult} />}
        
      </div>
    </Wrapper>
  );
}

export default App;
