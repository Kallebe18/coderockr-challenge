import styled from "styled-components";

export const headerHeight = 60;

export const HeaderContainer = styled.header`
  background-color: #2d2d2d;
  display: flex;
  color: #fff;
  justify-content: space-around;
  align-items: center;
  padding: 0 20px;
  height: ${headerHeight}px;
  position: fixed;
  z-index: 9999;
  width: 100%;
`;

export const HeaderOptionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  @media (max-width: 468px) {
    gap: 20px;
  }

  @media (max-width: 360px) {
    gap: 10px;
  }
`;

export const HeaderTitle = styled.h1`
  font-weight: bold;
  cursor: pointer;
`;

export const HeaderOption = styled.a`
  text-decoration: none;
  color: #fff;
`;
