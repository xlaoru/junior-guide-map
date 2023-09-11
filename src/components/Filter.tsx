import { IFilterProps } from '../utils/Interfaces';

export default function Filter({activeType, setActiveType, types}: IFilterProps) {
    const filterContentButtons = types.map(
        (type, index) => 
            <button 
                className={activeType === index ? `type-bar clicked` : 'type-bar'} 
                key={type.en} 
                onClick={() => setActiveType(index)}
            >
                {localStorage.getItem("language") === "en" ? type.en : type.ua}
            </button>
    )
    
    return (
        <div className="types-bar">
            {filterContentButtons}
        </div>
    )
}