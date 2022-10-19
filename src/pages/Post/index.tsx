import { format } from "date-fns";
import { Navigate } from "react-router-dom";

import { DefaultLayout } from "../../Layouts/Default";
import {
  PostBody,
  PostContainer,
  PostHeader,
  PostHeaderInfo,
  PostImage,
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
          <PostImage src={imageUrl} alt={title} />
          <PostHeaderInfo>
            <p>{format(new Date(date), "PP")}</p>
            <p>{author}</p>
            <PostTitle>{title}</PostTitle>
          </PostHeaderInfo>
        </PostHeader>
        <PostBody>
          <p>{article}</p>
        </PostBody>
      </PostContainer>
    </DefaultLayout>
  );
}
