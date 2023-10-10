'use client';

import { TABLE_HEAD_INFO } from '@/app/constants'
import { fetchCryptos, sortTableData } from '@/app/redux/actions/cryptoSliceActions';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '@/app/styles/tables.module.css'

import TabularRow from '../tabularRow';
import { getCryptos, getFetchButtonClicked} from '@/app/redux/selectors/selector';



export const TableComponent = () => {
    const dispatch = useDispatch()
    const hasFetchButtonClicked = useSelector(getFetchButtonClicked)
    const windowObject: Window =  window
    const isRouteDashboard = windowObject.location.pathname === '/dashboard'
    useEffect(() => {
        if(isRouteDashboard && !hasFetchButtonClicked){
            dispatch(fetchCryptos())
        }
    }, [])
    
    const handleSort = (key?:any) => {
        const sortedData = [...data].sort((a,b):any=> {
            if(a[key] > b[key]){
                return -1
            }else if (b[key] > a[key]) {
                return -1
            }
        });
        dispatch(sortTableData(sortedData))
        return;
    }
    
    const data = useSelector(getCryptos);
    const headerInfo = Object.entries(TABLE_HEAD_INFO)
  return (
    <table className={styles.tableElement}>
      <thead className={styles.tableHeaderGroup}>
          <tr>
              {headerInfo.map(([key, value])=>{
                  return <th key={key} onClick={()=>handleSort(key)}>{value}</th>
              })}
          </tr>
      </thead>
      <tbody className={styles.tableBodyGroup}>
          {data?.map((el:any)=>{
              return (
                  <TabularRow key={el.id} data={el}/>
              )
          })}
      </tbody>
   </table>
  )
}
