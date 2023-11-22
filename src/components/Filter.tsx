import { IFilterProps } from '../utils/models';

export default function Filter({filter, setSearchParams, types, disabled}: IFilterProps) {

  const filterContentButtons = types.map(
    (type) => (
      <button
        disabled={disabled}
        className={type.en === filter ? `type-bar clicked` : 'type-bar'}
        key={type.en}
        onClick={() => {
            setSearchParams((prev: any) => {
              prev.set("type", type.en);
              return prev;
          });
        }}
      >
        {localStorage.getItem("language") === "en" ? type.en : type.ua}
      </button>
    )
  );

  return (
    <div className="types-bar">
      {filterContentButtons}
    </div>
  )
}
