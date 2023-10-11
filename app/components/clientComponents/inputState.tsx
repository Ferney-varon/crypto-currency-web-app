'use client';

import { singleCryptoFetchBtnClicked } from "@/app/redux/actions/cryptoSliceActions";
import { getCryptos } from "@/app/redux/selectors/selector";
import { useRouter } from 'next/navigation'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const InputState = () => {
    const [searchKey, setSearchKey] = useState('')
    const [dropdownOption, setDropdownOption] = useState([])
    const dispatch = useDispatch();
    const router = useRouter()

    const cryptos = useSelector(getCryptos)

    const handleInputChange = (e:any) => {
        const currentValue = e.target.value
        setSearchKey(currentValue)

        const filteredCryptos = cryptos.filter((item:any)=>{
            const name = item.name.toLowerCase();
            const filteredData = name.includes(searchKey.toLowerCase())
            return filteredData
        });
        const optionsToRender = filteredCryptos.slice(0,8)  
        setDropdownOption(optionsToRender)
    };

    const handleSelectChange = (e:any)=>{
        const cryptoName = e.target.value
        const [findCrypto] = cryptos.filter((item:any)=>{
            return item.name === cryptoName;
        });
        const cryptoId = findCrypto.id
        dispatch(singleCryptoFetchBtnClicked(cryptoId))
        router.push(`/dashboard/${cryptoId}`)
    };
    
  return (
    <>
        <input type='text' placeholder="Search by Crypto name" onChange={(e)=>handleInputChange(e)} />
        <select onChange={(e)=>handleSelectChange(e)}>
            {dropdownOption?.map((el)=>{
                return (
                    <option key={el.id} value={el.name}>{el.name}</option>
                )
            })}
        </select>
    </>
  )
}
