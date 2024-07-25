import './Notification.scss';

export default function Notification({image}) {
    return (
        <div className="notification">
            <img className="notification__image" src={image}/>
        </div>
    )
}