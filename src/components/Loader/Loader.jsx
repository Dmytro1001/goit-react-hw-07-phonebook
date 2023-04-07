import { ProgressBar } from 'react-loader-spinner';
import { WrapperLoader } from './Loader.styles';

export const Loader = () => {
  return (
    <WrapperLoader>
      <ProgressBar
        height="100"
        width="280"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor="#F4442E"
        barColor="#51E5FF"
      />
    </WrapperLoader>
  );
};
