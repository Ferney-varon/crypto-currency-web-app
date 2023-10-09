'use client';

import { TABLE_HEAD_INFO } from '@/app/constants'


export const TableHead = ({data}:any) => {

    const testing = Object.entries(TABLE_HEAD_INFO)
    const handleSort = (key:any) => {
        console.log(data,key);
        const sortedData = [...data].sort((a,b)=> a[key] > b[key]? -1 : 1);
        console.log(sortedData);
    }
  return (
    <tr>
        {testing.map(([key, value])=>{
            return <th key={key} onClick={()=>handleSort(key)}>{value}</th>
        })}
    </tr>
  )
}
