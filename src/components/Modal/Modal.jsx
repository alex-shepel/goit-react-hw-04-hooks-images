import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import Overlay from 'components/Overlay';
import s from './Modal.module.css';
import ModalLoader from 'components/ModalLoader';

const modalRef = document.querySelector('#modal');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onEscPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscPress);
  }

  onEscPress = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    const { onClose, url } = this.props;

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
  }
}

Modal.propTypes = {
  url: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
