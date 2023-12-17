import { setActiveCurrencie } from 'app/store/slices/currencie/currencie';
import { dispatch } from 'app/store/store';
import { useGetCurrenciesQuery } from 'shared/api/coinbase/coinbase';
import { type Currencie as CurrencieItem } from 'shared/api/coinbase/coinbase.types';
import { Logo, Select } from 'shared/ui';

import s from './Currencie.styles.scss';

export const Currencie = () => {
  const { data, isFetching, isError } = useGetCurrenciesQuery();

  const onChange = (item: CurrencieItem) => {
    dispatch(setActiveCurrencie(item));
  };

  return (
    <section className={s.wrapper}>
      <Logo />
      <div className={s.selectWrapper}>
        <Select
          list={data?.data}
          onChange={onChange}
          defaultValue={data?.data?.[0]}
          isLoading={isFetching}
          isDisabled={isError || isFetching}
        />
      </div>
    </section>
  );
};
