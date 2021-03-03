import styled from "styled-components";

export const Wrapper = styled.div`
  width: 264px;
  height: 854px;
  padding: 30px;
  margin: 10px;
  border-radius: 20px;

  background-color: #3d41d7;
  filter: drop-shadow(0 0 5px #2225A9);

  display: flex;
  align-items: center;
  flex-direction: column;
  
`;

export const Logo = styled.img`
  margin-bottom: 28px;    
`;

export const List = styled.ol`
  width: 100%;
  display: flex;

  li{
    display: flex;
    align-items: center;
    height: 56px;
  }
`;
