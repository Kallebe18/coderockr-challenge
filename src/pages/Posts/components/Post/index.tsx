import { PostType } from "../../../../types";
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
  const { article, author, imageUrl, title } = post;
  return (
    <PostContainer>
      <PostImage src={imageUrl} />
      <PostInfoContainer>
        <PostAuthor>{author}</PostAuthor>
        <PostTitle>{title}</PostTitle>
        <PostArticle>{article}</PostArticle>
      </PostInfoContainer>
    </PostContainer>
  );
}
