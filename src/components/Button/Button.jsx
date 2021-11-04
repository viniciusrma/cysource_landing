import React from 'react'
import { StyledButton, StyledSpinner } from './Styles'
import Icon from '../Icon'
import Spinner from '../Spinner'

const Button = (props) => {
  const {
    variant,
    children,
    icon,
    classname = '',
    disabled = false,
    inverted,
    expended,
    pressed,
    label,
    onClick,
    onKeyDown,
    tabIndex = 0,
    loading,
    text,
    iconColor,
    iconSize,
    spinnerColor,
    spinnerSize = 26,
    isWorking = false,
    ...rest
  } = props

  return (
    <StyledButton
      variant={variant}
      aria-label={label}
      aria-pressed={pressed}
      tabIndex={tabIndex}
      onClick={onClick}
      onKeyDown={onKeyDown}
      disabled={disabled ? disabled : false}
      {...rest}
    >
      {isWorking && <StyledSpinner size={spinnerSize} color={spinnerColor} />}
      {icon && <Icon iconName={icon} color={iconColor} size={iconSize} />}&nbsp;
      {children}
    </StyledButton>
  )
}

export default Button
