import styles from './TempPage.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';

const TempPage = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{pathname.split('/').join(' ')} page coming soon...</h1>

      {pathname !== '/' && (
        <button className={styles.button} onClick={() => navigate('/')}>
          Back to Dashboard page
        </button>
      )}
    </div>
  );
};

export default TempPage;
