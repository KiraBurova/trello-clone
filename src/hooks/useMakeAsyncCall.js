import { useEffect, useState } from 'react';

const useMakeAsyncCall = ({ asyncFunctionToRun = null, runOnMount = false }) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await asyncFunctionToRun();
      const json = await res.json();

      setResponse(json);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (runOnMount && asyncFunctionToRun !== null) fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [runOnMount]);

  return { response, error, loading, fetchData };
};

export default useMakeAsyncCall;
