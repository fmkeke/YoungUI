import React from 'react';
import PropTypes from 'prop-types';
import './button.css';
/**
 * Primary UI component for user interaction
 */
export const Button = ({ type, size,...props }) => {
  return (
    <button
      type="button"
      className={['ki-button',  `ki-button--${size}`, `storybook-button--${type}`].join(' ')}
      {...props}
    >
    </button>
  );
};

Button.propTypes = {
  //设置按钮类型 控制背景色,字体颜色
  backgroundColor:PropTypes.string,
  /**
   * 控制button样式
   */
  type:PropTypes.oneOf(['default', 'primary', 'normal', 'info','success','warning','error']), 

  /**
   * 设置button尺寸
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * 按钮点击事件的回调
   */
  onClick: PropTypes.func,
  /**
   * 控制禁用
   */
  disable:PropTypes.bool,
};

Button.defaultProps = {
  type: 'normal',
  size: 'medium',
  onClick: undefined,
  disable:false,
  backgroundColor:'#efefef'
};
