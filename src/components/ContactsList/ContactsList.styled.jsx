import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

export const Item = styled.li`
  display: flex;
  flex-basis: calc((100% - 20px - 60px) / 3);
  align-items: center;
  gap: 10px;
  justify-content: space-between;
  margin-bottom: 0.25rem;
  padding: 10px;
  border-radius: 50px;

  color: #fff;
  background: rgb(223, 225, 235);
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
`;

// export const List = styled.ul`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   grid-column-gap: 10px;
//   grid-row-gap: 10px;
// `;
