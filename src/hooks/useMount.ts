/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';

type Mount = () => void | Promise<void> | (() => void);
type Unmount = () => void;

function useMount(mount: Mount, unmount?: Unmount) {
  return useEffect(() => {
    const unmountCallback = mount();

    return () => {
      if (typeof unmount === 'function') {
        unmount();
      }

      if (typeof unmountCallback === 'function') {
        unmountCallback();
      }
    };
  }, []);
}

export default useMount;
