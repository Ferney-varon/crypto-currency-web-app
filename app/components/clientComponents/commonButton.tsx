'use client'

export type ButtonProps = {
    text: string;
}

export const handleOnClick = () => {
    console.log();
}

export default function Button (props: ButtonProps) {
    const { text } = props;

return <button onClick={handleOnClick}>{text}</button>
};