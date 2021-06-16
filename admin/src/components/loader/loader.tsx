import Spinner from 'react-loader-spinner';
import { usePromiseTracker } from 'react-promise-tracker';

import { COLORS } from '@styles/colors';

import { ILoaderProps } from './loader.typings';

export const Loader: React.FC<ILoaderProps> = ({
  children,
  area,
  type,
  color,
  height,
  width,
}) => {
  const { promiseInProgress } = usePromiseTracker({ area });

  if (!promiseInProgress) {
    return <>{children}</>;
  }

  return (
    <Spinner
      type={type || 'TailSpin'}
      color={color || COLORS.default}
      height={height}
      width={width}
    />
  );
};
