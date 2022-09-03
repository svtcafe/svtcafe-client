import styled from '@emotion/styled';
import React from 'react';

import { Icon } from '@/components';

import { EColors } from '@/styles/styles';

interface LoginInputProps extends React.ComponentPropsWithRef<'input'> {
  icon?: React.ComponentProps<typeof Icon>['icon'];
}

const LoginInput = React.forwardRef<HTMLInputElement, LoginInputProps>(({ icon, placeholder, ...props }, ref) => {
  return (
    <Container>
      <Input {...props} ref={ref} type='text' placeholder={placeholder} />
      <Placeholder>
        {icon && <InputIcon icon={icon} weight='fill' />}
        <Label>{placeholder}</Label>
      </Placeholder>
    </Container>
  );
});

LoginInput.displayName = 'LoginInput';
export default LoginInput;

const Container = styled.label`
  display: block;
  position: relative;
  margin-top: 15px;
  font-size: 1.5rem;
`;

const Placeholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  z-index: 1;
  padding: 0 5px;
`;

const Label = styled.span`
  position: relative;
  color: ${EColors.gray_70};
  transition: transform 0.15s ease-out, font-size 0.15s ease-out;
`;

const InputIcon = styled(Icon)`
  position: relative;
  font-size: 1.8rem;
  color: ${EColors.gray_70};
  margin-right: 5px;
`;

const Input = styled.input`
  position: relative;
  padding: 10px 0;
  padding-left: 30px;
  width: 100%;
  outline: 0;
  border: 0;
  box-shadow: 0 2px 0 0 ${EColors.gray_20};
  transition: box-shadow 0.15s ease-out;
  font-size: 1.5rem;

  &:focus {
    box-shadow: 0 2px 0 0 ${EColors.blue_100};
  }

  &:focus + ${Placeholder}, &:not(:placeholder-shown) + ${Placeholder} {
    ${Label} {
      transform: translateY(-125%);
      font-size: 1.2rem;
    }

    ${InputIcon} {
      color: ${EColors.blue_100};
    }
  }

  &::placeholder {
    color: transparent;
  }
`;
