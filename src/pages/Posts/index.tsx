import { useState, useEffect, useCallback } from "react";

import { DefaultLayout } from "../../Layouts/Default";
import { api } from "../../services/api";
import { PostType } from "../../types";
import { Post } from "./components/Post";
import { PostsContainer } from "./styles";

export function PostsPage() {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [
    page,
    // setPage
  ] = useState(0);
  const [
    limit,
    // setLimit
  ] = useState(10);
  const [loading, setLoading] = useState(false);

  const loadPosts = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await api.get<PostType[]>("/articles", {
        params: {
          _page: page,
          _limit: limit,
        },
      });
      setPosts(
        data.map((d) => ({
          ...d,
          article: d.article.replace(/<\/?[^>]+(>|$)/g, ""),
        }))
      );
    } catch (error) {
      alert("Erro ao consultar posts, tente novamente mais tarde.");
    } finally {
      setLoading(false);
    }
  }, [setLoading, limit, page]);

  useEffect(() => {
    loadPosts();
  }, [loadPosts]);

  return (
    <DefaultLayout>
      <PostsContainer>
        {posts.map((post, index) => (
          <Post key={post.id} post={post} />
        ))}
      </PostsContainer>

      {loading ? <p>Carregando</p> : <></>}
    </DefaultLayout>
  );
}
