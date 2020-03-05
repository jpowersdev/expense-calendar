import styled from 'styled-components';

type Props = {
  isToday?: boolean;
};
export const StyledCard = styled.div<Props>`
  height: 90px;
  text-align: right;
  box-sizing: border-box;
  border: 1px solid black;

  position: relative;

  & > div {
    box-sizing: border-box;
    height: 100%;
    text-align: left;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  div.income {
    padding: 2px 5px;
    background: #88c58a;
  }
  div.expense {
    padding: 2px 5px;
    background: #bd5554;
  }

  span {
    position: absolute;
    top: 5px;
    right: 5px;
  }

  background: ${props => (props.isToday ? '#EFEEEE' : 'white')};
`;
