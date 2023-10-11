'use client';

import Link from "next/link";

import { LayoutProps } from "@/app/types";
import styles from '@/app/styles/markets.module.css'
import { useSelector } from "react-redux";
import { getCryptoById } from "@/app/redux/selectors/selector";



export default function CurrencyLayout ({children, params}: LayoutProps ) {
    const singleCurrency = useSelector(getCryptoById)
    const {id} = params;
    // or
    // const id = singleCurrency.id;
    return (
        <div className={styles.singleCurrencyContainer}>
            <div className={styles.singleCurrencyWrapper}>
                <div className={styles.infoContainer}>
                    <span>Crypto currency: </span>
                    <span>Current price: </span>
                    <span>Percentage change in last 24h: </span>
                </div>
                <div className={styles.infoContainer}>
                    <span>{singleCurrency.name}</span>
                    <span>${singleCurrency.price_usd}</span>
                    <span>{singleCurrency.percent_change_24h}%</span>
                </div>
            </div>
            <Link href='/dashboard/[id]/markets' as={`/dashboard/${id}/markets`}>¿Want to see Markets available for {singleCurrency.name}?</Link>
            {children}
        </div>
    )
}