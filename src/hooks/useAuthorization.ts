import { useEffect, useMemo, useState } from 'react';

import LocalStorage from '@/utils/LocalStorage';

import { ApiUser } from '@/redux/services/auth/auth.types';
import { useGetMeQuery } from '@/redux/services/auth/auth';

const STORAGE_USER_INFO = 'STORAGE_USER_INFO';

const useAuthorization = () => {
  const [isFirstRender, setFirstRenderState] = useState(true);
  const { data, isError, isLoading } = useGetMeQuery();

  useEffect(() => {
    if (isLoading) return;
    if (!isFirstRender) return;

    if (!data || isError) {
      LocalStorage.delete(STORAGE_USER_INFO);
    } else {
      LocalStorage.set(STORAGE_USER_INFO, data);
    }

    setFirstRenderState(false);
  }, [data, isLoading, isError, isFirstRender]);

  return useMemo(() => {
    if (isFirstRender && !data) {
      const storageData = LocalStorage.get<ApiUser>(STORAGE_USER_INFO);

      return {
        isLoading,
        userInfo: storageData,
        isAuthorized: Boolean(storageData),
      };
    }

    return {
      isLoading,
      userInfo: isError ? undefined : (data as ApiUser),
      isAuthorized: Boolean(isError ? false : data),
    };
  }, [data, isError, isFirstRender, isLoading]);
};

export default useAuthorization;
