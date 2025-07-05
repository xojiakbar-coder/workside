import styles from './GenericPage.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';

const GenericElement = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{`${
        location.pathname !== '/' ? location.pathname : 'Asosiy'
      } page coming soon...`}</h1>

      {location.pathname !== '/' && (
        <button className={styles.button} onClick={() => navigate('/')}>
          Back to Home page
        </button>
      )}
    </div>
  );
};

export default GenericElement;
