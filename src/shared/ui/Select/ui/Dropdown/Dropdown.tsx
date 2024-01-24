import { type KeyboardEvent } from 'react';

import cn from 'classnames';

import s from './Dropdown.styles.scss';
import { type SelectItem } from '../../Select';

interface DropdownProps<T> {
  isOpen: boolean;
  list: T[];
  onChange: (item: T) => void;
  activeEl?: T;
}

export const Dropdown = <T extends SelectItem>({
  isOpen,
  list,
  onChange,
  activeEl,
}: DropdownProps<T>) => {
  const handleItemClick = (e: React.SyntheticEvent<HTMLUListElement>) => {
    const currencieIndex = (e.target as HTMLUListElement).closest('li')?.dataset
      .index;

    onChange(list[Number(currencieIndex)]);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLUListElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleItemClick(e);
    }
  };

  return (
    <div
      className={cn(s.wrapper, {
        [s.open]: isOpen,
        'visually-hidden': !isOpen,
      })}
    >
      <ul
        className={s.list}
        onClick={handleItemClick}
        onKeyDown={handleKeyDown}
      >
        {list.map((item, index) => (
          <li
            className={cn(s.item, { [s.active]: item.id === activeEl?.id })}
            key={item.id}
            data-index={index}
            tabIndex={0}
          >
            <span className={s.text}>{item.id}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
