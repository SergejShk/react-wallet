import Header from '../components/Header/Header';
import AuthForm from '../components/AuthForm/AuthForm';
import AuthGoToBtn from '../components/AuthGoToBtn/AuthGoToBtn';

const LoginPage = () => {
  return (
    <div className="container">
      <Header title={'Login'} />
      <AuthForm isLogin={true} />
      <AuthGoToBtn title={'Go to Registration'} path={'/register'} />
    </div>
  );
};

export default LoginPage;
