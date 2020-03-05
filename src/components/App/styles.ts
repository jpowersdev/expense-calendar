import styled from 'styled-components';

export const StyledApp = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 250px auto;

  main,
  aside {
    max-height: 100vh;
    overflow-y: auto;
  }

  main {
    width: 100%;
    box-sizing: border-box;
    padding: 10px 40px;
  }
`;
