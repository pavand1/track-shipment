import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header/Header';
import { fetchData, selectItems, selectError, selectStatus } from './features/data/dataSlice';
import styles from './App.module.scss';
import './styles/baseglobal.scss';
import './styles/vendor.scss';
const App = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectItems);
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.content}>
        {status === 'loading' && <p>Loading...</p>}
        {status === 'failed' && <p>Error: {error}</p>}
        {status === 'succeeded' && (
          <pre>{JSON.stringify(data, null, 2)}</pre>
        )}
      </main>
    </div>
  );
};

export default App;
