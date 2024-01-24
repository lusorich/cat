import s from './Logo.styles.scss';

export const Logo = () => {
  return (
    <div className={s.logo}>
      <span className={s.title}>CAT</span>
      <p className={s.transcript}>currencies academic terms</p>
    </div>
  );
};
