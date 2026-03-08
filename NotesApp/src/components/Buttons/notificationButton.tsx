import './notificationButton.css'

export default function NotificationButton({text, count, onClick}: {text: string, count: number, onClick: () => void}) {
    return(
        <button className="notification-button" onClick={onClick}>
            <p className='notificationButtonText'>{text}</p>
            <span className='count'>{count}</span>
        </button>
    )
}