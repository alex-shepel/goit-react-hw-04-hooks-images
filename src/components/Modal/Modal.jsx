import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import Overlay from 'components/Overlay';
import s from './Modal.module.css';
import ModalLoader from 'components/ModalLoader';

const modalRef = document.querySelector('#modal');

const Modal = ({ url, onClose }) => {
  useEffect(() => {
    window.addEventListener('keydown', onEscPress);
    return () => window.removeEventListener('keydown', onEscPress);
  });

  const onEscPress = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const modal = (
    <div className={s.modal}>
      <ModalLoader />
      <img src={url} alt="" />
    </div>
  );

  return createPortal(
    <Overlay onOverlayClick={onClose} component={modal} />,
    modalRef,
  );
};

Modal.propTypes = {
  url: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
