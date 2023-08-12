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
  margin-right: auto;
  margin-left: auto;
`;
export const Button = styled.button`
  margin-left: auto;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 10px 10px,
    rgba(0, 0, 0, 0.12) 0px -7px 5px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 7px 5px, rgba(0, 0, 0, 0.09) 0px -3px 2px;

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
  color: #c7fc37;
  font-weight: 500;
`;

export const Number = styled.span`
  color: #9c05f3;
  font-weight: bold;
  text-shadow: 0 1px 0 #cccccc;
`;
