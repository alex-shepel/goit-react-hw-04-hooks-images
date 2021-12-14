import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { createPortal } from 'react-dom';
import s from './ModalLoader.module.css';
import PropTypes from 'prop-types';

const loaderRef = document.querySelector('#loader');

const ModalLoader = ({ color = '#fff' }) => {
  const loader = (
    <div className={s.loader}>
      <Loader type="Oval" color={color} height={100} width={100} timeout={0} />
    </div>
  );

  return createPortal(loader, loaderRef);
};

ModalLoader.propTypes = {
  color: PropTypes.string,
};

export default ModalLoader;
