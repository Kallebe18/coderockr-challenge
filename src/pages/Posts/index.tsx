import { useState, useEffect, useCallback, useRef } from "react";

import { DefaultLayout } from "../../Layouts/Default";
import { api } from "../../services/api";
import { PostType } from "../../types";
import { Post } from "./components/Post";
import { PostsContainer } from "./styles";

export function PostsPage() {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [page, setPage] = useState(-1);
  const [
    limit,
    // setLimit
  ] = useState(11);
  const [loading, setLoading] = useState(false);
  const loaderRef = useRef(null);

  const loadPosts = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await api.get<PostType[]>("/articles", {
        params: {
          _page: page,
          _limit: limit,
        },
      });

      if (!data.length) return;

      setPosts((currentPosts) => [
        ...currentPosts,
        ...data.map((d) => ({
          ...d,
          imageUrl: d.imageUrl + `&dummy=${(Math.random() * 20).toString()}`,
          article: d.article.replace(/<\/?[^>]+(>|$)/g, ""),
        })),
      ]);
    } catch (error) {
      alert("Erro ao consultar posts, tente novamente mais tarde.");
    } finally {
      setLoading(false);
    }
  }, [setLoading, limit, page]);

  useEffect(() => {
    if (page >= 0) {
      loadPosts();
    }
  }, [loadPosts, page]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "40px",
      threshold: 0.9,
    };

    const observer = new IntersectionObserver((entities) => {
      const target = entities[0];

      if (target.isIntersecting) {
        setPage((previousPage) => previousPage + 1);
      }
    }, options);

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }
  }, []);

  return (
    <DefaultLayout>
      <PostsContainer>
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </PostsContainer>
      <p ref={loaderRef}>{loading && "Carregando posts..."}</p>
    </DefaultLayout>
  );
}
