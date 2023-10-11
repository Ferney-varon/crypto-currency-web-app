"use client";

import Link from "next/link";
import { useDispatch } from "react-redux";
import { singleCryptoFetchBtnClicked } from "../redux/actions/cryptoSliceActions";
import styles from "../styles/tables.module.css";
import { CryptoResponse } from "../types";

export default function TabularRow({ data }: {data: CryptoResponse}) {
  const dispatch = useDispatch();
  const { name, price_usd, rank, id, percent_change_1h, percent_change_24h } = data;

  const classToSet = (value: string): string => {
    const numberValue: number = +value;
    return numberValue > 0 ? styles.isTrendingUp : numberValue < 0 ? styles.isTrendingDown : "";
  };

  const handleClick = () => {
    dispatch(singleCryptoFetchBtnClicked(id));
  };

  const percent_1h_class = classToSet(percent_change_1h);
  const percent_24h_class = classToSet(percent_change_24h);
  return (
    <tr className={styles.tableRowBody}>
      <td>{rank}</td>
      <td>
        <Link
          href="/dashboard/[id]"
          as={`/dashboard/${id}`}
          onClick={handleClick}
        >
          {name}
        </Link>
      </td>
      <td>{price_usd}</td>
      <td className={percent_1h_class}>{percent_change_1h}</td>
      <td className={percent_24h_class}>{percent_change_24h}</td>
    </tr>
  );
}
