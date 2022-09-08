import styled from "styled-components";

export const ContainerHeader = styled.header`
  
  
  @media (min-width:768px){
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #87CEFA;
    padding: 25px 0;
    border: 1px solid greee;
    a {
      text-decoration: none;
      color: #ffff;
      font-weight: 500;
    }
    svg {
      font-size: 1.3rem;
      color: #ffff;
    }
    div{
      border: 1px solid green;
    }
  }
`