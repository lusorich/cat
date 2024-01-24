import { useState, useEffect, type KeyboardEvent } from 'react';

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

interface SelectProps<T extends SelectItem> {
  list?: T[];
  onChange: (item: T) => void;
  defaultValue?: T;
  isLoading: boolean;
  isDisabled: boolean;
}

export const Select = <T extends SelectItem>({
  list,
  onChange,
  defaultValue,
  isLoading = false,
  isDisabled = false,
}: SelectProps<T>) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeEl, setActiveEl] = useState<T | undefined>(defaultValue);

  const ref = useOutsideClick(() => {
    setIsDropdownOpen(false);
  });

  const handleOnChange = (item: T) => {
    setActiveEl(item);

    if (onChange) {
      onChange(item);
    }
  };

  const handleSelectClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  useEffect(() => {
    if (defaultValue) {
      setActiveEl(defaultValue);
      handleOnChange(defaultValue);
    }
  }, [defaultValue]);

  return (
    <div
      className={cn(s.wrapper, { [s.disabled]: isDisabled })}
      ref={ref}
      role="button"
      tabIndex={0}
      onClick={handleSelectClick}
      onKeyDown={handleKeyDown}
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
