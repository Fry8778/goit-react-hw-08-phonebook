import { Audio } from 'react-loader-spinner';
import s from './Loader.module.css';

const Loader = () => {
  return (
    <Audio
      height={50}
      width={50}
      color="rgba(47, 139, 245, 0.952)"
      wrapperStyle={{}}
      wrapperClass={s.loader}
      visible={true}
      ariaLabel="Audio"            
    />
  );
};
export default Loader;