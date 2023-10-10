'use client'
import { fetchCryptoBtnClicked } from '@/app/redux/actions/cryptoSliceActions';
import { getFetchButtonClicked } from '@/app/redux/selectors/selector';
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux';
import { ButtonProps } from '../../types'

export default function Button (props: ButtonProps) {
    const dispatch = useDispatch();
    const router = useRouter()
    const { text, href } = props;
    const hasFetchButtonClicked = useSelector(getFetchButtonClicked)

    const handleClick = () =>{
        router.push(href)
        if(href === '/dashboard' && !hasFetchButtonClicked){
            dispatch(fetchCryptoBtnClicked())
        }
    }

return <button onClick={handleClick}>{text}</button>
};