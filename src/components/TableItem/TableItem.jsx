import './TableItem.scss';

export default function TableItem({num}) {
    return (
        <div className='table-item-wrapper'>
            <div className='table-item-wrapper__item'>
                <p className='table-item-wrapper__text'>{num}</p>
            </div>
        </div>
    )
}