'use client'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../styles/navigation.module.css'
import { ButtonProps } from '../../types'
import { fetchCryptosBtnClicked } from '@/app/redux/actions/cryptoSliceActions';
import { getFetchButtonClicked } from '@/app/redux/selectors/selector';

export default function Button (props: ButtonProps) {
    const dispatch = useDispatch();
    const router = useRouter()
    const { text, href, dashboardBtn } = props;
    const hasFetchButtonClicked = useSelector(getFetchButtonClicked)

    const classToSet = dashboardBtn ? styles.dashboardButton : styles.button

    const handleClick = () =>{
        router.push(href)
        if(href === '/dashboard' && !hasFetchButtonClicked){
            dispatch(fetchCryptosBtnClicked())
        }
    }

return <button onClick={handleClick} className={classToSet}>{text}</button>
};