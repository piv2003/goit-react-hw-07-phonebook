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
  color: #bbff00;
  font-weight: 500;
`;

export const Number = styled.span`
  color: #550404;
  font-weight: bold;
  text-shadow: 0 1px 0 #cccccc;
`;

// export const Item = styled.li`
//   position: relative;
//   display: flex;
//   align-items: center;
//   gap: 10px;
//   margin-bottom: 0.25rem;
//   padding: 0.325rem 0.825rem 0.325rem 1.325rem;
//   color: #fff;
//   border-radius: 10px;
//   background: #f560dc;

//   &::before {
//     content: '';
//     position: absolute;
//     left: 0;
//     top: 0;
//     bottom: 0;
//     width: 0.5rem;
//     background: #fff;
//   }

//   & button {
//     margin-left: auto;
//     padding: 5px;
//     border-radius: 5px;
//     cursor: pointer;
//     box-shadow: rgba(0, 0, 0, 0.45) 0px 10px 10px,
//       rgba(0, 0, 0, 0.12) 0px -7px 5px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
//       rgba(0, 0, 0, 0.17) 0px 7px 5px, rgba(0, 0, 0, 0.09) 0px -3px 2px;
//   }
// `;
