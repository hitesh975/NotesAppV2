import deleteIcon from '../assets/delete.svg';
interface DelteButtonProps {
    parent: string[]
    component: string
    setParent: React.Dispatch<React.SetStateAction<string[]>>
}
export default function DeleteButton({parent, component, setParent}: DelteButtonProps){
    function handleDelete(Component: string){
        const filtered = parent.filter(n => n !== Component);
        setParent(filtered);
    }
    
    return(
        <div>
            <button onClick={() => handleDelete(component)}><img src={deleteIcon} alt="deleteButton" /></button>
        </div>
    )
}