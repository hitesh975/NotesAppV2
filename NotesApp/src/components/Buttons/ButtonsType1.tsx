export default function ButtonsType1(props: {text: string, onClick: () => void}) {
    return(
        <button onClick={props.onClick}
        style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#D4D4D4",
            color: "black",
            border: "1px solid black",
            borderRadius: "4px",
        }}>{props.text}</button>
    )
}