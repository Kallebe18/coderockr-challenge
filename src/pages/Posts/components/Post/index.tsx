import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { usePost } from "../../../../hooks/usePost";
import { PostType } from "../../../../types";
import { PostButton } from "../PostButton";
import {
  PostArticle,
  PostAuthor,
  PostContainer,
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
      <PostImage src={imageUrl} alt={title} />
      <PostInfoContainer>
        <PostAuthor>{author}</PostAuthor>
        <PostTitle>{title}</PostTitle>
        <PostArticle>{article}</PostArticle>
        <PostButton
          onClick={() => {
            setSelectedPost(post);
          }}
        />
      </PostInfoContainer>
    </PostContainer>
  );
}
