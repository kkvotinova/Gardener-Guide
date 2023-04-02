import { debounce } from 'throttle-debounce';
import { DependencyList, useCallback, useMemo, useRef, useState } from 'react';

// TODO: Типизация ответа callback

function useAwaitCallback<T extends (...args: any[]) => Promise<any>>(
  callback: T,
  deps: DependencyList,
  initialState?: boolean,
  withDebounce?: boolean,
): [T | debounce<T>, boolean] {
  const isLocalLoading = useRef(false);
  const [isLoading, setLoading] = useState(Boolean(initialState));

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const cb: T = useCallback(callback, deps);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const _callback = useCallback(
    (async (...args) => {
      if (isLocalLoading.current) return;

      setLoading(true);
      isLocalLoading.current = true;

      let result: any = undefined;

      try {
        result = await cb(...args);
      } catch (error) {
        // eslint-disable-next-line no-throw-literal
        throw error as any;
      } finally {
        setTimeout(() => {
          setLoading(false);
          isLocalLoading.current = false;
        }, 100);
      }

      return result;
    }) as T,
    [cb],
  );

  const _debounceCallback = useMemo(() => debounce(450, _callback), [_callback]);

  return [withDebounce ? _debounceCallback : _callback, isLoading];
}

export default useAwaitCallback;
