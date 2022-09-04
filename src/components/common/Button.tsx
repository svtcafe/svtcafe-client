import styled from '@emotion/styled';

import { EColors, EFontSizes, EFontWeight, TButtonColor, TButtonSize } from '@/styles/styles';

interface ButtonProps extends React.ComponentProps<'button'> {
  size?: TButtonSize;
  color?: TButtonColor;
  label?: string;
  outlined?: boolean;
  fullWidth?: boolean;
  shadow?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  size = 'sm',
  color = 'primary',
  label,
  disabled,
  fullWidth,
  outlined,
  shadow,
  ...props
}) => {
  return (
    <ButtonElement
      outlined={outlined}
      size={size}
      color={color}
      disabled={disabled}
      fullWidth={fullWidth}
      shadow={shadow}
      {...props}
    >
      {label}
    </ButtonElement>
  );
};

export default Button;

let ButtonElement = styled.button<ButtonProps>`
  border: none;
  font-weight: ${EFontWeight.bold};
  cursor: pointer;

  ${({ color, outlined }) =>
    color === 'light' &&
    `
    color: ${EColors.black};
    background-color: ${EColors.white};
    border: ${outlined && `1px solid ${EColors.border}`}
    `};
  ${({ color }) =>
    color === 'primary' &&
    `
    color: ${EColors.white};
    background: linear-gradient(to right, ${EColors.blue_100},  ${EColors.pink});
    `};
  ${({ color }) =>
    color === 'dark' &&
    `
    color: ${EColors.white};
    background-color: ${EColors.blue_100};
    `};

  ${({ size }) =>
    size === 'lg' &&
    `
      height: 42px;
       padding: 10px 20px; 
      font-size: ${EFontSizes.body1};
      border-radius: 2rem;
    `};
  ${({ size }) =>
    size === 'md' &&
    `
      height: 40px;
      padding: 10px 20px; 
      font-size: ${EFontSizes.body2};
      border-radius: 2rem;
    `};
  ${({ size }) =>
    size === 'sm' &&
    `
      height: 38px;
      padding: 10px 20px; 
      font-size: ${EFontSizes.body2};
      border-radius: 2rem;
    `};
  ${({ size }) =>
    size === 'xs' &&
    `
      height: 36px;
      padding: 10px 20px;
      font-size: ${EFontSizes.body4};
      border-radius: 2rem;
    `};

  ${({ shadow }) => shadow && `filter: drop-shadow(1px 1px 1px #CCCCCC)`};
  ${({ disabled }) => disabled && `cursor: default`};
  ${({ fullWidth }) => fullWidth && `width: 100%`};
`;
