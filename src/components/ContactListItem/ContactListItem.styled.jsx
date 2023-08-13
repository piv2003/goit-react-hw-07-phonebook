import styled, { keyframes } from 'styled-components';
import { PiUserCircleDuotone } from 'react-icons/pi';
import { CgSpinnerTwo } from 'react-icons/cg';

export const UserIcon = styled(PiUserCircleDuotone)`
  width: 40px;
`;
UserIcon.defaultProps = {
  size: 40,
};

const spin = keyframes`
0% {
  transform: rotate(0deg);
}

100% {
  transform: rotate(1turn);
}
`;

export const Spinner = styled(CgSpinnerTwo)`
  animation: ${spin} 1.5s linear infinite;
`;
Spinner.defaultProps = {
  size: 40,
};

export const ContactInfo = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
`;
export const Button = styled.button`
  padding: 5px;
  border-color: #000000;
  border-radius: 50%;

  &:hover {
    border-color: red;
    cursor: pointer;
  }
  &:hover svg {
    fill: red;
  }

  & svg {
    fill: #000000;
  }
`;
export const Name = styled.span`
  color: #eafd93;
  font-weight: 500;
  text-shadow: 1px 1px #000;
`;
export const Number = styled.span`
  color: #bb88f5;
  font-weight: 500;
  text-shadow: 1px 1px #000;
`;
