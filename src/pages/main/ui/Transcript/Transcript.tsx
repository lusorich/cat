import { useAppSelector } from 'app/store/store';

import s from './Transcript.styles.scss';

export const Transcript = () => {
  const { activeCurrencie } = useAppSelector((state) => state.currencies);

  return (
    <section className={s.wrapper}>
      {activeCurrencie && <p className={s.text}>{activeCurrencie.name}</p>}
    </section>
  );
};
