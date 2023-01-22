import { useState, useEffect, useCallback, useRef } from 'react';
import Typography from '@mui/material/Typography';

import { NotificationItemProps } from '@/components/NotificationItem/NotificationItemTypes';
import {
  StyledClose,
  StyledNotification,
} from '@/components/NotificationItem/NotificationItemStyled';

const animationDelay = 500;
const delay = 5000;

const NotificationItem = ({ data, hide, id }: NotificationItemProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const [isRender, setRenderState] = useState(false);
  const [isVisible, setVisibleState] = useState(false);
  const [isReady, setReadyState] = useState(false);

  const remove = useCallback(() => {
    setVisibleState(false);

    setTimeout(() => {
      setRenderState(false);
      hide(id);
    }, animationDelay);
  }, [hide, id]);

  useEffect(() => {
    const timeoutDelay = data.delay || delay;

    setRenderState(true);

    setTimeout(() => {
      setVisibleState(true);

      setTimeout(() => {
        setReadyState(true);
      }, animationDelay);
    });

    setTimeout(remove, timeoutDelay);
  }, [data.delay, remove]);

  if (!isRender) return null;

  const height = ref.current?.clientHeight;
  const style = height && isReady ? { height } : undefined;

  return (
    <StyledNotification
      ref={ref}
      style={style}
      $isVisible={isVisible}
      severity={data.type || 'success'}
    >
      <Typography variant='body2'>{data.message}</Typography>
      <StyledClose onClick={remove} />
    </StyledNotification>
  );
};

export default NotificationItem;
