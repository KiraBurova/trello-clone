import { useEffect, useState } from 'react';

const useAsyncDataFetch = ({ fetchFn = null, loadOnMount = false }) => {
  const [data, setData] = useState({});
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const loadData = async () => {
    setIsLoading(true);
    setError('');

    return fetchFn()
      .then((response) => {
        setData(response);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (loadOnMount && fetchFn !== null) loadData();
    //:todo fix
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadOnMount]);

  return { data, isLoading, error, loadData };
};

export default useAsyncDataFetch;
