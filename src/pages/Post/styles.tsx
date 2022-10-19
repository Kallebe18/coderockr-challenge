import styled from "styled-components";

export const PostContainer = styled.div`
  margin: 30px 80px;
  background-color: #fff;

  @media (max-width: 769px) {
    margin: 20px;
  }
`;

export const PostHeader = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
`;

export const PostHeaderInfo = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  flex: 1;

  @media (max-width: 769px) {
    padding: 20px;
  }
`;

export const PostBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
`;

export const PostTitle = styled.h1`
  color: #f1a10a;
`;

export const PostImage = styled.img`
  margin: auto;
  max-width: 300px;
  width: 100%;
  height: auto;
  object-fit: contain;
`;
