import { Currencie } from './Currencie/Currencie';
import s from './Main.styles.scss';
import { Transcript } from './Transcript/Transcript';

export const Main = () => {
  return (
    <div className={s.wrapper}>
      <Currencie />
      <Transcript />
    </div>
  );
};
