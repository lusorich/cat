import { type FC } from 'react';

import cn from 'classnames';

import s from './Dropdown.styles.scss';
import { type SelectItem } from '../../Select';

interface DropdownProps {
  isOpen: boolean;
  list: SelectItem[];
  onChange: any;
  activeEl: any;
}

export const Dropdown: FC<DropdownProps> = ({
  isOpen,
  list,
  onChange,
  activeEl,
}) => {
  return (
    <div
      className={cn(s.wrapper, {
        [s.open]: isOpen,
        'visually-hidden': !isOpen,
      })}
    >
      <ul className={s.list}>
        {list.map((item) => (
          <li
            className={cn(s.item, { [s.active]: item.id === activeEl?.id })}
            key={item.id}
            onClick={() => onChange(item)}
          >
            <span className={s.text}>{item.id}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
