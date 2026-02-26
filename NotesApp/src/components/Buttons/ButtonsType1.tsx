import './ButtonsType1.css';

export default function ButtonsType1(props: {text: string, onClick: () => void}) {
    return(
        <button className='ButtonType1' onClick={props.onClick}>{props.text}</button>
    )
}