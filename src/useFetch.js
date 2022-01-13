import React, { useEffect, useState } from 'react';

const useFetch = url => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // abort controller TODO 1
    const abortControl = new AbortController();

    // simulating request data loading with settimeout
    setTimeout(() => {
      fetch(url, { signal: abortControl.signal }) //TODO 2
        .then(response => {
          if (!response.ok) throw Error('Failed to fetch the data!');

          return response.json();
        })
        .then(resData => {
          setData(resData);
          setIsLoading(false);
          setError(null);
        })
        .catch(error => {
          // TODO 4
          if (error.name === 'AbortError') return;

          setError(error.message);
          setIsLoading(false);
        });
    }, 1000);

    return () => abortControl.abort(); //TODO 3
    //
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
