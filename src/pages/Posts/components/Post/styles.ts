import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 440px;
  width: 75%;
  margin-left: auto;
  b-webkit-box-shadow: 5px 6px 10px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 5px 6px 10px 0px rgba(0, 0, 0, 0.1);
  margin-top: 40px;

  :not(:nth-child(3n)) {
    width: 50%;
    max-height: 280px;
  }

  :nth-child(6n) {
    margin-left: 0;
  }

  :nth-child(6n - 2) {
    flex-direction: row-reverse;
  }

  :nth-child(6n - 1) {
    flex-direction: row-reverse;
  }

  @media (max-width: 1200px) {
    width: 100%;

    :not(:nth-child(3n)) {
      width: 100%;
    }
  }

  @media (max-width: 800px) {
    height: 240px;
    width: 100%;
  }

  @media (max-width: 600px) {
    height: 200px;
  }

  @media (max-width: 400px) {
    height: 120px;
  }
`;

export const PostTitle = styled.h1`
  color: #f1a10a;
  font-size: 28px;

  @media (max-width: 800px) {
    font-size: 20px;
  }

  @media (max-width: 400px) {
    font-size: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (max-width: 600px) {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

export const PostImage = styled.img`
  height: 100%;
`;

export const PostInfoContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 20px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 600px) {
    padding: 10px;
  }

  @media (max-width: 400px) {
    padding: 5px;
  }
`;

export const PostAuthor = styled.p`
  @media (max-width: 400px) {
    font-size: 12px;
  }
`;

export const PostArticle = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;

  @media (max-width: 800px) {
    display: none;
  }
`;
