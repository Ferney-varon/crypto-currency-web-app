'use client';

import { useRouter } from 'next/navigation'
import { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from '../../styles/dashboard.module.css'
import { singleCryptoFetchBtnClicked } from "@/app/redux/actions/cryptoSliceActions";
import { getCryptos } from "@/app/redux/selectors/selector";
import { CryptoResponse } from '@/app/types';

export const InputState = () => {
    const initialState: CryptoResponse[] = []
    const [searchKey, setSearchKey] = useState('');
    const [dropdownOption, setDropdownOption] = useState(initialState);
    const dispatch = useDispatch();
    const router = useRouter()

    const cryptos = useSelector(getCryptos)
    
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const currentValue = e.target.value
        setSearchKey(currentValue)
        
        const filteredCryptos = cryptos.filter((item)=>{
            const name = item.name.toLowerCase();
            const filteredData = name.includes(searchKey.toLowerCase())
            return filteredData
        });
        const optionsToRender = filteredCryptos.slice(0,8)  
        setDropdownOption(optionsToRender)
    };

    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>)=>{
        const cryptoName = e.target.value
        const [findCrypto] = cryptos.filter((item)=>{
            return item.name === cryptoName;
        });
        const cryptoId = findCrypto.id
        dispatch(singleCryptoFetchBtnClicked(cryptoId))
        router.push(`/dashboard/${cryptoId}`)
    };
    
  return (
    <div className={styles.inputWrapper}>
        <input type='text' placeholder="Search by Crypto name" onChange={(e)=>handleInputChange(e)} />
        <select onChange={(e)=>handleSelectChange(e)}>
            <option />
            {dropdownOption?.map((el)=>{
                return (
                    <option key={el.id} value={el.name}>{el.name}</option>
                )
            })}
        </select>
    </div>
  );
};
