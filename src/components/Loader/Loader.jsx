import { ThreeCircles } from 'react-loader-spinner';

import { LoaderWrap, SttyledLoader } from './Loader.styled';

import { createPortal } from 'react-dom';

const loaderRoot = document.querySelector('#loader-root');

const Loader = () => {
  return createPortal(
    <LoaderWrap>
      <SttyledLoader>
        <ThreeCircles
          height="200"
          width="200"
          color="#FF0000"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor=""
          innerCircleColor=""
          middleCircleColor=""
        />
      </SttyledLoader>
    </LoaderWrap>,
    loaderRoot
  );
};

export default Loader;
