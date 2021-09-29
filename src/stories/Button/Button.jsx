import React from 'react';
import PropTypes from 'prop-types';
import './button.css';
/**
 * Primary UI component for user interaction
 */
export const Button = ({ type, size, label, ...props }) => {
  return (
    <button
      type="button"
      className={['ki-button',  `ki-button--${size}`, `storybook-button--${type}`].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  //设置按钮类型 控制背景色,字体颜色
  type:PropTypes.oneOf(['danger', 'normal', 'large']), 

  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'normal',
  size: 'medium',
  onClick: undefined,
};
