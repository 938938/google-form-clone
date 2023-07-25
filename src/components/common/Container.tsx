import style from './Container.module.css';

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className={style.container}>{children}</div>;
};

export default Container;
