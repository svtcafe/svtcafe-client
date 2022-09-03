import styled from '@emotion/styled';

import { EColors } from '@/styles/styles';

interface HamburgerButton extends React.ComponentProps<'button'> {
  active?: boolean;
}

const HamburgerButton: React.FC<HamburgerButton> = (props) => {
  return (
    <Container {...props}>
      <span></span>
      <span></span>
      <span></span>
    </Container>
  );
};

export default HamburgerButton;

const Container = styled.button<HamburgerButton>`
  display: block;
  border: none;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 35px;
  height: 20px;
  cursor: pointer;
  transition: all 0.2s;
  transform: ${({ active }) => active && `translateX(10%)`};

  span {
    display: block;
    width: 100%;
    height: 3px;
    background-color: ${EColors.white};
    border-radius: 10px;
    transform-origin: 0% 0%;
    transition: all 0.2s;

    &:nth-of-type(1) {
      transform-origin: 0% 0%;
      transform: ${({ active }) => active && `rotate(45deg)`};
    }

    &:nth-of-type(2) {
      transform: ${({ active }) => active && `scaleY(0)`};
    }

    &:nth-of-type(3) {
      transform-origin: 0% 100%;
      transform: ${({ active }) => active && `rotate(-45deg)`};
    }
  }
`;
