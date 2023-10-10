'use client';

import { fetchCryptoBtnClicked } from "@/app/redux/actions/cryptoSliceActions";
import { useRouter } from 'next/navigation'
import { useDispatch } from "react-redux";

export default function CryptoFetcherButton() {
  const router = useRouter()

  const dispatch = useDispatch()
  const handleClick = () =>{
    dispatch(fetchCryptoBtnClicked())
    router.push('/dashboard')
  };
    
  return (
    <button onClick={handleClick}>Try seeing our data collection here</button>
  )
}


