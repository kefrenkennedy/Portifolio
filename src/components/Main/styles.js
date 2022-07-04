import styled from "styled-components";

export const AnimatedIMG = styled.img`
  width: 70px;
  height: 70px;
  animation: myAnim 5s ease 0s infinite normal forwards;
  margin-right: 40px;
`;
export const AnimatedIMGHTMLCSSLOGO = styled.img`
  width: 200px;
  height: 200px;
  animation: myAnim 5s ease 0s infinite normal forwards;
  margin-right: 40px;
`;

export const AnimatedIMGReversed = styled.img`
  width: 70px;
  height: 70px;
  margin-right: 5px;
  animation: myAnim 5s ease 0s infinite reverse forwards;
`;

export const AnimatedIMGReversedREACT = styled.img`
  width: 180px;
  height: 180px;
  margin-right: 5px;
  animation: myAnim 5s ease 0s infinite reverse forwards;
`;

export const StyledHeader = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  background-color: black;
  justify-content: space-around;
  align-items: center;
  box-shadow: -1px 10px 23px -3px rgba(255, 255, 255, 0.32);
  a {
    font-style: none;
    text-decoration: none;
  }
  h1 {
    cursor: pointer;
    font-style: italic;
    letter-spacing: 3px;
    font-size: 2rem;
  }
  h1:hover {
    color: green;
  }

  a {
    color: green;
  }
  a:hover {
    cursor: pointer;
    color: white;
  }

  h3 {
    cursor: pointer;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: red;
    height: 40px;
    width: 120px;
  }
  h3:hover {
    background-color: green;
  }
`;
