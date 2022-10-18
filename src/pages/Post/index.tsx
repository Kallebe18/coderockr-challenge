import { format } from "date-fns";
import { Navigate } from "react-router-dom";

import { DefaultLayout } from "../../Layouts/Default";
import {
  PostArticle,
  PostBody,
  PostContainer,
  PostHeader,
  PostHeaderInfo,
  PostTitle,
} from "./styles";
import { usePost } from "../../hooks/usePost";

export function PostPage() {
  const { selectedPost } = usePost();

  if (!selectedPost) return <Navigate to="/" />;

  const { title, imageUrl, article, author, date } = selectedPost;
  return (
    <DefaultLayout>
      <PostContainer>
        <PostHeader>
          <img src={imageUrl} alt={title} height={300} />
          <PostHeaderInfo>
            <p>{format(new Date(date), "PP")}</p>
            <p>{author}</p>
            <PostTitle>{title}</PostTitle>
          </PostHeaderInfo>
        </PostHeader>
        <PostBody>
          <PostArticle>{article}</PostArticle>
        </PostBody>
      </PostContainer>
    </DefaultLayout>
  );
}
