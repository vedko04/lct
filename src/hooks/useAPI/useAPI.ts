import { useCallback, useEffect, useRef, useState } from 'react';

import { HttpStatusCode } from 'axios';
import { API_CONFIG } from 'config';

import { ROUTES } from '@router/routes/constants';

import { useAuthToken } from '..';

import { type UseAPIData, type UseAPIOptions } from './types';

export const useAPI = <T, G>(
  { apiService, requestData }: UseAPIData<T, G>,
  options?: UseAPIOptions
) => {
  const { getAccessToken } = useAuthToken();
  const { runOnMount = false } = options ?? {};
  const { removeAccessToken } = useAuthToken();

  const [isLoading, setIsLoading] = useState(runOnMount);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<G | undefined>(undefined);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );

  const isSentOnMount = useRef(false);

  const runRequest = useCallback((data?: T) => {
    setIsLoading(true);

    apiService(data, {
      baseUrl: API_CONFIG.BASE_URL,
      headers: {
        Authorization: `Bearer ${getAccessToken() ?? ''}`
      }
    })
      .then((res) => {
        setIsError(false);
        setIsLoading(false);
        setData(res.data);
      })
      .catch((e) => {
        // Error Handler
        setIsLoading(false);
        setIsError(true);

        setErrorMessage(e.response?.data.message as string);

        if (e.response?.status === HttpStatusCode.Unauthorized) {
          removeAccessToken();

          location.replace(ROUTES.signIn.path);
        }
      });
  }, []);

  useEffect(() => {
    if (runOnMount && !isSentOnMount.current) {
      isSentOnMount.current = true;

      setIsLoading(true);
      runRequest(requestData);
    }
  }, [runRequest, runOnMount, requestData]);

  return { data, isError, isLoading, errorMessage, runRequest };
};
