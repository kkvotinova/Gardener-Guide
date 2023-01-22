export interface LoaderProps {
  size?: number;
  isCenter?: boolean;
  isStatic?: boolean;
  onMount?: () => void;
  color?: 'inherit' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  className?: string;
}

export interface LoaderStyleProps {
  $isStatic?: boolean;
  $isJustifyCenter?: boolean;
}
