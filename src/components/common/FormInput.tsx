import styled from '@emotion/styled';
import React from 'react';

import { EColors } from '@/styles/styles';

interface FormInputProps extends React.ComponentPropsWithRef<'input'> {
  title?: string;
}

const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(({ title, ...props }, ref) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Input {...props} ref={ref} type='text' />
    </Container>
  );
});

FormInput.displayName = 'FormInput';
export default FormInput;

const Container = styled.label`
  display: block;
`;

const Title = styled.span`
  display: block;
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 8px 15px;
  border: 1px solid ${EColors.gray_20};
  border-radius: 8px;
  font-size: 1.3rem;
  background-color: ${EColors.white};
  box-sizing: border-box;
  width: 100%;

  &::placeholder {
    color: ${EColors.gray_70};
  }

  &:focus {
    border-color: ${EColors.blue_100};
  }
`;
