import React from 'react';
import s from './Overlay.module.css';
import * as PropTypes from 'prop-types';

class Overlay extends React.Component {
  handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onOverlayClick();
    }
  };

  render() {
    return (
      <div onClick={this.handleOverlayClick} className={s.overlay}>
        {this.props.component}
      </div>
    );
  }
}

Overlay.propTypes = {
  onOverlayClick: PropTypes.any,
  component: PropTypes.any,
};

export default Overlay;
