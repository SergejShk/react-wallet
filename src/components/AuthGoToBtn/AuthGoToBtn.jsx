import { Link } from 'react-router-dom';
import s from './AuthGoToBtn.module.css';

const AuthGoToBtn = ({ title, path }) => {
  return (
    <div className={s.container}>
      <Link className={s.btn} to={path}>
        {title}
      </Link>
    </div>
  );
};

export default AuthGoToBtn;
