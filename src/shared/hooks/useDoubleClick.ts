import { useRef } from 'react';

interface IProps {
  delay?: number;
}

export function useDoubleClick({ delay = 250 }: IProps = {}) {
  const clickTimeout = useRef<number | null>(null);
  const lastClickTime = useRef<number>(0);

  const handleClick = (onSingleClick?: () => void, onDoubleClick?: () => void) => {
    const now = Date.now();

    if (now - lastClickTime.current < delay) {
      if (clickTimeout.current) {
        clearTimeout(clickTimeout.current);
        clickTimeout.current = null;
      }
      onDoubleClick?.();
    } else {
      clickTimeout.current = window.setTimeout(() => {
        onSingleClick?.();
        clickTimeout.current = null;
      }, delay);
    }

    lastClickTime.current = now;
  };

  return handleClick;
}
