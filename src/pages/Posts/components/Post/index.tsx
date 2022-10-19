import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { usePost } from "../../../../hooks/usePost";
import { PostType } from "../../../../types";
import { PostButton } from "../PostButton";
import {
  DesktopWrapper,
  MobileTitle,
  PostArticle,
  PostAuthor,
  PostContainer,
  PostContent,
  PostImage,
  PostInfoContainer,
  PostTitle,
} from "./styles";

type PostProps = {
  post: PostType;
};

export function Post({ post }: PostProps) {
  const { setSelectedPost, selectedPost } = usePost();
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedPost) {
      navigate("/post");
    }
  }, [selectedPost, navigate]);

  const { article, author, imageUrl, title } = post;
  return (
    <PostContainer>
      <MobileTitle>{title}</MobileTitle>
      <PostContent>
        <PostImage src={imageUrl} alt={title} />
        <PostInfoContainer>
          <PostAuthor>{author}</PostAuthor>
          <DesktopWrapper>
            <PostTitle>{title}</PostTitle>
          </DesktopWrapper>
          <PostArticle>{article}</PostArticle>
          <PostButton
            ariaLabel={`know more about ${article}`}
            onClick={() => {
              setSelectedPost(post);
            }}
          />
        </PostInfoContainer>
      </PostContent>
    </PostContainer>
  );
}
