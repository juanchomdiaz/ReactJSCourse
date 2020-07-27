import React from 'react';
import styled from '@emotion/styled';

const ResultWrapper = styled.div`
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
`;

const ResultInfo = styled.p`
    font-size: 18px;

    span {
        font-weight: bold;
    }
`;

const ResultPrice = styled.p`
    font-size: 30px;

    span {
        font-weight: bold;
    }
`;

const ConvertionResult = ({result}) => {
    if( Object.keys(result).length === 0 ) return null;

    return ( 
        <ResultWrapper>
            <ResultPrice>Price: <span>{result.PRICE}</span></ResultPrice>
            <ResultInfo>Today's higher price: <span>{result.HIGHDAY}</span></ResultInfo>
            <ResultInfo>Today's lowest price: <span>{result.LOWDAY}</span></ResultInfo>
            <ResultInfo>Last 24 hours variation: <span>{result.CHANGEPCT24HOUR} %</span></ResultInfo>
            <ResultInfo>Last update: <span>{result.LASTUPDATE}</span></ResultInfo>
        </ResultWrapper>
    );
}
 
export default ConvertionResult;