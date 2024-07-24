import './HeaderItemsWrapper.scss';

export default function HeaderItemsWrapper({name, component}) {
    return(
        <div className="header-item-wrapper">
            <div className="header-item-wrapper__name">{name}</div>
            <div className="header-item-wrapper__component">{component}</div>
        </div>
    )
}