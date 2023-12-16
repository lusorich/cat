import { type FC, useState, useEffect } from 'react';

import TriangleIcon from 'assets/icons/chevron.svg';
import Loader from 'assets/icons/oval.svg';
import cn from 'classnames';

import s from './Select.styles.scss';
import { Dropdown } from './ui/Dropdown/Dropdown';
import { useOutsideClick } from '../../hooks/useOutsideClick';

export interface SelectItem {
  id: string;
  name: string;
}

interface SelectProps {
  list?: SelectItem[];
  onChange: any;
  defaultValue?: SelectItem;
  isLoading: boolean;
}

export const Select: FC<SelectProps> = ({
  list,
  onChange,
  defaultValue,
  isLoading = false,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeEl, setActiveEl] = useState(defaultValue);

  const ref = useOutsideClick(() => {
    setIsDropdownOpen(false);
  });

  useEffect(() => {
    if (defaultValue) {
      setActiveEl(defaultValue);
      handleOnChange(defaultValue);
    }
  }, [defaultValue]);

  const handleOnChange = (item: SelectItem) => {
    setActiveEl(item);

    if (onChange) {
      onChange(item);
    }
  };

  return (
    <div
      className={s.wrapper}
      ref={ref}
      onClick={() => {
        setIsDropdownOpen(!isDropdownOpen);
      }}
    >
      <span className={s.inputText}>{activeEl?.id}</span>
      <div className={s.icon}>
        {isLoading ? (
          <Loader className={cn({ [s.iconDown]: isDropdownOpen })} />
        ) : (
          <TriangleIcon className={cn({ [s.iconDown]: isDropdownOpen })} />
        )}
      </div>
      {list && (
        <Dropdown
          activeEl={activeEl}
          isOpen={isDropdownOpen}
          list={list}
          onChange={handleOnChange}
        />
      )}
    </div>
  );
};
