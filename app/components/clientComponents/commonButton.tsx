'use client'
import { useRouter } from 'next/navigation'
import { ButtonProps } from '../../types'

export default function Button (props: ButtonProps) {
    const { text, href } = props;
    const router = useRouter()

return <button onClick={()=>router.push(href)}>{text}</button>
};