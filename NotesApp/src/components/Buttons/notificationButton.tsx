import './notificationButton.css'

export default function NotificationButton({text, count, onClick}: {text: string, count: number, onClick: () => void}) {
    if (count === 0) {
        return(
            <button className="notification-button" onClick={onClick}>
                <p className='notificationButtonText'>{text}</p>
            </button>
        )
    }
    return(
        <button className="notification-button" onClick={onClick}>
            <p className='notificationButtonText'>{text}</p>
            <span className='count'>{count}</span>
        </button>
    )
}