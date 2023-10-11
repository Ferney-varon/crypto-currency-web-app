'use client';

import { fetchCryptoBtnClicked } from "@/app/redux/actions/cryptoSliceActions";
import { useRouter } from 'next/navigation'
import { useDispatch } from "react-redux";
import styles from '../../styles/main.module.css'

export default function CryptoFetcherButton() {
  const router = useRouter()

  const dispatch = useDispatch()
  const handleClick = () =>{
    dispatch(fetchCryptoBtnClicked())
    router.push('/dashboard')
  };
    
  return (
    <button onClick={handleClick} className={styles.fetcherButton}>¿Interested? Try seeing our Data collection here</button>
  )
}


