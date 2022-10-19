import styled from "styled-components";

export const PostContainer = styled.div`
  width: 75%;
  background-color: #fff;
  margin-top: 40px;
  b-webkit-box-shadow: 5px 6px 10px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 5px 6px 10px 0px rgba(0, 0, 0, 0.1);
  margin-left: auto;

  :not(:nth-child(3n)) {
    width: 50%;
  }

  :nth-child(6n) {
    margin-left: 0;
  }

  @media (min-width: 1024px) {
    :nth-child(3n) {
      img {
        height: 400px;
      }
    }
  }

  @media (max-width: 1024px) {
    :nth-child(n) {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    img {
      height: 200px;
    }
  }

  @media (max-width: 480px) {
    img {
      height: 160px;
    }
  }
`;

export const PostContent = styled.div`
  display: flex;

  :nth-child(6n - 2) {
    flex-direction: row-reverse;
  }

  :nth-child(6n - 1) {
    flex-direction: row-reverse;
  }
`;

export const PostTitle = styled.h1`
  color: #f1a10a;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 20px;

  @media (max-width: 768px) {
    -webkit-line-clamp: 2;
    line-clamp: 2;
  }
`;

export const MobileTitle = styled.h1`
  color: #f1a10a;
  padding: 8px;
  text-align: center;
  background-color: #fff;
  border-bottom: 1px solid gray;

  @media (min-width: 480px) {
    display: none;
  }
`;

export const DesktopWrapper = styled.div`
  @media (max-width: 480px) {
    display: none;
  }
`;

export const PostImage = styled.img`
  object-fit: contain;
  height: 15rem;
`;

export const PostInfoContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 10px 20px;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    padding: 0px 40px 0px 20px;
  }

  @media (min-width: 1024px) {
    padding: 0 40px;
  }
`;

export const PostAuthor = styled.p``;

export const PostArticle = styled.div`
  display: -webkit-box;

  margin-top: 20px;

  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3; /* number of lines to show */
  line-clamp: 3;
  -webkit-box-orient: vertical;
`;
