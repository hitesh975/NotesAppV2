import './ButtonsType2.css';

export default function ButtonsType2({text1, text2, onClick}: {text1: string, text2: string, onClick: () => void}) {
    return(
        <button className="ButtonsType2" onClick={onClick}>
            <p className="text1">{text1}</p>
            <p className="text2">{text2}</p>
        </button>
    )
}