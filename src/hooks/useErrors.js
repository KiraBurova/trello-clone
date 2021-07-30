import { useEffect, useState } from 'react';

const useErrors = (values, submitted) => {
  const [errors, setErrors] = useState('');

  useEffect(() => {
    Object.entries(values).forEach(([key, value]) => {
      if (key === 'password') {
        if (value.length < 5) {
          setErrors('Password should be no less than 6 characters');
        } else {
          setErrors('');
        }
      }
    });
  }, [submitted]);

  return [errors, setErrors];
};

export default useErrors;
