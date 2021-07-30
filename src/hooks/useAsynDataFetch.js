import { useEffect, useState } from 'react';

const useAsynDataFetch = ({ fetchFn = null, loadOnMount = false }) => {
  const [data, setData] = useState({});
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const loadData = async () => {
    setIsLoading(true);

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
  }, [loadOnMount]);

  return { data, isLoading, error, loadData };
};

export default useAsynDataFetch;
