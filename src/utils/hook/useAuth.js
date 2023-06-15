import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
  const naviagtor = useNavigate();
  const token = localStorage.getItem('accessToken');

  useEffect(() => {
    if (token) {
      naviagtor('/todo', { replace: true });
    } else {
      if (window.location.pathname === '/todo') {
        naviagtor('/signin', { replace: true });
      }
    }
  }, []);
};

export default useAuth;
