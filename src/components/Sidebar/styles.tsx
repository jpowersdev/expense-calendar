import styled from 'styled-components';

export const StyledSidebar = styled.aside`
  background: #efeeee;
  min-height: 100vh;
  padding: 10px 0;
  display: grid;
  grid-template-rows: min-content max-content auto 200px;
  align-items: flex-start;

  a {
    text-decoration: none;
    font-weight: bold;
    color: black;

    &:hover {
      color: #555;
    }
  }

  h1 {
    margin: 10px 0;
    padding-left: 40px;
  }

  ul {
    margin: 5px 0;
    list-style-type: none;

    li {
      font-size: 18px;
      margin: 1em 0;

      a {
        svg {
          margin-bottom: -1px;
          margin-right: 0.5em;
        }
      }
    }
  }

  div.bottom {
    padding: 40px;
    align-self: flex-end;

    small {
      font-size: 0.7em;
      color: #333;
    }
  }
`;
