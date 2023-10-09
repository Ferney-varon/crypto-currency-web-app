'use client';

import { useEffect } from "react";

export const CryptoFetcher = () => {
    const url = 'https://api.coinlore.net/api/tickers/'
    useEffect(() => {
        fetch(url)
          .then((response) => response.json())
          .then((data) => console.log(data));
      }, []);


      
    
  return null
}


