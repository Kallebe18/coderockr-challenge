import { useState, useEffect, useCallback, useRef } from "react";
import { usePost } from "../../hooks/usePost";

import { DefaultLayout } from "../../Layouts/Default";
import { api } from "../../services/api";
import { PostType } from "../../types";
import { Post } from "./components/Post";
import { LoadingText, PostsContainer } from "./styles";

export function PostsPage() {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [page, setPage] = useState(0);
  const [
    limit,
    // setLimit
  ] = useState(11);
  const [loading, setLoading] = useState(false);
  const loaderRef = useRef(null);
  const { setSelectedPost } = usePost();

  useEffect(() => {
    setSelectedPost(null);
    //eslint-disable-next-line
  }, []);

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
          // this was made to add randomness to images
          imageUrl:
            d.imageUrl +
            `&${(Math.random() * 20000).toFixed(0).toString()}=${(
              Math.random() * 20000
            )
              .toFixed(0)
              .toString()}`,
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
    loadPosts();
    //eslint-disable-next-line
  }, [loadPosts, page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entities) => {
        const target = entities[0];

        if (target.isIntersecting && !loading) {
          setPage((previousPage) => previousPage + 1);
        }
      },
      {
        root: null,
        rootMargin: "40px",
        threshold: 1,
      }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      observer.disconnect();
    };
    //eslint-disable-next-line
  }, [loading]);

  return (
    <DefaultLayout>
      <PostsContainer>
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </PostsContainer>
      <LoadingText ref={loaderRef}>Carregando posts...</LoadingText>
    </DefaultLayout>
  );
}
